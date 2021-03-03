
"use strict";

let Detection2DArray = require('./Detection2DArray.js');
let VisionInfo = require('./VisionInfo.js');
let Detection3DArray = require('./Detection3DArray.js');
let ObjectHypothesis = require('./ObjectHypothesis.js');
let Detection3D = require('./Detection3D.js');
let BoundingBox2D = require('./BoundingBox2D.js');
let obj_msg = require('./obj_msg.js');
let Classification3D = require('./Classification3D.js');
let BoundingBox3D = require('./BoundingBox3D.js');
let Detection2D = require('./Detection2D.js');
let ObjectHypothesisWithPose = require('./ObjectHypothesisWithPose.js');
let Classification2D = require('./Classification2D.js');

module.exports = {
  Detection2DArray: Detection2DArray,
  VisionInfo: VisionInfo,
  Detection3DArray: Detection3DArray,
  ObjectHypothesis: ObjectHypothesis,
  Detection3D: Detection3D,
  BoundingBox2D: BoundingBox2D,
  obj_msg: obj_msg,
  Classification3D: Classification3D,
  BoundingBox3D: BoundingBox3D,
  Detection2D: Detection2D,
  ObjectHypothesisWithPose: ObjectHypothesisWithPose,
  Classification2D: Classification2D,
};
