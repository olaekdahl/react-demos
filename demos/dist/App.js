"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function App() {
  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      isOn = _React$useState2[0],
      setIsOn = _React$useState2[1];

  var _React$useState3 = React.useState(0),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      timer = _React$useState4[0],
      setTimer = _React$useState4[1];

  // console.log('without useEffect...')
  // let interval;

  // if (isOn) {
  //   interval = setInterval(
  //     () => setTimer(timer => timer + 1),
  //     1000,
  //   );
  // }


  //this runs when mounting and when component updates unless adding [] as second param.


  React.useEffect(function () {
    console.log('inside useEffect...');
    var interval = void 0;

    if (isOn) {
      interval = setInterval(function () {
        return setTimer(function (timer) {
          return timer + 1;
        });
      }, 1000);
    }

    return function () {
      return clearInterval(interval);
    };
  }, [isOn]);

  var onReset = function onReset() {
    setIsOn(false);
    setTimer(0);
  };

  return React.createElement(
    "div",
    null,
    timer,
    !isOn && React.createElement(
      "button",
      { type: "button", onClick: function onClick() {
          return setIsOn(true);
        } },
      "Start"
    ),
    isOn && React.createElement(
      "button",
      { type: "button", onClick: function onClick() {
          return setIsOn(false);
        } },
      "Stop"
    ),
    React.createElement(
      "button",
      { type: "button", disabled: timer === 0, onClick: onReset },
      "Reset"
    )
  );
}

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));