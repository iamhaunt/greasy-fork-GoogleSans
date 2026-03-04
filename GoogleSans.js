// ==UserScript==
// @name         Universal Google Sans
// @namespace    Violentmonkey
// @version      1.4
// @description  Apply Google Sans universally
// @author       https://github.com/iamhaunt
// @match        *://*/*
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    const css = `
        @import url('https://fonts.googleapis.com/css2?family=Product+Sans:wght@400;700&display=swap');

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

        html, body, *:not([class*="icon"]):not([class*="fa-"]):not(i):not(svg):not(path) {
            font-family: "Google Sans Hybrid", "Product Sans", "Google Sans", system-ui, -apple-system, sans-serif !important;
        }
    `;

    function inject() {
        if (!document.getElementById("universal-google-sans")) {
            const style = document.createElement('style');
            style.id = "universal-google-sans";
            style.textContent = css;
            (document.head || document.documentElement).appendChild(style);
        }
    }

    inject();

    const observer = new MutationObserver(inject);
    observer.observe(document.documentElement, { childList: true, subtree: true });

    window.addEventListener('load', inject);
})();
