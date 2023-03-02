// WAP to print all prime numbers between 1-n where ‘n’ is entered by the user using all possible loops in JS.


function checkPrime(){
    let x = prompt("Enter the value till which you want prime numbers");
    let num = parseInt(x);
    let primes = "Prime numbers till " + num + "<br>";
    console.log("Using for loop");
    for(let i=2; i<=num; i++){
        count = 0;
        for(let j=2; j<=i/2; j++){
            if(i%j === 0){
                count++
                break;
            }
        }
        if(count===0){
            console.log(i);
            primes += "" + i + "<br>";
        }
    }
    document.write(primes);
}
