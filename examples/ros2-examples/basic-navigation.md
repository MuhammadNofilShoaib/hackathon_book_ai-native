# Basic Navigation Example
# This example demonstrates basic navigation in ROS 2

## Overview
This example shows how to implement basic navigation for a robot using ROS 2. It includes:
- Setting up a navigation goal
- Using the navigation stack
- Handling navigation results

## Prerequisites
- ROS 2 Humble Hawksbill installed
- Navigation2 stack installed
- Robot simulation environment (e.g., TurtleBot3 in Gazebo)

## Setup Instructions
1. Source your ROS 2 installation:
   ```bash
   source /opt/ros/humble/setup.bash
   ```

2. Navigate to your workspace:
   ```bash
   cd ~/ros2_ws
   ```

3. Build your workspace:
   ```bash
   colcon build --packages-select basic_navigation
   ```

4. Source the workspace:
   ```bash
   source install/setup.bash
   ```

## Execution Steps
1. Launch the simulation environment:
   ```bash
   ros2 launch turtlebot3_gazebo turtlebot3_world.launch.py
   ```

2. In a new terminal, launch the navigation:
   ```bash
   ros2 launch nav2_bringup navigation_launch.py use_sim_time:=True
   ```

3. In another terminal, send a navigation goal:
   ```bash
   ros2 action send_goal /navigate_to_pose nav2_msgs/action/NavigateToPose "{pose: {pose: {position: {x: 1.0, y: 1.0, z: 0.0}, orientation: {w: 1.0}}, header: {frame_id: 'map'}}}"
   ```

## Expected Output
The robot should navigate to the specified coordinates (1.0, 1.0) in the simulation environment. You should see the robot moving in the Gazebo simulation and status updates in the terminal.

## Verification Steps
1. Check that the robot reaches the target coordinates
2. Monitor the navigation status in the terminal
3. Verify there are no error messages during navigation
4. Confirm the robot stops at the destination