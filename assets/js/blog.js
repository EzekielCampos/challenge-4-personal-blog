




let blogPosts = JSON.parse(localStorage.getItem('userPostInfo'));

const blogSection = document.querySelector("section");

const backButton = document.querySelector("button");

// This function will show the blog post rendered on the page
function renderBlogPost(){


    for(posts of blogPosts){
        const title = document.createElement('h2');
        const blogContent = document.createElement('p');
        const author = document.createElement('p');
        // set this attribute to make modifications when it's rendered on page
        author.setAttribute("id", "author");
        const contentBox = document.createElement('div');


        title.innerHTML = posts.user;
        blogContent.innerHTML = posts.post;
        author.innerHTML = "Posted by " + posts.user;

        contentBox.append(title, blogContent, author);
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



renderBlogPost();