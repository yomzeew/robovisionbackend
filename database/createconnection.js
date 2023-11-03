const mysql=require('mysql2')
const dbConfig=require('./database')
const connection = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB,
  });
  connection.connect((error) => {
    if (error) {
      console.error('Database connection failed:', error);
    } else {
        console.log('Connection')
    }
})
module.exports=connection
  