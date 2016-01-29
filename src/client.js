'use strict'

import co from 'co'

import output, {LEVEL_ERROR, LEVEL_OK, outputStyles, outputTitle} from 'output'
import getOptions from 'options'
import WebsocketClient from 'WebsocketClient'

const pkg = require('../package.json')

outputTitle(pkg)

co(function *() {
  const {server: url, username, ...cmd} = getOptions()

  const c = new WebsocketClient({
    url, username
  })

  output(`Attempting to connect to ${outputStyles.url(c.opts.url)}`)

  yield c.connect()

  output(`Connected to ${outputStyles.url(c.socket.url)}`, LEVEL_OK)

  yield c.sendCommand(cmd)
}).catch(err => output(err.message, LEVEL_ERROR))
