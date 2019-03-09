var fs=require('fs')

fs.writeFileSync('notes.txt','My name is bob.')

fs.appendFileSync('notes.txt',' This is an appended line.')