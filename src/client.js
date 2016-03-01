'use strict'

import { MSG_LEVEL_DEBUG, MSG_LEVEL_ERROR, MSG_LEVEL_OK } from 'handout-constants'

import output, { outputStyles, outputTitle } from 'output'
import getOptions from 'options'
import WebsocketClient from 'WebsocketClient'

const pkg = require('../package.json')

try {
  outputTitle(pkg)

  const { server: url, username, ...cmd } = getOptions()

  if (cmd.debug) {
    output(`Command data: ${JSON.stringify(cmd)}`, MSG_LEVEL_DEBUG)
  }

  const c = new WebsocketClient({
    url, username
  })

  output(`Connecting to ${outputStyles.url(c.opts.url)}`)

  c.connect()
    .then(() => {
      output(`Connected to ${outputStyles.url(c.socket.url)}`, MSG_LEVEL_OK)

      c.sendCommand(cmd)
    })
    .catch(err => {
      output(err.message, MSG_LEVEL_ERROR)

      if (cmd.debug) {
        output(err.stack, MSG_LEVEL_DEBUG)
      }
    })
} catch (e) { // catches missing command error for instance
  // @todo Might want to remove this code duplication. Ain't exactly pretty.
  output(e.message, MSG_LEVEL_ERROR)

  if (process.argv.includes('--debug')) {
    output(e.stack, MSG_LEVEL_DEBUG)
  }
}
