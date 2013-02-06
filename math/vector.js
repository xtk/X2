goog.provide('X.Vector');

goog.require('goog.math.Vec3');


goog.exportSymbol('X.Vector', goog.math.Vec3);
goog.exportSymbol('X.Vector.prototype.clone', goog.math.Vec3.prototype.clone);
goog.exportSymbol('X.Vector.prototype.magnitude',goog.math.Vec3.prototype.magnitude);
goog.exportSymbol('X.Vector.prototype.scale',goog.math.Vec3.prototype.scale);
goog.exportSymbol('X.Vector.prototype.invert',goog.math.Vec3.prototype.invert);
goog.exportSymbol('X.Vector.prototype.normalize',goog.math.Vec3.prototype.normalize);
goog.exportSymbol('X.Vector.prototype.add',goog.math.Vec3.prototype.add);
goog.exportSymbol('X.Vector.prototype.subtract',goog.math.Vec3.prototype.subtract);
goog.exportSymbol('X.Vector.dot',goog.math.Vec3.dot);
goog.exportSymbol('X.Vector.cross',goog.math.Vec3.cross);
goog.exportSymbol('X.Vector.distance',goog.math.Vec3.distance);
goog.exportSymbol('X.Vector.lerp',goog.math.Vec3.lerp);