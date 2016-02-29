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

      if (cmd.debug) {
        (0, _output2.default)('Command data: ' + JSON.stringify(cmd), _output.LEVEL_DEBUG);
      }

      c.sendCommand(cmd);
    }).catch(function (err) {
      return (0, _output2.default)(err.message, _output.LEVEL_ERROR);
    });
  })();
} catch (e) {
  // catches missing command error for instance
  (0, _output2.default)(e.message, _output.LEVEL_ERROR);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jbGllbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1BLElBQU0sTUFBTSxRQUFRLGlCQUFSLENBQU47O0FBRU4sSUFBSTs7QUFDRixnQkFQaUUsWUFPakUsQ0FBWSxHQUFaOztzQkFFd0M7O1FBQXpCLGtCQUFSO1FBQWE7O1FBQWE7O0FBRWpDLFFBQU0sSUFBSSw4QkFBb0I7QUFDNUIsY0FENEIsRUFDdkIsa0JBRHVCO0tBQXBCLENBQUo7O0FBSU4sd0RBQW1DLFFBZmdCLFlBZWhCLENBQWEsR0FBYixDQUFpQixFQUFFLElBQUYsQ0FBTyxHQUFQLENBQXBEOztBQUVBLE1BQUUsT0FBRixHQUNHLElBREgsQ0FDUSxZQUFNO0FBQ1YsOENBQXVCLFFBbkJ3QixZQW1CeEIsQ0FBYSxHQUFiLENBQWlCLEVBQUUsTUFBRixDQUFTLEdBQVQsQ0FBeEMsVUFuQnFDLFFBbUJyQyxFQURVOztBQUdWLFVBQUksSUFBSSxLQUFKLEVBQVc7QUFDYixpREFBd0IsS0FBSyxTQUFMLENBQWUsR0FBZixDQUF4QixVQXRCUyxXQXNCVCxFQURhO09BQWY7O0FBSUEsUUFBRSxXQUFGLENBQWMsR0FBZCxFQVBVO0tBQU4sQ0FEUixDQVVHLEtBVkgsQ0FVUzthQUFPLHNCQUFPLElBQUksT0FBSixVQTNCSyxXQTJCWjtLQUFQLENBVlQ7T0FYRTtDQUFKLENBc0JFLE9BQU8sQ0FBUCxFQUFVOztBQUNWLHdCQUFPLEVBQUUsT0FBRixVQTdCcUIsV0E2QjVCLEVBRFU7Q0FBViIsImZpbGUiOiJjbGllbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxuaW1wb3J0IG91dHB1dCwgeyBMRVZFTF9ERUJVRywgTEVWRUxfRVJST1IsIExFVkVMX09LLCBvdXRwdXRTdHlsZXMsIG91dHB1dFRpdGxlIH0gZnJvbSAnb3V0cHV0J1xuaW1wb3J0IGdldE9wdGlvbnMgZnJvbSAnb3B0aW9ucydcbmltcG9ydCBXZWJzb2NrZXRDbGllbnQgZnJvbSAnV2Vic29ja2V0Q2xpZW50J1xuXG5jb25zdCBwa2cgPSByZXF1aXJlKCcuLi9wYWNrYWdlLmpzb24nKVxuXG50cnkge1xuICBvdXRwdXRUaXRsZShwa2cpXG5cbiAgY29uc3Qge3NlcnZlcjogdXJsLCB1c2VybmFtZSwgLi4uY21kfSA9IGdldE9wdGlvbnMoKVxuXG4gIGNvbnN0IGMgPSBuZXcgV2Vic29ja2V0Q2xpZW50KHtcbiAgICB1cmwsIHVzZXJuYW1lXG4gIH0pXG5cbiAgb3V0cHV0KGBBdHRlbXB0aW5nIHRvIGNvbm5lY3QgdG8gJHtvdXRwdXRTdHlsZXMudXJsKGMub3B0cy51cmwpfWApXG5cbiAgYy5jb25uZWN0KClcbiAgICAudGhlbigoKSA9PiB7XG4gICAgICBvdXRwdXQoYENvbm5lY3RlZCB0byAke291dHB1dFN0eWxlcy51cmwoYy5zb2NrZXQudXJsKX1gLCBMRVZFTF9PSylcblxuICAgICAgaWYgKGNtZC5kZWJ1Zykge1xuICAgICAgICBvdXRwdXQoYENvbW1hbmQgZGF0YTogJHtKU09OLnN0cmluZ2lmeShjbWQpfWAsIExFVkVMX0RFQlVHKVxuICAgICAgfVxuXG4gICAgICBjLnNlbmRDb21tYW5kKGNtZClcbiAgICB9KVxuICAgIC5jYXRjaChlcnIgPT4gb3V0cHV0KGVyci5tZXNzYWdlLCBMRVZFTF9FUlJPUikpXG59IGNhdGNoIChlKSB7IC8vIGNhdGNoZXMgbWlzc2luZyBjb21tYW5kIGVycm9yIGZvciBpbnN0YW5jZVxuICBvdXRwdXQoZS5tZXNzYWdlLCBMRVZFTF9FUlJPUilcbn1cbiJdfQ==