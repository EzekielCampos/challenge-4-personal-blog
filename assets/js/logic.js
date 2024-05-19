
// This string is to compare to see if it's light
const lightString = "light"

const darkMode = document.querySelector("header");

const change = document.querySelector("body");

const emoji = document.querySelector("#sun");


darkMode.addEventListener("click", function(event){

    const element = event.target;

    let check = change.getAttribute("class");

    if(element.matches("p")){

        // Updates all attributes and content to dark mode
        if (check === lightString){

            const timerInterval = setInterval(function(){

                emoji.innerHTML = "&#127769";
                change.setAttribute("class", "dark");
                clearInterval(timerInterval);


            },500);
         

            emoji.setAttribute("id", "moon");


            
        }

        else{

            const timerInterval = setInterval(function(){

                emoji.innerHTML = " &#127774";
                change.setAttribute("class", "light");
                clearInterval(timerInterval);


            },500);


            emoji.setAttribute("id", "sun");

            
           

        }

    }



});