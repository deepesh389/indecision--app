// arguments object - no longer bound with arrow function

const add = function (a, b){
    // console.log(arguments);
    return a+b;
};
console.log(add(45,2));

// this keyword - no longer bound

const user = {
    name: 'Deepesh',
    cities: ['Bisalpur', 'Roorkee', 'Bareilly'],
    printPlacesLived(){
        //console.log(this.name);
        //console.log(this.cities);
        return this.cities.map((city) => this.name + ' has lived in '+ city);
        // this.cities.forEach((city)=>{
        //     console.log(this.name + ' has lived in '+ city);
        // });
    }
};
console.log(user.printPlacesLived());
// user.printPlacesLived();

const multiplier = {
    numbers: [1,2,3,4],
    multiplyBy: 3,
    multiply(){
        return this.numbers.map((number) => number*this.multiplyBy);
    }
};
console.log(multiplier.multiply());