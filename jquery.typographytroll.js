/**
 * TypographyTroll
 *
 * A jQuery plugin for confusing typography geeks
 * https://github.com/mcoconnor/jquery-TypographyTroll
 *
 * &copy; 2011 Michael O'Connor 
 * [michael at mcoconnor dot net]
 * <http://www.mcoconnor.net>
 * 
 * For usage and examples, visit:
 * http://mcoconnor.github.com/jquery-typographyTroll/
 *
 * Licensed under the MIT:
 * http://www.opensource.org/licenses/mit-license.php
 * 
 */

(function( $ ) {
  $.fn.typographyTroll = function(fontFamilies,fallback) {
    var ret = [];
	//get the text nodes
    this.contents().each( function() {
    var fn = arguments.callee;
      if ( this.nodeType == 3 ) 
        ret.push(this);
      else $(this).contents().each(fn);
  });

  //trolololol
  if (fontFamilies === undefined) fontFamilies = ['Helvetica','Arial'];
  if (fallback === undefined) fallback = 'sans-serif';
  var spans = [];
  var temp;
  for (i in fontFamilies){
    spans.push("</span><span style='font-family:"+fontFamilies.join(', ')+', '+fallback+";'>");
	temp = fontFamilies.shift();
	fontFamilies.push(temp);
  }
  $(ret).replaceWith(function(){
	var pieces = [spans[0].substr(7)];
    var chars = this.data.trim().split("");
	for (i in chars){
		pieces.push(chars[i]);
		if (i != pieces.length-1) pieces.push(spans[Math.floor(Math.random()*spans.length)]);
	}
	pieces.push('</span>');
	return pieces.join("");
  });
  }
})( jQuery );
