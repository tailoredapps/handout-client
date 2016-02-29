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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jbGllbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNWixJQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQTs7QUFFdEMsSUFBSTs7QUFDRiw2QkFBWSxHQUFHLENBQUMsQ0FBQTs7c0JBRTBCLHdCQUFZOztRQUF0QyxHQUFHLGVBQVgsTUFBTTtRQUFPLFFBQVEsZUFBUixRQUFROztRQUFLLEdBQUc7O0FBRXJDLFFBQUksR0FBRyxDQUFDLEtBQUssRUFBRTtBQUNiLCtDQUF3QixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxzQkFBZ0IsQ0FBQTtLQUM1RDs7QUFFRCxRQUFNLENBQUMsR0FBRyw4QkFBb0I7QUFDNUIsU0FBRyxFQUFILEdBQUcsRUFBRSxRQUFRLEVBQVIsUUFBUTtLQUNkLENBQUMsQ0FBQTs7QUFFRiw2Q0FBd0IscUJBQWEsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUcsQ0FBQTs7QUFFdkQsS0FBQyxDQUFDLE9BQU8sRUFBRSxDQUNSLElBQUksQ0FBQyxZQUFNO0FBQ1YsOENBQXVCLHFCQUFhLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxtQkFBYSxDQUFBOztBQUVsRSxPQUFDLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0tBQ25CLENBQUMsQ0FDRCxLQUFLLENBQUMsVUFBQSxHQUFHLEVBQUk7QUFDWiw0QkFBTyxHQUFHLENBQUMsT0FBTyxzQkFBYyxDQUFBOztBQUVoQyxVQUFJLEdBQUcsQ0FBQyxLQUFLLEVBQUU7QUFDYiw4QkFBTyxHQUFHLENBQUMsS0FBSyxzQkFBYyxDQUFBO09BQy9CO0tBQ0YsQ0FBQyxDQUFBOztDQUNMLENBQUMsT0FBTyxDQUFDLEVBQUU7OztBQUVWLHdCQUFPLENBQUMsQ0FBQyxPQUFPLHNCQUFjLENBQUE7O0FBRTlCLE1BQUksT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEVBQUU7QUFDcEMsMEJBQU8sQ0FBQyxDQUFDLEtBQUssc0JBQWMsQ0FBQTtHQUM3QjtDQUNGIiwiZmlsZSI6ImNsaWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5pbXBvcnQgb3V0cHV0LCB7IExFVkVMX0RFQlVHLCBMRVZFTF9FUlJPUiwgTEVWRUxfT0ssIG91dHB1dFN0eWxlcywgb3V0cHV0VGl0bGUgfSBmcm9tICdvdXRwdXQnXG5pbXBvcnQgZ2V0T3B0aW9ucyBmcm9tICdvcHRpb25zJ1xuaW1wb3J0IFdlYnNvY2tldENsaWVudCBmcm9tICdXZWJzb2NrZXRDbGllbnQnXG5cbmNvbnN0IHBrZyA9IHJlcXVpcmUoJy4uL3BhY2thZ2UuanNvbicpXG5cbnRyeSB7XG4gIG91dHB1dFRpdGxlKHBrZylcblxuICBjb25zdCB7IHNlcnZlcjogdXJsLCB1c2VybmFtZSwgLi4uY21kIH0gPSBnZXRPcHRpb25zKClcblxuICBpZiAoY21kLmRlYnVnKSB7XG4gICAgb3V0cHV0KGBDb21tYW5kIGRhdGE6ICR7SlNPTi5zdHJpbmdpZnkoY21kKX1gLCBMRVZFTF9ERUJVRylcbiAgfVxuXG4gIGNvbnN0IGMgPSBuZXcgV2Vic29ja2V0Q2xpZW50KHtcbiAgICB1cmwsIHVzZXJuYW1lXG4gIH0pXG5cbiAgb3V0cHV0KGBDb25uZWN0aW5nIHRvICR7b3V0cHV0U3R5bGVzLnVybChjLm9wdHMudXJsKX1gKVxuXG4gIGMuY29ubmVjdCgpXG4gICAgLnRoZW4oKCkgPT4ge1xuICAgICAgb3V0cHV0KGBDb25uZWN0ZWQgdG8gJHtvdXRwdXRTdHlsZXMudXJsKGMuc29ja2V0LnVybCl9YCwgTEVWRUxfT0spXG5cbiAgICAgIGMuc2VuZENvbW1hbmQoY21kKVxuICAgIH0pXG4gICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICBvdXRwdXQoZXJyLm1lc3NhZ2UsIExFVkVMX0VSUk9SKVxuXG4gICAgICBpZiAoY21kLmRlYnVnKSB7XG4gICAgICAgIG91dHB1dChlcnIuc3RhY2ssIExFVkVMX0RFQlVHKVxuICAgICAgfVxuICAgIH0pXG59IGNhdGNoIChlKSB7IC8vIGNhdGNoZXMgbWlzc2luZyBjb21tYW5kIGVycm9yIGZvciBpbnN0YW5jZVxuICAvLyBAdG9kbyBNaWdodCB3YW50IHRvIHJlbW92ZSB0aGlzIGNvZGUgZHVwbGljYXRpb24uIEFpbid0IGV4YWN0bHkgcHJldHR5LlxuICBvdXRwdXQoZS5tZXNzYWdlLCBMRVZFTF9FUlJPUilcblxuICBpZiAocHJvY2Vzcy5hcmd2LmluY2x1ZGVzKCctLWRlYnVnJykpIHtcbiAgICBvdXRwdXQoZS5zdGFjaywgTEVWRUxfREVCVUcpXG4gIH1cbn1cbiJdfQ==