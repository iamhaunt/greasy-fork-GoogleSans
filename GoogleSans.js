// ==UserScript==
// @name         Universal Google Sans
// @namespace    Violentmonkey
// @version      1.0
// @description  Apply Google Sans universally
// @author       https://github.com/iamhaunt
// @match        *://*/*
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';


    const fontCSS = `
        @font-face {
            font-family: 'Google Sans Custom';
            src: url('https://raw.githubusercontent.com/iamhaunt/greasy-fork-GoogleSans/main/GoogleSans-Regular.ttf') format('truetype');
            font-display: swap;
        }

        *, *::before, *::after {
            font-family: 'Google Sans Custom', sans-serif !important;
        }
    `;

    if (typeof GM_addStyle !== 'undefined') {
        GM_addStyle(fontCSS);
    } else {
        const style = document.createElement('style');
        style.textContent = fontCSS;
        document.head.append(style);
    }
})();

