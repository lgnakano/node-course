console.log('Client side javascript file is loaded!')




const weatherForm = document.querySelector('form')

const search = document.querySelector('input')

const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value

    const url = 'http://localhost:3000/weather?address=' + location;

    fetch(url)
        .then((response) => {
            response.json()
                .then((data) => {
                    if (data.error) {
                        messageOne.textContent = data.error
                        messageTwo.textContent =''
                        console.log(data.error)
                    } else {
                        messageOne.textContent = ''
                        messageTwo.textContent = data.location+': '+data.forecast
                        console.log(data.location)
                        console.log(data.forecast)
                    }

                })
        })

})