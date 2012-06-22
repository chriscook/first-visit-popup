/*
 * First Visit Popup jQuery Plugin version 1.1
 * Chris Cook - chris@chris-cook.co.uk
 */

(function ($) {

	'use strict';

	$.firstVisitPopup = function (settings) {

		if (!getCookie('fvpp' + settings.cookieName)) {
			showMessage();
		}

		if (typeof(settings.showAgainSelector) !== 'undefined') {
			$(settings.showAgainSelector).on('click', function () {
				showMessage();
			});
		}

		$('body').on('click', '#fvpp-blackout, #fvpp-close', function () {
			$('#fvpp-blackout').remove();
			$('#fvpp-dialog').remove();
			setCookie('fvpp' + settings.cookieName, 'true');
		});

		function showMessage() {
			$('body').append('<div id="fvpp-blackout"></div><div id="fvpp-dialog"><a id="fvpp-close">&#10006;</a><h2>' + settings.header + '</h2>' + settings.body + '</div>');
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
