goog.provide('X.Matrix');

goog.require('goog.vec.Mat4');


goog.exportSymbol('X.Matrix.identity', goog.vec.Mat4.createFloat32Identity);
goog.exportSymbol('X.Matrix.clone', goog.vec.Mat4.cloneFloat32);
goog.exportSymbol('X.Matrix.transpose', goog.vec.Mat4.transpose);
goog.exportSymbol('X.Matrix.determinant', goog.vec.Mat4.determinant);
goog.exportSymbol('X.Matrix.invert', goog.vec.Mat4.invert);
goog.exportSymbol('X.Matrix.multVec3', goog.vec.Mat4.multVec3);
goog.exportSymbol('X.Matrix.makePerspective', goog.vec.Mat4.makePerspective);
goog.exportSymbol('X.Matrix.makeFrustum', goog.vec.Mat4.makeFrustum);
goog.exportSymbol('X.Matrix.makeOrtho', goog.vec.Mat4.makeOrtho);
goog.exportSymbol('X.Matrix.makeLookAt', goog.vec.Mat4.makeLookAt);
goog.exportSymbol('X.Matrix.translate', goog.vec.Mat4.translate);
goog.exportSymbol('X.Matrix.scale', goog.vec.Mat4.scale);
goog.exportSymbol('X.Matrix.rotate', goog.vec.Mat4.rotate);
goog.exportSymbol('X.Matrix.rotateX', goog.vec.Mat4.rotateX);
goog.exportSymbol('X.Matrix.rotateY', goog.vec.Mat4.rotateY);
goog.exportSymbol('X.Matrix.rotateZ', goog.vec.Mat4.rotateZ);