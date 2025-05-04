import { Injectable } from '@angular/core';

// Interface for a Board in the Modular Design section
interface Board {
  name: string;
  components: string;
  ageGroup: string;
  imageUrl: string; // Placeholder for now; you can replace with actual image URLs
}

// Interface for a Chapter in the Syllabus section
interface Chapter {
  title: string;
  pages: string;
  objective: string;
  project: string;
  concepts: string;
}

// Interface for a Level in the Syllabus section
interface Level {
  title: string;
  chapters: Chapter[];
}

// Interface for a Video in the Video Showcase section
interface Video {
  title: string;
  embedUrl: string; // YouTube embed URL
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  // Get data for the Modular Design section
  getBoards(): Board[] {
    return [
      {
        name: 'Base Board',
        components: 'LEDs, Buttons, Buzzer, Light Sensor, Microcontroller',
        ageGroup: 'Ages 8–12',
        imageUrl: 'assets/images/boards/base.jpg',
      },
      {
        name: 'Intermediate Board',
        components: 'DC Motors, Servo Motors, Ultrasonic Sensor',
        ageGroup: 'Ages 10–14',
        imageUrl: 'assets/images/boards/intermediate.jpg',
      },
      {
        name: 'Advanced Board',
        components: 'Wi-Fi Module, OLED Display, Temperature Sensor',
        ageGroup: 'Ages 12–16',
        imageUrl: 'assets/images/boards/advanced.jpg',
      },
      {
        name: 'Expert Board',
        components: 'Camera Module, AI Module, Gyroscope',
        ageGroup: 'Ages 14–18',
        imageUrl: 'assets/images/boards/expert.jpg',
      },
    ];
  }

  // Get data for the Syllabus section
  getSyllabus(): Level[] {
    return [
      {
        title:
          'Level 1: Base Board – Foundations of Electronics and Programming',
        chapters: [
          {
            title: 'Chapter 1: Light It Up! (LED Basics)',
            pages: '1–10',
            objective: 'Learn about digital outputs and basic programming.',
            project:
              "Program LEDs to blink in different patterns (e.g., Morse code for 'HELLO').",
            concepts:
              'Digital output, basic coding (on/off, loops), circuit basics.',
          },
          {
            title: 'Chapter 2: Button Magic (Input and Output)',
            pages: '11–20',
            objective: 'Understand digital inputs and conditional programming.',
            project:
              'Create a reaction game where pressing a button lights up an LED and plays a tone on the buzzer.',
            concepts: 'Digital input, if-else statements, event handling.',
          },
          {
            title: 'Chapter 3: Sense the Light (Sensors and Variables)',
            pages: '21–30',
            objective: 'Explore sensors and variables in programming.',
            project:
              'Build a night light that turns on an LED when the light sensor detects darkness.',
            concepts: 'Analog input, variables, conditional logic.',
          },
          {
            title: 'Chapter 4: Make Some Noise (Buzzer and Functions)',
            pages: '31–40',
            objective: 'Learn about functions and sound output.',
            project:
              "Program the buzzer to play a simple melody (e.g., 'Twinkle, Twinkle') using functions.",
            concepts: 'Functions, tone generation, timing.',
          },
        ],
      },
      {
        title: 'Level 2: Intermediate Board – Robotics and Control Systems',
        chapters: [
          {
            title: 'Chapter 5: Spin to Win (DC Motors)',
            pages: '41–50',
            objective: 'Learn about motor control and direction.',
            project:
              'Build a small fan using a DC motor, controlled by a button to change speed and direction.',
            concepts:
              'PWM (pulse-width modulation), motor control, integrating inputs from Base Board.',
          },
          {
            title: 'Chapter 6: Precise Movements (Servo Motors)',
            pages: '51–60',
            objective:
              'Understand servo motor control and angular positioning.',
            project:
              'Create a robotic arm that moves to specific angles using a servo, triggered by a button.',
            concepts:
              'Servo control, angular positioning, reusing Base Board inputs.',
          },
          {
            title: 'Chapter 7: Avoid the Obstacle (Ultrasonic Sensor)',
            pages: '61–70',
            objective: 'Explore distance sensing and decision-making.',
            project:
              'Program a mini robot to stop its DC motor when an obstacle is detected, with an LED indicating status.',
            concepts:
              'Sensor data processing, conditional programming, modular integration.',
          },
          {
            title: 'Chapter 8: Code a Game – Robot Soccer (Integration)',
            pages: '71–80',
            objective:
              'Combine components from both boards in a gamified project.',
            project:
              'Build a soccer-playing robot that uses a servo to kick a ball, a DC motor to move, and a button to start the game.',
            concepts:
              'System integration, event-driven programming, gamification.',
          },
        ],
      },
      {
        title: 'Level 3: Advanced Board – IoT and Data Science',
        chapters: [
          {
            title: 'Chapter 9: Connect to the World (Wi-Fi Module)',
            pages: '81–90',
            objective: 'Learn about wireless communication and IoT.',
            project:
              'Send a message to a phone app via Wi-Fi when a button is pressed, displaying the status on the OLED.',
            concepts: 'Wi-Fi communication, HTTP requests, display output.',
          },
          {
            title: 'Chapter 10: Monitor the Environment (Temperature Sensor)',
            pages: '91–100',
            objective: 'Collect and log sensor data.',
            project:
              'Log temperature data using the sensor, display it on the OLED, and send alerts via Wi-Fi if it exceeds a threshold.',
            concepts: 'Data logging, real-time monitoring, conditional alerts.',
          },
          {
            title: 'Chapter 11: Smart Home System (Integration)',
            pages: '101–110',
            objective: 'Build an integrated IoT project.',
            project:
              'Create a smart home system where the temperature sensor triggers a DC motor (fan), an LED indicates status, and data is sent via Wi-Fi.',
            concepts:
              'System integration, IoT applications, data visualization.',
          },
          {
            title:
              'Chapter 12: Code a Dashboard – Weather Station (Gamification)',
            pages: '111–120',
            objective: 'Visualize data in a gamified way.',
            project:
              'Build a weather station that logs temperature, displays it on the OLED, and uses LEDs to indicate weather conditions.',
            concepts:
              'Data visualization, gamification, cross-board integration.',
          },
        ],
      },
      {
        title: 'Level 4: Expert Board – AI and Advanced Robotics',
        chapters: [
          {
            title: 'Chapter 13: See the World (Camera Module)',
            pages: '121–130',
            objective: 'Learn about computer vision and image processing.',
            project:
              'Use the camera to detect a colored object and display its position on the OLED.',
            concepts:
              'Image processing, object detection, display integration.',
          },
          {
            title: 'Chapter 14: Think Like a Human (AI Module)',
            pages: '131–140',
            objective: 'Explore AI and decision-making.',
            project:
              'Train a simple AI model to recognize hand gestures (using camera data) and trigger a servo to wave back.',
            concepts: 'Machine learning, edge AI, system integration.',
          },
          {
            title: 'Chapter 15: Stay Balanced (Gyroscope)',
            pages: '141–150',
            objective: 'Learn about motion sensing and control systems.',
            project:
              'Build a self-balancing robot using the gyroscope, DC motors, and LED feedback.',
            concepts: 'PID control, motion sensing, autonomous systems.',
          },
          {
            title:
              'Chapter 16: Capstone – Autonomous Delivery Robot (Integration)',
            pages: '151–160',
            objective: 'Combine all skills in a capstone project.',
            project:
              'Create an autonomous delivery robot that uses the camera and AI to navigate obstacles, with Wi-Fi reporting.',
            concepts:
              'Full system integration, autonomous robotics, real-world application.',
          },
        ],
      },
    ];
  }

  // Get data for the Video Showcase section
  getVideos(): Video[] {
    return [
      {
        title: 'Video 1: Getting Started with the Base Board',
        embedUrl: 'https://www.youtube.com/embed/2EjLVc8WUvM',
      },
      {
        title: 'Video 2: Building a Robot with the Intermediate Board',
        embedUrl: 'https://www.youtube.com/embed/WlEyY_fI8Io',
      },
      {
        title: 'Video 3: Exploring IoT with the Advanced Board',
        embedUrl: 'https://www.youtube.com/embed/E-q3aTmlqmY',
      },
    ];
  }
}
