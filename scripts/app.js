const requestCharactersPage1 =  () => {
    const url = `https://rickandmortyapi.com/api/character`

    fetch(url)
        .then(response => response.json())
            .then(json => {

                const containerPrincipal = document.querySelector('.container-principal')

                const containerList = document.querySelector('.container-list')

                const createLI = document.createElement('li')

                containerList.appendChild(createLI)
               

                console.log(createLI)

                json.results.map(results => {
                    createLI.innerHTML+= `
                        <div class="container-character">
                            <div><img src=${results.image}></div
                            <h3>${results.name}</h3>
                            <h2>${results.status}</h2>
                            <h3>${results.species}</h3>
                            <h3>${results.gender}</h3>
                        </div>
                    `
                })
            })
    
}

requestCharactersPage1()