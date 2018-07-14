
let alertBox = document.querySelector(".alert");
let showBtn = document.querySelector("#showBtn");
let hideBtn = document.querySelector(".btn-danger");
let greetBtn = document.querySelector(".btn-success");

showBtn.addEventListener('click', function () {
    alertBox.style.display = '';
})

hideBtn.addEventListener('click', () => alertBox.style.display = 'none');

greetBtn.addEventListener('click', () => alertBox.innerHTML = 'Ola User');

document.getElementById('todo-button').addEventListener('click', () => {
    let todosURL = 'https://jsonplaceholder.typicode.com/todos?_limit=5';
    let promise = fetch(todosURL);
    promise.then((response) => response.json())
    .then(todos=>{
        document.querySelector('.jumbotron').innerHTML = JSON.stringify(todos)
    })
})

let imgEle = document.getElementById('pov');

document.getElementById('stop').setAttribute('disabled','true');

document.getElementById('start').addEventListener('click', () =>{
    document.getElementById('stop').removeAttribute('disabled');

    let idx =1;
    let interval=setInterval(() =>{
        imgEle.src=`./images/img${idx}.png`
        if(idx==3) idx=1;
        else idx++;

    },1000)

    document.getElementById('stop').addEventListener('click', () =>{
        clearInterval(interval);
    })
})