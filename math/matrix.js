// provides
goog.provide('X.Matrix');

// requires
goog.require('X.Vector');
goog.require('goog.vec.Mat4');


/**
 * Makes the given 4x4 matrix a modelview matrix of a camera so that
 * the camera is 'looking at' the given center point.
 *
 * @param {!Float32Array} mat The matrix.
 * @param {!X.Vector} eyePt The position of the eye point
 *     (camera origin).
 * @param {!X.Vector} centerPt The point to aim the camera at.
 * @param {!X.Vector} worldUpVec The vector that identifies
 *     the up direction for the camera.
 * @return {!Float32Array} return mat so that operations can be
 *     chained.
 */
X.Matrix.makeLookAt = function(mat, eyePt, centerPt, worldUpVec) {

  // from Google Closure Library
  // http://closure-library.googlecode.com/svn/docs/closure_goog_vec_mat4.js.source.html#line1389
  // but adjusted to use goog.math.Vec3 for performance

  // Compute the direction vector from the eye point to the center point and
  // normalize.
  var fwdVec = centerPt.subtract(eyePt);
  fwdVec.normalize();

  // Compute the side vector from the forward vector and the input up vector.
  var sideVec = X.Vector.cross(fwdVec, worldUpVec);
  sideVec.normalize();

  // Now the up vector to form the orthonormal basis.
  var upVec = X.Vector.cross(sideVec, fwdVec);
  upVec.normalize();

  // Update the view matrix with the new orthonormal basis and position the
  // camera at the given eye point.
  fwdVec.invert();
  goog.vec.Mat4.setRowValues(mat, 0, sideVec.x, sideVec.y, sideVec.z, 0);
  goog.vec.Mat4.setRowValues(mat, 1, upVec.x, upVec.y, upVec.z, 0);
  goog.vec.Mat4.setRowValues(mat, 2, fwdVec.x, fwdVec.y, fwdVec.z, 0);
  goog.vec.Mat4.translate(
      mat, -eyePt.x, -eyePt.y, -eyePt.z);

  return mat;

};


/**
 * Multiply the matrix by a vector.
 *
 * @param {!Float32Array} mat The matrix.
 * @param {!number} x The x coordinate of the vector.
 * @param {!number} y The y coordinate of the vector.
 * @param {!number} z The z coordinate of the vector.
 * @return {!X.Vector} The resulting vector.
 */
X.Matrix.multiplyByVector = function(mat, x, y, z) {

  // from Google Closure Library
  // http://closure-library.googlecode.com/svn/docs/closure_goog_vec_mat4.js.source.html#line1133
  // but adjusted to *not* use goog.vec.Vec3 for performance

  var invw = 1 / (x * mat[3] + y * mat[7] + z * mat[11] + mat[15]);
  var _x = (x * mat[0] + y * mat[4] + z * mat[8] + mat[12]) * invw;
  var _y = (x * mat[1] + y * mat[5] + z * mat[9] + mat[13]) * invw;
  var _z = (x * mat[2] + y * mat[6] + z * mat[10] + mat[14]) * invw;

  return new X.Vector(_x, _y, _z);

};


/**
 * Swap two rows of a matrix.
 *
 * @param {!Float32Array} mat The matrix.
 * @param {!number} row1 The index of the first row.
 * @param {!number} row2 The index of the second row.
 * @return {!Float32Array} The resulting matrix.
 */
X.Matrix.swapRows = function(mat, row1, row2) {

  var _buffer1 = new Float32Array(4);
  var _buffer2 = new Float32Array(4);
  goog.vec.Mat4.getRow(mat, row1, _buffer1);
  goog.vec.Mat4.getRow(mat, row2, _buffer2);

  goog.vec.Mat4.setRow(mat, row1, _buffer2);
  goog.vec.Mat4.setRow(mat, row2, _buffer1);

  return mat;

};


/**
 * Swap two columns of a matrix.
 *
 * @param {!Float32Array} mat The matrix.
 * @param {!number} col1 The index of the first column.
 * @param {!number} col2 The index of the second column.
 * @return {!Float32Array} The resulting matrix.
 */
X.Matrix.swapCols = function(mat, col1, col2) {

  var _buffer1 = new Float32Array(4);
  var _buffer2 = new Float32Array(4);
  goog.vec.Mat4.getColumn(mat, col1, _buffer1);
  goog.vec.Mat4.getColumn(mat, col2, _buffer2);

  goog.vec.Mat4.setColumn(mat, col1, _buffer2);
  goog.vec.Mat4.setColumn(mat, col2, _buffer1);

  return mat;

};

// expose the following goog.vec.Mat4 functionality
/**
 * @see goog.vec.Mat4.createFloat32Identity
 */
X.Matrix.identity = goog.vec.Mat4.createFloat32Identity;


/**
 * @see goog.vec.Mat4.cloneFloat32
 */
X.Matrix.clone = goog.vec.Mat4.cloneFloat32;


/**
 * @see goog.vec.Mat4.transpose
 */
X.Matrix.transpose = goog.vec.Mat4.transpose;


/**
 * @see goog.vec.Mat4.determinant
 */
X.Matrix.determinant = goog.vec.Mat4.determinant;


/**
 * @see goog.vec.Mat4.invert
 */
X.Matrix.invert = goog.vec.Mat4.invert;


/**
 * @see goog.vec.Mat4.makePerspective
 */
X.Matrix.makePerspective = goog.vec.Mat4.makePerspective;


/**
 * @see goog.vec.Mat4.makeFrustum
 */
X.Matrix.makeFrustum = goog.vec.Mat4.makeFrustum;


/**
 * @see goog.vec.Mat4.makeOrtho
 */
X.Matrix.makeOrtho = goog.vec.Mat4.makeOrtho;


/**
 * @see goog.vec.Mat4.multMat
 */
X.Matrix.multiply = goog.vec.Mat4.multMat;


/**
 * @see goog.vec.Mat4.translate
 */
X.Matrix.translate = goog.vec.Mat4.translate;


/**
 * @see goog.vec.Mat4.scale
 */
X.Matrix.scale = goog.vec.Mat4.scale;


/**
 * @see goog.vec.Mat4.rotate
 */
X.Matrix.rotate = goog.vec.Mat4.rotate;


/**
 * @see goog.vec.Mat4.rotateX
 */
X.Matrix.rotateX = goog.vec.Mat4.rotateX;


/**
 * @see goog.vec.Mat4.rotateY
 */
X.Matrix.rotateY = goog.vec.Mat4.rotateY;


/**
 * @see goog.vec.Mat4.rotateZ
 */
X.Matrix.rotateZ = goog.vec.Mat4.rotateZ;


goog.exportSymbol('X.Matrix.identity', X.Matrix.identity);
goog.exportSymbol('X.Matrix.clone', X.Matrix.clone);
goog.exportSymbol('X.Matrix.transpose', X.Matrix.transpose);
goog.exportSymbol('X.Matrix.determinant', X.Matrix.determinant);
goog.exportSymbol('X.Matrix.invert', X.Matrix.invert);
goog.exportSymbol('X.Matrix.multiply', X.Matrix.multiply);
goog.exportSymbol('X.Matrix.multiplyByVector', X.Matrix.multiplyByVector);
goog.exportSymbol('X.Matrix.makePerspective', X.Matrix.makePerspective);
goog.exportSymbol('X.Matrix.makeFrustum', X.Matrix.makeFrustum);
goog.exportSymbol('X.Matrix.makeOrtho', X.Matrix.makeOrtho);
goog.exportSymbol('X.Matrix.makeLookAt', X.Matrix.makeLookAt);
goog.exportSymbol('X.Matrix.translate', X.Matrix.translate);
goog.exportSymbol('X.Matrix.scale', X.Matrix.scale);
goog.exportSymbol('X.Matrix.rotate', X.Matrix.rotate);
goog.exportSymbol('X.Matrix.rotateX', X.Matrix.rotateX);
goog.exportSymbol('X.Matrix.rotateY', X.Matrix.rotateY);
goog.exportSymbol('X.Matrix.rotateZ', X.Matrix.rotateZ);
goog.exportSymbol('X.Matrix.swapRows', X.Matrix.swapRows);
goog.exportSymbol('X.Matrix.swapCols', X.Matrix.swapCols);
