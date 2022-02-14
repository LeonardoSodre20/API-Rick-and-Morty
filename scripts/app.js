const divNames = document.querySelector('.container-main')

const requestCharactersAPI = () => {

    const url = id =>`https://rickandmortyapi.com/api/character/${id}`
    
    const charactersPromises = []

    for(let i = 1; i <= 200; i++ ){
        charactersPromises.push(fetch(url(i)).then(response =>response.json()))
    }

    Promise.all(charactersPromises)
        .then(characters => {
            console.log(characters)

            const spanCharacters = characters.reduce((accumulator, character) => {
                accumulator+=`<div class="container-character">
                <div>${character.name}</div>
                <div><img src="${character.image}"></div>
                </div>`

                return accumulator
            },'' )

            console.log(spanCharacters)

            divNames.innerHTML = spanCharacters
        })
}

requestCharactersAPI()