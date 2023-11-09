module.exports = {
    user : process.env.MODE_ORACLEDB_USER || "scott_01",
    password : process.env.MODE_ORACLEDB_PASSWORD || "tiger",
    connectString : process.env.MODE_ORACLEDB_CONNECTIONSTRING || "192.168.0.89/xe"
}