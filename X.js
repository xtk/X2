goog.provide('X');

/**
 * The XTK namespace.
 *
 * @const
 */
var X = X || {};

goog.require('goog.vec.Mat4');
goog.require('goog.vec.Vec3');


goog.exportSymbol('goog.vec.Mat4.createFloat32Identity', goog.vec.Mat4.createFloat32Identity);
goog.exportSymbol('goog.vec.Mat4.cloneFloat32', goog.vec.Mat4.cloneFloat32);
goog.exportSymbol('goog.vec.Mat4.transpose', goog.vec.Mat4.transpose);
goog.exportSymbol('goog.vec.Mat4.determinant', goog.vec.Mat4.determinant);
goog.exportSymbol('goog.vec.Mat4.invert', goog.vec.Mat4.invert);
goog.exportSymbol('goog.vec.Mat4.multVec3', goog.vec.Mat4.multVec3);
goog.exportSymbol('goog.vec.Mat4.makePerspective', goog.vec.Mat4.makePerspective);
goog.exportSymbol('goog.vec.Mat4.makeFrustum', goog.vec.Mat4.makeFrustum);
goog.exportSymbol('goog.vec.Mat4.makeOrtho', goog.vec.Mat4.makeOrtho);
goog.exportSymbol('goog.vec.Mat4.makeLookAt', goog.vec.Mat4.makeLookAt);
goog.exportSymbol('goog.vec.Mat4.translate', goog.vec.Mat4.translate);
goog.exportSymbol('goog.vec.Mat4.scale', goog.vec.Mat4.scale);
goog.exportSymbol('goog.vec.Mat4.rotate', goog.vec.Mat4.rotate);
goog.exportSymbol('goog.vec.Mat4.rotateX', goog.vec.Mat4.rotateX);
goog.exportSymbol('goog.vec.Mat4.rotateY', goog.vec.Mat4.rotateY);
goog.exportSymbol('goog.vec.Mat4.rotateZ', goog.vec.Mat4.rotateZ);

goog.exportSymbol('goog.vec.Vec3.createFloat32FromValues', goog.vec.Vec3.createFloat32FromValues);
goog.exportSymbol('goog.vec.Vec3.cloneFloat32', goog.vec.Vec3.cloneFloat32);
goog.exportSymbol('goog.vec.Vec3.add', goog.vec.Vec3.add);
goog.exportSymbol('goog.vec.Vec3.subtract', goog.vec.Vec3.subtract);
goog.exportSymbol('goog.vec.Vec3.negate', goog.vec.Vec3.negate);
goog.exportSymbol('goog.vec.Vec3.scale', goog.vec.Vec3.scale);
goog.exportSymbol('goog.vec.Vec3.magnitude', goog.vec.Vec3.magnitude);
goog.exportSymbol('goog.vec.Vec3.normalize', goog.vec.Vec3.normalize);
goog.exportSymbol('goog.vec.Vec3.dot', goog.vec.Vec3.dot);
goog.exportSymbol('goog.vec.Vec3.cross', goog.vec.Vec3.cross);
goog.exportSymbol('goog.vec.Vec3.distance', goog.vec.Vec3.distance);
goog.exportSymbol('goog.vec.Vec3.direction', goog.vec.Vec3.direction);
goog.exportSymbol('goog.vec.Vec3.lerp', goog.vec.Vec3.lerp);
