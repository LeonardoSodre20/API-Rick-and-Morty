const requestCharactersAPI = () => {
    const url = `https://rickandmortyapi.com/api/character`

    fetch(url)
        .then(response => response.json())
            .then(json => {

                console.log(json)

                const containerMain = document.querySelector('[data-container-main]')
            
                json.results.map(results => [

                    containerMain.innerHTML+= `
                        <div class="container-character"><img src=${results.image}></div>
                    `    
                ])



            })
}

requestCharactersAPI()