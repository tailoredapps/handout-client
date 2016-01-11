"use strict";

var _co = require("co");

var _co2 = _interopRequireDefault(_co);

var _output = require("output");

var _output2 = _interopRequireDefault(_output);

var _options = require("options");

var _options2 = _interopRequireDefault(_options);

var _WebsocketClient = require("WebsocketClient");

var _WebsocketClient2 = _interopRequireDefault(_WebsocketClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

require("babel-polyfill");

var pkg = require('../package.json');

(0, _output.outputTitle)(pkg);

(0, _co2.default)(regeneratorRuntime.mark(function _callee() {
    var _getOptions, url, username, cmd, c;

    return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _getOptions = (0, _options2.default)();
                    url = _getOptions.server;
                    username = _getOptions.username;
                    cmd = _objectWithoutProperties(_getOptions, ["server", "username"]);
                    c = new _WebsocketClient2.default({
                        url: url,
                        username: username
                    });

                    (0, _output2.default)("Attempting to connect to " + _output.outputStyles.url(c.opts.url));

                    _context.next = 8;
                    return c.connect();

                case 8:

                    (0, _output2.default)("Connected to " + _output.outputStyles.url(c.socket.url), _output.LEVEL_OK);

                    _context.next = 11;
                    return c.sendCommand(cmd);

                case 11:
                case "end":
                    return _context.stop();
            }
        }
    }, _callee, this);
})).catch(function (err) {
    return (0, _output2.default)(err.message, _output.LEVEL_ERROR);
});