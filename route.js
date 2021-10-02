const express = require("express");
const router = express.Router();


require("dotenv").config();

router.get("/check50GB", async (req, res) => {
    let {msisdn} = req.query
    try {
        if (!await getDBInfo(msisdn)) return res.json({status:false})
        else res.json({status:true})

    } catch (ex) {
        console.log(ex)
        res.json({status:false})
    }


})


async function getDBInfo(msisdn) {

    const mysql = require('mysql2/promise');
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASS
    })
    // query database
    const [rows] = await connection.execute('SELECT * FROM activationsEDR WHERE msisdn = ?', [msisdn]);
    return rows.length > 0

}


module.exports = router;

