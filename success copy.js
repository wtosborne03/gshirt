"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SuccessScreen = function (_React$Component) {
  _inherits(SuccessScreen, _React$Component);

  function SuccessScreen(props) {
    _classCallCheck(this, SuccessScreen);

    var _this = _possibleConstructorReturn(this, (SuccessScreen.__proto__ || Object.getPrototypeOf(SuccessScreen)).call(this, props));

    _this.place = props.place;
    _this.time = props.time;
    _this.coins = props.coins;
    _this.canvas;
    return _this;
  }

  _createClass(SuccessScreen, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.canvas = document.getElementById("can");
      var ctx = this.canvas.getContext("2d");
      ctx.canvas.width = window.innerWidth;
      ctx.canvas.height = document.getElementById("topmost").offsetHeight;
      var gradient = ctx.createLinearGradient(0, 0, 0, ctx.canvas.height);
      gradient.addColorStop(0, "rgb(0, 0, 0)");
      gradient.addColorStop(0.99, "rgb(121, 121, 121)");
      gradient.addColorStop(1, "rgb(122, 122, 122)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
      ctx.fillStyle = "white";
      ctx.font = '36px serif';
      ctx.fillText('I got to ', 10, 50, this.canvas.width - 20);
      ctx.font = '48px serif';
      ctx.fillText(this.place, 10, 115, this.canvas.width - 20);
      ctx.font = '36px serif';
      ctx.fillText('faster than Google Maps by ' + this.time + '!', 10, 175, this.canvas.width - 20);
      ctx.font = 'bold 42px serif';
      ctx.fillStyle = "rgb(255, 204, 0)";
      ctx.fillText(this.coins + " SpeedCoins", 10, 280, this.canvas.width - 20);
    }
  }, {
    key: "save",
    value: function save() {
      var s = this.canvas.toDataURL("image/png");
      var blob = dataURLtoBlob(s);
      var file = new File([blob], 'win.png', { type: blob.type });
      navigator.share({
        title: 'Win',
        text: 'Share your victory',
        files: [file]
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement(
        "div",
        { "class": "rgrid" },
        React.createElement(
          "div",
          { "class": "succpost" },
          React.createElement("canvas", { id: "can", "class": "succpost" })
        ),
        React.createElement(
          "div",
          { "class": "g g-left" },
          React.createElement(
            "button",
            { "class": "bigbutton", onClick: function onClick() {
                return ReactDOM.render(React.createElement(StartPage, null), main);
              } },
            "Replay"
          )
        ),
        React.createElement(
          "div",
          { "class": "g g-right" },
          React.createElement(
            "button",
            { "class": "bigbutton", onClick: function onClick() {
                return _this2.save();
              } },
            "Share"
          )
        )
      );
    }
  }]);

  return SuccessScreen;
}(React.Component);