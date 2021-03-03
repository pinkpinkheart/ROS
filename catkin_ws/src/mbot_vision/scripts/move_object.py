#!/usr/bin/env python
# -*- coding: utf-8 -*-

import rospy
#import cv2
#from cv_bridge import CvBridge, CvBridgeError
from sensor_msgs.msg import Image
import numpy as np
from math import *
from geometry_msgs.msg import Pose
#from vision_msgs.msg import obj_msg

class image_converter:
    def __init__(self):    
       
        self.target_pub = rospy.Publisher("object_detect_pose",Pose,queue_size=1)
        self.image_sub = rospy.Subscriber("obj_msg",obj_msg,self.callback)

    def callback(self,data):
         
         #找到物体
         if (data.obj_id = 10)&(OBJ_msg.obj_score > 0.4) :
              
         #找到物体但准确率不高
         else if (data.obj_id = 10)&(OBJ_msg.obj_score < 0.4) :


         #没找到物体
         else if (data.obj_id != 10) :





 
'''
       




        # find contours in the thresholded image
        cnts, hierarchy = cv2.findContours(thresh, cv2.RETR_LIST, cv2.CHAIN_APPROX_SIMPLE)
        #img, cnts, hierarchy = cv2.findContours(thresh, cv2.RETR_LIST, cv2.CHAIN_APPROX_SIMPLE)
        #cnts = cnts[0]

        # loop over the contours
        for c in cnts:
            # compute the center of the contour
            M = cv2.moments(c)

            if int(M["m00"]) not in range(20000, 250000):
                continue

            cX = int(M["m10"] / M["m00"])
            cY = int(M["m01"] / M["m00"])

            cv2.drawContours(cv_image, [c], -1, (0, 0, 255), 2)
            cv2.circle(cv_image, (cX, cY), 1, (0, 0, 255), -1)
            objPose = Pose()
            objPose.position.x = cX;
            objPose.position.y = cY;
            objPose.position.z = M["m00"];
            self.target_pub.publish(objPose)

        # 显示Opencv格式的图像
        # cv2.imshow("Image window", cv_image)
        # cv2.waitKey(3)

        # 再将opencv格式额数据转换成ros image格式的数据发布
        try:
            self.image_pub.publish(self.bridge.cv2_to_imgmsg(cv_image, "bgr8"))
        except CvBridgeError as e:
            print (e)
'''



if __name__ == '__main__':
    try:
        # 初始化ros节点
        rospy.init_node("object_detect")
        rospy.loginfo("Starting detect object")
        image_converter()
        rospy.spin()
    except KeyboardInterrupt:
        print ("Shutting down object_detect node.")
        cv2.destroyAllWindows()
