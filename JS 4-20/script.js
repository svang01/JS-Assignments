let textResponse = document.getElementById('textArea');
let firstBtn = document.getElementById('get-all');
let secondBtn = document.getElementById('hide');

function postAll () {
    textResponse.value =" ";
    fetch('https://jsonplaceholder.typicode.com/posts').then((response) => response.json()).then((json) => {
        textResponse.value = JSON.stringify(json, null, "   ");
    })
}

function getId10 () {
    textResponse.value =" ";
    fetch('https://jsonplaceholder.typicode.com/posts/10').then((response) => response.json()).then((json) => {
        textResponse.value = JSON.stringify(json, null, "   ");
    })
}

function create () {
    textResponse.value =" ";
    fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
    title: 'new title yea',
    body: 'my new body',
    userId: 1,
    }),
    headers: {
    'Content-type': 'application/json; charset=UTF-8',
    },
    })
    .then((response) => response.json())
    .then(json => {
      textResponse.value = JSON.stringify(json, null, " ")
    });
}

function replaceId12 () {
    textResponse.value =" ";
    fetch('https://jsonplaceholder.typicode.com/posts/12', {
        method: 'PUT',
        body: JSON.stringify({
        id: 12,
        title: 'The new Title to 12 id',
        body: 'new body',
        userId: 1,
        }),
        headers: {
        'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then(json => {
            textResponse.value = JSON.stringify(json, null, " ")
        });
}
      
function update12 () {
    textResponse.value =" ";
    fetch('https://jsonplaceholder.typicode.com/posts/12', {
        method: 'PATCH',
        body: JSON.stringify({
        id: 12,
        title: 'UPDATE THIS TITLE... 12 id',
        body: 'body',
        userId: 1,
        }),
        headers: {
        'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then(json => {
            textResponse.value = JSON.stringify(json, null, " ")
        });
}

function deletePost () {
    textResponse.value =" ";
    fetch('https://jsonplaceholder.typicode.com/posts/12', {
        method: 'DELETE',
      })
        .then((response) => response.json())
        .then(json => {
            textResponse.value = JSON.stringify(json, null, " ")
        });
}