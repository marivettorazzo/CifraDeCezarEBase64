var input = document.querySelector("#input");
var valorInput = input.value;

var select = document.querySelector("#select");

var incremento= document.querySelector("#incremento");

var radioCodificar = document.querySelector("#CODIFICAR");
var radioDecodificar =  document.querySelector("#DECODIFICAR");

var buttonCodi = document.querySelector("#buttonCodi");
var buttonDecodi = document.querySelector("#buttonDecodi");

select.addEventListener("change",function(){
    if (select.value == "cifraDeCesar"){
        incremento.classList.remove("oculto");
     
    }
    if (select.value == "base64"){
        incremento.classList.add("oculto");
        
    }
});

radioCodificar.addEventListener("click",function(){
    radioDecodificar.checked = false;
    buttonCodi.classList.remove("oculto");
    buttonDecodi.classList.add("oculto");
   

});
radioDecodificar.addEventListener("click",function(){
    radioCodificar.checked = false;
    buttonCodi.classList.add("oculto");
    buttonDecodi.classList.remove("oculto");
   

});
buttonCodi.addEventListener("click",function(event){
    event.preventDefault();
    var resposta = document.querySelector("#resposta");
    if( select.value =="cifraDeCesar"){
        var resultDoSplit = [];
        var cifrando = input.value.split("");
        for (let i = 0; i< cifrando.length;i++){
            var numero = cifrando[i].charCodeAt();
            var numeroNovo = numero+parseInt(incremento.value);
            resultDoSplit.push(String.fromCharCode(numeroNovo));
        }     
        resposta.value = resultDoSplit.join("");
    }
    if(select.value =="base64"){
        let temp = btoa(input.value);
        resposta.value = temp;
    }
    
});
buttonDecodi.addEventListener("click",function(event){
    event.preventDefault();
    var resposta = document.querySelector("#resposta");
    if( select.value =="cifraDeCesar"){
        var resultDoSplit = [];
        var cifrando = input.value.split("");
        for (let i = 0; i< cifrando.length;i++){
            var numero = cifrando[i].charCodeAt();
            var numeroNovo = numero;
            resultDoSplit.push(String.fromCharCode(numeroNovo));
        }     
        resposta.value = resultDoSplit.join("");
    }
    if(select.value =="base64"){
        
        let decodi = atob(input.value);
        resposta.value = decodi;
    }
});



 
    