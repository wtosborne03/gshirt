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
    return _this;
  }

  _createClass(SuccessScreen, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      $('p-time').text(this.time);
      $('p-place1').text(this.place);
    }
  }, {
    key: 'save',
    value: function save() {
      var svg = document.getElementById("svg1").contentDocument.getElementById('loveit');
      console.log(svg);
      var svgData = new XMLSerializer().serializeToString(svg);

      var canvas = document.createElement("canvas");
      var ctx = canvas.getContext("2d");
      ctx.canvas.width = window.innerWidth;
      ctx.canvas.height = window.innerHeight;

      var img = document.createElement("img");
      img.setAttribute("src", "data:image/svg+xml;base64," + btoa(svgData));

      img.onload = function () {
        ctx.drawImage(img, 0, 0);

        // Now is done
        var s = canvas.toDataURL("image/png");
        var blob = dataURLtoBlob(s);
        var file = new File([blob], 'fileName.png', { type: blob.type });
        navigator.share({
          title: 'Win',
          text: 'Share your victory',
          files: [file]
        });
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return React.createElement(
        'div',
        { 'class': 'rgrid' },
        React.createElement(
          'div',
          { 'class': 'succpost' },
          React.createElement('object', { type: 'image/svg+xml', data: 'poster.svg', id: 'svg1', 'class': 'succpost' })
        ),
        React.createElement(
          'div',
          { 'class': 'g-left' },
          React.createElement(
            'button',
            { 'class': 'bigbutton', onClick: function onClick() {
                return ReactDOM.render(React.createElement(StartPage, null), main);
              } },
            'Replay'
          )
        ),
        React.createElement(
          'div',
          { 'class': 'g-right' },
          React.createElement(
            'button',
            { 'class': 'bigbutton', onClick: function onClick() {
                return _this2.save();
              } },
            'Share'
          )
        )
      );
    }
  }]);

  return SuccessScreen;
}(React.Component);