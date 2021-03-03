;; Auto-generated. Do not edit!


(when (boundp 'vision_msgs::obj_msg)
  (if (not (find-package "VISION_MSGS"))
    (make-package "VISION_MSGS"))
  (shadow 'obj_msg (find-package "VISION_MSGS")))
(unless (find-package "VISION_MSGS::OBJ_MSG")
  (make-package "VISION_MSGS::OBJ_MSG"))

(in-package "ROS")
;;//! \htmlinclude obj_msg.msg.html


(defclass vision_msgs::obj_msg
  :super ros::object
  :slots (_obj_id _obj_score _obj_center_x _obj_center_y _obj_size_x _obj_size_y ))

(defmethod vision_msgs::obj_msg
  (:init
   (&key
    ((:obj_id __obj_id) 0.0)
    ((:obj_score __obj_score) 0.0)
    ((:obj_center_x __obj_center_x) 0.0)
    ((:obj_center_y __obj_center_y) 0.0)
    ((:obj_size_x __obj_size_x) 0.0)
    ((:obj_size_y __obj_size_y) 0.0)
    )
   (send-super :init)
   (setq _obj_id (float __obj_id))
   (setq _obj_score (float __obj_score))
   (setq _obj_center_x (float __obj_center_x))
   (setq _obj_center_y (float __obj_center_y))
   (setq _obj_size_x (float __obj_size_x))
   (setq _obj_size_y (float __obj_size_y))
   self)
  (:obj_id
   (&optional __obj_id)
   (if __obj_id (setq _obj_id __obj_id)) _obj_id)
  (:obj_score
   (&optional __obj_score)
   (if __obj_score (setq _obj_score __obj_score)) _obj_score)
  (:obj_center_x
   (&optional __obj_center_x)
   (if __obj_center_x (setq _obj_center_x __obj_center_x)) _obj_center_x)
  (:obj_center_y
   (&optional __obj_center_y)
   (if __obj_center_y (setq _obj_center_y __obj_center_y)) _obj_center_y)
  (:obj_size_x
   (&optional __obj_size_x)
   (if __obj_size_x (setq _obj_size_x __obj_size_x)) _obj_size_x)
  (:obj_size_y
   (&optional __obj_size_y)
   (if __obj_size_y (setq _obj_size_y __obj_size_y)) _obj_size_y)
  (:serialization-length
   ()
   (+
    ;; float64 _obj_id
    8
    ;; float64 _obj_score
    8
    ;; float64 _obj_center_x
    8
    ;; float64 _obj_center_y
    8
    ;; float64 _obj_size_x
    8
    ;; float64 _obj_size_y
    8
    ))
  (:serialize
   (&optional strm)
   (let ((s (if strm strm
              (make-string-output-stream (send self :serialization-length)))))
     ;; float64 _obj_id
       (sys::poke _obj_id (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _obj_score
       (sys::poke _obj_score (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _obj_center_x
       (sys::poke _obj_center_x (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _obj_center_y
       (sys::poke _obj_center_y (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _obj_size_x
       (sys::poke _obj_size_x (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _obj_size_y
       (sys::poke _obj_size_y (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;;
     (if (null strm) (get-output-stream-string s))))
  (:deserialize
   (buf &optional (ptr- 0))
   ;; float64 _obj_id
     (setq _obj_id (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _obj_score
     (setq _obj_score (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _obj_center_x
     (setq _obj_center_x (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _obj_center_y
     (setq _obj_center_y (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _obj_size_x
     (setq _obj_size_x (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _obj_size_y
     (setq _obj_size_y (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;;
   self)
  )

(setf (get vision_msgs::obj_msg :md5sum-) "9e2023751502f5af149d77b1a75f5f33")
(setf (get vision_msgs::obj_msg :datatype-) "vision_msgs/obj_msg")
(setf (get vision_msgs::obj_msg :definition-)
      "
float64 obj_id
float64 obj_score
float64 obj_center_x
float64 obj_center_y
float64 obj_size_x
float64 obj_size_y

")



(provide :vision_msgs/obj_msg "9e2023751502f5af149d77b1a75f5f33")


