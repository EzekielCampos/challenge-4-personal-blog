
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

                emoji.setAttribute("id", "moon");
                emoji.innerHTML = "&#127769";
                change.setAttribute("class", "dark");
                clearInterval(timerInterval);            
        }

// Updates all attributes and content to light mode
        else{
                emoji.setAttribute("id", "sun");
                emoji.innerHTML = " &#127774";
                change.setAttribute("class", "light");
                clearInterval(timerInterval);

        }

    }


});