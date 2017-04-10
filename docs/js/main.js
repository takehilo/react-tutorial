webpackJsonp([0],{

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(25);

var _react2 = _interopRequireDefault(_react);

var _Board = __webpack_require__(83);

var _Board2 = _interopRequireDefault(_Board);

var _helper = __webpack_require__(85);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Game = function (_React$Component) {
  _inherits(Game, _React$Component);

  function Game() {
    _classCallCheck(this, Game);

    var _this = _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).call(this));

    _this.state = {
      history: [{
        squares: Array(9).fill(null)
      }],
      xIsNext: true,
      stepNumber: 0
    };
    return _this;
  }

  _createClass(Game, [{
    key: 'handleClick',
    value: function handleClick(i) {
      var history = this.state.history;
      var current = history[history.length - 1];
      var squares = current.squares.slice();
      if ((0, _helper.calculateWinner)(squares) || squares[i]) {
        return;
      }
      squares[i] = this.state.xIsNext ? 'X' : 'O';
      this.setState({
        history: history.concat([{
          squares: squares
        }]),
        xIsNext: !this.state.xIsNext,
        stepNumber: history.length
      });
    }
  }, {
    key: 'jumpTo',
    value: function jumpTo(step) {
      this.setState({
        stepNumber: step,
        xIsNext: step % 2 ? false : true
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var history = this.state.history;
      var current = history[this.state.stepNumber];
      var winner = (0, _helper.calculateWinner)(current.squares);

      var status = void 0;
      if (winner) {
        status = 'Winner: ' + winner;
      } else {
        status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
      }

      var moves = history.map(function (step, move) {
        var desc = move ? 'Move #' + move : 'Game start';
        return _react2.default.createElement(
          'li',
          { key: move },
          _react2.default.createElement(
            'a',
            { href: '#', onClick: function onClick() {
                return _this2.jumpTo(move);
              } },
            desc
          )
        );
      });

      return _react2.default.createElement(
        'div',
        { className: 'game' },
        _react2.default.createElement(
          'div',
          { className: 'game-board' },
          _react2.default.createElement(_Board2.default, {
            squares: current.squares,
            onClick: function onClick(i) {
              return _this2.handleClick(i);
            }
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'game-info' },
          _react2.default.createElement(
            'div',
            null,
            status
          ),
          _react2.default.createElement(
            'ol',
            null,
            moves
          )
        )
      );
    }
  }]);

  return Game;
}(_react2.default.Component);

exports.default = Game;

/***/ }),

/***/ 81:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(25);

var _react2 = _interopRequireDefault(_react);

var _Square = __webpack_require__(84);

var _Square2 = _interopRequireDefault(_Square);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Board = function (_React$Component) {
  _inherits(Board, _React$Component);

  function Board() {
    _classCallCheck(this, Board);

    return _possibleConstructorReturn(this, (Board.__proto__ || Object.getPrototypeOf(Board)).apply(this, arguments));
  }

  _createClass(Board, [{
    key: 'renderSquare',
    value: function renderSquare(i) {
      var _this2 = this;

      return _react2.default.createElement(_Square2.default, { value: this.props.squares[i], onClick: function onClick() {
          return _this2.props.onClick(i);
        } });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'board-row' },
          this.renderSquare(0),
          this.renderSquare(1),
          this.renderSquare(2)
        ),
        _react2.default.createElement(
          'div',
          { className: 'board-row' },
          this.renderSquare(3),
          this.renderSquare(4),
          this.renderSquare(5)
        ),
        _react2.default.createElement(
          'div',
          { className: 'board-row' },
          this.renderSquare(6),
          this.renderSquare(7),
          this.renderSquare(8)
        )
      );
    }
  }]);

  return Board;
}(_react2.default.Component);

Board.propTypes = {
  squares: _react2.default.PropTypes.array,
  onClick: _react2.default.PropTypes.func
};

exports.default = Board;

/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(25);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Square(props) {
  return _react2.default.createElement(
    "button",
    { className: "square", onClick: function onClick() {
        return props.onClick();
      } },
    props.value
  );
}

Square.propTypes = {
  value: _react2.default.PropTypes.string,
  onClick: _react2.default.PropTypes.func
};

exports.default = Square;

/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.calculateWinner = calculateWinner;
function calculateWinner(squares) {
  var lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
  for (var i = 0; i < lines.length; i++) {
    var _lines$i = _slicedToArray(lines[i], 3),
        a = _lines$i[0],
        b = _lines$i[1],
        c = _lines$i[2];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(25);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(82);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Game = __webpack_require__(80);

var _Game2 = _interopRequireDefault(_Game);

__webpack_require__(81);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_Game2.default, null), document.getElementById('container'));

/***/ })

},[86]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvR2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL21haW4uY3NzIiwid2VicGFjazovLy8uL3NyYy9qcy9Cb2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvU3F1YXJlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkdhbWUiLCJzdGF0ZSIsImhpc3RvcnkiLCJzcXVhcmVzIiwiQXJyYXkiLCJmaWxsIiwieElzTmV4dCIsInN0ZXBOdW1iZXIiLCJpIiwiY3VycmVudCIsImxlbmd0aCIsInNsaWNlIiwic2V0U3RhdGUiLCJjb25jYXQiLCJzdGVwIiwid2lubmVyIiwic3RhdHVzIiwibW92ZXMiLCJtYXAiLCJtb3ZlIiwiZGVzYyIsImp1bXBUbyIsImhhbmRsZUNsaWNrIiwiQ29tcG9uZW50IiwiQm9hcmQiLCJwcm9wcyIsIm9uQ2xpY2siLCJyZW5kZXJTcXVhcmUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhcnJheSIsImZ1bmMiLCJTcXVhcmUiLCJ2YWx1ZSIsInN0cmluZyIsImNhbGN1bGF0ZVdpbm5lciIsImxpbmVzIiwiYSIsImIiLCJjIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFFTUEsSTs7O0FBQ0osa0JBQWM7QUFBQTs7QUFBQTs7QUFFWixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsZUFBUyxDQUFDO0FBQ1JDLGlCQUFTQyxNQUFNLENBQU4sRUFBU0MsSUFBVCxDQUFjLElBQWQ7QUFERCxPQUFELENBREU7QUFJWEMsZUFBUyxJQUpFO0FBS1hDLGtCQUFZO0FBTEQsS0FBYjtBQUZZO0FBU2I7Ozs7Z0NBQ1dDLEMsRUFBRztBQUNiLFVBQU1OLFVBQVUsS0FBS0QsS0FBTCxDQUFXQyxP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RUFJWixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUpZLEVBS1osQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FMWSxFQU1aLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBTlksRUFPWixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQVBZLEVBUVosQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FSWSxDQUFkO0FBVUEsT0FBSyxJQUFJNUIsSUFBSSxDQUFiLEVBQWdCQSxJQUFJNEIsTUFBTTFCLE1BQTFCLEVBQWtDRixHQUFsQyxFQUF1QztBQUFBLGtDQUNuQjRCLE1BQU01QixDQUFOLENBRG1CO0FBQUEsUUFDOUI2QixDQUQ4QjtBQUFBLFFBQzNCQyxDQUQyQjtBQUFBLFFBQ3hCQyxDQUR3Qjs7QUFFckMsUUFBSXBDLFFBQVFrQyxDQUFSLEtBQWNsQyxRQUFRa0MsQ0FBUixNQUFlbEMsUUFBUW1DLENBQVIsQ0FBN0IsSUFBMkNuQyxRQUFRa0MsQ0FBUixNQUFlbEMsUUFBUW9DLENBQVIsQ0FBOUQsRUFBMEU7QUFDeEUsYUFBT3BDLFFBQVFrQyxDQUFSLENBQVA7QUFDRDtBQUNGO0FBQ0QsU0FBTyxJQUFQO0FBQ0QsQzs7Ozs7Ozs7OztBQ2xCRDs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBLG1CQUFTRyxNQUFULENBQ0UsbURBREYsRUFFRUMsU0FBU0MsY0FBVCxDQUF3QixXQUF4QixDQUZGLEUiLCJmaWxlIjoianMvbWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQm9hcmQgZnJvbSAnLi9Cb2FyZCc7XG5pbXBvcnQge2NhbGN1bGF0ZVdpbm5lcn0gZnJvbSAnLi9oZWxwZXInO1xuXG5jbGFzcyBHYW1lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaGlzdG9yeTogW3tcbiAgICAgICAgc3F1YXJlczogQXJyYXkoOSkuZmlsbChudWxsKSxcbiAgICAgIH1dLFxuICAgICAgeElzTmV4dDogdHJ1ZSxcbiAgICAgIHN0ZXBOdW1iZXI6IDAsXG4gICAgfTtcbiAgfVxuICBoYW5kbGVDbGljayhpKSB7XG4gICAgY29uc3QgaGlzdG9yeSA9IHRoaXMuc3RhdGUuaGlzdG9yeTtcbiAgICBjb25zdCBjdXJyZW50ID0gaGlzdG9yeVtoaXN0b3J5Lmxlbmd0aCAtIDFdO1xuICAgIGNvbnN0IHNxdWFyZXMgPSBjdXJyZW50LnNxdWFyZXMuc2xpY2UoKTtcbiAgICBpZiAoY2FsY3VsYXRlV2lubmVyKHNxdWFyZXMpIHx8IHNxdWFyZXNbaV0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc3F1YXJlc1tpXSA9IHRoaXMuc3RhdGUueElzTmV4dCA/ICdYJyA6ICdPJztcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGhpc3Rvcnk6IGhpc3RvcnkuY29uY2F0KFt7XG4gICAgICAgIHNxdWFyZXM6IHNxdWFyZXNcbiAgICAgIH1dKSxcbiAgICAgIHhJc05leHQ6ICF0aGlzLnN0YXRlLnhJc05leHQsXG4gICAgICBzdGVwTnVtYmVyOiBoaXN0b3J5Lmxlbmd0aCxcbiAgICB9KTtcbiAgfVxuICBqdW1wVG8oc3RlcCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc3RlcE51bWJlcjogc3RlcCxcbiAgICAgIHhJc05leHQ6IChzdGVwICUgMikgPyBmYWxzZSA6IHRydWUsXG4gICAgfSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGhpc3RvcnkgPSB0aGlzLnN0YXRlLmhpc3Rvcnk7XG4gICAgY29uc3QgY3VycmVudCA9IGhpc3RvcnlbdGhpcy5zdGF0ZS5zdGVwTnVtYmVyXTtcbiAgICBjb25zdCB3aW5uZXIgPSBjYWxjdWxhdGVXaW5uZXIoY3VycmVudC5zcXVhcmVzKTtcblxuICAgIGxldCBzdGF0dXM7XG4gICAgaWYgKHdpbm5lcikge1xuICAgICAgc3RhdHVzID0gJ1dpbm5lcjogJyArIHdpbm5lcjtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhdHVzID0gJ05leHQgcGxheWVyOiAnICsgKHRoaXMuc3RhdGUueElzTmV4dCA/ICdYJyA6ICdPJyk7XG4gICAgfVxuXG4gICAgY29uc3QgbW92ZXMgPSBoaXN0b3J5Lm1hcCgoc3RlcCwgbW92ZSkgPT4ge1xuICAgICAgY29uc3QgZGVzYyA9IG1vdmUgP1xuICAgICAgICAnTW92ZSAjJyArIG1vdmUgOlxuICAgICAgICAnR2FtZSBzdGFydCc7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8bGkga2V5PXttb3ZlfT5cbiAgICAgICAgICA8YSBocmVmPVwiI1wiIG9uQ2xpY2s9eygpID0+IHRoaXMuanVtcFRvKG1vdmUpfT57ZGVzY308L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2FtZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdhbWUtYm9hcmRcIj5cbiAgICAgICAgICA8Qm9hcmRcbiAgICAgICAgICAgIHNxdWFyZXM9e2N1cnJlbnQuc3F1YXJlc31cbiAgICAgICAgICAgIG9uQ2xpY2s9eyhpKSA9PiB0aGlzLmhhbmRsZUNsaWNrKGkpfVxuICAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnYW1lLWluZm9cIj5cbiAgICAgICAgICA8ZGl2PntzdGF0dXN9PC9kaXY+XG4gICAgICAgICAgPG9sPnttb3Zlc308L29sPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9HYW1lLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jc3MvbWFpbi5jc3Ncbi8vIG1vZHVsZSBpZCA9IDgxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU3F1YXJlIGZyb20gJy4vU3F1YXJlJztcblxuY2xhc3MgQm9hcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXJTcXVhcmUoaSkge1xuICAgIHJldHVybiA8U3F1YXJlIHZhbHVlPXt0aGlzLnByb3BzLnNxdWFyZXNbaV19IG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMub25DbGljayhpKX0gLz47XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvYXJkLXJvd1wiPlxuICAgICAgICAgIHt0aGlzLnJlbmRlclNxdWFyZSgwKX1cbiAgICAgICAgICB7dGhpcy5yZW5kZXJTcXVhcmUoMSl9XG4gICAgICAgICAge3RoaXMucmVuZGVyU3F1YXJlKDIpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2FyZC1yb3dcIj5cbiAgICAgICAgICB7dGhpcy5yZW5kZXJTcXVhcmUoMyl9XG4gICAgICAgICAge3RoaXMucmVuZGVyU3F1YXJlKDQpfVxuICAgICAgICAgIHt0aGlzLnJlbmRlclNxdWFyZSg1KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9hcmQtcm93XCI+XG4gICAgICAgICAge3RoaXMucmVuZGVyU3F1YXJlKDYpfVxuICAgICAgICAgIHt0aGlzLnJlbmRlclNxdWFyZSg3KX1cbiAgICAgICAgICB7dGhpcy5yZW5kZXJTcXVhcmUoOCl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5Cb2FyZC5wcm9wVHlwZXMgPSB7XG4gIHNxdWFyZXM6IFJlYWN0LlByb3BUeXBlcy5hcnJheSxcbiAgb25DbGljazogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBCb2FyZDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9Cb2FyZC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIFNxdWFyZShwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxidXR0b24gY2xhc3NOYW1lPVwic3F1YXJlXCIgb25DbGljaz17KCkgPT4gcHJvcHMub25DbGljaygpfT5cbiAgICAgIHtwcm9wcy52YWx1ZX1cbiAgICA8L2J1dHRvbj5cbiAgKTtcbn1cblxuU3F1YXJlLnByb3BUeXBlcyA9IHtcbiAgdmFsdWU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gIG9uQ2xpY2s6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgU3F1YXJlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL1NxdWFyZS5qcyIsImV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVXaW5uZXIoc3F1YXJlcykge1xuICBjb25zdCBsaW5lcyA9IFtcbiAgICBbMCwgMSwgMl0sXG4gICAgWzMsIDQsIDVdLFxuICAgIFs2LCA3LCA4XSxcbiAgICBbMCwgMywgNl0sXG4gICAgWzEsIDQsIDddLFxuICAgIFsyLCA1LCA4XSxcbiAgICBbMCwgNCwgOF0sXG4gICAgWzIsIDQsIDZdLFxuICBdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgW2EsIGIsIGNdID0gbGluZXNbaV07XG4gICAgaWYgKHNxdWFyZXNbYV0gJiYgc3F1YXJlc1thXSA9PT0gc3F1YXJlc1tiXSAmJiBzcXVhcmVzW2FdID09PSBzcXVhcmVzW2NdKSB7XG4gICAgICByZXR1cm4gc3F1YXJlc1thXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvaGVscGVyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IEdhbWUgZnJvbSAnLi9HYW1lJztcbmltcG9ydCAnLi4vY3NzL21haW4uY3NzJztcblxuUmVhY3RET00ucmVuZGVyKFxuICA8R2FtZSAvPixcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcicpXG4pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==