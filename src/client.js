'use strict'

import output, { LEVEL_DEBUG, LEVEL_ERROR, LEVEL_OK, outputStyles, outputTitle } from 'output'
import getOptions from 'options'
import WebsocketClient from 'WebsocketClient'

const pkg = require('../package.json')

try {
  outputTitle(pkg)

  const { server: url, username, ...cmd } = getOptions()

  if (cmd.debug) {
    output(`Command data: ${JSON.stringify(cmd)}`, LEVEL_DEBUG)
  }

  const c = new WebsocketClient({
    url, username
  })

  output(`Connecting to ${outputStyles.url(c.opts.url)}`)

  c.connect()
    .then(() => {
      output(`Connected to ${outputStyles.url(c.socket.url)}`, LEVEL_OK)

      c.sendCommand(cmd)
    })
    .catch(err => {
      output(err.message, LEVEL_ERROR)

      if (cmd.debug) {
        output(err.stack, LEVEL_DEBUG)
      }
    })
} catch (e) { // catches missing command error for instance
  // @todo Might want to remove this code duplication. Ain't exactly pretty.
  output(e.message, LEVEL_ERROR)

  if (process.argv.includes('--debug')) {
    output(e.stack, LEVEL_DEBUG)
  }
}
