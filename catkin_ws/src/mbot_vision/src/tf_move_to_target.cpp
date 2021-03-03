#include<math.h>

#include <ros/ros.h>
#include <geometry_msgs/Twist.h>
#include <geometry_msgs/Pose.h>
#include <std_msgs/Int8.h>
#include <std_msgs/String.h>
#include <vision_msgs/obj_msg.h>

#define STATUS_EXPLORING    (0)
#define STATUS_CLOSE_TARGET (1)
#define STATUS_GO_HOME      (2)


ros::Publisher vel_pub;
ros::Publisher cmd_pub;
ros::Publisher voice_pub;

int status_flag = STATUS_EXPLORING;

//到订阅的消息后，会进入消息回调函数
void objCallback(const vision_msgs::obj_msg::ConstPtr& msg)
{
    // 将接收到的消息打印出来
     ROS_INFO("object msg: object id:%f , object score:%0.6f", msg->obj_id,msg->obj_score);
    if (status_flag == STATUS_EXPLORING && msg->obj_id == 10)
    {
      status_flag = STATUS_CLOSE_TARGET;
      std_msgs::Int8 cmd;
      cmd.data = STATUS_CLOSE_TARGET;
      cmd_pub.publish(cmd);
      ROS_INFO("#############STATUS_CLOSE_TARGET");


      std_msgs::String v_msg;
      v_msg.data = "发现宝藏，向宝藏进发";
      voice_pub.publish(v_msg);
    }
    //在靠近物体的过程中，距离物体足够近
    else if (status_flag == STATUS_CLOSE_TARGET &&  msg->obj_size_y > 440 && msg->obj_id == 10)
    {
         status_flag = STATUS_GO_HOME;
         std_msgs::Int8 cmd;
         cmd.data = STATUS_GO_HOME;
         cmd_pub.publish(cmd);
         ROS_INFO("################STATUS_GO_HOME");

         
         std_msgs::String v_msg;
         v_msg.data = "拿到宝藏，撤退";
         voice_pub.publish(v_msg);
    }
    //靠近物体
    else if (status_flag == STATUS_CLOSE_TARGET   && msg->obj_id == 10)
    {
        geometry_msgs::Twist vel_msg;
        vel_msg.linear.x = (434 - msg->obj_size_y )/3600* 0.3;
        vel_msg.angular.z = ( 360 - msg->obj_center_x )/1680* 0.5;
        vel_pub.publish(vel_msg);
        ROS_INFO("publish velocity command [%0.2f m/s,%0.2f rad/s]",vel_msg.linear.x, vel_msg.angular.z);
    } 

    /******************************请补充此处代码（结束）*******************************************/
}

int main(int argc, char **argv)
{
	// ROS节点初始化
	ros::init(argc, argv, "move_to_target");
	// 创建节点句柄
	ros::NodeHandle n;
    ros::Subscriber pose_sub = n.subscribe("/obj_msg", 10, objCallback);
	// 创建一个Publisher，发布名为cmd_vel的topic，消息类型为geometry_msgs::Twist，队列长度10
	vel_pub = n.advertise<geometry_msgs::Twist>("/cmd_vel", 10);
	// 创建一个Publisher，发布名为cmd_vel的topic，消息类型为std_msgs::Int8，队列长度10  表示三种状态
	cmd_pub = n.advertise<std_msgs::Int8>("/exploring_cmd", 10);
    // 发布语音输出内容    
    voice_pub = n.advertise<std_msgs::String>("voiceWords", 1000); 
    // 循环等待回调函数
    ros::spin();

	return 0;
}
