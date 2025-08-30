import { Project } from '@/components/cards/ProjectCard';

export const projects: Project[] = [
  {
    id: '1',
    title: 'AI-Powered Code Assistant',
    description: 'An intelligent VS Code extension that provides real-time code suggestions, bug detection, and automated refactoring using machine learning models trained on millions of code repositories.',
    tags: ['AI', 'TypeScript', 'VS Code', 'Machine Learning'],
    githubUrl: 'https://github.com/example/ai-code-assistant',
    liveUrl: 'https://marketplace.visualstudio.com/items?itemName=example.ai-assistant',
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop',
    stars: 2847,
    views: 15420
  },
  {
    id: '2',
    title: 'Smart Garden Monitoring System',
    description: 'IoT-based garden monitoring solution with soil moisture sensors, automated watering, weather integration, and mobile app control. Features include plant health analytics and growth tracking.',
    tags: ['IoT', 'Arduino', 'React Native', 'AWS'],
    githubUrl: 'https://github.com/example/smart-garden',
    liveUrl: 'https://smart-garden-demo.netlify.app',
    imageUrl: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=300&fit=crop',
    stars: 1234,
    views: 8932
  },
  {
    id: '3',
    title: 'Autonomous Drone Navigation',
    description: 'Computer vision-powered drone that can navigate obstacles, map environments, and perform automated inspections. Built with Python, OpenCV, and ROS for robust autonomous flight capabilities.',
    tags: ['Robotics', 'Computer Vision', 'Python', 'ROS'],
    githubUrl: 'https://github.com/example/autonomous-drone',
    imageUrl: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=500&h=300&fit=crop',
    stars: 3421,
    views: 12750
  },
  {
    id: '4',
    title: 'Real-time Collaborative Whiteboard',
    description: 'Web-based collaborative whiteboard application with real-time synchronization, vector graphics, voice chat, and multi-user drawing capabilities. Perfect for remote team collaboration and online education.',
    tags: ['Web Development', 'Socket.io', 'Canvas API', 'WebRTC'],
    githubUrl: 'https://github.com/example/collaborative-whiteboard',
    liveUrl: 'https://collab-whiteboard.vercel.app',
    imageUrl: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=500&h=300&fit=crop',
    stars: 987,
    views: 5643
  },
  {
    id: '5',
    title: 'Blockchain Voting System',
    description: 'Secure and transparent voting platform built on Ethereum blockchain. Features include voter verification, immutable vote recording, real-time result tracking, and comprehensive audit trails.',
    tags: ['Blockchain', 'Solidity', 'Web3', 'React'],
    githubUrl: 'https://github.com/example/blockchain-voting',
    liveUrl: 'https://secure-vote-blockchain.netlify.app',
    imageUrl: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=500&h=300&fit=crop',
    stars: 1876,
    views: 9384
  },
  {
    id: '6',
    title: 'Neural Network Music Generator',
    description: 'Deep learning model that composes original music in various genres. Uses LSTM networks and attention mechanisms to generate melodies, harmonies, and rhythms with human-like creativity.',
    tags: ['Deep Learning', 'Python', 'TensorFlow', 'Music AI'],
    githubUrl: 'https://github.com/example/neural-music-generator',
    liveUrl: 'https://ai-music-composer.herokuapp.com',
    imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=300&fit=crop',
    stars: 2156,
    views: 11267
  }
];