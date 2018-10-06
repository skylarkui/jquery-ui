/*!
 * jQuery UI Tabbable @VERSION
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: :tabbable Selector
//>>group: Core
//>>description: Selects elements which can be tabbed to.
//>>docs: http://api.jqueryui.com/tabbable-selector/

define( [ "skylark-jquery", "./version", "./focusable" ], function( $ ) {

	return $.extend( $.expr.pseudos, {
		tabbable: function( element ) {
			var tabIndex = $.attr( element, "tabindex" ),
				hasTabindex = tabIndex != null;
			return ( !hasTabindex || tabIndex >= 0 ) && $.ui.focusable( element, hasTabindex );
		}
	} );

});
