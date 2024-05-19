
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
                clearInterval(timerInterval);


            },200);
            change.setAttribute("class", "dark");

            emoji.setAttribute("id", "moon");


            
        }

        else{

            const timerInterval = setInterval(function(){

                emoji.innerHTML = " &#127774";
                clearInterval(timerInterval);


            },200);


            emoji.setAttribute("id", "sun");

            change.setAttribute("class", "light");
           

        }

    }



});