const colors = require ("colors")
const express = require ("express")


console.log("Probando azul" .blue)
console.log("Probando el verde" .green)
console.log("Probando el amarillo" .yellow)


express().listen(3005, (req,res)=>{
   
    res.send("hola")



    console.log("server funcionando" .green)
})


let citiesList =
 ["cordoba",
 "cordoba",
 "san luis",
 "Ushuaia",
 "salta",
 "cordoba",
 "Ushuaia",
 "Buenos aires",
 "salta",
 "Ushuaia",
 "tucuman",
 "cordoba",
 "salta",
 "Ushuaia",
 "cordoba",
 "cordoba",
 "cordoba",
 "Buenos aires",
 "Buenos aires",
 "tucuman",
"jujuy",
"jujuy",
"jujuy",
"salta",
"salta",
"tucuman",
"Ushuaia",
"jujuy",
"salta",
"tucuman"
 ]



function logMoreVisitedCity(nro) {

    let cities = {}

    citiesList.forEach(e=> cities[e] = !cities[e] ? 1 : cities[e] += 1 )

    let result = Object.keys(cities).map(e=> ([e,cities[e]]))
    .sort((a,b)=> b[1] - a[1])
    .slice(0,nro)
    .map(e=> e[0])
    
    console.log(result)
 }

logMoreVisitedCity(5)



function clearRepeatedCitis() {

    let newCitiesList = Array.from(new Set(citiesList))

    return console.log(newCitiesList)
    
}


//probando

//probando 2