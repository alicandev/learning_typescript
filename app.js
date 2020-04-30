let animal = {
    name: "Fido",
    species: "Dog",
    age: calculateAge(2010),
    speak: () => console.log('Woof!')
};
var calculateAge = birthYear => Date.now() - birthYear;
var totalLength = (x, y) => x.length + y.length;
totalLength([1, 2, 3], [2, 3, 4]);
