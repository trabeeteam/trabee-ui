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

var typography = {
    family: '-apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, sans-serif',
    weight: {
        thin: "100",
        extralight: "200",
        light: "300",
        regular: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900",
    },
    size: {
        h1: 96,
        h2: 64,
        h3: 48,
        h4: 36,
        h5: 24,
        h6: 20,
        s1: 16,
        s2: 14,
        b0: 18,
        b1: 16,
        b2: 14,
        link: 16,
    },
};

var fontSize = {
    h1: typography.size.h1,
    h2: typography.size.h2,
    h3: typography.size.h3,
    h4: typography.size.h4,
    h5: typography.size.h5,
    h6: typography.size.h6,
    s1: typography.size.s1,
    s2: typography.size.s2,
    b0: typography.size.b0,
    b1: typography.size.b1,
    b2: typography.size.b2,
    link: typography.size.link,
};
var fontWeight = {
    h1: typography.weight.semibold,
    h2: typography.weight.semibold,
    h3: typography.weight.semibold,
    h4: typography.weight.semibold,
    h5: typography.weight.semibold,
    h6: typography.weight.semibold,
    s1: typography.weight.regular,
    s2: typography.weight.medium,
    b0: typography.weight.semibold,
    b1: typography.weight.regular,
    b2: typography.weight.regular,
    link: typography.weight.regular,
};
/** `Typograph` 컴포넌트는 모든 텍스트 요소를 다룹니다. */
var Typograph = function (_a) {
    var variant = _a.variant, component = _a.component, children = _a.children;
    return (jsxRuntime.jsx(StyledTag, __assign({ as: component, fontSize: fontSize[variant], fontWeight: fontWeight[variant] }, { children: children }), void 0));
};
var StyledTag = styled__default['default'].div(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  font-size: ", "px;\n  font-size: ", ";\n"], ["\n  font-size: ", "px;\n  font-size: ", ";\n"])), function (p) { return p.fontSize; }, function (p) { return p.fontWeight; });
var templateObject_1$1;

/** `Button` 컴포넌트는 어떠한 작업을 실행할 때 사용됩니다. */
var Button = function (_a) {
    var text = _a.text, onClick = _a.onClick;
    function handleClick() {
        onClick();
    }
    return jsxRuntime.jsx(StyledButton, __assign({ onClick: handleClick }, { children: text }), void 0);
};
var StyledButton = styled__default['default'].button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: 10px 20px;\n  background-color: yellow;\n"], ["\n  padding: 10px 20px;\n  background-color: yellow;\n"])));
var templateObject_1;

/** `MotionButton` 기존 Button 컴포넌트에 에니메이션을 부각시켰습니다. */
var MotionButton = function (_a) {
    var text = _a.text, onClick = _a.onClick;
    function handleClick() {
        onClick();
    }
    return (jsxRuntime.jsx(framerMotion.motion.button, __assign({ whileHover: { scale: 1.2 }, whileTap: { scale: 0.8 }, onClick: handleClick }, { children: text }), void 0));
};

exports.Button = Button;
exports.MotionButton = MotionButton;
exports.Typograph = Typograph;
//# sourceMappingURL=index.js.map
