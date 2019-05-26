const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const location = process.argv[2]

if (!location) {
    return console.log('Must provide location')
}
geocode(location,(error, data) => {
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


