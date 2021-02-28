import { jsx } from 'react/jsx-runtime';
import styled from 'styled-components';
import { motion } from 'framer-motion';

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

/** `Button` 컴포넌트는 어떠한 작업을 실행할 때 사용됩니다. */
var Button = function (_a) {
    var text = _a.text, onClick = _a.onClick;
    function handleClick() {
        onClick();
    }
    return jsx(StyledButton, __assign({ onClick: handleClick }, { children: text }), void 0);
};
var StyledButton = styled.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: 10px 20px;\n  background-color: yellow;\n"], ["\n  padding: 10px 20px;\n  background-color: yellow;\n"])));
var templateObject_1;

/** `MotionButton` 기존 Button 컴포넌트에 에니메이션을 부각시켰습니다. */
var MotionButton = function (_a) {
    var text = _a.text, onClick = _a.onClick;
    function handleClick() {
        onClick();
    }
    return (jsx(motion.button, __assign({ whileHover: { scale: 1.2 }, whileTap: { scale: 0.8 }, onClick: handleClick }, { children: text }), void 0));
};

export { Button, MotionButton };
//# sourceMappingURL=index.esm.js.map
