---
layout: default
permalink: /projects/gino
---
**[Home](/) >> [Projects](/projects) >> Gino**

## Gino

<p><b>LeRobot add-on</b></p>
<ul>
  The SO-100 and SO-101 are two really popular low cost, 3D printed, 5 DoF robot arms. Designed by <a href="https://www.therobotstudio.com/">The Robot Studio</a> they're part of the <a href="https://github.com/huggingface/lerobot/">LeRobot</a> initiative by Hugging Face. This wonderful project has -deservedly- reached great popularity and has got many people into what may be called "intelligent" robotics (a more market friendly/hyped name would be "embodied intelligence"). One of the main points of this project is the possibility of collecting multimodal datasets for this tiny robots and then train ML policies to automate these actions. One of the main reasons behind the popularity of the arms is the extremely low cost (~€250 for 2 arms). Right now 2 arms are used: a leader arm (which acts as a controller) and a follower arm to mimic the movement of the laeder. Therefore, theoretically, it would be possibile to get somehow rid of the leader and only use the follower (thus cutting the cost in half) since that's the arm that actually performs the required actions. That's exactly what this project tryies to achive by using a smartphone to retrieve 6D orientation using AR APIs to then cumpute the robot's movements.
</ul>
