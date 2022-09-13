console.log("cc");
const contentList = document.getElementById('content-list');
btn.addEventListener('click', function onClick() {
    console.log("test");
    addText();
});

btn2.addEventListener('click', function onClick() {
    console.log("test");
    addText2();
});

async function addText() {
    // on recup l'obj JSON
    const responseJSON = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    //transform en obj JS
    const responseJS = await responseJSON.json();
    console.log(responseJS);
    content.innerHTML = responseJS.title;
}

async function addText2() {
    // on recup l'obj JSON
    const responseJSON = await fetch('https://jsonplaceholder.typicode.com/posts');
    //transform en obj JS
    const responseJS = await responseJSON.json();
    console.log(responseJS);
    let template = "";
    for (let index = 0; index < responseJS.length; index++) {
        const element = responseJS[index];
        template = template + 
                `<ul>
                <li>${element.title}</li>
                <li>${element.body}</li>
                </ul>`;
                contentList.innerHTML = template;
    }
    // content2.innerHTML = responseJS.title;
}