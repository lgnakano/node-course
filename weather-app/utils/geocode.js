const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'
        + encodeURIComponent( address )
        +'.json?access_token=pk.eyJ1IjoibGduYWthbm8iLCJhIjoiY2p1NGZkbjF5MHhnODQ0b2JreGE1b3d0YSJ9.w7JC7gDqQcVNQ0zo-E8AyA&limit=1'

    request({url: url, json: true}, (error, response) => {
        if(error) {
            callback('Unable to connect to location services!', undefined)
        } else if (response.body.features.length === 0) {
            callback('Unable to lind location. Try another search', undefined)
        } else {
            callback(undefined, {
                longitude: response.body.features[0].center[0],
                latitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode;