const db = require('../database.js');


class Translations{

    constructor() {
        if (this.instance) return this.instance;
        Translations.instance = this;
        this.tableName = "QuranTranslations";
    }

    // router created
    get() {
        return db.query(`SELECT * FROM ${this.tableName};`);
    }

    // router created
    getById(id) {
        return db.query(`SELECT * FROM ${this.tableName} WHERE TranslationId = ?`, [id]);
    }

    // router not created
    getBySurahAyah(id, surah, ayah) {
        return db.query(`SELECT * FROM ${this.tableName} WHERE Surah = ? AND Ayah = ? AND TranslationId = ?`, [surah, ayah, id]);
    }

    // router created
    post(data) {
        var marks = [], attributes = [], values = [];
        for (var i in data) {
            attributes.push(i);
            marks.push('?');
            values.push(data[i]);
        }

        const stmt = `INSERT INTO ${this.tableName}(${attributes.join(',')}) VALUES(${marks.join(',')})`;
        return db.query(stmt, [...values]);

    }

    
    update(id, data) {
        var field = [];
        var params = [];

        for (var i in data) {
            field.push("?? = ?");
            params.push(i, data[i]);
        }

        const stmt = `UPDATE ${this.tableName} SET ${field.join(", ")} WHERE TranslationId = ?`;
        return db.query(stmt, [...params, id]);
    }

    delete(id) {
        return db.query(`DELETE FROM ${this.tableName} WHERE TranslationId = ?`, [id]);
    }



}


module.exports = new Translations();