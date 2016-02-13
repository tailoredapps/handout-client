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

    if (cmd.debug) {
      (0, _output2.default)('Command data: ' + JSON.stringify(cmd), _output.LEVEL_DEBUG);
    }

    var c = new _WebsocketClient2.default({
      url: url, username: username
    });

    (0, _output2.default)('Connecting to ' + _output.outputStyles.url(c.opts.url));

    c.connect().then(function () {
      (0, _output2.default)('Connected to ' + _output.outputStyles.url(c.socket.url), _output.LEVEL_OK);

      c.sendCommand(cmd);
    }).catch(function (err) {
      (0, _output2.default)(err.message, _output.LEVEL_ERROR);

      if (cmd.debug) {
        (0, _output2.default)(err.stack, _output.LEVEL_DEBUG);
      }
    });
  })();
} catch (e) {
  // catches missing command error for instance
  // @todo Might want to remove this code duplication. Ain't exactly pretty.
  (0, _output2.default)(e.message, _output.LEVEL_ERROR);

  if (process.argv.includes('--debug')) {
    (0, _output2.default)(e.stack, _output.LEVEL_DEBUG);
  }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jbGllbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1BLElBQU0sTUFBTSxRQUFRLGlCQUFSLENBQU47O0FBRU4sSUFBSTs7QUFDRixnQkFQaUUsWUFPakUsQ0FBWSxHQUFaOztzQkFFMEM7O1FBQTFCLGtCQUFSO1FBQWE7O1FBQWE7O0FBRWxDLFFBQUksSUFBSSxLQUFKLEVBQVc7QUFDYiwrQ0FBd0IsS0FBSyxTQUFMLENBQWUsR0FBZixDQUF4QixVQVphLFdBWWIsRUFEYTtLQUFmOztBQUlBLFFBQU0sSUFBSSw4QkFBb0I7QUFDNUIsY0FENEIsRUFDdkIsa0JBRHVCO0tBQXBCLENBQUo7O0FBSU4sNkNBQXdCLFFBbkIyQixZQW1CM0IsQ0FBYSxHQUFiLENBQWlCLEVBQUUsSUFBRixDQUFPLEdBQVAsQ0FBekM7O0FBRUEsTUFBRSxPQUFGLEdBQ0csSUFESCxDQUNRLFlBQU07QUFDViw4Q0FBdUIsUUF2QndCLFlBdUJ4QixDQUFhLEdBQWIsQ0FBaUIsRUFBRSxNQUFGLENBQVMsR0FBVCxDQUF4QyxVQXZCcUMsUUF1QnJDLEVBRFU7O0FBR1YsUUFBRSxXQUFGLENBQWMsR0FBZCxFQUhVO0tBQU4sQ0FEUixDQU1HLEtBTkgsQ0FNUyxlQUFPO0FBQ1osNEJBQU8sSUFBSSxPQUFKLFVBNUJpQixXQTRCeEIsRUFEWTs7QUFHWixVQUFJLElBQUksS0FBSixFQUFXO0FBQ2IsOEJBQU8sSUFBSSxLQUFKLFVBL0JFLFdBK0JULEVBRGE7T0FBZjtLQUhLLENBTlQ7T0FmRTtDQUFKLENBNEJFLE9BQU8sQ0FBUCxFQUFVOzs7QUFFVix3QkFBTyxFQUFFLE9BQUYsVUFwQ3FCLFdBb0M1QixFQUZVOztBQUlWLE1BQUksUUFBUSxJQUFSLENBQWEsUUFBYixDQUFzQixTQUF0QixDQUFKLEVBQXNDO0FBQ3BDLDBCQUFPLEVBQUUsS0FBRixVQXZDTSxXQXVDYixFQURvQztHQUF0QztDQUpBIiwiZmlsZSI6ImNsaWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5pbXBvcnQgb3V0cHV0LCB7IExFVkVMX0RFQlVHLCBMRVZFTF9FUlJPUiwgTEVWRUxfT0ssIG91dHB1dFN0eWxlcywgb3V0cHV0VGl0bGUgfSBmcm9tICdvdXRwdXQnXG5pbXBvcnQgZ2V0T3B0aW9ucyBmcm9tICdvcHRpb25zJ1xuaW1wb3J0IFdlYnNvY2tldENsaWVudCBmcm9tICdXZWJzb2NrZXRDbGllbnQnXG5cbmNvbnN0IHBrZyA9IHJlcXVpcmUoJy4uL3BhY2thZ2UuanNvbicpXG5cbnRyeSB7XG4gIG91dHB1dFRpdGxlKHBrZylcblxuICBjb25zdCB7IHNlcnZlcjogdXJsLCB1c2VybmFtZSwgLi4uY21kIH0gPSBnZXRPcHRpb25zKClcblxuICBpZiAoY21kLmRlYnVnKSB7XG4gICAgb3V0cHV0KGBDb21tYW5kIGRhdGE6ICR7SlNPTi5zdHJpbmdpZnkoY21kKX1gLCBMRVZFTF9ERUJVRylcbiAgfVxuXG4gIGNvbnN0IGMgPSBuZXcgV2Vic29ja2V0Q2xpZW50KHtcbiAgICB1cmwsIHVzZXJuYW1lXG4gIH0pXG5cbiAgb3V0cHV0KGBDb25uZWN0aW5nIHRvICR7b3V0cHV0U3R5bGVzLnVybChjLm9wdHMudXJsKX1gKVxuXG4gIGMuY29ubmVjdCgpXG4gICAgLnRoZW4oKCkgPT4ge1xuICAgICAgb3V0cHV0KGBDb25uZWN0ZWQgdG8gJHtvdXRwdXRTdHlsZXMudXJsKGMuc29ja2V0LnVybCl9YCwgTEVWRUxfT0spXG5cbiAgICAgIGMuc2VuZENvbW1hbmQoY21kKVxuICAgIH0pXG4gICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICBvdXRwdXQoZXJyLm1lc3NhZ2UsIExFVkVMX0VSUk9SKVxuXG4gICAgICBpZiAoY21kLmRlYnVnKSB7XG4gICAgICAgIG91dHB1dChlcnIuc3RhY2ssIExFVkVMX0RFQlVHKVxuICAgICAgfVxuICAgIH0pXG59IGNhdGNoIChlKSB7IC8vIGNhdGNoZXMgbWlzc2luZyBjb21tYW5kIGVycm9yIGZvciBpbnN0YW5jZVxuICAvLyBAdG9kbyBNaWdodCB3YW50IHRvIHJlbW92ZSB0aGlzIGNvZGUgZHVwbGljYXRpb24uIEFpbid0IGV4YWN0bHkgcHJldHR5LlxuICBvdXRwdXQoZS5tZXNzYWdlLCBMRVZFTF9FUlJPUilcblxuICBpZiAocHJvY2Vzcy5hcmd2LmluY2x1ZGVzKCctLWRlYnVnJykpIHtcbiAgICBvdXRwdXQoZS5zdGFjaywgTEVWRUxfREVCVUcpXG4gIH1cbn1cbiJdfQ==