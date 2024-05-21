
// Holds the array from local storage
let userPostInfo = JSON.parse(localStorage.getItem('userPostInfo'));

const blogSection = document.querySelector("#all-posts");

const backButton = document.querySelector("button");

const takeOut= document.querySelector("#post-delete");

// This function will show the blog post rendered on the page
function renderBlogPost(){

    blogSection.innerHTML ='';


    for(let index = 0; index < userPostInfo.length; index++){


        // This div is used to keep track of which post it is
        const contentBox = document.createElement('div');
        contentBox.setAttribute("data-index", index);
        const title = document.createElement('h2');
        const blogContent = document.createElement('p');
        blogContent.setAttribute("id", "content");
        const author = document.createElement('p');
        // set this attribute to make modifications when it's rendered on page
        author.setAttribute("id", "author");
        // This element will give the option to delete post
        const removePost = document.createElement("button");
        removePost.setAttribute("id", "post-delete");
        removePost.textContent = "Delete Post";

        title.innerHTML = userPostInfo[index].title;
        blogContent.innerHTML = userPostInfo[index].post;
        author.innerHTML = "Posted by " + userPostInfo[index].user;

        // Organizes all the data from the array into a post
        contentBox.append(title, blogContent, author, removePost);
        blogSection.append(contentBox);
    }



}

// This will be used for the back button to redirect back to the home page
function redirect(){
    document.location.href = "./index.html";
}

// Each time the post information is updated, it's also updated in the local storage
function storePost(){

    localStorage.setItem("userPostInfo", JSON.stringify(userPostInfo));
    
    }

    
    

// This will redirect the user back to the main page
backButton.addEventListener("click", function(){

    redirect();

});


// Option to delete the post
blogSection.addEventListener("click", function(event){

    const target = event.target;

    if (target.matches("button")){

        const index = target.parentElement.getAttribute("data-index");
        userPostInfo.splice(index, 1);
        storePost();
        renderBlogPost();
    }


});


renderBlogPost();