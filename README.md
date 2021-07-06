# A small npm package

### You can view a live demo of the components in action [here](https://lindiek.github.io/react-follow-unfollow-modal/).

## Install

Install using `npm install react-follow-unfollow-modal`

## Screenshot of components

Here are screenshots of the components used in a page:

### Initial State:

![Initial State](https://github.com/LindieK/gains-challenge/blob/master/src/images/initial%20state.PNG)

### Popup Active State:

![Popup State](https://github.com/LindieK/gains-challenge/blob/master/src/images/popup%20state.PNG)

### Final State (After clicking Unfollow):

![Final State](https://github.com/LindieK/gains-challenge/blob/master/src/images/final%20state.PNG)

## Usage
In a React app, use the Button or Popup components or both:

`import { Button } from 'react-follow-unfollow-modal'`

`import { Popup } from 'react-follow-unfollow-modal'`

### Button props


|   Name     | Description |
| ---------- | ----------- |
|  onClick   |   function  |

### Popup props


|   Name     | Description |
| ---------- | ----------- |
|  memberTag |   string    |
|  onClick   |   function  |
|  onClick   |   function  |

### Styling

To change the style of the components, locate the defined styles of the components in the `dist/styles` folder located inside the package. Make your desired changes to the `dist/styles/Button.css` and the `dist/styles/Popup.css`.

If your changes entail creating new classes or IDs, then the added classes will need to be appended to the components. 

This is how the Popup.js file looks like (located in `dist/components/Popup.js`)


```Popup.js
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
  }, "Nope, cancel"), /*#__PURE__*/_react.default.createElement("button", {
    className: "btn primary",
    onClick: props.onUnfollow
  }, "Unfollow")))), document.getElementById("modal-root"));
}
```

To add a class name, just append the new class name to the `className` attribute - making sure there is a space between the other classes:


```
    /*#__PURE__*/_react.default.createElement("button", {
        className: "btn secondary",
        onClick: props.onCancel
    }, "Nope, cancel")
```

The same goes for IDs

To change the text in the Popup, locate the `p` element and edit the text between the quotes to what you want.


```
    /*#__PURE__*/_react.default.createElement("p", null, "We have to let you know that if you proceed to this action, the member's content (posts) will no longer be visible to your feed, and they will disappear from your \"Followed Members\" list. Are you sure about this?")), /*#__PURE__*/_react.default.createElement("div", {
        className: "btn-container"
    }
```