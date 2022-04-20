function fizbuz(n) {
    const tomb=[];
    if (n > 0) {
        for (let i = 1; i <= n; i++) {
            tomb.push(aktErtek(i));
        }
        return tomb.join(", ");
    }
    return "";
}

function aktErtek(n) {
    if (n % 15 === 0) {
        return "fizzbuzz";
    }else if (n%3===0) {
        return "fizz";
    }else if(n%5===0){
        return "buzz";
    }else{
        return n;
    }
}