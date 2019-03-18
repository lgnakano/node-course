const fs = require('fs')
/* const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday'
}

const bookJSON = JSON.stringify(book)
fs.writeFileSync('1-json.json', bookJSON)
*/

const dataBuffer = fs.readFileSync('1-json.json')
console.log(dataBuffer)
const dataJSON = dataBuffer.toString()
console.log(dataJSON)

const parseData = JSON.parse(dataJSON)
parseData.name='Luis'
parseData.age='49'
console.log(parseData)

const newDataJSON = JSON.stringify(parseData)
fs.writeFileSync('1-json.json', newDataJSON)

