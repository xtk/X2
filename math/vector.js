goog.provide('X.Vector');

// requires
goog.require('goog.math.Vec3');


// expose the following goog.math.Vec3 functionality
/**
 * @constructor
 * @see goog.math.Vec3
 */
X.Vector = goog.math.Vec3;


/**
 * @see goog.math.Vec3.prototype.clone
 */
X.Vector.prototype.clone = goog.math.Vec3.prototype.clone;


/**
 * @see goog.math.Vec3.prototype.magnitude
 */
X.Vector.prototype.magnitude = goog.math.Vec3.prototype.magnitude;


/**
 * @see goog.math.Vec3.prototype.scale
 */
X.Vector.prototype.scale = goog.math.Vec3.prototype.scale;


/**
 * @see goog.math.Vec3.prototype.invert
 */
X.Vector.prototype.invert = goog.math.Vec3.prototype.invert;


/**
 * @see goog.math.Vec3.prototype.add
 */
X.Vector.prototype.add = goog.math.Vec3.prototype.add;


/**
 * @see goog.math.Vec3.prototype.subtract
 */
X.Vector.prototype.subtract = goog.math.Vec3.prototype.subtract;


/**
 * Normalize the vector. The goog.math.Vec3.prototype.normalize
 * did not check on a magnitude of 0 resulting in an error.
 *
 * @return {!X.Vector|!goog.math.Vec3} The normalized vector.
 */
X.Vector.prototype.normalize = function() {
  // add a special check if the magnitude is 0
  var _magnitude = this.magnitude();
  if (_magnitude == 0) {
    return this.scale(0);
  }
  return this.scale(1 / _magnitude);
};


/**
 * @see goog.math.Vec3.dot
 */
X.Vector.dot = goog.math.Vec3.dot;


/**
 * @see goog.math.Vec3.cross
 */
X.Vector.cross = goog.math.Vec3.cross;


/**
 * @see goog.math.Vec3.distance
 */
X.Vector.distance = goog.math.Vec3.distance;


/**
 * @see goog.math.Vec3.lerp
 */
X.Vector.lerp = goog.math.Vec3.lerp;

// now we need to make sure we can access the x,y,z
// components of a goog.math.Vec3 which might be renamed
// during the compilation. we don't want to modify the goog.math.Vec3
// class so this is the easiest workaround.
/**
 * Get the x component of this vector.
 *
 * @return {number} The x component of this vector.
 * @public
 */
X.Vector.prototype.__defineGetter__('xx', function() {

  return this.x;

});


/**
 * Get the y component of this vector.
 *
 * @return {number} The y component of this vector.
 * @public
 */
X.Vector.prototype.__defineGetter__('yy', function() {

  return this.y;

});


/**
 * Get the z component of this vector.
 *
 * @return {number} The z component of this vector.
 * @public
 */
X.Vector.prototype.__defineGetter__('zz', function() {

  return this.z;

});


goog.exportSymbol('X.Vector', X.Vector);
goog.exportSymbol('X.Vector.prototype.clone', X.Vector.prototype.clone);
goog.exportSymbol('X.Vector.prototype.magnitude', X.Vector.prototype.magnitude);
goog.exportSymbol('X.Vector.prototype.scale', X.Vector.prototype.scale);
goog.exportSymbol('X.Vector.prototype.invert', X.Vector.prototype.invert);
goog.exportSymbol('X.Vector.prototype.normalize', X.Vector.prototype.normalize);
goog.exportSymbol('X.Vector.prototype.add', X.Vector.prototype.add);
goog.exportSymbol('X.Vector.prototype.subtract', X.Vector.prototype.subtract);
goog.exportSymbol('X.Vector.dot', X.Vector.dot);
goog.exportSymbol('X.Vector.cross', X.Vector.cross);
goog.exportSymbol('X.Vector.distance', X.Vector.distance);
goog.exportSymbol('X.Vector.lerp', X.Vector.lerp);
