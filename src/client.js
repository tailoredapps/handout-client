'use strict'

import output, { LEVEL_DEBUG, LEVEL_ERROR, LEVEL_OK, outputStyles, outputTitle } from 'output'
import getOptions from 'options'
import WebsocketClient from 'WebsocketClient'

const pkg = require('../package.json')

try {
  outputTitle(pkg)

  const {server: url, username, ...cmd} = getOptions()

  const c = new WebsocketClient({
    url, username
  })

  output(`Attempting to connect to ${outputStyles.url(c.opts.url)}`)

  c.connect()
    .then(() => {
      output(`Connected to ${outputStyles.url(c.socket.url)}`, LEVEL_OK)

      if (cmd.debug) {
        output(`Command data: ${JSON.stringify(cmd)}`, LEVEL_DEBUG)
      }

      c.sendCommand(cmd)
    })
    .catch(err => output(err.message, LEVEL_ERROR))
} catch (e) { // catches missing command error for instance
  output(e.message, LEVEL_ERROR)
}
