const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

geocode("Tampa",(error, data) => {
    if(error) {
        return console.log(error)
    }

    forecast(data.longitude, data.latitude, (error, forecastData) => {
        if (error) {
            return console.log('Error', error)
        }

        console.log(data.location)
        console.log(forecastData)
    })
})

