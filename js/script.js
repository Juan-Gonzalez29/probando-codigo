function double (theNumber) {
return theNumber * 2;
}

    var result1 = double(20);
    console.log(result1);

    var result2 = double(35);
    console.log(result2);


function printFullName (fristName, lastName) {
return "Mi nombre es" + " " + fristName + " " + lastName;
}

    console.log(printFullName("Juan Carlos","Gonzalez"));

function randomNumberBetween1and100 () {
return Math.random() * 100;
}

    console.log(randomNumberBetween1and100());
    console.log(randomNumberBetween1and100());


function sumarCinco (numUno, numDos) {
return 5 + numUno + numDos;
}

    console.log(sumarCinco(20,30));
    console.log(sumarCinco(10, 45));

    var numUno = "120";
    var numDos = 10;
    console.log(numUno - numDos);


var day = "Lunes";
    if (day === "Miercoles") {
        console.log("Hoy se lee metafísica");
    } else {
        console.log("Hay que trabajar y estudiar.");
    }   

var day = "Miercoles";
    if (day === "Miercoles") {
        console.log("Hoy se lee metafísica");
    } else {
        console.log("Hay que trabajar y estudiar.");
    } 

function estrictamenteDif (arg1, arg2) {
return arg1 !== arg2;
}
    console.log(estrictamenteDif(4, "4"));


function distintoA (arg1, arg2) {
return arg1 != arg2;
 }
    console.log(distintoA(4, "4"));

    console.log("hola" === "HOLA");


var num = 5;
    if (num !== 6) {
        console.log("estrictamente distinto")
    } else {
        console.log("No se cumple la regla")
    }


var edad = 50;

var edadEsPar = ((edad % 2) === 0);
    console.log(edadEsPar)


var edad = 25;

var edadEsPar = ((edad % 2) === 0);
        console.log(edadEsPar)


var anioNacimiento = 1989;
    if (anioNacimiento >= 1980 && anioNacimiento <= 1995) {
        console.log("Generación Milenial");
    }


 //var pais = "Ecuador";
   // if (pais === "EEUU" || pais === "Canadá" || pais === "México") {
     //   alert("Tu país está en América del Norte");
    //} else {
     //   alert("Tu país NO está en América del Norte")
    //}


function esPar (unNumero) {
    if (unNumero % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
        console.log(esPar(6));
        console.log(esPar(32));
        console.log(esPar(71));


function mayorNumero (numUno, numDos) {
    if (numUno > numDos) {
        return numUno;
    } else if (numUno === numDos) {
        return "Los números son iguales";
    } else {
        return numDos;
    }
}

        console.log(mayorNumero(13, 26));
        console.log(mayorNumero(43, 17));
        console.log(mayorNumero(5, 5));

const username = document.getElementById("userName")
const password = document.getElementById("inputPass")
const button = document.getElementById("btn")

    
var Usu = juangon29;
var Pass = Prueba07;
function login (Usu, Pass) {
    if (document.querySelector("userName") != Usu, document.querySelector("inputPass") != Pass) {
        alert =("Usuario o Contraseña Incorrectos.");        
    } else if (document.querySelector("userName") === Usu, document.querySelector("inputPass") === Pass) {
        alert =("Bienvenido");
    } else {
        document.getElementById("btn") .addEventListener("click", (login) =>{
            login.preventDefault()
            const data = {
                userName: username.value,
                inputPass: password.value
            }
        });

    }
}


