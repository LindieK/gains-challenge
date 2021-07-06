"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("../styles/Button.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Button = props => {
  return /*#__PURE__*/_react.default.createElement("button", {
    id: "btn1",
    className: "btn primary cta-btn",
    onClick: props.onClick
  }, "Unfollow");
};

var _default = Button;
exports.default = _default;