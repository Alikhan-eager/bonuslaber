function big(element){
    element.style.fontSize = "30px";
}

function small(element){
    element.style.fontSize = "20px";
}
let animals = ['banana','apple','ThinkandGrowRich','NicomacheanEthics','Napolean Hill','Aristotel']
let notFruits = ['ThinkandGrowRich','NicomacheanEthics','cat','dog','Napolean Hill','Aristotel']
let books = ['cat','dog','Napolean Hill','Aristotel','banana','apple']
let persons = ['banana','apple','ThinkandGrowRich','NicomacheanEthics','cat','dog']
let all = ['banana','apple','ThinkandGrowRich','NicomacheanEthics','Napolean Hill','Aristotel','cat','dog']

function myFruits(){
  myFunctio(notFruits);
}
function myAnimals(){
   myFunctio(animals);
}
function myPersons(){
  myFunctio(persons)
}
function myBooks(){
  myFunctio(books)
}
function change(){
  document.getElementById('demo').innerHTML = Date();
}
function myFunctio(array){
  alle()
  for(let i = 0; i < array.length; i++){
   var x = document.getElementById(array[i]);
     if (x.style.display =="none") {
       x.style.display = "block";
     } else {
       x.style.display = "none";
     }
   }  
} 
function alle(){
  for(let i = 0; i < all.length; i++){
    document.getElementById(all[i]).style.display = "block";
  }
}
