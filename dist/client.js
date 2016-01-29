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
            url: url, username: username
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jbGllbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUVosSUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUE7O0FBRXRDLHlCQUFZLEdBQUcsQ0FBQyxDQUFBOztBQUVoQiwwQ0FBRzttQkFDYyxHQUFHLEVBQUUsUUFBUSxFQUFLLEdBQUcsRUFFOUIsQ0FBQzs7Ozs7O3dCQUZpQyx3QkFBWTtBQUFyQyxhQUFHLGVBQVgsTUFBTTtBQUFPLGtCQUFRLGVBQVIsUUFBUTtBQUFLLGFBQUc7QUFFOUIsV0FBQyxHQUFHLDhCQUFvQjtBQUM1QixlQUFHLEVBQUgsR0FBRyxFQUFFLFFBQVEsRUFBUixRQUFRO1dBQ2QsQ0FBQzs7QUFFRiw4REFBbUMscUJBQWEsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUcsQ0FBQTs7O2lCQUU1RCxDQUFDLENBQUMsT0FBTyxFQUFFOzs7O0FBRWpCLGtEQUF1QixxQkFBYSxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsbUJBQWEsQ0FBQTs7O2lCQUU1RCxDQUFDLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQzs7Ozs7Ozs7Q0FDekIsRUFBQyxDQUFDLEtBQUssQ0FBQyxVQUFBLEdBQUc7U0FBSSxzQkFBTyxHQUFHLENBQUMsT0FBTyxzQkFBYztDQUFBLENBQUMsQ0FBQSIsImZpbGUiOiJjbGllbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxuaW1wb3J0IGNvIGZyb20gJ2NvJ1xuXG5pbXBvcnQgb3V0cHV0LCB7TEVWRUxfRVJST1IsIExFVkVMX09LLCBvdXRwdXRTdHlsZXMsIG91dHB1dFRpdGxlfSBmcm9tICdvdXRwdXQnXG5pbXBvcnQgZ2V0T3B0aW9ucyBmcm9tICdvcHRpb25zJ1xuaW1wb3J0IFdlYnNvY2tldENsaWVudCBmcm9tICdXZWJzb2NrZXRDbGllbnQnXG5cbmNvbnN0IHBrZyA9IHJlcXVpcmUoJy4uL3BhY2thZ2UuanNvbicpXG5cbm91dHB1dFRpdGxlKHBrZylcblxuY28oZnVuY3Rpb24gKigpIHtcbiAgY29uc3Qge3NlcnZlcjogdXJsLCB1c2VybmFtZSwgLi4uY21kfSA9IGdldE9wdGlvbnMoKVxuXG4gIGNvbnN0IGMgPSBuZXcgV2Vic29ja2V0Q2xpZW50KHtcbiAgICB1cmwsIHVzZXJuYW1lXG4gIH0pXG5cbiAgb3V0cHV0KGBBdHRlbXB0aW5nIHRvIGNvbm5lY3QgdG8gJHtvdXRwdXRTdHlsZXMudXJsKGMub3B0cy51cmwpfWApXG5cbiAgeWllbGQgYy5jb25uZWN0KClcblxuICBvdXRwdXQoYENvbm5lY3RlZCB0byAke291dHB1dFN0eWxlcy51cmwoYy5zb2NrZXQudXJsKX1gLCBMRVZFTF9PSylcblxuICB5aWVsZCBjLnNlbmRDb21tYW5kKGNtZClcbn0pLmNhdGNoKGVyciA9PiBvdXRwdXQoZXJyLm1lc3NhZ2UsIExFVkVMX0VSUk9SKSlcbiJdfQ==