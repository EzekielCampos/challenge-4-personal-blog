




let blogPosts = JSON.parse(localStorage.getItem('userPostInfo'));

const blogSection = document.querySelector("section");

// This function will show the blog post rendered on the page
function renderBlogPost(){


    for(posts of blogPosts){
        const title = document.createElement('h2');
        const blogContent = document.createElement('p');
        const author = document.createElement('p');

        title.innerHTML = posts.user;
        blogContent.innerHTML = posts.post;
        author.innerHTML = posts.user;

        blogSection.append(title, blogContent, author);



    }



}

renderBlogPost();
