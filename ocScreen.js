"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OptionPage = function (_React$Component) {
  _inherits(OptionPage, _React$Component);

  function OptionPage(props) {
    _classCallCheck(this, OptionPage);

    return _possibleConstructorReturn(this, (OptionPage.__proto__ || Object.getPrototypeOf(OptionPage)).call(this, props));
  }

  _createClass(OptionPage, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      settings.music = $('#music').is(":checked");
      settings.voice = $('#voice').is(":checked");
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { "class": "rgrid" },
        React.createElement(
          "div",
          { "class": "g g-top" },
          React.createElement(
            "span",
            { "class": "bigtext" },
            place,
            React.createElement("br", null),
            " ETA: ",
            Math.floor(time / 60),
            "m ",
            time - Math.floor(time / 60) * 60,
            "s"
          ),
          React.createElement(
            "div",
            { "class": "formbox" },
            React.createElement("input", { "class": "form-check-input", type: "checkbox", value: "", id: "music", defaultChecked: true }),
            React.createElement(
              "label",
              { "class": "form-check-label", "for": "music" },
              "Background Music"
            ),
            React.createElement("br", null),
            React.createElement("input", { "class": "form-check-input", type: "checkbox", value: "", id: "voice", defaultChecked: true }),
            React.createElement(
              "label",
              { "class": "form-check-label", "for": "voice" },
              "Voice Assistant"
            )
          )
        ),
        React.createElement(
          "div",
          { "class": "g g-left" },
          React.createElement(
            "button",
            { "class": "bigbutton", onClick: function onClick() {
                click.play();ReactDOM.render(React.createElement(LocationPage, null), main);
              } },
            "BACK"
          )
        ),
        React.createElement(
          "div",
          { "class": "g g-right" },
          React.createElement(
            "button",
            { "class": "bigbutton", onClick: function onClick() {
                click.play();ReactDOM.render(React.createElement(CountdownPage, null), main);
              } },
            "GO"
          )
        )
      );
    }
  }]);

  return OptionPage;
}(React.Component);