---
layout: project
title: Gino
permalink: /projects/gino
youtube: "p6s8waqRF64"
description: >-
  A LeRobot add-on I wrote to teleoperate the SO-100 and SO-101 robot arms with just a smartphone.
  The phone's AR APIs provide the 6D pose used to compute the arm's movements, so no leader arm is
  needed: the setup is minimal and the hardware cost is cut in half.
  [Code on GitHub](https://github.com/giovipeg/Gino).
---
The SO-100 and SO-101 are two really popular low cost, 3D printed, 5 DoF robot arms. Designed by [The Robot Studio](https://www.therobotstudio.com/) they're part of the [LeRobot](https://github.com/huggingface/lerobot/) initiative by Hugging Face. This wonderful project has -deservedly- reached great popularity and has got many people into what may be called "intelligent" robotics (a more market friendly/hyped name would be "embodied intelligence"). One of the main points of this project is the possibility of collecting multimodal datasets for these tiny robots and then train ML policies to automate these actions. One of the main reasons behind the popularity of the arms is the extremely low cost (~€250 for 2 arms). Right now 2 arms are used: a leader arm (which acts as a controller) and a follower arm to mimic the movement of the leader. Therefore, theoretically, it would be possible to get somehow rid of the leader and only use the follower (thus cutting the cost in half) since that's the arm that actually performs the required actions. That's exactly what this project tries to achieve by using a smartphone to retrieve 6D orientation using AR APIs to then compute the robot's movements.

You can have a look at it [here](https://github.com/giovipeg/Gino).
