"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RaceScreen = function (_React$Component) {
  _inherits(RaceScreen, _React$Component);

  function RaceScreen(props) {
    _classCallCheck(this, RaceScreen);

    var _this = _possibleConstructorReturn(this, (RaceScreen.__proto__ || Object.getPrototypeOf(RaceScreen)).call(this, props));

    _this.destination = props.destination;
    _this.initdist = distance(oposition.latitude, oposition.longitude, eposition[1], eposition[0], "M");
    console.log(_this.initdist);
    _this.state = { time: props.time, miles: _this.initdist, percentage: 0, speed: travel.speed, progress: 0 };
    _this.db = React.createRef();
    //this.initdist = distance(crd.latitude, crd.longitude, target.latitude, target.longitude, "M");
    console.log(_this.state);
    return _this;
  }

  _createClass(RaceScreen, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.timerID = setInterval(function () {
        return _this2.tick();
      }, 1000);
      this.geotrack();
      if (settings.music) {
        click.src = 'sfx/music.mp3';
        if (typeof click.loop == 'boolean') {
          click.loop = true;
        }
        click.play();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      click.loop = false;
      click.pause();
      click.currentTime = 0;
      click.src = "sfx/click.mp3";
      clearInterval(this.timerID);
    }
  }, {
    key: "tick",
    value: function tick() {
      this.setState({ progress: this.state.progress + 100 / time });
      this.setState({ time: this.state.time -= 1 });
      if (this.state.time <= 0) {
        ReactDOM.render(React.createElement(LoseScreen, null), main);
      }
    }
  }, {
    key: "win",
    value: function win() {
      ReactDOM.render(React.createElement(SuccessScreen, { coins: this.db.state.coins, place: this.destination, time: Math.floor(this.state.time / 60) + "m" + this.state.time - Math.floor(this.state.time / 60) * 60 + "s" }), main);
    }
  }, {
    key: "geotrack",
    value: function geotrack() {
      var _this3 = this;

      var id, target, options;
      function success(pos, ctx) {
        var crd = pos.coords;
        travel.location = pos.coords;
        if (pos.coords.speed != null) {
          travel.speed = pos.coords.speed * 2.23694;
        }
        var dist = distance(crd.latitude, crd.longitude, target.latitude, target.longitude, "M");
        var perc = 0 - dist * (100 / ctx.initdist) + 100;
        ctx.setState({ miles: dist, percentage: perc, speed: travel.speed });
        console.log(ctx.state);
        if (dist < 0.09) {
          ctx.win();
        }
      }

      function error(err) {
        console.warn('ERROR(' + err.code + '): ' + err.message);
      }

      target = {
        latitude: eposition[1],
        longitude: eposition[0]
      };

      options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 200
      };

      id = navigator.geolocation.watchPosition(function (pos) {
        success(pos, _this3);
      }, error, options);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { "class": "rgrid" },
        React.createElement(DriveBuddy, { ref: this.db }),
        React.createElement(
          "div",
          { "class": "g g-top" },
          React.createElement(
            "span",
            { "class": "bigtext" },
            this.destination
          ),
          React.createElement("br", null),
          React.createElement(
            "span",
            { "class": "bignumber" },
            Math.floor(this.state.time / 60),
            "m ",
            this.state.time - Math.floor(this.state.time / 60) * 60,
            "s"
          )
        ),
        React.createElement(
          "div",
          { "class": "g g-bottom" },
          React.createElement(
            "span",
            { "class": "bignumber" },
            Math.round(this.state.speed),
            " MPH"
          ),
          React.createElement(
            "div",
            { "class": "progress-bar com-bar stripes animated reverse" },
            React.createElement("span", { "class": "progress-bar-inner com-inner", style: { width: this.state.progress + "%" } })
          ),
          React.createElement(
            "div",
            { "class": "progress-bar stripes animated reverse" },
            React.createElement(
              "span",
              { "class": "ptext" },
              "Progress"
            ),
            React.createElement("span", { "class": "progress-bar-inner", style: { width: this.state.percentage + "%" } })
          ),
          React.createElement(
            "label",
            null,
            Math.round(this.state.miles * 10) / 10,
            " Miles Away"
          )
        )
      );
    }
  }]);

  return RaceScreen;
}(React.Component);