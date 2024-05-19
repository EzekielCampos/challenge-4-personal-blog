

const lightString = "light"

const darkMode = document.querySelector("header");

const change = document.querySelector("body");

const emoji = document.querySelector("#sun");


darkMode.addEventListener("click", function(event){

    const element = event.target;

    let check = change.getAttribute("class");

    if(element.matches("p")){

        if (check === lightString){

            change.setAttribute("class", "dark");
        }

        else{
            change.setAttribute("class", "light");



        }

        

        
        



    }



});