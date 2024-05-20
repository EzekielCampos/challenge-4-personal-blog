




let blogPosts = JSON.parse(localStorage.getItem('userPostInfo'));

const blogSection = document.querySelector("#all-posts");

const backButton = document.querySelector("button");

const takeOut= document.querySelector("#post-delete");

// This function will show the blog post rendered on the page
function renderBlogPost(){


    for(posts of blogPosts){
        const contentBox = document.createElement('div');
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

        title.innerHTML = posts.user;
        blogContent.innerHTML = posts.post;
        author.innerHTML = "Posted by " + posts.user;

        contentBox.append(title, blogContent, author, removePost);
        blogSection.append(contentBox);



    }



}


function redirect(){


    document.location.href = "./index.html";

}


// This will redirect the user back to the main page
backButton.addEventListener("click", function(){

    redirect();

});

blogSection.addEventListener("click", function(event){

    const target = event.target;

    if (target.matches("button"))
        console.log("success");



});


renderBlogPost();