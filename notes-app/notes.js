//console.log('Starting notes.js')

const fs = require ('fs')
const chalk = require('chalk')

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes-data.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch(e){
        return []
    }
}

const saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes))
}

const addNote = (title, body) => {
    const notes = loadNotes()
    console.log(notes)
    const note = {
        title,
        body
    }
    
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
        notes.push(note)
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    } else {
        console.log(chalk.red.inverse('Note title taken!'))
    }
}
const listNotes = () => {

    console.log(chalk.white.inverse('Your notes'))
    const allNotes = loadNotes() 
    allNotes.forEach((element) => {
        console.log(chalk.green.inverse('Title'),element.title)
        console.log(chalk.green('Body'), element.body)
    });
}

var getNote = (title) => {
    const allNotes = loadNotes()
    console.log(allNotes)
    var myNote = allNotes.find((note) => note.title===title)
    console.log(myNote)
    if(myNote.length === 0) {
        console.log(chalk.red.inverse('Note not found!'))
    } else {
        console.log(chalk.white.inverse('Your note'))
        console.log(chalk.green.inverse('Title'),myNote.title)
        console.log(chalk.green('Body'), myNote.body)
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const remainingNotes = notes.filter((note) => note.title!==title)
    if(remainingNotes.length < notes.length) {
        console.log(chalk.green.inverse('Note removed'))
        saveNotes(remainingNotes)
    } else {
        console.log(chalk.red.inverse('Note tile not present!'))
    }
}

module.exports = {
    listNotes,
    addNote,
    getNote,
    removeNote
}