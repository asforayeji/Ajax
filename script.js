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
    const response = await fetch (apiendPoint);
    if(!response.ok){
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








document.getElementById('axiox-get').addEventListener('click', async function () {
    console.log('Axios Get Request');
    const apiendPoint = 'https://jsonplaceholder.typicode.com/posts/17';
    try{
        const response = await axios.get(apiendPoint);
        console.table(response.data);
    }catch(error){
        // console.table(error);
        console.log(error.message);
    } 
});


document.getElementById('fetch-post').addEventListener('click', async function () {
    const apiendPoint = 'http://ajax.test/backend.php';
    const data = {
        'username' : 'admin@example.com',
        'password' : 'password123'
    }

    const response = await fetch(apiendPoint, {
        method: 'POST',
        body: JSON.stringify(data),
        headers:{
            'content-type': 'application/json'
        }
    });


    const output = await response.json()
    console.table(output);
});






document.getElementById('axiox-post').addEventListener('click', async function () {
    const apiendPoint = 'http://ajax.test/backend.php';
    const data = {
        'username' : 'admin@example.com',
        'password' : 'password123'
    } //payload
    const response = await axios.post(apiendPoint, data, {
        'content-type': 'application/json'
    })
    const result = response.data;
    console.table(result);
});




document.getElementById('axiox-country').addEventListener('click', async function(){
    const api = 'https://restcountries.com/v3.1/name/bangladesh?fields=name,capital,population,currencies';
    const response = await axios.get(api);
    const data = response.data[0];
    const output = `The Capital of Bangladesh is ${data.capital[0]}, population ${data.population}, and the currency is ${data.currencies.BDT.name}`;
    console.log(output);
});