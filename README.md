jQuery Typography Troll
=======================
A jQuery plugin for confusing typography geeks
----------------------------------------------
&copy; 2011 Michael O'Connor, http://www.mcoconnor.net
https://github.com/mcoconnor/jquery-typographytroll

Typography Troll provides an easy way to confuse readers who try to distinguish which of several similar fonts you're using (like Helvetica and Arial) by randomly assigning a font family to each character in the selected text.

Requirements
------------
Just jQuery.


Usage
-----

First, load [jQuery](http://jquery.com/) and the plugin:

    <script src="jquery.min.js" type="text/javascript"></script>
    <script src="jquery.typographytroll.js" type="text/javascript"></script>

Now, let's attach it to your page on DOM ready:

    jQuery(document).ready(function() {
      jQuery('body').typographyTroll();
    });

Typography Troll also takes two optional arguments: `fontFamilies` and `fallback`.  These arguments accept an array of `font-family` names and a string, respectively, and determine the styles used in the resulting text.  If not provided, the values `['Helvetica', 'Arial']` and `'sans-serif'` will be used. For example, for a monospaced block, use:

    jQuery('code').typographyTroll(['Courier','Monaco'],'monospace');

How it works
------------
Typography Troll works by first finding all of the text nodes in the  DOM in the selected elements and then wrapping each character in them with a `span`.  The span is assigned a random `font-family` from the options given in the `fontFamilies` argument.  The other options in the list are used as fallbacks (so your text won't look super ugly if the user is missing a few fonts) with the final option being the value of the `fallback` argument.
