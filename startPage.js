'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StartPage = function (_React$Component) {
    _inherits(StartPage, _React$Component);

    function StartPage(props) {
        _classCallCheck(this, StartPage);

        return _possibleConstructorReturn(this, (StartPage.__proto__ || Object.getPrototypeOf(StartPage)).call(this, props));
    }

    _createClass(StartPage, [{
        key: "render",
        value: function render() {

            return React.createElement(
                "div",
                { "class": "startpage" },
                React.createElement(
                    "div",
                    { "class": "start-button" },
                    React.createElement(
                        "button",
                        { className: "button1", onClick: function onClick() {
                                return start();
                            } },
                        "START"
                    )
                ),
                React.createElement(
                    "div",
                    { "class": "bottomtext" },
                    "I am not responsible for any inherent injuries caused by using this software. I am not responsible for loss of life or damage to property."
                )
            );
        }
    }]);

    return StartPage;
}(React.Component);