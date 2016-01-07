"use strict"

import co from 'co'
import path from 'path'
import yargs from 'yargs'

import output, {outputOk, outputTitle, outputStyles} from 'output'
import WebsocketClient from 'WebsocketClient'

const pkg = require(path.resolve('package.json'))

outputTitle(pkg.version)

co(function *() {
    const c = new WebsocketClient({
        url: 'ws://localhost:3300',
        username: 'msmesnik'
    })

    output(`Attempting to connect to ${outputStyles.url(c.opts.url)}`)

    yield c.connect()

    outputOk(`Connected to ${outputStyles.url(c.socket.url)}`)

    yield c.sendCommand({
        app: 'deepsea',
        targets: ['callisto', 'titan'],
        check: false,
        keyFile: '~/.ssh/id_rsa'
    })

}).catch(err => output({error: true, message: err.message}))