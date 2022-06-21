const openDB = require('./config')

const clearDB = {
    async init() {
        const db = await openDB()

        await db.exec(`DELETE FROM rooms`)

        await db.exec(`DELETE FROM questions`)

        await db.close()
    }
}

clearDB.init();