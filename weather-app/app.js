const request = require('request')

const url = 'https://api.darksky.net/forecast/5f6372bd5774f2dfce220a88a3c70e4f/37.8267,-122.4233'

request({ url: url, json: true }, (error, response) => {
    console.log(response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degress out. There is a ' + response.body.currently.precipProbability + '% chance of rain.')
})
