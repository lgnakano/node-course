const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')

// customize yargs version
yargs.version('1.1.0')

// create add command
yargs.command({
    command:'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        },
    },
    handler: function(argv){
        console.log('Adding a new note!')
        console.log('Note title:', argv.title)
        console.log('Note body:', argv.body)
    }
})

// create remove command
yargs.command({
    command:'remove',
    describe: 'Remove a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
    },
    handler: function(argv){
        console.log('Removing the note!')
        console.log('Note Title:', argv.title)
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
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
    },
    handler: function(argv){
        console.log('Reading the note!')
        console.log('Note title:',argv.title)
    }
})

// console.log(yargs.argv)

yargs.parse()
