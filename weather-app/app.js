const geocode = require('./utils/geocode')

// const url = 'https://api.darksky.net/forecast/5f6372bd5774f2dfce220a88a3c70e4f/37.8267,-122.4233'

// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to weather service!')
//     } else if (response.body.error) {
//         console.log('Unable to find location')
//     } else {
//         console.log(response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degress out. There is a ' + response.body.currently.precipProbability + '% chance of rain.')   
//     }
// })

// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibGduYWthbm8iLCJhIjoiY2p1NGZkbjF5MHhnODQ0b2JreGE1b3d0YSJ9.w7JC7gDqQcVNQ0zo-E8AyA&limit=1'

// request({ url: geocodeURL, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to location services!')
//     } else if (response.body.features.length === 0) {
//         console.log('Unable to find location. Try another search.')
//     } else {
//         const longitude = response.body.features[0].center[0] 
//         const latitude = response.body.features[0].center[1]

//         console.log(latitude, longitude)
//     }
// })



geocode("Tampa",(error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})