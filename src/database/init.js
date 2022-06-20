const openDB = require('./config')

const initDB = {
    async init() {
        const db = await openDB()

        await db.exec(`
            CREATE TABLE rooms (
                id INTEGER PRIMARY KEY,
                pass TEXT
            )`
        )

        await db.exec(`
            CREATE TABLE questions (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                description TEXT,
                read INTEGER,
                room INTEGER
            )`
        )

        await db.close()
    }
}

initDB.init();