// Manipulasi Array

// Length
// var arr = ["Ega", "Nawwa", "Rasa", "Hadi"]

// for(i = 0; i < arr.length; i++){
//     console.log('Mahasiswa ke - '+ (i+1) + ' : ' + arr[i]);
// }

var arr = ['Ega', 'Nawwa', 'Rasa'];

// Join
// console.log(arr.join('-'));

// Push & Pop
// arr.push('Hadi');
// arr.pop();


// Shift & Unshift
// arr.unshift('Hadi');
// arr.shift();


// Splice 
// splice (indexAwal, mauDihapusBerapa,ElementBaru1,ElementBaru2)
// arr.splice(1, 2,'Hadi','Tama');

arr.push('Hadi','Tama');
// Slice
// slice (indexAwal, indexAkhir)
// var arr2 = arr.slice(1,4);


// Foreach
// arr.forEach(function(e){
//     console.log(e);
// });


// Map
// angka1 = [1,2,5,3,6,8,4];
// angka2 = angka1.map(function(e){
//     return e * 2;
// });


// Sort
// angka1 = [1,2,10,5,20,3,6,8,4];
// angka1.sort(function(a,b){
//     return a-b;
// });


// Filter
var angka1 = [1,2,10,5,20,3,6,8,4];
var angka2 = angka1.find(function(x){
    return x == 3;
});


console.log(angka2);
