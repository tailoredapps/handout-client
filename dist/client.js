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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jbGllbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNWixJQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQTs7QUFFdEMsSUFBSTs7QUFDRiw2QkFBWSxHQUFHLENBQUMsQ0FBQTs7c0JBRXdCLHdCQUFZOztRQUFyQyxHQUFHLGVBQVgsTUFBTTtRQUFPLFFBQVEsZUFBUixRQUFROztRQUFLLEdBQUc7O0FBRXBDLFFBQU0sQ0FBQyxHQUFHLDhCQUFvQjtBQUM1QixTQUFHLEVBQUgsR0FBRyxFQUFFLFFBQVEsRUFBUixRQUFRO0tBQ2QsQ0FBQyxDQUFBOztBQUVGLHdEQUFtQyxxQkFBYSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBRyxDQUFBOztBQUVsRSxLQUFDLENBQUMsT0FBTyxFQUFFLENBQ1IsSUFBSSxDQUFDLFlBQU07QUFDViw4Q0FBdUIscUJBQWEsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLG1CQUFhLENBQUE7O0FBRWxFLE9BQUMsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUE7S0FDbkIsQ0FBQyxDQUNELEtBQUssQ0FBQyxVQUFBLEdBQUc7YUFBSSxzQkFBTyxHQUFHLENBQUMsT0FBTyxzQkFBYztLQUFBLENBQUMsQ0FBQTs7Q0FDbEQsQ0FBQyxPQUFPLENBQUMsRUFBRTs7QUFDVix3QkFBTyxDQUFDLENBQUMsT0FBTyxzQkFBYyxDQUFBO0NBQy9CIiwiZmlsZSI6ImNsaWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5pbXBvcnQgb3V0cHV0LCB7TEVWRUxfRVJST1IsIExFVkVMX09LLCBvdXRwdXRTdHlsZXMsIG91dHB1dFRpdGxlfSBmcm9tICdvdXRwdXQnXG5pbXBvcnQgZ2V0T3B0aW9ucyBmcm9tICdvcHRpb25zJ1xuaW1wb3J0IFdlYnNvY2tldENsaWVudCBmcm9tICdXZWJzb2NrZXRDbGllbnQnXG5cbmNvbnN0IHBrZyA9IHJlcXVpcmUoJy4uL3BhY2thZ2UuanNvbicpXG5cbnRyeSB7XG4gIG91dHB1dFRpdGxlKHBrZylcblxuICBjb25zdCB7c2VydmVyOiB1cmwsIHVzZXJuYW1lLCAuLi5jbWR9ID0gZ2V0T3B0aW9ucygpXG5cbiAgY29uc3QgYyA9IG5ldyBXZWJzb2NrZXRDbGllbnQoe1xuICAgIHVybCwgdXNlcm5hbWVcbiAgfSlcblxuICBvdXRwdXQoYEF0dGVtcHRpbmcgdG8gY29ubmVjdCB0byAke291dHB1dFN0eWxlcy51cmwoYy5vcHRzLnVybCl9YClcblxuICBjLmNvbm5lY3QoKVxuICAgIC50aGVuKCgpID0+IHtcbiAgICAgIG91dHB1dChgQ29ubmVjdGVkIHRvICR7b3V0cHV0U3R5bGVzLnVybChjLnNvY2tldC51cmwpfWAsIExFVkVMX09LKVxuXG4gICAgICBjLnNlbmRDb21tYW5kKGNtZClcbiAgICB9KVxuICAgIC5jYXRjaChlcnIgPT4gb3V0cHV0KGVyci5tZXNzYWdlLCBMRVZFTF9FUlJPUikpXG59IGNhdGNoIChlKSB7IC8vIGNhdGNoZXMgbWlzc2luZyBjb21tYW5kIGVycm9yIGZvciBpbnN0YW5jZVxuICBvdXRwdXQoZS5tZXNzYWdlLCBMRVZFTF9FUlJPUilcbn1cbiJdfQ==