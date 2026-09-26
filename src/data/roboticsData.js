// Comprehensive Robotics Data for RoboQuest 2026

export const ANATOMY_PARTS = [
  {
    id: 'chassis',
    name: 'Chassis & Frame',
    icon: '🦾',
    role: 'The Skeleton & Armor',
    summary: 'The physical structure that holds everything together and determines how the robot balances, moves, and navigates obstacles.',
    description: 'Every robot starts with a rigid or flexible structural frame. Wheels allow ultra-efficient movement on flat ground, tracks conquer mud or rough rubble, and bipedal legs allow humanoids like Atlas or Figure to conquer stairs and human doorways.',
    components: ['3D Printed Carbon Fiber / Aluminum Frame', 'Omni-wheels / All-terrain Tracks', 'Protective Shell / Weather Seals'],
    funFact: 'NASA\'s Mars rovers use a "rocker-bogie" chassis that lets them roll over rocks twice the diameter of their wheels without tipping over.'
  },
  {
    id: 'sensors',
    name: 'Sensors',
    icon: '👁️',
    role: 'The Senses',
    summary: 'Electronic sensory organs that translate physical stimuli (light, distance, heat, sound) into digital data.',
    description: 'Robots see the world through a cocktail of sensors. Cameras provide high-res RGB color streams, LiDAR bounces thousands of laser pulses per second to build 3D depth maps, and IMUs (gyroscope + accelerometer) help the robot detect its own balance.',
    components: ['3D LiDAR (Laser Depth Scanning)', 'Stereo Depth Cameras (Computer Vision)', 'Ultrasonic & Infrared Distance Sensors', 'IMU / Inertial Balance Gyroscopes'],
    funFact: 'A self-driving robot can process over 1 gigabyte of sensor telemetry every single second to avoid bumping into pedestrians.'
  },
  {
    id: 'controller',
    name: 'Controller & AI Brain',
    icon: '🧠',
    role: 'The Digital Brain',
    summary: 'Microcontrollers and onboard AI computers that process sensor signals, run neural networks, and send commands to motors.',
    description: 'Beginner robots often use microcontrollers like Arduino, micro:bit, or Raspberry Pi. Modern 2026 autonomous humanoids carry onboard AI superchips (like NVIDIA Jetson) running "Physical AI" neural networks that let the robot reason about physical environments.',
    components: ['Edge AI Neural Compute Module', 'Real-time Microcontroller (PID motor control)', 'Wireless Radio / Wi-Fi 7 / Bluetooth 5.4'],
    funFact: 'Modern robotics software uses ROS 2 (Robot Operating System), an open-source framework used by robotics labs from elementary schools all the way to NASA.'
  },
  {
    id: 'actuators',
    name: 'Actuators & Motors',
    icon: '⚙️',
    role: 'The Muscles',
    summary: 'Components that convert electrical energy into precise physical motion, gripping, turning, and lifting.',
    description: 'Without actuators, a robot is just a stationary computer. DC gearmotors drive wheels forward, precision stepper motors spin 3D printer nozzles, and high-torque brushless servo motors allow humanoid hands and joints to bend with millimetric precision.',
    components: ['High-torque Brushless Servos', 'DC Gear Motors & Encoders', 'Pneumatic Grippers & Robotic Tendons'],
    funFact: 'Humanoid robot hands have up to 20 motorized degrees of freedom, allowing them to gently pick up an egg without cracking the shell.'
  },
  {
    id: 'power',
    name: 'Power & Batteries',
    icon: '🔋',
    role: 'The Energy Core',
    summary: 'Rechargeable energy storage systems and power distribution boards that fuel motors and sensitive electronic chips.',
    description: 'Robots require steady, regulated electrical power. Lithium-Polymer (LiPo) and Lithium-Iron-Phosphate (LiFePO4) battery packs provide the bursts of high current required by motors while voltage regulators protect delicate computing brains from power spikes.',
    components: ['Rechargeable Lithium-Ion / LiFePO4 Battery Pack', 'Power Management IC & BMS (Battery Management System)', 'Step-Down Voltage Regulators (5V/3.3V)'],
    funFact: 'Autonomous warehouse robots automatically navigate back to magnetic charging pads when their battery reaches 15%, taking a 20-minute "fast-charge nap".'
  },
  {
    id: 'loop',
    name: 'The Engineering Loop',
    icon: '📐',
    role: 'Design, Test, Iterate',
    summary: 'The cyclical scientific method used by roboticists: Prototype, Code, Fail fast, Learn, and Improve.',
    description: 'No robot works perfectly on the first try! Real roboticists celebrate unexpected failures because each glitch reveals valuable data. The loop involves CAD modeling, simulation tests (Digital Twins), breadboard wiring, code debugging, and field testing.',
    components: ['CAD Modeling (Fusion 360 / Onshape)', 'Simulation Sandbox (NVIDIA Isaac / Gazebo)', 'Rapid Prototyping & Iteration Logbook'],
    funFact: 'Teams competing in the FIRST Robotics Competition build an entire 125-pound industrial robot from scratch in just six intense weeks!'
  }
];

export const MAZE_LEVELS = [
  {
    id: 1,
    title: 'Level 1: First Steps',
    difficulty: 'Easy',
    hint: 'Move down and right to reach the shining star.',
    gridSize: 6,
    start: { r: 0, c: 0 },
    goal: { r: 5, c: 5 },
    layout: [
      [0, 0, 0, 1, 0, 0],
      [0, 1, 0, 1, 0, 0],
      [0, 1, 0, 0, 0, 1],
      [0, 1, 1, 1, 0, 1],
      [0, 0, 0, 1, 0, 0],
      [1, 1, 0, 0, 0, 2]
    ]
  },
  {
    id: 2,
    title: 'Level 2: The Zig-Zag Alley',
    difficulty: 'Medium',
    hint: 'Navigate the winding corridors without touching the reinforced walls.',
    gridSize: 6,
    start: { r: 0, c: 0 },
    goal: { r: 5, c: 0 },
    layout: [
      [0, 0, 0, 0, 0, 0],
      [1, 1, 1, 1, 1, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 1, 1, 1, 1, 1],
      [0, 0, 0, 0, 0, 0],
      [2, 1, 1, 1, 1, 1]
    ]
  },
  {
    id: 3,
    title: 'Level 3: The Circuit Maze',
    difficulty: 'Hard',
    hint: 'Watch out for tight dead ends. Plan your route before clicking!',
    gridSize: 6,
    start: { r: 0, c: 0 },
    goal: { r: 3, c: 3 },
    layout: [
      [0, 0, 1, 0, 0, 0],
      [1, 0, 1, 0, 1, 0],
      [0, 0, 0, 0, 1, 0],
      [0, 1, 1, 2, 0, 0],
      [0, 0, 1, 1, 1, 0],
      [1, 0, 0, 0, 0, 0]
    ]
  }
];

export const QUIZ_QUESTIONS = [
  {
    q: "What part of a robot works like its brain?",
    options: ["Controller / Onboard Computer", "Chassis Frame", "Battery Pack", "Wheel Encoders"],
    answer: 0,
    category: "Hardware",
    explanation: "The controller (microcontroller or AI computer) runs programs, analyzes sensor readings, and decides what actions the motors should take."
  },
  {
    q: "Which part lets a robot 'see', 'feel', or measure its surroundings?",
    options: ["Actuators", "Sensors", "Power Supply", "Chassis Rails"],
    answer: 1,
    category: "Hardware",
    explanation: "Sensors (like LiDAR, sonar, cameras, and gyro balance chips) gather physical information from the environment and turn it into digital signals."
  },
  {
    q: "What do actuators do inside a robot?",
    options: ["Store energy safely", "Convert electrical signals into real motion", "Write computer code", "Take digital screenshots"],
    answer: 1,
    category: "Mechanics",
    explanation: "Actuators are the muscles of the robot — motors, servos, and pistons that turn voltage into motion like wheel spinning or arm lifting."
  },
  {
    q: "Which beginner-friendly coding environment uses snap-together visual blocks?",
    options: ["Assembly Code", "Scratch / Blockly", "Binary Hex Dump", "C Machine Instructions"],
    answer: 1,
    category: "Software",
    explanation: "Scratch and Blockly allow beginners to drag and snap code blocks together like puzzle pieces, preventing syntax errors while teaching core logic."
  },
  {
    q: "What powers most mobile modern robots?",
    options: ["Sunlight only without batteries", "Rechargeable Lithium Batteries", "Direct AC wall cords only", "Kinetic friction coils"],
    answer: 1,
    category: "Power",
    explanation: "Lithium-Ion and LiFePO4 batteries pack high energy density into lightweight modules, providing the bursts of current motors require."
  },
  {
    q: "What is 'Physical AI' in modern robotics?",
    options: [
      "AI that only runs in chess software",
      "AI that understands physical laws, spatial reasoning, and real-world touch",
      "Painting a robot yellow and black",
      "Replacing all computers with gears"
    ],
    answer: 1,
    category: "AI & Innovation",
    explanation: "Physical AI models are trained on real-world physics, simulated 3D environments, and spatial mechanics so robots can safely interact with objects they've never seen before."
  },
  {
    q: "What is a 'Digital Twin' in robotics engineering?",
    options: [
      "Two identical physical robots standing side-by-side",
      "A high-fidelity virtual 3D simulation of a robot and its workspace",
      "A backup battery stored in the closet",
      "A duplicate copy of the printed user manual"
    ],
    answer: 1,
    category: "Simulation",
    explanation: "Digital twins let engineers simulate millions of scenarios, edge cases, and movements in computer simulations before deploying code to physical hardware."
  },
  {
    q: "What's a renowned global student robotics program where youth teams build large robots?",
    options: ["FIRST Robotics Competition", "National Spelling Bee", "MathCounts Team", "Debate Society"],
    answer: 0,
    category: "Competitions",
    explanation: "FIRST Robotics competitions (FRC, FTC, FLL) inspire hundreds of thousands of students worldwide to build industrial-scale robots every year."
  },
  {
    q: "When a robot learns a task by having an operator physically guide its arms, what is this called?",
    options: ["Teleoperation / Teach by Demonstration", "Random trial-and-error", "Pure hardcoded timers", "Sensorless guess logic"],
    answer: 0,
    category: "Machine Learning",
    explanation: "Teleoperation allows AI models to watch human motion trajectories and generalize patterns to master tasks like packing boxes or folding clothes."
  },
  {
    q: "Why are humanoid robots designed with two legs and two arms rather than just wheels?",
    options: [
      "Because legs are always cheaper to manufacture than wheels",
      "To operate in human-built facilities (stairs, narrow doorways, shelving) without rebuilding the factory",
      "Because robots don't have enough battery for wheels",
      "Just to look like science fiction movie characters"
    ],
    answer: 1,
    category: "Design",
    explanation: "Human workplaces (stairs, doorways, workbenches, hand tools) were engineered for human bodies. Humanoid robots can navigate these existing spaces without massive renovations."
  }
];

export const GOOD_TO_KNOW_FACTS = [
  {
    question: "What's the difference between a robot and a regular machine?",
    answer: "A machine like a toaster only does one fixed mechanical action regardless of external changes. A true robot performs the 'Sense-Think-Act' loop: it senses its surroundings, uses software to decide what to do, and then acts. A robot vacuum, for example, senses a chair leg, recalculates its map, and steers around it.",
    tag: "Fundamentals"
  },
  {
    question: "What is AI actually doing inside a robot?",
    answer: "Sensors gather raw numbers (e.g. distance = 14 cm, color = red). The AI software interprets what those numbers mean (e.g. 'That is a coffee mug on the edge of a table') and plans an action ('Move gripper arm slowly and squeeze with 3 Newtons of force').",
    tag: "Software"
  },
  {
    question: "Do I need to be a math genius to build robots?",
    answer: "Not at all! While advanced robotics researchers use calculus and linear algebra, getting started only takes basic arithmetic, angles (turns), coordinate logic (X, Y grids), and cause-and-effect thinking (IF button pressed THEN turn on motor).",
    tag: "Getting Started"
  },
  {
    question: "What is the easiest way to start learning at home?",
    answer: "Start with block-coding simulators (like RoboQuest, Scratch, or VEXcode VR) and affordable beginner kits like micro:bit, LEGO Spike Prime, or Arduino. You don't need expensive equipment to master the core computational thinking.",
    tag: "Education"
  },
  {
    question: "What competitions can school students join?",
    answer: "Look into FIRST LEGO League (FLL) for elementary/middle school, FIRST Tech Challenge (FTC) and FIRST Robotics Competition (FRC) for high school, VEX Robotics, and RoboCup Junior. Most schools or local libraries have active community teams.",
    tag: "Competitions"
  }
];

export const CUTTING_EDGE_TOPICS = [
  {
    id: 'physical-ai',
    title: 'What is "Physical AI"?',
    summary: 'AI that reasons about gravity, velocity, friction, and spatial mechanics in the real world.',
    content: 'For years, AI was mostly good at things on screens — text, photos, and spreadsheets. Physical AI is the giant leap into three-dimensional reality: AI models that understand and act in the physical world. With platforms like NVIDIA Cosmos and Isaac Sim, robots can simulate millions of hours of physical practice in virtual environments before ever touching a real object.',
    tag: 'Physical AI'
  },
  {
    id: 'humanoids-working',
    title: 'Are humanoid robots actually working paid jobs yet in 2026?',
    summary: 'Yes — moving bins, transporting parts, and assisting in factories.',
    content: 'Humanoid robots have officially transitioned from science fiction demos into commercial pilot shifts. Agility Robotics\' Digit moves totes at GXO Logistics warehouses under commercial contracts, while Figure humanoids work shifts transporting automotive components at BMW\'s Spartanburg factory. While they aren\'t replacing high-speed specialized factory arms, they excel at moving items in spaces built for humans.',
    tag: 'Humanoids'
  },
  {
    id: 'robot-learning',
    title: 'How do engineers "teach" a robot a new task without code?',
    summary: 'Teleoperation and demonstration-based learning.',
    content: 'Instead of engineers typing out hundreds of coordinates, an operator can physically guide a robot arm or use VR controllers to complete a task a few dozen times. Deep learning algorithms analyze these demonstrations, extract the underlying goal, and learn to adapt even if an object is placed at a slightly different angle or distance.',
    tag: 'Learning'
  },
  {
    id: 'digital-twins',
    title: 'What is a "Digital Twin" and why is simulation key?',
    summary: 'A virtual flight simulator for physical robots.',
    content: 'A digital twin is a computer-rendered, physics-accurate simulation of a robot and its workplace. Before spending millions on equipment or risking a physical robot crashing into a real wall, engineers test software in simulation for free at 100x real-time speed. When code goes live, it has already been proven in thousands of simulated test runs.',
    tag: 'Digital Twins'
  },
  {
    id: 'safety-wrappers',
    title: 'How do engineers keep AI robots safe around people?',
    summary: 'Deterministic safety wrappers and collision avoidance.',
    content: 'Because modern neural networks can occasionally produce unpredictable actions, industrial robots use hardcoded "deterministic safety wrappers." Even if the AI brain instructs an arm to move forward, a secondary hardware-level safety sensor will immediately override and kill motor power if it detects a human inside the safe boundary zone.',
    tag: 'Safety'
  }
];

export const IN_DEPTH_ARTICLES = [
  {
    id: 'article-physical-ai',
    eyebrow: 'Physical AI',
    icon: '🌍',
    title: 'Physical AI: Teaching Robots to Understand the Real World',
    dek: 'For most of AI history, breakthroughs happened on computer monitors. Physical AI is the monumental shift that lets AI reason about gravity, distance, and physical touch.',
    sections: [
      {
        heading: 'From words and pixels to wheels and grippers',
        body: 'Chatbots and image generators work with flat, digital data. A robot\'s challenge is vastly harder: it must inspect an unfamiliar room, recognize that glass breaks easily while wood is solid, and calculate exactly how many Newtons of force to grip with without dropping or crushing the item.'
      },
      {
        heading: 'Practicing in virtual worlds first',
        body: 'The superpower accelerating Physical AI is simulation. Instead of robots crashing into physical objects — costly, slow, and dangerous — companies build high-fidelity "world models" where robots practice virtual tasks millions of times per day. The learned neural weights transfer back to the physical machine with astonishing reliability.'
      }
    ],
    bulletPoints: [
      'Open world models: NVIDIA Cosmos platform generates hyper-realistic virtual environments for robots to practice spatial tasks.',
      'Hyper-fast training: Tasks that once required 6 months of manual data collection can now be trained in days.',
      'Shared open foundations: Robotics teams across universities and startups build upon common open-source physics baselines.'
    ],
    videoId: 'q7Hj3J9SOXw',
    videoTitle: 'Introducing NVIDIA Cosmos 3',
    videoCaption: 'NVIDIA\'s official walkthrough of Cosmos 3, the open world foundation model allowing robots to simulate and practice physical scenarios before executing in the real world.',
    calloutTitle: 'Why it matters for young builders',
    calloutText: 'The same principle applies to learning any craft: practicing in low-stakes simulations (like our code maze or block playgrounds) builds mental confidence faster than only attempting the final test.'
  },
  {
    id: 'article-humanoids',
    eyebrow: 'Humanoid Robots',
    icon: '🤖',
    title: 'Humanoid Robots Go to Work: What Is Real in 2026',
    dek: 'Human-shaped robots have starred in viral video demos for years. In 2026, they are clocking into real commercial shifts. Here is the realistic balance between hype and capability.',
    sections: [
      {
        heading: 'Where they actually work today',
        body: 'The clearest real-world deployment for humanoids is logistics: moving bins, totes, and packages across warehouses designed around human ergonomics. Agility Robotics\' Digit has moved hundreds of thousands of totes at GXO facilities, while Figure robots move body parts on BMW\'s production line in Spartanburg, SC.'
      },
      {
        heading: 'What they still cannot do',
        body: 'Humanoid robots are not replacing specialized industrial robotic arms for high-speed welding or millimeter-precise semiconductor assembly. Today\'s humanoids excel at general, repetitive hauling tasks in environments with stairs and human-scale shelving.'
      }
    ],
    bulletPoints: [
      'Warehousing milestones: Digit has surpassed 100,000 totes moved in commercial operations.',
      'Automotive manufacturing: Figure robots assist production across 30,000+ vehicles at BMW.',
      'Heavy part logistics: Apptronik Apollo carries up to 25 kg components directly to assembly workstations.'
    ],
    videoId: 'Xq_-OTQgzf0',
    videoTitle: 'Digit: GXO\'s Human-Centric Robot from Agility Robotics',
    videoCaption: 'GXO Logistics highlights Digit in continuous warehouse action, explaining why a bipedal shape fits spaces built for human workers.',
    calloutTitle: 'The Engineering Trade-Off',
    calloutText: 'Humanoid anatomy isn\'t superior in every metric — it trades mechanical simplicity for the unmatched adaptability of navigating a world built for people.'
  },
  {
    id: 'article-teleoperation',
    eyebrow: 'Robot Learning',
    icon: '🎓',
    title: 'How Robots Learn New Skills by Watching Humans',
    dek: 'Programming a robot used to mean typing thousands of lines of coordinates. Now, it often starts with showing the robot what to do.',
    sections: [
      {
        heading: 'Showing, not telling',
        body: 'Through teleoperation, human operators wear motion-capture gloves or hold puppet controllers to guide the robot\'s limbs through a task. The robot\'s AI observes the trajectory, vision feeds, and force readings to generalize the task into a robust skill.'
      },
      {
        heading: 'Plain-English commands',
        body: 'Modern robotic controllers integrate Vision-Language-Action (VLA) models. This allows someone with zero coding knowledge to say: "Pick up the blue container and place it on the top shelf" — and the robot plans the sequence autonomously.'
      }
    ],
    bulletPoints: [
      'Skill stacking: Humanoid robots have demonstrated dozens of autonomous skills learned via demonstration.',
      'Fault recovery: AI controllers can adjust grip on the fly if an object slips rather than failing completely.',
      'Rapid ramp-up: New tasks can be deployed in hours rather than months of manual kinematic programming.'
    ],
    videoId: 'g4gBm82PVyk',
    videoTitle: 'Figure Humanoid Learns Autonomous Skills',
    videoCaption: 'A breakdown of a humanoid robot mastering coordinated two-handed tool use through watch-and-practice neural training.',
    calloutTitle: 'A Lesson in Good Learning',
    calloutText: 'Watching a clear demonstration paired with hands-on practice is the fastest way for both humans and robots to learn complex skills.'
  }
];

export const YOUTUBE_CURATED_VIDEOS = [
  {
    id: 'qPHdqNJUWG0',
    title: 'How Do Robots Work? | Fun Tech Facts for Kids',
    description: 'A friendly beginner-level explainer that breaks down how robots sense, think, and move.'
  },
  {
    id: 'Eu5mYMavctM',
    title: 'Introducing Figure 03 Humanoid Robot',
    description: 'The official reveal of third-generation humanoid robotics engineered for commercial work and domestic support.'
  },
  {
    id: '29ECwExc-_M',
    title: 'All-New Electric Atlas | Boston Dynamics',
    description: 'Boston Dynamics unveils its fully electric Atlas humanoid, showing incredible strength, flexibility, and agility.'
  },
  {
    id: 'AJpTpUqjgrY',
    title: 'Digit\'s First Day of Work at GXO Logistics',
    description: 'A frontline view of Digit\'s commercial shift in a logistics warehouse moving real customer inventory.'
  },
  {
    id: '9kRhE5vgCvY',
    title: '2026 FIRST Robotics Competition Kickoff',
    description: 'The global broadcast revealing the annual engineering game challenged by thousands of student robotics teams.'
  }
];

export const TIMELINE_UPDATES = [
  {
    tag: 'In Classrooms',
    icon: '🏫',
    title: 'Classroom Robots Act as Teaching Assistants',
    description: 'Schools worldwide are adopting companion robots like NAO, Pepper, and Alpha Mini to teach coding and interactive problem-solving. Research highlights they work best alongside passionate human educators.'
  },
  {
    tag: 'Affordability',
    icon: '🏷️',
    title: 'Robotics Kits are Becoming Family-Friendly',
    description: 'A decade ago, programmable robots cost as much as a used car. Today, capable starter humanoid and wheeled kits with block coding sell near the price of a standard tablet.'
  },
  {
    tag: 'Smarter Brains',
    icon: '🧠',
    title: 'Watch & Practice: Robots Learn from Demonstration',
    description: 'Instead of manually scripting every servo angle, new AI models learn physical skills by analyzing video demonstrations and human teleoperation sessions.'
  },
  {
    tag: 'Global Showcase',
    icon: '🌟',
    title: 'Humanoids Dominate Technology Stages at CES 2026',
    description: 'CES 2026 saw hundreds of walking, interacting humanoid prototypes showing off skills from sorting warehouse freight to delicate culinary assembly.'
  },
  {
    tag: 'Advice for Students',
    icon: '🚀',
    title: 'Fundamentals Come First',
    description: 'Industry veterans agree: before diving into complex humanoid mechanics, master the fundamentals — algorithmic logic, circuit basics, and simple block coding. Those core skills transfer to every future robot.'
  }
];
