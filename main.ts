//***************************Assignment No: 01*********************************
//                       BULDING YOUR FRIEND LIST

let friend1 = {
    firstName: "Ali",
    lastName: "Hassan",
    id: "aliwaqas123",
}

let friend2 = {
    firstName: "Zunaira",
    lastName: "Choudhry",
    id: "Zunich1",
}

let friend3 = {
    firstName: "Vaniza",
    lastName: "Choudhry",
    id: "vinichoudhry-",
}

let people={
    friends:[] as
    {
        firstName:string;
        lastName:string;
        id?: string;
  
    }[]
  }
  
people.friends.push(friend1,friend2,friend3)
                              
console.log(people);

//************************************Assignment No 02*********************************
//                            Manipulating an Array: Rearranging Words 

const scrambledArray = [" student", "of", true, 123, "am", "a", "GIAC", "I"];

for (let i = 0; i < scrambledArray.length; i++) {
    if (typeof scrambledArray[i] !== "string") {

    }
}

scrambledArray.splice(2, 3);
scrambledArray.unshift(" i ");
scrambledArray.splice( 1, 0, "am", "a");
scrambledArray.pop();
scrambledArray.splice( 5, 1 );
console.log(scrambledArray)

const joinstring = scrambledArray.join(' ');
console.log(joinstring)


//***************************************Assignment No 03******************************************* 
//                                 Company Product Catlog

let inventory:Product[]=[];

type Product={
    name:string,
    model:string,
    price:number,
    quantity:number,
}

let product:Product={
    name:"lamborghini",
    model:"2020",
    price:70000000,
    quantity:1,
};

let product2:Product={
    name:"oppo",
    model:"2017",
    price:19000,
    quantity:3,
};

let product3:Product={
    name:"laptop",
    model:"2019",
    price:3000,
    quantity:5
};

inventory.push(product,product2,product3)
console.log(inventory);
console.log("Quantity of 3rd product is",inventory[2].quantity);
console.log("Price of 1st product is",inventory[0].price);
console.log("Name of 2nd product is",inventory[1].name);


//**************************************Asignment 04*******************************
//                                Student List Organizer

interface Student{
    name:string,
    seniorStatus:boolean,
    completeAssignments:boolean,
}


let students: Student[] = [
    {name: "Ayesha", seniorStatus: true, completeAssignments: true},
    {name: "Vaniza", seniorStatus: false, completeAssignments: false},
    {name: "Hamza", seniorStatus: false, completeAssignments: true},
    {name: "Ali", seniorStatus: true, completeAssignments: true},
    {name: "Anus", seniorStatus: false, completeAssignments:false}
];
console.log(students);


function seniorStudents(students:Student[]) {
    return students.filter(student=>student.seniorStatus && student.completeAssignments===true)    
}
console.log(seniorStudents(students));


function removeStudents(student:Student[]) {
    return students.filter(student=>student.completeAssignments===false)
}
console.log(removeStudents(students));



























