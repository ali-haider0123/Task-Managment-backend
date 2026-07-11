const mongoose = require("mongoose");
const dns = require("dns");
dns.setServers(['1.1.1.1', '8.8.8.8']);
require("dotenv").config();


const db = process.env.DB_URI;
const port = process.env.APP_PORT;
const host = process.env.APP_HOST;

function hosting() {
    const database = mongoose.connect(db).then(() => {
        console.log(`Database is connected`);
        console.log(`Server is listening on http://${host}:${port}`);
    })
}
module.exports = hosting;