// provides
goog.provide('X.Base');

// requires
goog.require('X');
goog.require('X.Matrix');
goog.require('X.Vector');
goog.require('goog.events.EventTarget');


/**
 * The superclass for all X.Base-objects. All derived objects will be registered
 * for event handling.
 * 
 * @constructor
 * @extends goog.events.EventTarget
 */
X.Base = function() {

  //
  // register this class within the event system by calling the superclass
  // constructor
  goog.base(this);
  
  //
  // class attributes
  
  /**
   * The className of this class.
   * 
   * @type {!string}
   * @protected
   */
  this._classname = 'Base';
  
  /**
   * The unique id of this instance.
   * 
   * @type {!number}
   * @protected
   */
  this._id = X.counter++;
  
  /**
   * The 'dirty' flag of this instance.
   * 
   * @type {!boolean}
   * @protected
   */
  this._dirty = false;
  
};
// enable events
goog.inherits(X.Base, goog.events.EventTarget);


Object.defineProperty(X.Base.prototype, 'classname', {
  /** 
   * Get the classname of this instance.
   * 
   * @return {!string} Returns the classname. 
   * @this {X.Base} 
   * 
   */
  get : function() {
    return this._classname;
  }
});

Object.defineProperty(X.Base.prototype, 'id', {
  /** 
   * Get the unique id of this instance.
   * 
   * @return {!number} Returns the id. 
   * @this {X.Base} 
   * 
   */
  get : function() {
    return this._id;
  }
});

Object.defineProperty(X.Base.prototype, 'dirty', {
  /** 
   * Check if this instance was modified.
   * 
   * @return {!boolean} Returns TRUE if this instance was modified, FALSE otherwise. 
   * @this {X.Base} 
   * 
   */
  get : function() {
    return this._dirty;
  },
  /** 
   * Mark this instance as modified (==dirty) or clean.
   * 
   * @param {!boolean} dirty TRUE if this instance was modified, FALSE otherwise. 
   * @this {X.Base}
   * 
   */  
  set : function(dirty) {
    this._dirty = dirty;
  }
});


// export symbols (required for advanced compilation)
goog.exportSymbol('X.Base', X.Base);
