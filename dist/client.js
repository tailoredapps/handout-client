'use strict';

var _handoutConstants = require('handout-constants');

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
      (0, _output2.default)('Command data: ' + JSON.stringify(cmd), _handoutConstants.MSG_LEVEL_DEBUG);
    }

    var c = new _WebsocketClient2.default({
      url: url, username: username
    });

    (0, _output2.default)('Connecting to ' + _output.outputStyles.url(c.opts.url));

    c.connect().then(function () {
      (0, _output2.default)('Connected to ' + _output.outputStyles.url(c.socket.url), _handoutConstants.MSG_LEVEL_OK);

      c.sendCommand(cmd);
    }).catch(function (err) {
      (0, _output2.default)(err.message, _handoutConstants.MSG_LEVEL_ERROR);

      if (cmd.debug) {
        (0, _output2.default)(err.stack, _handoutConstants.MSG_LEVEL_DEBUG);
      }
    });
  })();
} catch (e) {
  // catches missing command error for instance
  // @todo Might want to remove this code duplication. Ain't exactly pretty.
  (0, _output2.default)(e.message, _handoutConstants.MSG_LEVEL_ERROR);

  if (process.argv.includes('--debug')) {
    (0, _output2.default)(e.stack, _handoutConstants.MSG_LEVEL_DEBUG);
  }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jbGllbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUUEsSUFBTSxNQUFNLFFBQVEsaUJBQVIsQ0FBTjs7QUFFTixJQUFJOztBQUNGLDZCQUFZLEdBQVo7O3NCQUUwQzs7UUFBMUIsa0JBQVI7UUFBYTs7UUFBYTs7QUFFbEMsUUFBSSxJQUFJLEtBQUosRUFBVztBQUNiLCtDQUF3QixLQUFLLFNBQUwsQ0FBZSxHQUFmLENBQXhCLHFDQURhO0tBQWY7O0FBSUEsUUFBTSxJQUFJLDhCQUFvQjtBQUM1QixjQUQ0QixFQUN2QixrQkFEdUI7S0FBcEIsQ0FBSjs7QUFJTiw2Q0FBd0IscUJBQWEsR0FBYixDQUFpQixFQUFFLElBQUYsQ0FBTyxHQUFQLENBQXpDOztBQUVBLE1BQUUsT0FBRixHQUNHLElBREgsQ0FDUSxZQUFNO0FBQ1YsOENBQXVCLHFCQUFhLEdBQWIsQ0FBaUIsRUFBRSxNQUFGLENBQVMsR0FBVCxDQUF4QyxrQ0FEVTs7QUFHVixRQUFFLFdBQUYsQ0FBYyxHQUFkLEVBSFU7S0FBTixDQURSLENBTUcsS0FOSCxDQU1TLGVBQU87QUFDWiw0QkFBTyxJQUFJLE9BQUosbUNBQVAsRUFEWTs7QUFHWixVQUFJLElBQUksS0FBSixFQUFXO0FBQ2IsOEJBQU8sSUFBSSxLQUFKLG1DQUFQLEVBRGE7T0FBZjtLQUhLLENBTlQ7T0FmRTtDQUFKLENBNEJFLE9BQU8sQ0FBUCxFQUFVOzs7QUFFVix3QkFBTyxFQUFFLE9BQUYsbUNBQVAsRUFGVTs7QUFJVixNQUFJLFFBQVEsSUFBUixDQUFhLFFBQWIsQ0FBc0IsU0FBdEIsQ0FBSixFQUFzQztBQUNwQywwQkFBTyxFQUFFLEtBQUYsbUNBQVAsRUFEb0M7R0FBdEM7Q0FKQSIsImZpbGUiOiJjbGllbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxuaW1wb3J0IHsgTVNHX0xFVkVMX0RFQlVHLCBNU0dfTEVWRUxfRVJST1IsIE1TR19MRVZFTF9PSyB9IGZyb20gJ2hhbmRvdXQtY29uc3RhbnRzJ1xuXG5pbXBvcnQgb3V0cHV0LCB7IG91dHB1dFN0eWxlcywgb3V0cHV0VGl0bGUgfSBmcm9tICdvdXRwdXQnXG5pbXBvcnQgZ2V0T3B0aW9ucyBmcm9tICdvcHRpb25zJ1xuaW1wb3J0IFdlYnNvY2tldENsaWVudCBmcm9tICdXZWJzb2NrZXRDbGllbnQnXG5cbmNvbnN0IHBrZyA9IHJlcXVpcmUoJy4uL3BhY2thZ2UuanNvbicpXG5cbnRyeSB7XG4gIG91dHB1dFRpdGxlKHBrZylcblxuICBjb25zdCB7IHNlcnZlcjogdXJsLCB1c2VybmFtZSwgLi4uY21kIH0gPSBnZXRPcHRpb25zKClcblxuICBpZiAoY21kLmRlYnVnKSB7XG4gICAgb3V0cHV0KGBDb21tYW5kIGRhdGE6ICR7SlNPTi5zdHJpbmdpZnkoY21kKX1gLCBNU0dfTEVWRUxfREVCVUcpXG4gIH1cblxuICBjb25zdCBjID0gbmV3IFdlYnNvY2tldENsaWVudCh7XG4gICAgdXJsLCB1c2VybmFtZVxuICB9KVxuXG4gIG91dHB1dChgQ29ubmVjdGluZyB0byAke291dHB1dFN0eWxlcy51cmwoYy5vcHRzLnVybCl9YClcblxuICBjLmNvbm5lY3QoKVxuICAgIC50aGVuKCgpID0+IHtcbiAgICAgIG91dHB1dChgQ29ubmVjdGVkIHRvICR7b3V0cHV0U3R5bGVzLnVybChjLnNvY2tldC51cmwpfWAsIE1TR19MRVZFTF9PSylcblxuICAgICAgYy5zZW5kQ29tbWFuZChjbWQpXG4gICAgfSlcbiAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgIG91dHB1dChlcnIubWVzc2FnZSwgTVNHX0xFVkVMX0VSUk9SKVxuXG4gICAgICBpZiAoY21kLmRlYnVnKSB7XG4gICAgICAgIG91dHB1dChlcnIuc3RhY2ssIE1TR19MRVZFTF9ERUJVRylcbiAgICAgIH1cbiAgICB9KVxufSBjYXRjaCAoZSkgeyAvLyBjYXRjaGVzIG1pc3NpbmcgY29tbWFuZCBlcnJvciBmb3IgaW5zdGFuY2VcbiAgLy8gQHRvZG8gTWlnaHQgd2FudCB0byByZW1vdmUgdGhpcyBjb2RlIGR1cGxpY2F0aW9uLiBBaW4ndCBleGFjdGx5IHByZXR0eS5cbiAgb3V0cHV0KGUubWVzc2FnZSwgTVNHX0xFVkVMX0VSUk9SKVxuXG4gIGlmIChwcm9jZXNzLmFyZ3YuaW5jbHVkZXMoJy0tZGVidWcnKSkge1xuICAgIG91dHB1dChlLnN0YWNrLCBNU0dfTEVWRUxfREVCVUcpXG4gIH1cbn1cbiJdfQ==