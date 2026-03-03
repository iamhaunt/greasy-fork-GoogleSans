// ==UserScript==
// @name         Universal Google Sans
// @namespace    Violentmonkey
// @version      1.0
// @description  WorldWide
// @author       iamhaunt
// ==/UserScript==

(function() {
    'use strict';

    const css = `
        @font-face {
            font-family: 'Google Sans Hybrid';
            src: local('Google Sans'),
                 local('Google Sans Regular'),
                 local('Product Sans'),
                 url('https://raw.githubusercontent.com/iamhaunt/greasy-fork-GoogleSans/main/GoogleSans-Regular.ttf') format('truetype');
            font-weight: normal;
            font-style: normal;
            font-display: swap;
        }

        *:not(i):not([class*="icon"]):not([class*="fa-"]):not([class*="material"]):not([class*="glyph"]):not([class*="vjs-"]) {
            font-family: "Google Sans Hybrid", system-ui, -apple-system, sans-serif !important;
        }

        body, div, span, p, a, input, button, textarea, select {
            font-family: "Google Sans Hybrid", sans-serif !important;
        }

        .app-links, .page-content, .table-products {
            font-family: "Google Sans Hybrid", sans-serif !important;
        }
    `;

    try {
        if (typeof GM_addStyle !== 'undefined') {
            GM_addStyle(css);
        } else {
            const style = document.createElement('style');
            style.textContent = css;
            (document.head || document.documentElement).appendChild(style);
        }
    } catch (e) {
        console.error("Font script failed to inject:", e);
    }
})();

