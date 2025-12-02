let numero= '';

for(let i = 1; i <= 100; i++ ){
    if (i % 3 === 0 && i % 5 === 0){
        numero = 'FizzBuzz';
        console.log(numero);
    }else if ( i % 3 === 0) {
        numero = 'Fizz';
        console.log(numero);

    }else if ( i % 5 === 0 ){
        numero = 'Buzz';
        console.log(numero);
    }else{
       console.log(i); 
    }

    

}