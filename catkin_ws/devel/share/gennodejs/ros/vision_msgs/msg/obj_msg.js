// Auto-generated. Do not edit!

// (in-package vision_msgs.msg)


"use strict";

const _serializer = _ros_msg_utils.Serialize;
const _arraySerializer = _serializer.Array;
const _deserializer = _ros_msg_utils.Deserialize;
const _arrayDeserializer = _deserializer.Array;
const _finder = _ros_msg_utils.Find;
const _getByteLength = _ros_msg_utils.getByteLength;

//-----------------------------------------------------------

class obj_msg {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.obj_id = null;
      this.obj_score = null;
      this.obj_center_x = null;
      this.obj_center_y = null;
      this.obj_size_x = null;
      this.obj_size_y = null;
    }
    else {
      if (initObj.hasOwnProperty('obj_id')) {
        this.obj_id = initObj.obj_id
      }
      else {
        this.obj_id = 0.0;
      }
      if (initObj.hasOwnProperty('obj_score')) {
        this.obj_score = initObj.obj_score
      }
      else {
        this.obj_score = 0.0;
      }
      if (initObj.hasOwnProperty('obj_center_x')) {
        this.obj_center_x = initObj.obj_center_x
      }
      else {
        this.obj_center_x = 0.0;
      }
      if (initObj.hasOwnProperty('obj_center_y')) {
        this.obj_center_y = initObj.obj_center_y
      }
      else {
        this.obj_center_y = 0.0;
      }
      if (initObj.hasOwnProperty('obj_size_x')) {
        this.obj_size_x = initObj.obj_size_x
      }
      else {
        this.obj_size_x = 0.0;
      }
      if (initObj.hasOwnProperty('obj_size_y')) {
        this.obj_size_y = initObj.obj_size_y
      }
      else {
        this.obj_size_y = 0.0;
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type obj_msg
    // Serialize message field [obj_id]
    bufferOffset = _serializer.float64(obj.obj_id, buffer, bufferOffset);
    // Serialize message field [obj_score]
    bufferOffset = _serializer.float64(obj.obj_score, buffer, bufferOffset);
    // Serialize message field [obj_center_x]
    bufferOffset = _serializer.float64(obj.obj_center_x, buffer, bufferOffset);
    // Serialize message field [obj_center_y]
    bufferOffset = _serializer.float64(obj.obj_center_y, buffer, bufferOffset);
    // Serialize message field [obj_size_x]
    bufferOffset = _serializer.float64(obj.obj_size_x, buffer, bufferOffset);
    // Serialize message field [obj_size_y]
    bufferOffset = _serializer.float64(obj.obj_size_y, buffer, bufferOffset);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type obj_msg
    let len;
    let data = new obj_msg(null);
    // Deserialize message field [obj_id]
    data.obj_id = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [obj_score]
    data.obj_score = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [obj_center_x]
    data.obj_center_x = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [obj_center_y]
    data.obj_center_y = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [obj_size_x]
    data.obj_size_x = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [obj_size_y]
    data.obj_size_y = _deserializer.float64(buffer, bufferOffset);
    return data;
  }

  static getMessageSize(object) {
    return 48;
  }

  static datatype() {
    // Returns string type for a message object
    return 'vision_msgs/obj_msg';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '9e2023751502f5af149d77b1a75f5f33';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    float64 obj_id
    float64 obj_score
    float64 obj_center_x
    float64 obj_center_y
    float64 obj_size_x
    float64 obj_size_y
    
    `;
  }

  static Resolve(msg) {
    // deep-construct a valid message object instance of whatever was passed in
    if (typeof msg !== 'object' || msg === null) {
      msg = {};
    }
    const resolved = new obj_msg(null);
    if (msg.obj_id !== undefined) {
      resolved.obj_id = msg.obj_id;
    }
    else {
      resolved.obj_id = 0.0
    }

    if (msg.obj_score !== undefined) {
      resolved.obj_score = msg.obj_score;
    }
    else {
      resolved.obj_score = 0.0
    }

    if (msg.obj_center_x !== undefined) {
      resolved.obj_center_x = msg.obj_center_x;
    }
    else {
      resolved.obj_center_x = 0.0
    }

    if (msg.obj_center_y !== undefined) {
      resolved.obj_center_y = msg.obj_center_y;
    }
    else {
      resolved.obj_center_y = 0.0
    }

    if (msg.obj_size_x !== undefined) {
      resolved.obj_size_x = msg.obj_size_x;
    }
    else {
      resolved.obj_size_x = 0.0
    }

    if (msg.obj_size_y !== undefined) {
      resolved.obj_size_y = msg.obj_size_y;
    }
    else {
      resolved.obj_size_y = 0.0
    }

    return resolved;
    }
};

module.exports = obj_msg;
