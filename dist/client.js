'use strict';

var _output = require('output');

var _output2 = _interopRequireDefault(_output);

var _options = require('options');

var _options2 = _interopRequireDefault(_options);

var _WebsocketClient = require('WebsocketClient');

var _WebsocketClient2 = _interopRequireDefault(_WebsocketClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var pkg = require('../package.json');

try {
  (function () {
    (0, _output.outputTitle)(pkg);

    var _getOptions = (0, _options2.default)();

    var url = _getOptions.server;
    var username = _getOptions.username;

    var cmd = _objectWithoutProperties(_getOptions, ['server', 'username']);

    var c = new _WebsocketClient2.default({
      url: url, username: username
    });

    (0, _output2.default)('Attempting to connect to ' + _output.outputStyles.url(c.opts.url));

    c.connect().then(function () {
      (0, _output2.default)('Connected to ' + _output.outputStyles.url(c.socket.url), _output.LEVEL_OK);

      c.sendCommand(cmd);
    }).catch(function (err) {
      return (0, _output2.default)(err.message, _output.LEVEL_ERROR);
    });
  })();
} catch (e) {
  // catches missing command error for instance
  (0, _output2.default)(e.message, _output.LEVEL_ERROR);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jbGllbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1BLElBQU0sTUFBTSxRQUFRLGlCQUFSLENBQU47O0FBRU4sSUFBSTs7QUFDRixnQkFQbUQsWUFPbkQsQ0FBWSxHQUFaOztzQkFFd0M7O1FBQXpCLGtCQUFSO1FBQWE7O1FBQWE7O0FBRWpDLFFBQU0sSUFBSSw4QkFBb0I7QUFDNUIsY0FENEIsRUFDdkIsa0JBRHVCO0tBQXBCLENBQUo7O0FBSU4sd0RBQW1DLFFBZkUsWUFlRixDQUFhLEdBQWIsQ0FBaUIsRUFBRSxJQUFGLENBQU8sR0FBUCxDQUFwRDs7QUFFQSxNQUFFLE9BQUYsR0FDRyxJQURILENBQ1EsWUFBTTtBQUNWLDhDQUF1QixRQW5CVSxZQW1CVixDQUFhLEdBQWIsQ0FBaUIsRUFBRSxNQUFGLENBQVMsR0FBVCxDQUF4QyxVQW5CdUIsUUFtQnZCLEVBRFU7O0FBR1YsUUFBRSxXQUFGLENBQWMsR0FBZCxFQUhVO0tBQU4sQ0FEUixDQU1HLEtBTkgsQ0FNUzthQUFPLHNCQUFPLElBQUksT0FBSixVQXZCVCxXQXVCRTtLQUFQLENBTlQ7T0FYRTtDQUFKLENBa0JFLE9BQU8sQ0FBUCxFQUFVOztBQUNWLHdCQUFPLEVBQUUsT0FBRixVQXpCTyxXQXlCZCxFQURVO0NBQVYiLCJmaWxlIjoiY2xpZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbmltcG9ydCBvdXRwdXQsIHtMRVZFTF9FUlJPUiwgTEVWRUxfT0ssIG91dHB1dFN0eWxlcywgb3V0cHV0VGl0bGV9IGZyb20gJ291dHB1dCdcbmltcG9ydCBnZXRPcHRpb25zIGZyb20gJ29wdGlvbnMnXG5pbXBvcnQgV2Vic29ja2V0Q2xpZW50IGZyb20gJ1dlYnNvY2tldENsaWVudCdcblxuY29uc3QgcGtnID0gcmVxdWlyZSgnLi4vcGFja2FnZS5qc29uJylcblxudHJ5IHtcbiAgb3V0cHV0VGl0bGUocGtnKVxuXG4gIGNvbnN0IHtzZXJ2ZXI6IHVybCwgdXNlcm5hbWUsIC4uLmNtZH0gPSBnZXRPcHRpb25zKClcblxuICBjb25zdCBjID0gbmV3IFdlYnNvY2tldENsaWVudCh7XG4gICAgdXJsLCB1c2VybmFtZVxuICB9KVxuXG4gIG91dHB1dChgQXR0ZW1wdGluZyB0byBjb25uZWN0IHRvICR7b3V0cHV0U3R5bGVzLnVybChjLm9wdHMudXJsKX1gKVxuXG4gIGMuY29ubmVjdCgpXG4gICAgLnRoZW4oKCkgPT4ge1xuICAgICAgb3V0cHV0KGBDb25uZWN0ZWQgdG8gJHtvdXRwdXRTdHlsZXMudXJsKGMuc29ja2V0LnVybCl9YCwgTEVWRUxfT0spXG5cbiAgICAgIGMuc2VuZENvbW1hbmQoY21kKVxuICAgIH0pXG4gICAgLmNhdGNoKGVyciA9PiBvdXRwdXQoZXJyLm1lc3NhZ2UsIExFVkVMX0VSUk9SKSlcbn0gY2F0Y2ggKGUpIHsgLy8gY2F0Y2hlcyBtaXNzaW5nIGNvbW1hbmQgZXJyb3IgZm9yIGluc3RhbmNlXG4gIG91dHB1dChlLm1lc3NhZ2UsIExFVkVMX0VSUk9SKVxufVxuIl19