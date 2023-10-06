const apiKey = '3UrGohoiLUlwtbG6SOsgQWECZjIXTM3m';

const httpCode = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)

//httpCode.then(resp => {
//    resp.json().then(data => {
//        console.log(data)
//    })
//    
//}).catch(console.warn);
//
httpCode
    .then(resp => resp.json() )
    .then(({data}) => {
        const {url} = data.images.original;

        const prueba = document.createElement('img');
        prueba.src = url;

        document.body.append(prueba);
    })
    .catch(console.warn)



