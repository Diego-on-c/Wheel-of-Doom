import { codersList } from "./data.js";

let btMatar= document.querySelector(".btMatar")

function oscurecerRandom(array){
btMatar.addEventListener("click", () =>{
  let random = Math.floor(Math.random()* array.length)
  let randomId = array[random].id;
  
  let contenedores = document.querySelectorAll(".ctCoders")
  let randomDataset= contenedores[random].dataset.set
 
  array.map(item => {
    
      if(item.id == randomId){
        let indice = array.indexOf(item)
        array.splice(indice, 1)
        console.log(array)
        contenedores[randomId].classList.add('ctCodersSelected');
      
  };
});
});
};
 

oscurecerRandom(codersList)



















