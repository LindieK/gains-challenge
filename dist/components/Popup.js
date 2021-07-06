"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

require("../styles/Popup.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Popup = props => {
  return /*#__PURE__*/_reactDom.default.createPortal( /*#__PURE__*/_react.default.createElement("div", {
    "data-testid": "modal",
    className: "modal-overlay"
  }, /*#__PURE__*/_react.default.createElement("div", {
    id: "popup-card"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "text-container"
  }, /*#__PURE__*/_react.default.createElement("h2", null, "Unfollowing..."), /*#__PURE__*/_react.default.createElement("p", null, "Member Tag: ", /*#__PURE__*/_react.default.createElement("span", {
    className: "member-tag"
  }, props.memberTag)), /*#__PURE__*/_react.default.createElement("p", null, "We have to let you know that if you proceed to this action, the member's content (posts) will no longer be visible to your feed, and they will disappear from your \"Followed Members\" list. Are you sure about this?")), /*#__PURE__*/_react.default.createElement("div", {
    className: "btn-container"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "btn secondary",
    onClick: props.onCancel
  }, props.cancelText), /*#__PURE__*/_react.default.createElement("button", {
    className: "btn primary",
    onClick: props.onUnfollow
  }, props.unfollowText)))), document.getElementById("modal-root"));
};

var _default = Popup;
exports.default = _default;