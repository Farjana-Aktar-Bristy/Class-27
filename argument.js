function addAllNumber(num1,num2){
    var total = 0;
    for (const number of arguments) {
        total = total + number;
    }
    return total;
}



const total = addAllNumber(11,14,16,60,99,2,33,70,55,203,501,10,88,38);
console.log(total);
