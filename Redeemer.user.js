// ==UserScript==
// @name        Redeemer
// @namespace   psydex
// @description Pops up the Steam product activation webpage when copying keys from any website. Does not require Steam to be installed!
// @author      psydex
// @include     *
// @match       *://*/*
// @version     2.5
// @grant       none
// @homepageURL https://github.com/psydex/Redeemer/
// @downloadURL https://github.com/psydex/Redeemer/raw/refs/heads/master/Redeemer.user.js
// @updateURL   https://github.com/psydex/Redeemer/raw/refs/heads/master/Redeemer.user.js
// ==/UserScript==

(function () {
    "use strict";

    function activateProduct(e) {

        let productKey =
            (e.clipboardData && e.clipboardData.getData("text")) ||
            window.getSelection().toString() ||
            (e.target && e.target.value) ||
            "";

        productKey = productKey.trim();

        if (!productKey) return;

        // Steam key format: XXXXX-XXXXX-XXXXX
        if (/^[A-Z0-9]{5}(-[A-Z0-9]{5}){2}$/i.test(productKey)) {

            const url =
                "https://store.steampowered.com/account/registerkey?key=" +
                encodeURIComponent(productKey);

            window.open(url, "_blank", "noopener,noreferrer");
        }
    }

    window.addEventListener("copy", activateProduct, false);

})();
