/*
 * First Visit Popup jQuery Plugin version 1.0
 * Chris Cook - chris@chris-cook.co.uk
 */

(function ($) {

	'use strict';

	$.firstVisitPopup = function (settings) {

		if (!getCookie('fvpp' + settings.cookieName)) {
			$('body').append('<div id="fvpp-blackout"></div><div id="fvpp-dialog"><a id="fvpp-close">&#10006;</a><h2>' + settings.header + '</h2>' + settings.body + '</div>');
			$('#fvpp-blackout, #fvpp-close').on('click', function () {
				$('#fvpp-blackout').hide();
				$('#fvpp-dialog').hide();
				setCookie('fvpp' + settings.cookieName, 'true');
			});
		}

		function setCookie(name, value) {
			var date = new Date(),
				expires = 'expires=';
			date.setTime(date.getTime() + 31536000000);
			expires += date.toGMTString();
			document.cookie = name + '=' + value + '; ' + expires + '; path=/';
		}

		function getCookie(name) {
			var allCookies = document.cookie.split(';'),
				cookieCounter = 0,
				currentCookie = '';
			for (cookieCounter = 0; cookieCounter < allCookies.length; cookieCounter++) {
				currentCookie = allCookies[cookieCounter];
				while (currentCookie.charAt(0) === ' ') {
					currentCookie = currentCookie.substring(1, currentCookie.length);
				}
				if (currentCookie.indexOf(name + '=') === 0) {
					return currentCookie.substring(name.length + 1, currentCookie.length);
				}
			}
			return false;
		}

	};

})(jQuery);
