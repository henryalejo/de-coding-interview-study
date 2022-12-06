async function fetchUsers() {
return  await fetch('https://randomuser.me/api/?results=10')
.then((response)=>{
    if(response.ok) {
        return  response.json();
    }
})
.then((data) => {
    return data.results;
})
.catch((err) => {
console.log (`error: ${err}`);
});

}

window.addEventListener('DOMContentLoaded', (event) => {
    const userList = document.querySelector('#usersList');
    
    fetchUsers().then(users => {
        userList.innerHTML = '';

        users.forEach((element, index) => {
            const node = document.createElement('div');
            node.setAttribute('class', 'userBox');
            const image = document.createElement('img');
            image.setAttribute('src', element.picture.medium);
            image.setAttribute('class', 'userImage');
            const paragraph = document.createElement('p');
            paragraph.setAttribute('class', 'userName');
            const text = document.createTextNode(`${element.name.first} ${element.name.last}`);
            paragraph.appendChild(text);
            node.appendChild(image);
            node.appendChild(paragraph);
            userList.appendChild(node);      
        });


    });
});
