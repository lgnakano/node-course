const request = require('request')



const forecast = (longitude, latitude, callback) => {
    const url = 'https://api.darksky.net/forecast/5f6372bd5774f2dfce220a88a3c70e4f/'
        +latitude+','+longitude
    request({url: url, json: true}, (error, response) => {
        if (error) {
            console.log('Unable to connect to weather service!')
        } else if (response.body.error) {
            console.log('Unable to find location')
        } else {
            console.log(response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degress out. There is a ' + response.body.currently.precipProbability + '% chance of rain.')
        }
    })
}



module.exports = forecast