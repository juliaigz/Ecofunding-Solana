#[macro_use] extern crate rocket;

use rocket::http::Header;
use rocket::{Request, Response};
use rocket::fairing::{Fairing, Info, Kind};
use rocket::serde::{json::Json, Deserialize, Serialize};
use std::fs::{OpenOptions, File};
use std::io::{self, Write};

#[derive(Serialize, Deserialize, Clone)]
struct Data {
    backer: String,
    fecha: String,
    solana: f64,
    usdt: f64,
}

const FILE_PATH: &str = "data.json";

fn read_data_from_file() -> Vec<Data> {
    match File::open(FILE_PATH) {
        Ok(file) => {
            let reader = io::BufReader::new(file);
            serde_json::from_reader(reader).unwrap_or_else(|_| Vec::new())
        }
        Err(_) => Vec::new(),
    }
}

fn write_data_to_file(data: &Vec<Data>) -> io::Result<()> {
    let file = OpenOptions::new()
        .write(true)
        .create(true)
        .truncate(true)
        .open(FILE_PATH)?;
    serde_json::to_writer(file, data)?;
    Ok(())
}

#[post("/add", format = "json", data = "<data>")]
fn add_data(data: Json<Data>) -> &'static str {
    let mut current_data = read_data_from_file();
    current_data.push(data.into_inner());
    write_data_to_file(&current_data).expect("Error writing to file");
    "Registro agregado"
}

#[get("/data?<backer>")]
fn get_data(backer: Option<String>) -> Json<Vec<Data>> {
    let data = read_data_from_file();
    
    let filtered_data: Vec<Data> = match backer {
        Some(b) => data.into_iter().filter(|d| d.backer == b).collect(),
        None => data,
    };
    
    Json(filtered_data)
}

// Fairing personalizado para CORS
pub struct CORS;

#[rocket::async_trait]
impl Fairing for CORS {
    fn info(&self) -> Info {
        Info {
            name: "Add CORS headers to responses",
            kind: Kind::Response,
        }
    }

    async fn on_response<'r>(&self, _request: &'r Request<'_>, response: &mut Response<'r>) {
        response.set_header(Header::new("Access-Control-Allow-Origin", "*")); //Está abierto a cualquier puerto, si se requiere, cambiar al especifico del front
        response.set_header(Header::new("Access-Control-Allow-Methods", "POST, GET, PATCH, OPTIONS"));
        response.set_header(Header::new("Access-Control-Allow-Headers", "*"));
        response.set_header(Header::new("Access-Control-Allow-Credentials", "true"));
    }
}

#[launch]
fn rocket() -> _ {
    rocket::build()
        .attach(CORS) // Adjuntar el fairing de CORS
        .mount("/", routes![add_data, get_data])
}
