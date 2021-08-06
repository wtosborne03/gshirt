"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SuccessScreen = function (_React$Component) {
  _inherits(SuccessScreen, _React$Component);

  function SuccessScreen(props) {
    _classCallCheck(this, SuccessScreen);

    return _possibleConstructorReturn(this, (SuccessScreen.__proto__ || Object.getPrototypeOf(SuccessScreen)).call(this, props));
  }

  _createClass(SuccessScreen, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { "class": "rgrid" },
        React.createElement(
          "div",
          { "class": "g-top" },
          React.createElement(
            "span",
            { "class": "bigtext", style: { 'font-size': '2em' } },
            "I got to Walgreens, 5220 Sunset Blvd faster than Google Maps by:"
          )
        ),
        React.createElement(
          "div",
          { "class": "g-under" },
          React.createElement(
            "span",
            { "class": "bignumber" },
            "4m 5s"
          )
        ),
        React.createElement(
          "div",
          { "class": "g-bar" },
          React.createElement("img", { src: "https://img.icons8.com/flat-round/64/000000/star--v1.png" }),
          React.createElement("img", { src: "https://img.icons8.com/flat-round/64/000000/star--v1.png" }),
          React.createElement("img", { src: "https://img.icons8.com/flat-round/64/000000/star--v1.png" })
        ),
        React.createElement(
          "div",
          { "class": "g-left" },
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
          { "class": "g-right" },
          React.createElement(
            "button",
            { "class": "bigbutton", onClick: function onClick() {
                return navigator.share();
              } },
            "Share"
          )
        )
      );
    }
  }]);

  return SuccessScreen;
}(React.Component);