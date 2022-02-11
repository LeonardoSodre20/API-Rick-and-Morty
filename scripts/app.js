const requestCharactersAPI = () => {
    const url = `https://rickandmortyapi.com/api/character`

    fetch(url)
        .then(response => response.json())
            .then(json => {

                console.log(json)

                const containerMain = document.querySelector('[data-container-main]')
            
                json.results.map(results => [

                    containerMain.innerHTML+= `
                        <div class="container-character">
                            <div class="container-img-character"><img src=${results.image}></div>
                            <h1>${results.name}</h1>
                            <h2>${results.species}</h2>
                            <h3>${results.status}</h3>
                            <h4>${results.gender}</h4>
                        </div>
                    `    
                ])



            })
}

requestCharactersAPI()