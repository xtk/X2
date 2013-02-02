goog.provide('X.Vector');

goog.require('goog.vec.Vec3');


goog.exportSymbol('X.Vector.create', goog.vec.Vec3.createFloat32FromValues);
goog.exportSymbol('X.Vector.clone', goog.vec.Vec3.cloneFloat32);
goog.exportSymbol('X.Vector.add', goog.vec.Vec3.add);
goog.exportSymbol('X.Vector.subtract', goog.vec.Vec3.subtract);
goog.exportSymbol('X.Vector.negate', goog.vec.Vec3.negate);
goog.exportSymbol('X.Vector.scale', goog.vec.Vec3.scale);
goog.exportSymbol('X.Vector.magnitude', goog.vec.Vec3.magnitude);
goog.exportSymbol('X.Vector.normalize', goog.vec.Vec3.normalize);
goog.exportSymbol('X.Vector.dot', goog.vec.Vec3.dot);
goog.exportSymbol('X.Vector.cross', goog.vec.Vec3.cross);
goog.exportSymbol('X.Vector.distance', goog.vec.Vec3.distance);
goog.exportSymbol('X.Vector.direction', goog.vec.Vec3.direction);
goog.exportSymbol('X.Vector.lerp', goog.vec.Vec3.lerp);