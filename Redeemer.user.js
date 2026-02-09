// ==UserScript==
// @name        The Redeemer
// @namespace   psydex
// @description Pops up the Steam product activation webpage when copying keys from any website. Does not require Steam to be installed!
// @include     *
// @version     2.2
// @grant       none
// @homepageURL https://github.com/psydex/TheRedeemer/
// @downloadURL https://raw.githubusercontent.com/psydex/TheRedeemer/master/TheRedeemer.js
// @updateURL   https://raw.githubusercontent.com/psydex/TheRedeemer/master/TheRedeemer.js
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
