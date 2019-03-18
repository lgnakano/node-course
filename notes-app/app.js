const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')

// customize yargs version
yargs.version('1.1.0')

// create add command
yargs.command({
    command:'add',
    describe: 'Add a new note',
    handler: function(){
        console.log('Adding a new note!')
    }
})

// create remove command
yargs.command({
    command:'remove',
    describe: 'Remove a new note',
    handler: function(){
        console.log('Removing the note!')
    }
})

// create list command
yargs.command({
    command:'list',
    describe: 'List all note',
    handler: function(){
        console.log('Listing all notes!')
    }
})

// create read command
yargs.command({
    command:'read',
    describe: 'Reading the note',
    handler: function(){
        console.log('Reading the note!')
    }
})


// add, remove, read, list
console.log(yargs.argv)
