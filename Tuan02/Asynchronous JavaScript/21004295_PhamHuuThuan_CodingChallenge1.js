function whereAmI(lat, lng){
    fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then(response => {
        if(!response.ok) throw new Error(`Problem with geocoding ${response.status}`);
        return response.json();
    })
    .then(data => {
        console.log(`You are in ${data.city}, ${data.country}`);
        return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
    })
}

whereAmI(-33.933, 18.474);

//Ha noi, VN
whereAmI(21.028511, 105.804817);