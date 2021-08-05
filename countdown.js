"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CountdownPage = function (_React$Component) {
  _inherits(CountdownPage, _React$Component);

  function CountdownPage(props) {
    _classCallCheck(this, CountdownPage);

    return _possibleConstructorReturn(this, (CountdownPage.__proto__ || Object.getPrototypeOf(CountdownPage)).call(this, props));
  }

  _createClass(CountdownPage, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { "class": "d-flex justify-content-center" },
        React.createElement(
          "span",
          { "class": "count" },
          "3"
        )
      );
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.countdown();
    }
  }, {
    key: "countdown",
    value: function countdown() {
      var i = 3;
      var inter = setInterval(function () {
        $('.count').text(i);
        i--;
        if (i < 0) {
          clearInterval(inter);
          ReactDOM.render(React.createElement(RaceScreen, { destination: place, time: time }), main);
        }
      }, 1000);
    }
  }]);

  return CountdownPage;
}(React.Component);