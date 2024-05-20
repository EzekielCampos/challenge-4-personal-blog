




let userPostInfo = JSON.parse(localStorage.getItem('userPostInfo'));

const blogSection = document.querySelector("#all-posts");

const backButton = document.querySelector("button");

const takeOut= document.querySelector("#post-delete");

// This function will show the blog post rendered on the page
function renderBlogPost(){


    for(let index = 0; index< userPostInfo.length; index++){

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

        title.innerHTML = userPostInfo[index].user;
        blogContent.innerHTML = userPostInfo[index].post;
        author.innerHTML = "Posted by " + userPostInfo[index].user;

        contentBox.append(title, blogContent, author, removePost);
        blogSection.append(contentBox);
    }



}


function redirect(){


    document.location.href = "./index.html";

}

function storePost(){

    localStorage.setItem("userPostInfo", JSON.stringify(userPostInfo));
    
    }

    function init() {

        const storedPost = JSON.parse(localStorage.getItem('userPostInfo'));
        // TODO: Describe the functionality of the following `if` statement.
        if (storedPost !== null) {
          userPostInfo = storedPost;
        }
     
        renderBlogPost();
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
        // renderBlogPost();



    }



});


init();