goog.provide('X');


/**
 * The XTK namespace.
 *
 * @const
 */
var X = X || {};

/**
 * The release tag with a timestamp which gets replaced during build.
 * 
 * @type {!string}
 * @public
 */
X.release = 'X2 release 0 ###TIMESTAMP### -- http://www.goXTK.com -- @goXTK';

/**
 * The counter for unique ids.
 * 
 * @type {!number}
 * @public
 */
X.counter = 0;

//make sure we don't overwrite a $ sign to ensure compatibility with jQuery
var $ = window.$;

goog.exportSymbol('$', $);
goog.exportSymbol('X.release', X.release);
goog.exportSymbol('X.counter', X.counter);