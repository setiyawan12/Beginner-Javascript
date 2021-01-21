//Fillter isi array
var angka = [1,2,3,4,5,5.6,7,8,9,]
var angka2 = angka.filter(function (e) {
    return e == 4
});

var angka3 = angka.filter(function (x) {
    return x > 5;
});
console.log(angka2.join('-'));
console.log(angka3.join('-'));


// find
var angka4 = angka.find(function (x) {
    return x <5 ;
});
console.log(angka4);
