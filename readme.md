First Visit Popup
=================

Version 1.1
-----------

### Introduction

__First Visit Popup__ is a _jQuery_ plug-in which shows the user a message on their first visit to a web page.

### How to use it

1. Add the file (`jquery.firstVisitPopup.js`) to your project, along with _jQuery_.
2. Add the following _jQuery_ to your page, to be executed on load:

```javascript
	$.firstVisitPopup({
		cookieName : 'homepage',
		header : 'Welcome to my site',
		body : '<p>Hello, welcome to my website.</p>',
		showAgainSelector : '#show-message'
	});
```

...where `cookieName` is a name for cookie which will determine whether or not to show the message again, `header` is the header for the message (enclosed in a `h2` tag by defualt), `body` is the body text for the message (not enclosed in any tags by default), and `showAgainSelector` is the selector of an element on the page the user can click to show the message again (optional).

A demo is available in demo.html.

### Author and Acknowledgements

+ Written by [Chris Cook](http://chris-cook.co.uk)
