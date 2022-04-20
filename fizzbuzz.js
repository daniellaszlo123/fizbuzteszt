function fizbuz(n) {
    const tomb=[];
    if (n > 0) {
        for (let i = 1; i <= n; i++) {
            if (i%3===0) {
                tomb.push("fizz");
            }else if(i%5===0){
                tomb.push("buzz");
            }else{
                tomb.push(i+"");
            }
        }
        return tomb.join(", ");
    }
    return "";
}