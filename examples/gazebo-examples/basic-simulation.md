# Gazebo Simulation Example
# This example demonstrates basic robot simulation in Gazebo

## Overview
This example shows how to set up and run a basic robot simulation in Gazebo. It includes:
- Robot model setup
- World environment configuration
- Basic control and monitoring

## Prerequisites
- ROS 2 Humble Hawksbill installed
- Gazebo Garden or Fortress installed
- Robot simulation packages (e.g., turtlebot3_gazebo)

## Setup Instructions
1. Install Gazebo:
   ```bash
   sudo apt install ros-humble-gazebo-ros-pkgs ros-humble-gazebo-ros2-control
   ```

2. Install TurtleBot3 simulation packages:
   ```bash
   sudo apt install ros-humble-turtlebot3-gazebo
   ```

3. Set environment variables:
   ```bash
   echo 'export GAZEBO_MODEL_PATH=$GAZEBO_MODEL_PATH:~/turtlebot3_ws/src/turtlebot3/turtlebot3_simulations/turtlebot3_gazebo/models' >> ~/.bashrc
   source ~/.bashrc
   ```

## Execution Steps
1. Launch the simulation environment:
   ```bash
   export TURTLEBOT3_MODEL=burger
   ros2 launch turtlebot3_gazebo turtlebot3_world.launch.py
   ```

2. In a new terminal, check the robot status:
   ```bash
   ros2 topic list
   ros2 topic echo /scan sensor_msgs/msg/LaserScan
   ```

3. Send a movement command:
   ```bash
   ros2 run turtlesim turtle_teleop_key
   ```

## Expected Behavior
- The Gazebo simulation window should open showing the robot in a world environment
- The robot should respond to movement commands
- Sensor data should be published to ROS topics

## Verification Steps
1. Verify the simulation is running without errors
2. Check that the robot model appears correctly in the simulation
3. Confirm that sensor data is being published
4. Verify the robot responds to control commands
5. Check that the simulation runs smoothly without performance issues