

const getImagenPromesa = () => {
    const promesa = () => new Promise ( resolve => resolve('urlsss'));
}

const getImage = async() => {

    try{

        const apiKey = '3UrGohoiLUlwtbG6SOsgQWECZjIXTM3m';

        const httpCode = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
        const {data} = await httpCode.json();
        
    
        const {URL} = data.images.original;
        
    
        const prueba = document.createElement('img');
        prueba.src = URL;
        
        document.body.append(prueba);

    }catch(error){
        //manejo error
        console.log(error);
    }
   
}



getImage();



