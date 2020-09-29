const container = document.getElementById('container');
const randomPostJsonUrl = 'http://jsonplaceholder.typicode.com/posts/';
const randomUserJsonUrl = 'https://randomuser.me/api';
const loading = document.querySelector('.loading');

window.addEventListener('scroll', () => {
    const {scrollTop, scrollHeight, clientHeight} = document.documentElement;
    if (Math.floor(scrollTop) + clientHeight >= scrollHeight -1 ) {
        // console.log(`${scrollTop}, ${clientHeight}, ${scrollHeight}`);
        showLoadingAni();
    }
})

function showLoadingAni(){
    loading.classList.add('show');
    getPost();
}

async function getPost() {
    const postResponse = await fetch(randomPostJsonUrl + `${getRandomNum()}`);
    const postData = await postResponse.json();

    const userResponse = fetch(randomUserJsonUrl);
    // 해당서버 상황에 따라 잘 될 때도 안될 때도 있음
    const userData = await (await userResponse).json();
    // florin이 했던 response를 json으로 만드는 방법과는 살짝 다름

    // console.log(userData.results[0]);

    const data = { 'post': postData, 'user': userData.results[0]};
    
    addDataToDom(data);
}

function getRandomNum() {
    return num = Math.floor(Math.random()*100 + 1 );
}

function addDataToDom(data) {
    const postElement = document.createElement('div');
    postElement.classList.add('blog_post');
    postElement.innerHTML = `
    <h2 class="title">${data.post.title}</h2>
    <p class="text">${data.post.body}</p>
    <div class="user_info">
        <img src="${data.user.picture.large}" alt="${data.user.name.first}"/>
        <span>${data.user.name.first} ${data.user.name.last}</span>
    </div>
    `;
    container.appendChild(postElement);
    
    loading.classList.remove('show');
}

