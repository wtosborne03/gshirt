"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DriveBuddy = function (_React$Component) {
  _inherits(DriveBuddy, _React$Component);

  function DriveBuddy(props) {
    _classCallCheck(this, DriveBuddy);

    var _this = _possibleConstructorReturn(this, (DriveBuddy.__proto__ || Object.getPrototypeOf(DriveBuddy)).call(this, props));

    _this.name = "Christopher Weston Chandler";
    _this.coins = 0;
    return _this;
  }

  _createClass(DriveBuddy, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.timerID = setInterval(function () {
        return _this2.tick();
      }, 3000);
      setTimeout(function () {
        speak('Welcome to Race Google Maps, I will be your host, ' + _this2.name + '.');
      }, 3000 + Math.random() * 7);
      setTimeout(function () {
        _this2.speedcoin();
      }, 20000 + Math.random() * 7);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.timerID);
    }
  }, {
    key: "tick",
    value: function tick() {}
  }, {
    key: "speedcoin",
    value: function speedcoin() {
      var _this3 = this;

      var initspeed = travel.speed;
      var speedchange = 15;
      var coins = 3;
      speak('Speed up ' + speedchange + ' miles an hour in 10 seconds to collect ' + coins + ' speedcoins');
      setTimeout(function () {
        if (travel.speed >= initspeed + speedchange - 1) {
          _this3.coins += coins;
          speak('Good Job! You now have ' + _this3.coins + ' speedcoins');
        } else {
          speak('I guess you did not want to go ' + (initspeed + speedchange) + ' miles an hour there');
        }
      }, 14000);
      setTimeout(function () {
        _this3.speedcoin();
      }, 30000 + Math.random() * 7);
    }
  }, {
    key: "getmaxspeed",
    value: function getmaxspeed() {
      var request = new XMLHttpRequest();
      var x = travel.location.longitude;
      var y = travel.location.latitude;
      var radius = 0.05;
      request.open('GET', 'https://z.overpass-api.de/api/xapi?*[maxspeed=*][bbox=' + (y - radius / 2) + ',' + (x - radius / 2) + ',' + (y + radius / 2) + ',' + (x + radius / 2) + ']', false); // `false` makes the request synchronous
      request.send(null);

      if (request.status === 200) {
        console.log(request.responseText);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", { id: "db" });
    }
  }]);

  return DriveBuddy;
}(React.Component);