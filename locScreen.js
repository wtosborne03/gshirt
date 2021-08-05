'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LocationPage = function (_React$Component) {
    _inherits(LocationPage, _React$Component);

    function LocationPage(props) {
        _classCallCheck(this, LocationPage);

        return _possibleConstructorReturn(this, (LocationPage.__proto__ || Object.getPrototypeOf(LocationPage)).call(this, props));
    }

    _createClass(LocationPage, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            mapboxgl.accessToken = 'pk.eyJ1Ijoid3Rvc2Jvcm5lMDMiLCJhIjoiY2tna3F6ODF2MDdsMTJzbG4yNWs3dWJxaiJ9.902DiSI6jaX-O_f_seKSiQ';
            var map = new mapboxgl.Map({
                container: 'map',
                style: 'mapbox://styles/mapbox/streets-v11',
                center: [oposition.longitude, oposition.latitude],
                zoom: 13
            });
            var geo = new MapboxGeocoder({
                accessToken: mapboxgl.accessToken,
                mapboxgl: mapboxgl

            });
            geo.on('result', function (results) {
                console.log(results);
                eposition = results.result.geometry.coordinates;
                place = results.result.place_name;
                $('#go').show();
            });
            map.setStyle('mapbox://styles/mapbox/dark-v10');
            map.addControl(geo);
            $('#go').hide();
        }
    }, {
        key: 'render',
        value: function render() {

            return React.createElement(
                'div',
                { id: 'p2' },
                React.createElement('div', { id: 'map' }),
                React.createElement(
                    'div',
                    { 'class': 'overtext container mw-100' },
                    React.createElement(
                        'div',
                        { 'class': 'row' },
                        React.createElement(
                            'div',
                            { 'class': 'col btext' },
                            'Choose Location'
                        ),
                        React.createElement(
                            'div',
                            { 'class': 'col btext' },
                            React.createElement(
                                'button',
                                { id: 'go', 'class': 'button-n', onClick: function onClick() {
                                        return go();
                                    } },
                                'GO'
                            )
                        )
                    )
                )
            );
        }
    }]);

    return LocationPage;
}(React.Component);