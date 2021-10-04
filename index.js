const colors = require ("colors")
const express = require ("express")


console.log("Probando azul" .blue)
console.log("Probando el verde" .green)
console.log("Probando el amarillo" .yellow)


express().listen(3005, (req,res)=>{
   
    res.send("hola")



    console.log("server funcionando" .green)
})


