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

function createPost(post){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            posts.push(post);

            const error = false;
            // const error = true

            if (error){
                resolve();
            } else {
                reject('Error: something went wrong')
            }
            
        },2000 )


    })

   
}
createPost({title: 'atomics', body: 'this is a post'}).then(getPosts)


// promise.all

const promise1 = Promise.resolve('Hello world')
const promise2 = 10;
const promise3  = new Promise((resolve, reject)=> setTimeout(


    resolve, 2000, 'Goodbye')
);

const promise4 = fetch('https://jsonplaceholder.typicode.com/users')
    .then(res = res.json())
promise.all([promise1, promise2, promise3]).then(values => console.log(values))

// async await

async function init(){
    await createPost({title: 'atomics', body:'this is my book'});
    getPosts()
}


// async await with fetch

async function fetchUsers(){
    const res =  await fetch('https://jsonplaceholder.typicode.com/users')
    const data  = await res.json();

    console.log(data)
}

fetchUsers()