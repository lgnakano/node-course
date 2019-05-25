const request = require('request')

const url = 'https://api.darksky.net/forecast/5f6372bd5774f2dfce220a88a3c70e4f/37.8267,-122.4233'

request({ url: url }, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.currently)
})