//error 

// name = 'bristy';
// const student = undefined;
// console.log(student.name);


const name = 'farjana';
// where the error occour,we can see
try {
    name = 'aktar';
}
catch (error) {
    console.log('we get error bristy:', error);
}
console.log(name);