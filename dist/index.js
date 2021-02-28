'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var styled = require('styled-components');
var framerMotion = require('framer-motion');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var Button = function (_a) {
    var text = _a.text, onClick = _a.onClick;
    function handleClick() {
        onClick();
    }
    return (
    // <motion.button
    //   whileHover={{ scale: 1.2 }}
    //   whileTap={{ scale: 0.8 }}
    //   onClick={handleClick}
    // >
    //   {text}
    // </motion.button>
    jsxRuntime.jsx(StyledButton, __assign({ onClick: handleClick }, { children: text }), void 0)
    // <button onClick={handleClick}>{text}</button>
    );
};
var StyledButton = styled__default['default'].button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: 10px 20px;\n  background-color: yellow;\n"], ["\n  padding: 10px 20px;\n  background-color: yellow;\n"])));
var templateObject_1;

var MotionButton = function (_a) {
    var text = _a.text, onClick = _a.onClick;
    function handleClick() {
        onClick();
    }
    return (jsxRuntime.jsx(framerMotion.motion.button, __assign({ whileHover: { scale: 1.2 }, whileTap: { scale: 0.8 }, onClick: handleClick }, { children: text }), void 0));
};

exports.Button = Button;
exports.MotionButton = MotionButton;
//# sourceMappingURL=index.js.map
