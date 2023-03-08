// ==UserScript==
// @name         TikTok Autoplay Blocker
// @namespace    https://www.example.com/
// @version      1
// @description  Disables autoplay on TikTok videos by default
// @match        https://www.tiktok.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function stopAutoplay() {
        // Find all video elements on the page
        const videos = document.querySelectorAll('video');

        // Loop through each video and disable autoplay
        videos.forEach((video) => {
            video.removeAttribute('autoplay');
            video.pause();
            video.currentTime = 0;
        });
    }

    // Stop autoplay when the page is fully loaded
    window.addEventListener('load', function() {
        stopAutoplay();
    });

    // Stop autoplay when new content is added to the page
    const observer = new MutationObserver(stopAutoplay);
    observer.observe(document.body, { childList: true, subtree: true });
})();
