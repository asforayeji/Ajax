// document.getElementById('GetData01').addEventListener('click', function () {
//     const apiendPoint = 'https://jsonplaceholder.typicode.com/posts/16';
//     fetch(apiendPoint)
//     .then(response => response.json())
//     .then(data => {
//         // console.table(data);
//         console.log(data.id, data.title)
//     })
// });




// document.getElementById('axiox-get').addEventListener('click', async function () {
//     console.log('Axios Get Request');
//     const apiendPoint = 'https://jsonplaceholder.typicode.com/posts/16';
//     axios.get(apiendPoint)
//     .then(response =>{
//         console.table(response.data);
//     })
// });


// document.getElementById('GetData01').addEventListener('click', async function () {
//     const apiendPoint = 'https://jsonplaceholder.typicode.com/posts/16/invalid';
//     const response = await fetch (apiendPoint);
//     const data = await response.json();
//     console.table(data);
// });


document.getElementById('GetData01').addEventListener('click', async function () {
    const apiendPoint = 'https://jsonplaceholder.typicode.com/posts/16';
    const response = await fetch(apiendPoint);
    if (!response.ok) {
        console.log('Error');
        return;
    }

    const data = await response.json();
    console.table(data);
});



// document.getElementById('axiox-get').addEventListener('click', async function () {
//     console.log('Axios Get Request');
//     const apiendPoint = 'https://jsonplaceholder.typicode.com/posts/16';
//     const response = await axios.get(apiendPoint);
//     // const data = response.data;
//     console.table(response.data);
// });
calss="common-heading"








document.getElementById('axiox-get').addEventListener('click', async function () {
    console.log('Axios Get Request');
    const apiendPoint = 'https://jsonplaceholder.typicode.com/posts/17';
    try {
        const response = await axios.get(apiendPoint);
        console.table(response.data);
    } catch (error) {
        // console.table(error);
        console.log(error.message);
    }
});


document.getElementById('fetch-post').addEventListener('click', async function () {
    const apiendPoint = 'http://ajax.test/backend.php';
    const data = {
        'username': 'admin@example.com',
        'password': 'password123'
    }

    const response = await fetch(apiendPoint, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'content-type': 'application/json'
        }
    });


    const output = await response.json()
    console.table(output);
});






document.getElementById('axiox-post').addEventListener('click', async function () {
    const apiendPoint = 'http://ajax.test/backend.php';
    const data = {
        'username': 'admin@example.com',
        'password': 'password123'
    } //payload
    const response = await axios.post(apiendPoint, data, {
        'content-type': 'application/json'
    })
    const result = response.data;
    console.table(result);
});




document.getElementById('fetch-country').addEventListener('click', async function () {
    const api = 'https://restcountries.com/v3.1/name/bangladesh?fields=name,capital,population,currencies';
    const response = await axios.get(api);
    const data = response.data[0];
    const output = `The Capital of Bangladesh is ${data.capital[0]}, population ${data.population}, and the currency is ${data.currencies.BDT.name}`;
    console.log(output);
});



document.getElementById('fetch-form-post').addEventListener('click', async function () {
    // const form = new FormData(document.getElementById('record-form'));
    const apiendPoint = 'http://ajax.test/form.php';
    const form = new FormData();
    form.append('username', 'admin@example.com');
    form.append('password', 'admin123');

    const response = await fetch(apiendPoint, {
        method: 'POST',
        body: form
    })

    const output = await response.json();
    console.table(output);
});



document.getElementById('axios-form-post').addEventListener('click', async function () {
    // const form = new FormData(document.getElementById('record-form'));
    const apiendPoint = 'http://ajax.test/form.php';
    const form = new FormData();
    form.append('username', 'admin@example.com');
    form.append('password', 'admin123');

    const response = await axios.post(apiendPoint, form);

    const output = response.data
    console.table(output);
});


document.getElementById('show-all').addEventListener('click', async function () {
    const apiendPoint = 'http://localhost:3000/persons'
    const resultDiv = 'php-api-result'
    const response = await axios.get(apiendPoint);
    document.getElementById(resultDiv).innerHTML = `<pre>${JSON.stringify(response.data, null, 2)}</pre>`;
});



document.getElementById('get-record').addEventListener('click', async function () {
    const id = document.getElementById('record-id').value;
    const apiendPoint = `http://localhost:3000/persons/${id}`;
    const resultDiv = 'php-api-result'
    const response = await axios.get(apiendPoint);
    document.getElementById(resultDiv).innerHTML = `<pre>${JSON.stringify(response.data, null, 2)}</pre>`;
});




document.getElementById('record-form').addEventListener('submit', async function (e) {
    e.preventDefault();
    const apiendPoint = 'http://localhost:3000/persons'
    const name = document.getElementById('Name').value;
    const email = document.getElementById('Email').value;
    await axios.post(apiendPoint, { name, email });

    const resultDiv = `php-api-result`
    const response = await axios.get(apiendPoint);
    document.getElementById(resultDiv).innerHTML = `<pre>${JSON.stringify(response.data, null, 2)}</pre>`;
});




document.getElementById('Update').addEventListener('click', async function (e) {
    const id = document.getElementById('record-id').value;
    const apiendPoint = `http://localhost:3000/persons/${id}`;
    const name = document.getElementById('Name').value;
    const email = document.getElementById('Email').value;
    await axios.put(apiendPoint, { name, email });

    const resultDiv = `php-api-result`
    const response = await axios.get(apiendPoint);
    document.getElementById(resultDiv).innerHTML = `<pre>${JSON.stringify(response.data, null, 2)}</pre>`;
});


document.getElementById('delete').addEventListener('click', async function (e) {
    const confirmation = confirm('Are you sure you want to delete this record?');
    if (!confirmation) {
        return;
    }
    const id = document.getElementById('record-id').value;
    const apiendPoint = `http://localhost:3000/persons/${id}`;
    await axios.delete(apiendPoint);

    const apiendPointNew = `http://localhost:3000/persons`;
    const resultDiv = `php-api-result`
    const response = await axios.get(apiendPointNew);
    document.getElementById(resultDiv).innerHTML = `<pre>${JSON.stringify(response.data, null, 2)}</pre>`;
});




document.getElementById('xkcd').addEventListener('click', async function () {
    const apiendPoint = 'http://ajax.test/proxy.php';
    const response = await axios.get(apiendPoint);
    const image = response.data.img;
    console.log(image);

});