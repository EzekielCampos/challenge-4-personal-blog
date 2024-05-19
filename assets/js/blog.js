




let blogPosts = JSON.parse(localStorage.getItem('userPostInfo'));

const blogSection = document.querySelector("section");

const backButton = document.querySelector("button");

// This function will show the blog post rendered on the page
function renderBlogPost(){


    for(posts of blogPosts){
        const title = document.createElement('h2');
        const blogContent = document.createElement('p');
        const author = document.createElement('p');
        const contentBox = document.createElement('div');


        title.innerHTML = posts.user;
        blogContent.innerHTML = posts.post;
        author.innerHTML = posts.user;

        contentBox.append(title, blogContent, author);
        blogSection.append(contentBox);



    }



}


function redirect(){


    document.location.href = "./index.html";

}



backButton.addEventListener("click", function(){


redirect();



});



renderBlogPost();