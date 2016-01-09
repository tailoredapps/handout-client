"use strict"

import co from 'co'
import path from 'path'
import yargs from 'yargs'

import output, {LEVEL_ERROR, LEVEL_OK, outputStyles, outputTitle} from 'output'
import WebsocketClient from 'WebsocketClient'

const pkg = require(path.resolve('package.json'))

outputTitle(pkg)

co(function *() {
    const c = new WebsocketClient({
        url: 'ws://localhost:3300',
        username: 'msmesnik'
    })

    output(`Attempting to connect to ${outputStyles.url(c.opts.url)}`)

    yield c.connect()

    output(`Connected to ${outputStyles.url(c.socket.url)}`, LEVEL_OK)

    yield c.sendCommand({
        app: 'deepsea',
        targets: ['callisto', 'titan'],
        check: false,
        keyFile: '~/.ssh/id_rsa'
    })

}).catch(err => output(err.message, LEVEL_ERROR))