const request = require('request')

const url = 'https://api.darksky.net/forecast/5f6372bd5774f2dfce220a88a3c70e4f/37.8267,-122.4233'

request({ url: url, json: true }, (error, response) => {
    console.log(response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degress out. There is a ' + response.body.currently.precipProbability + '% chance of rain.')
})

// Geocoding
// Address -> Lat/Long -> Weather

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibGduYWthbm8iLCJhIjoiY2p1NGZkbjF5MHhnODQ0b2JreGE1b3d0YSJ9.w7JC7gDqQcVNQ0zo-E8AyA&limit=1'

request({ url: geocodeURL, json: true }, (error, response) => {
    const latitude = response.body.features[0].center[0]
    const longitude = response.body.features[0].center[1]
    console.log(latitude, longitude)
})