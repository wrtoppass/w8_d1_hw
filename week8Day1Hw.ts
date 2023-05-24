// Question 1
//let student1 = {
//    id: 'GMK435&g62L00',
//    name: 'John Smith',
//    age: 24,
//    isTired: true,
//    projectsCompleted:["HTML Portfolio", "Fakebook", "Pokemon API Project", "Weather Bug"],
//    pet: 'dog'
//}

//let student2= {
//    id: '6KGS%54GmlY76',
//    name: 'Jenny Hawthorne',
//    age: 28,
//    isTired: false,
//    projectsCompleted:["HTML Portfolio"],
//}

//let student3 = {
//    id: '6KGS%54GmlY76',
//    name: 'Neo',
//    age: 57,
//    isTired: true,
//    projectsCompleted:["Matrix","Biological Interface Program"],
//    pet:'cat'
//}

type CTStudent = {
    id : string,
    name : string,
    age : number,
    isTired : boolean,
    projectsCompleted: string[],
    pet?: string
}

let student1:CTStudent = {
    id: 'GMK435&g62L00',
    name: 'John Smith',
    age: 24,
    isTired: true,
    projectsCompleted:["HTML Portfolio", "Fakebook", "Pokemon API Project", "Weather Bug"],
    pet: 'dog'
}

let student2:CTStudent= {
    id: '6KGS%54GmlY76',
    name: 'Jenny Hawthorne',
    age: 28,
    isTired: false,
    projectsCompleted:["HTML Portfolio"],
}

let student3:CTStudent = {
    id: '6KGS%54GmlY76',
    name: 'Neo',
    age: 57,
    isTired: true,
    projectsCompleted:["Matrix","Biological Interface Program"],
    pet:'cat'
}

// Question 2
type Fruit={
    color:string,
    shape:string
} | null

let apple:Fruit={color:"red", shape:"sphere"}
let eaten:Fruit=null

function fruitObject(ans:Fruit){
    if (ans) {
        console.log('${ans.color}')
    } 
    else{
        console.log('you ate my fruit already')
    }
}

fruitObject(apple)

//Question 3
type Book={
    isbn:string,
    title:string,
    author:string
}
​
type DigitalBook={
    fileType:string,
}

type Ebook = Book | DigitalBook
const talesOfDyingEarth : Ebook = {
    title: 'Tales of the Dying Earth',
    author: 'Jack Vance'
}

// Question 4

type ShopItem = {
    readonly id : number,
    price: number,
    description: string,
    color?: string,
    keywords: string[],

}

enum Category {
    Shirts,
    Shoes,
    Pants,
    Hats
}

const warcraftShirt : ShopItem = {
    id : 1,
    price : 20,
    description : 'This shirt survived the hellscream',
    color: 'black and red',
    keywords: ['MMORPG', 'Warcraft', 'WoW']
}
const gundamShirt : ShopItem = {
    id : 1,
    price : 20,
    description : 'A shirt with fighting mechs',
    color: 'blue and yellow',
    keywords: ['fighting', 'mech', 'battle']
}
const yeezyBoost350V2 : ShopItem = {
    id : 2,
    price : 20,
    description : 'These shoes were a bad investment',
    color: 'black',
    keywords: ['yeezy', 'artist', 'premium?']
}