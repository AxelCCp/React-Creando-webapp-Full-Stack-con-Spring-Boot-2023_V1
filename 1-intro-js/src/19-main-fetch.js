const httpClient = fetch('https://jsonplaceholder.typicode.com/users');
httpClient.then(response => {
    response.json().then(data => {
        console.log(data);
    })
});