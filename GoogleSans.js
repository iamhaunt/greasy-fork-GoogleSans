// ==UserScript==
// @name         Universal Google Sans
// @namespace    violentmonkey
// @version      4.0
// @description  WorldWide
// @author       iamhaunt
// @match        *://*/*
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    const css = `
        /* 1. DEFINE THE FONT (Local First, then Remote) */
        @font-face {
            font-family: 'Google Sans Hybrid';
            /* Try local system names first to bypass SteamDB/GitHub security blocks */
            src: local('Google Sans'),
                 local('Google Sans Regular'),
                 local('Product Sans'),
                 /* Fallback to GitHub URL if not installed on PC */
                 url('https://raw.githubusercontent.com/iamhaunt/greasy-fork-GoogleSans/main/GoogleSans-Regular.ttf') format('truetype');
            font-weight: normal;
            font-style: normal;
            font-display: swap;
        }

        /* 2. GLOBAL ENFORCEMENT */
        /* Targets everything (*) but excludes known icon sets to prevent broken UI */
        *:not(i):not([class*="icon"]):not([class*="fa-"]):not([class*="material"]):not([class*="glyph"]):not([class*="vjs-"]) {
            font-family: "Google Sans Hybrid", system-ui, -apple-system, sans-serif !important;
        }

        /* 3. HARD OVERRIDE FOR UI ELEMENTS */
        /* Ensures buttons, inputs, and SteamDB-specific containers comply */
        body, div, span, p, a, input, button, textarea, select {
            font-family: "Google Sans Hybrid", sans-serif !important;
        }

        /* 4. STEAMDB SPECIFIC FIX */
        /* SteamDB uses very specific selectors that sometimes ignore universal rules */
        .app-links, .page-content, .table-products {
            font-family: "Google Sans Hybrid", sans-serif !important;
        }
    `;

    // Injection Logic: Try standard method, fallback to direct DOM injection
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
