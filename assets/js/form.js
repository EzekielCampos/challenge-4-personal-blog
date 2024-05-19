

// Array to hold each post and credential 
let userPostInfo = [];



const userName= document.querySelector("#user-login");

const titelOfPost = document.querySelector("#title-post");

const usersPost = document.querySelector("#msg");

const submitButton = document.querySelector("#post");

// This function stores newly added post to the local storage
function storePost(){

localStorage.setItem("userPostInfo", JSON.stringify(userPostInfo));

}

// function redirect(){

//     document.location.href = ./blog.html;

// }

// This submit all the data
submitButton.addEventListener("click", function(event){

event.preventDefault();

let userInput = userName.value;

let userTitle = titelOfPost.value;

let content = usersPost.value;


userPostInfo.push({user:userInput, title:userTitle, post:content});

storePost();

// Clears the input fields
userName.value = '';
titelOfPost.value= '';
usersPost.value = '';




});