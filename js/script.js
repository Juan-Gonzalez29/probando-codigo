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