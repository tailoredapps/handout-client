"use strict"

import co from 'co'
import yargs from 'yargs'

import output from 'output'
import WebsocketClient from 'WebsocketClient'

co(function *() {
    const c = new WebsocketClient({
        url: 'ws://localhost:3300',
        username: 'msmesnik'
    })

    output(`Attempting to connect to ${c.opts.url}`)

    yield c.connect()

    output(`Connected to ${c.socket.url}`)

    yield c.sendCommand({
        app: 'deepsea',
        targets: ['callisto', 'titan'],
        check: false,
        keyFile: '~/.ssh/id_rsa'
    })

}).catch(err => console.error(`Error: ${err.message}`))