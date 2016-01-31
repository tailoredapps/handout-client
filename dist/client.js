'use strict';

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jbGllbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRQSxJQUFNLE1BQU0sUUFBUSxpQkFBUixDQUFOOztBQUVOLFlBTnFELFlBTXJELENBQVksR0FBWjs7QUFFQSwwQ0FBRzttQkFDYyxLQUFLLFVBQWEsS0FFM0I7Ozs7Ozt3QkFGa0M7QUFBekIsNEJBQVI7QUFBYTtBQUFhO0FBRTNCLGNBQUksOEJBQW9CO0FBQzVCLG9CQUQ0QjtBQUU1Qiw4QkFGNEI7V0FBcEI7O0FBS1YsOERBQW1DLFFBaEJFLFlBZ0JGLENBQWEsR0FBYixDQUFpQixFQUFFLElBQUYsQ0FBTyxHQUFQLENBQXBEOzs7aUJBRU0sRUFBRSxPQUFGOzs7O0FBRU4sa0RBQXVCLFFBcEJjLFlBb0JkLENBQWEsR0FBYixDQUFpQixFQUFFLE1BQUYsQ0FBUyxHQUFULENBQXhDLFVBcEIyQixRQW9CM0I7OztpQkFFTSxFQUFFLFdBQUYsQ0FBYyxHQUFkOzs7Ozs7OztDQWRMLENBQUgsRUFlRyxLQWZILENBZVM7U0FBTyxzQkFBTyxJQUFJLE9BQUosVUF2QlAsV0F1QkE7Q0FBUCxDQWZUIiwiZmlsZSI6ImNsaWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5pbXBvcnQgY28gZnJvbSAnY28nXG5cbmltcG9ydCBvdXRwdXQsIHtMRVZFTF9FUlJPUiwgTEVWRUxfT0ssIG91dHB1dFN0eWxlcywgb3V0cHV0VGl0bGV9IGZyb20gJ291dHB1dCdcbmltcG9ydCBnZXRPcHRpb25zIGZyb20gJ29wdGlvbnMnXG5pbXBvcnQgV2Vic29ja2V0Q2xpZW50IGZyb20gJ1dlYnNvY2tldENsaWVudCdcblxuY29uc3QgcGtnID0gcmVxdWlyZSgnLi4vcGFja2FnZS5qc29uJylcblxub3V0cHV0VGl0bGUocGtnKVxuXG5jbyhmdW5jdGlvbiAqKCkge1xuICBjb25zdCB7c2VydmVyOiB1cmwsIHVzZXJuYW1lLCAuLi5jbWR9ID0gZ2V0T3B0aW9ucygpXG5cbiAgY29uc3QgYyA9IG5ldyBXZWJzb2NrZXRDbGllbnQoe1xuICAgIHVybCxcbiAgICB1c2VybmFtZVxuICB9KVxuXG4gIG91dHB1dChgQXR0ZW1wdGluZyB0byBjb25uZWN0IHRvICR7b3V0cHV0U3R5bGVzLnVybChjLm9wdHMudXJsKX1gKVxuXG4gIHlpZWxkIGMuY29ubmVjdCgpXG5cbiAgb3V0cHV0KGBDb25uZWN0ZWQgdG8gJHtvdXRwdXRTdHlsZXMudXJsKGMuc29ja2V0LnVybCl9YCwgTEVWRUxfT0spXG5cbiAgeWllbGQgYy5zZW5kQ29tbWFuZChjbWQpXG59KS5jYXRjaChlcnIgPT4gb3V0cHV0KGVyci5tZXNzYWdlLCBMRVZFTF9FUlJPUikpXG4iXX0=