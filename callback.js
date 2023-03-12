const posts = [
    {title: 'atomics', body: 'this is a new post'},
    {title: 'atomics', body: 'this is a second post'},

]

function getPosts(){
    setTimeout(()=>{
        let output = '';
        posts.forEach((post, index)=>{
            output +=`<li>${posts.title}</li>`;

        });
        document.body.innerHTML = output;
    },1000);
}

function createPost(post, callback){
    setTimeout(()=>{
        posts.push(post);
        callback()
    },2000 )
}


createPost({
    title: 'atomics', body: 'this is a new post'}, getPosts)


