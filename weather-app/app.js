const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')


const address = process.argv[2]

if (!address) {
    return console.log('Must provide location')
}
geocode(address,(error, {longitude, latitude, location}) => {
    if(error) {
        return console.log(error)
    }

    forecast(latitude, longitude, (error, forecastData) => {
        if (error) {
            return console.log('Error', error)
        }

        console.log(location)
        console.log(forecastData)
    })
})


