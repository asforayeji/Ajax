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


