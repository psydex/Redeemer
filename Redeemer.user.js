// ==UserScript==
// @name        Redeemer
// @namespace   psydex
// @description Pops up the Steam product activation webpage when copying keys from any website. Does not require Steam to be installed!
// @author      psydex
// @match       *://*/*
// @version     2.5
// @grant       none
// @homepageURL https://github.com/psydex/Redeemer/
// @downloadURL https://github.com/psydex/Redeemer/raw/refs/heads/master/Redeemer.user.js
// @updateURL   https://github.com/psydex/Redeemer/raw/refs/heads/master/Redeemer.user.js
// ==/UserScript==
(function() {
	"use strict";
	var activateProduct = function(e) {
		var productKey = window.getSelection().toString().trim() || e.target.value;
		if (/^[\d\w]{2,5}(\-[\d\w]{4,5}){2,4}$/.test(productKey)) {
			window.open("https://store.steampowered.com/account/registerkey?key=" + productKey);
		}
	};
	window.addEventListener("copy", activateProduct, false);
}());
