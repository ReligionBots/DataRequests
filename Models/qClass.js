const db = require('../database.js');


class Quran{

    constructor() {
        if (this.instance) return this.instance;
        Quran.instance = this;
        this.tableName = "Quran"
    }
    
    // router created
    get(){
            return db.query(`SELECT * FROM ${this.tableName};`);
    }

    // router created
    getById(id){
        return db.query(`SELECT * FROM ${this.tableName} WHERE AyahId = ?`, [id]);
    }  

    // router created
    getBySurahAyah(surah, ayah){
        return db.query(`SELECT * FROM ${this.tableName} WHERE Surah = ? AND Ayah = ?`, [surah, ayah]);
    }

    // router created
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

    // router created
    update(id,data){
        var field = [];
        var params = [];

        for (var i in data){
            field.push("?? = ?");
            params.push(i , data[i]);
        }

        const stmt = `UPDATE ${this.tableName} SET ${field.join(", ")} WHERE AyahId = ?`;
        return db.query(stmt, [...params, id]);
    }

    // router created
    delete(id){ 
        return db.query(`DELETE FROM ${this.tableName} WHERE AyahId = ?`, [id]);
    }

}

module.exports = new Quran();

