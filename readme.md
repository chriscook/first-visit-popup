First Visit Popup
=================

Version 1.2
-----------

### Introduction

__First Visit Popup__ is a _jQuery_ plug-in which shows the user a message on their first visit to a web page.

### How to use it

1. Add the file (`jquery.firstVisitPopup.js`) to your project, along with _jQuery_.
2. Add an element to the page for your popup message.
3. Add the following _jQuery_ to your page, to be executed on load:

```javascript
	$('#my-welcome-message').firstVisitPopup({
		cookieName : 'homepage',
		showAgainSelector : '#show-message'
	});
```

...where `'#my-welcome-message'` is a selector for the element added in step 2, `cookieName` is a name for cookie which will determine whether or not to show the message again, and `showAgainSelector` is the selector of an element on the page the user can click to show the message again (optional).

The script doesn't add any styling information, so you'll have to manually place the elements and hide them. See demo.html for an example.

### Author and Acknowledgements

+ Written by [Chris Cook](http://chris-cook.co.uk)
