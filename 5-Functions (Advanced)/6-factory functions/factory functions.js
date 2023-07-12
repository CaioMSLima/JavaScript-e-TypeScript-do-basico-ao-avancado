function createPerson(name, lastName,height1,weight1) {
    return{
        name:"Jack",
        lastName,
        speack:function(subject){
            return `${this.name} is ${subject} and his icm is ${this.imc}`
        },
        weight1: 70,
       height1:2.50,

       //Make this function an attribute of this object
       //Getter = pick this value
       get imc(){
        const index = this.weight1/(this.height1 ** 2);
        return index.toFixed(2);
       },

       //setter = set or change this values
       set fullName(value){ 
        
        //separe this varible to " " to trasforme in array  [Caio, Matos, Siqueira, de, Lima]
         value =value.split(" ");

         //pick or remove the first element in this array and  return this element, exmplo Caio
         this.name = value.shift();

         //joins all elements of an array into a string and if you pit anything in (), this use to this value 
         //exp Matos Siqueira de Lima
         this.lastName = value.join(" ");
         
         //Caio Matos Siqueira de Lima
         console.log( `${this.name} ${this.lastName}`);

    }
    };
}
// Jack is speaking about JS and his icm is 11.20
const p1 = createPerson("Draven", "Chan",10,10)

//Jack is speaking about Js
console.log(p1.speack("speaking about JS"));

//Make the function an attribute of this object
console.log(p1.imc);


p1.fullName = "Caio Matos Siqueira de Lima";


