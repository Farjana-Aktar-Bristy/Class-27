const myFavDate = new Date('2021-09-24');
console.log(myFavDate);

const anotherDate = new Date(1996, 12, 07, 11, 50, 55, 80);
console.log(anotherDate);

if (myFavDate.getTime() > anotherDate.getTime()) {
    console.log('my fav time is earlier');
}