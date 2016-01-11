"use strict";

var _co = require('co');

var _co2 = _interopRequireDefault(_co);

var _output = require('output');

var _output2 = _interopRequireDefault(_output);

var _options = require('options');

var _options2 = _interopRequireDefault(_options);

var _WebsocketClient = require('WebsocketClient');

var _WebsocketClient2 = _interopRequireDefault(_WebsocketClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

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
                    cmd = _objectWithoutProperties(_getOptions, ['server', 'username']);
                    c = new _WebsocketClient2.default({
                        url: url,
                        username: username
                    });

                    (0, _output2.default)('Attempting to connect to ' + _output.outputStyles.url(c.opts.url));

                    _context.next = 8;
                    return c.connect();

                case 8:

                    (0, _output2.default)('Connected to ' + _output.outputStyles.url(c.socket.url), _output.LEVEL_OK);

                    _context.next = 11;
                    return c.sendCommand(cmd);

                case 11:
                case 'end':
                    return _context.stop();
            }
        }
    }, _callee, this);
})).catch(function (err) {
    return (0, _output2.default)(err.message, _output.LEVEL_ERROR);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jbGllbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUVosSUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUE7O0FBRXRDLFlBTnFELFdBQVcsRUFNcEQsR0FBRyxDQUFDLENBQUE7O0FBRWhCLDBDQUFHO3FCQUNnQixHQUFHLEVBQUUsUUFBUSxFQUFLLEdBQUcsRUFFOUIsQ0FBQzs7Ozs7O2tDQUZpQyx3QkFBWTtBQUFyQyx1QkFBRyxlQUFYLE1BQU07QUFBTyw0QkFBUSxlQUFSLFFBQVE7QUFBSyx1QkFBRztBQUU5QixxQkFBQyxHQUFHLDhCQUFvQjtBQUMxQiwyQkFBRyxFQUFILEdBQUc7QUFDSCxnQ0FBUSxFQUFSLFFBQVE7cUJBQ1gsQ0FBQzs7QUFFRix3RUFBbUMsUUFoQkEsWUFBWSxDQWdCQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBRyxDQUFBOzs7MkJBRTVELENBQUMsQ0FBQyxPQUFPLEVBQUU7Ozs7QUFFakIsNERBQXVCLFFBcEJZLFlBQVksQ0FvQlgsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFVBcEI1QixRQUFRLENBb0JpQyxDQUFBOzs7MkJBRTVELENBQUMsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDOzs7Ozs7OztDQUUzQixFQUFDLENBQUMsS0FBSyxDQUFDLFVBQUEsR0FBRztXQUFJLHNCQUFPLEdBQUcsQ0FBQyxPQUFPLFVBeEJsQixXQUFXLENBd0JxQjtDQUFBLENBQUMsQ0FBQSIsImZpbGUiOiJjbGllbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIlxuXG5pbXBvcnQgY28gZnJvbSAnY28nXG5cbmltcG9ydCBvdXRwdXQsIHtMRVZFTF9FUlJPUiwgTEVWRUxfT0ssIG91dHB1dFN0eWxlcywgb3V0cHV0VGl0bGV9IGZyb20gJ291dHB1dCdcbmltcG9ydCBnZXRPcHRpb25zIGZyb20gJ29wdGlvbnMnXG5pbXBvcnQgV2Vic29ja2V0Q2xpZW50IGZyb20gJ1dlYnNvY2tldENsaWVudCdcblxuY29uc3QgcGtnID0gcmVxdWlyZSgnLi4vcGFja2FnZS5qc29uJylcblxub3V0cHV0VGl0bGUocGtnKVxuXG5jbyhmdW5jdGlvbiAqKCkge1xuICAgIGNvbnN0IHtzZXJ2ZXI6IHVybCwgdXNlcm5hbWUsIC4uLmNtZH0gPSBnZXRPcHRpb25zKClcblxuICAgIGNvbnN0IGMgPSBuZXcgV2Vic29ja2V0Q2xpZW50KHtcbiAgICAgICAgdXJsLFxuICAgICAgICB1c2VybmFtZVxuICAgIH0pXG5cbiAgICBvdXRwdXQoYEF0dGVtcHRpbmcgdG8gY29ubmVjdCB0byAke291dHB1dFN0eWxlcy51cmwoYy5vcHRzLnVybCl9YClcblxuICAgIHlpZWxkIGMuY29ubmVjdCgpXG5cbiAgICBvdXRwdXQoYENvbm5lY3RlZCB0byAke291dHB1dFN0eWxlcy51cmwoYy5zb2NrZXQudXJsKX1gLCBMRVZFTF9PSylcblxuICAgIHlpZWxkIGMuc2VuZENvbW1hbmQoY21kKVxuXG59KS5jYXRjaChlcnIgPT4gb3V0cHV0KGVyci5tZXNzYWdlLCBMRVZFTF9FUlJPUikpIl19