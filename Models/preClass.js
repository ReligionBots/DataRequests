const db = require("../database.js");


class Prefixes{
    constructor(){
        if(this.instance) return this.instance;
        Prefixes.instance = this;

        this.tableName = "Prefixes";
    }

     

    get(){
        return db.query(`SELECT * FROM ${this.tableName};`);
    }

    getById(id){
        return db.query(`SELECT * FROM ${this.tableName} WHERE guild = ?`, [id]);
    }

    post(data){
        var marks = [], attributes = [], values = [];
        for (var i in data) {
            attributes.push(i);
            marks.push('?');
            values.push(data[i]);
        }

        const stmt = `INSERT INTO ${this.tableName}(${attributes.join(',')}) VALUES(${marks.join(',')})`
        return db.query(stmt, [...values]);
    }

    update(id,data){
        var field = [];
        var params = [];

        for (var i in data) {
            field.push("?? = ?");
            params.push(i, data[i]);
        }

        const stmt = `UPDATE ${this.tableName} SET ${field.join(", ")} WHERE guild = ?`;
        return db.query(stmt, [...params, id]);
    }

    delete(id){
        return db.query(`DELETE FROM ${this.tableName} WHERE guild = ?`, [id]);
    }


}


module.exports = new Prefixes();