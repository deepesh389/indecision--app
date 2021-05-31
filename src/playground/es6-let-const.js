var nameVar = 'Deepesh';
var nameVar = 'Deepu';
console.log('nameVar', nameVar);

let namelet = 'Deepak';
namelet = 'vijay';
console.log('namelet', namelet);

const nameconst = 'mohit';
console.log('nameconst', nameconst);

// Block scoping

const fullName = 'Deepesh Kumar';
let firstName;
if(fullName){
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}
console.log(firstName);