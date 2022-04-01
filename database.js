
const appRoot = require('app-root-path');
require('dotenv').config({path: `${appRoot}/.env` })
const mysql = require('mysql');



class Database{
    constructor(){
        if (this.instance) return this.instance;
        Database.instance = this;

        this.pool = mysql.createPool({
            connectionLimit: process.env.DATABASE_CONNECTION_LIMIT || 10,
            host: process.env.DATABASE_HOST,
            user: process.env.DATABASE_USER,
            password: process.env.DATABASE_PASSWORD,
            database: process.env.DATABASE_NAME,
            port: process.env.DATABASE_PORT
        });
    }

    query(sql, param){
        return new Promise((resolve, reject) =>{
            this.pool.query(sql, param, (err, result)=> {
                if (err) return reject(err);
                else return resolve(result);
             });
        });
    }

}

module.exports = new Database();