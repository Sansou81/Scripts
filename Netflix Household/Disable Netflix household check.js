// ==UserScript==
// @name         Disable Netflix houshold check
// @namespace    https://github.com/Sansou81
// @version      1.0.0
// @description  Small check to disable "Your device isn’t part of the Netflix household" check on Netflix
// @author       Sansou81
// @match        https://www.netflix.com/*
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

GM_addStyle ( `
    .nf-modal.interstitial-full-screen {
        display: none;
    }
` );