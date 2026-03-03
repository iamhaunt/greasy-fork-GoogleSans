// ==UserScript==
// @name         Google Sans Global (Fixed)
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  Apply Google Sans safely to all websites
// @author       You
// @match        *://*/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    const fontCSS = `
        @font-face {
            font-family: 'GoogleSansCustom';
            src: url('https://cdn.jsdelivr.net/gh/iamhaunt/Stylus-GoogleSans@main/GoogleSans-Regular.woff2') format('woff2');
            font-display: swap;
        }

        /* Target text elements specifically to avoid breaking Icon Fonts */
        body, p, h1, h2, h3, h4, h5, h6, 
        span:not([class*="icon"]):not([class*="fa"]):not([class*="material"]), 
        div:not([class*="icon"]):not([class*="fa"]):not([class*="material"]),
        a, li, input, textarea {
            font-family: 'GoogleSansCustom', system-ui, -apple-system, sans-serif !important;
        }
    `;

    // Function to inject style safely
    const inject = () => {
        if (document.head || document.documentElement) {
            const style = document.createElement('style');
            style.id = 'google-sans-fix';
            style.textContent = fontCSS;
            (document.head || document.documentElement).appendChild(style);
        }
    };

    // Try to inject immediately
    inject();

    // Backup: If the head wasn't ready, wait for it
    if (!document.head) {
        const observer = new MutationObserver((mutations, obs) => {
            if (document.head) {
                inject();
                obs.disconnect();
            }
        });
        observer.observe(document.documentElement, { childList: true });
    }
})();