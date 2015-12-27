"use strict"

import co from 'co'
import yargs from 'yargs'

import Command from 'Command'
import WebsocketClient from 'WebsocketClient'

co(function *() {
    const c = new WebsocketClient({
        url: 'ws://localhost:3300',
        username: 'msmesnik1'
    })

    console.log(`Attempting to connect to ${c.opts.url}`)

    yield c.connect()

    console.log(`Connected to ${c.socket.url}`)

    yield c.sendCommand(new Command({
        app: 'deepsea',
        targets: ['callisto', 'titan'],
        check: false,
        keyFile: '~/.ssh/id_rsa'
    }))

}).catch(err => console.error(`Error: ${err.message}`))