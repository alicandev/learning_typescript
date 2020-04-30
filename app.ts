let animal = {
    name: "Fido",
    species: "Dog",
    age: calculateAge(2010),
    speak: () => console.log('Woof!')
}

var calculateAge = birthYear => Date.now() - birthYear

var totalLength = (x:string, y:string) => x.length + y.length

totalLength("asfdsa","asfdafsda")
