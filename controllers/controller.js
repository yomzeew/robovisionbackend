const database = require("../database/createconnection")

exports.GetRecord=(req,res)=>{
    const {risk}=req.body
    const converttoparse=risk
    const selectSql="SELECT * FROM `table 2` WHERE RiskScore=?"
    database.query(selectSql,[converttoparse],(err,result)=>{
        if(err) throw err
        console.log(result[0])
        res.status(200).json(result)
    })
}