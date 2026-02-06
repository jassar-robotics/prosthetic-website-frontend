// ============================================================
// DUMMY DATA — mirrors Django models from the schema
// Replace with TanStack Query calls to /projects and /contributors
// ============================================================

export const projects = [
  {
    id: 1,
    name: "Hand Prosthetic v2",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80",
    whichHand: "RIGHT",
    circuitDiagram: null,
    manuals: null,
    video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    software_githubLink: "https://github.com/openhand/software",
    video_description_link: "https://youtube.com/watch?v=example",
    status: "ONGOING",
    version: "2.1.0",
    description:
      "<p>A fully modular, 3D-printable prosthetic hand designed for children aged 6–14. Uses servo-driven tendon actuation with EMG sensor input. Every part is replaceable, every decision is documented.</p>",
    stories: [1, 2],
    is_hidden: false,
    mechanical_github_repo: "https://github.com/openhand/mechanical",
    electrical_github_repo: "https://github.com/openhand/electrical",
    software_github_repo: "https://github.com/openhand/software",
    vision:
      "A hand that grows with the child — modular, repairable, and understandable by the family that uses it.",
    readme_mechanical: null,
    readme_electrical: null,
    readme_software: null,
  },
  {
    id: 2,
    name: "Neck Prosthetic Support",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    whichHand: null,
    circuitDiagram: null,
    manuals: null,
    video: null,
    software_githubLink: "https://github.com/openhand/neck-support",
    video_description_link: null,
    status: "UPCOMING",
    version: "0.1.0",
    description:
      "<p>An adjustable neck support brace with embedded posture sensors. Early-stage research into modular cervical support for post-surgical recovery.</p>",
    stories: [],
    is_hidden: false,
    mechanical_github_repo: null,
    electrical_github_repo: null,
    software_github_repo: null,
    vision:
      "Accessible cervical support that adapts to recovery stages without requiring hospital visits for adjustment.",
    readme_mechanical: null,
    readme_electrical: null,
    readme_software: null,
  },
  {
    id: 3,
    name: "Pediatric Grip Assist",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80",
    whichHand: "LEFT",
    circuitDiagram: null,
    manuals: null,
    video: "https://youtube.com/watch?v=example2",
    software_githubLink: "https://github.com/openhand/grip-assist",
    video_description_link: null,
    status: "FINAL",
    version: "1.0.0",
    description:
      "<p>A lightweight grip-assist exoskeleton for partial hand amputees. Completed design with full BOM and assembly guide available.</p>",
    stories: [3],
    is_hidden: false,
    mechanical_github_repo: "https://github.com/openhand/grip-mech",
    electrical_github_repo: "https://github.com/openhand/grip-elec",
    software_github_repo: "https://github.com/openhand/grip-soft",
    vision: "Restore everyday grip for children without the cost barrier of commercial solutions.",
    readme_mechanical: null,
    readme_electrical: null,
    readme_software: null,
  },
];

export const components = [
  { id: 1, name: "MG996R Servo Motor", type: "MECHANICAL", description: "High-torque servo for finger actuation", specs: "Torque: 11kg/cm at 6V", image: null, resource: "https://datasheets.com/mg996r", cad: null, version: "1.0", part_no: "SRV-MG996R" },
  { id: 2, name: "2A LiPo Battery", type: "ELECTRICAL", description: "Rechargeable lithium polymer battery pack", specs: "7.4V 2000mAh 2S", image: null, resource: "https://datasheets.com/lipo-2a", cad: null, version: "1.0", part_no: "BAT-LIPO-2A" },
  { id: 3, name: "Arduino Nano", type: "ELECTRICAL", description: "Microcontroller for servo control and sensor reading", specs: "ATmega328P, 5V logic", image: null, resource: "https://store.arduino.cc/nano", cad: null, version: "3.0", part_no: "MCU-NANO-V3" },
  { id: 4, name: "EMG Sensor Module", type: "ELECTRICAL", description: "Muscle signal sensor for gesture input", specs: "Analog output, 0-5V", image: null, resource: "https://datasheets.com/emg", cad: null, version: "2.0", part_no: "SNS-EMG-01" },
  { id: 5, name: "PLA Filament (Skin-tone)", type: "MECHANICAL", description: "3D printing filament for outer shell", specs: "1.75mm, 1kg spool", image: null, resource: null, cad: null, version: "1.0", part_no: "FIL-PLA-SKIN" },
  { id: 6, name: "TPU Filament (Flex)", type: "MECHANICAL", description: "Flexible filament for finger pads and joints", specs: "1.75mm, 95A Shore", image: null, resource: null, cad: null, version: "1.0", part_no: "FIL-TPU-95A" },
  { id: 7, name: "Braided Fishing Line", type: "MECHANICAL", description: "High-strength tendon line for finger actuation", specs: "50lb test, 0.3mm", image: null, resource: null, cad: null, version: "1.0", part_no: "TND-BRAID-50" },
  { id: 8, name: "Micro Limit Switch", type: "ELECTRICAL", description: "End-stop detection for finger position", specs: "125V 1A, lever actuator", image: null, resource: null, cad: null, version: "1.0", part_no: "SW-LIMIT-01" },
];

export const componentQuantityPerProject = [
  { components: 1, project: 1, quantity: 5 },
  { components: 2, project: 1, quantity: 1 },
  { components: 3, project: 1, quantity: 1 },
  { components: 4, project: 1, quantity: 2 },
  { components: 5, project: 1, quantity: 1 },
  { components: 6, project: 1, quantity: 1 },
  { components: 7, project: 1, quantity: 1 },
  { components: 8, project: 1, quantity: 5 },
  { components: 3, project: 2, quantity: 1 },
  { components: 2, project: 2, quantity: 1 },
];

export const contributors = [
  {
    id: 1,
    fullName: "Dr. Sarah Chen",
    quote: "Open hardware is the future of accessible medicine.",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964ac31?w=400&q=80",
    is_hidden: false,
    is_accepted: true,
    email: "sarah@openhand.org",
    phone: null,
    type: "MECHANIC",
    project: [1],
    file_mechanical: null,
    file_electrical: null,
    file_software: null,
    file_others: null,
  },
  {
    id: 2,
    fullName: "Marcus Rivera",
    quote: "Every child deserves a hand that fits their world.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    is_hidden: false,
    is_accepted: true,
    email: "marcus@openhand.org",
    phone: null,
    type: "ELECTRIC",
    project: [1, 3],
    file_mechanical: null,
    file_electrical: null,
    file_software: null,
    file_others: null,
  },
  {
    id: 3,
    fullName: "Anika Patel",
    quote: "Code should serve people, not the other way around.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
    is_hidden: false,
    is_accepted: true,
    email: "anika@openhand.org",
    phone: null,
    type: "SOFTWARE",
    project: [1],
    file_mechanical: null,
    file_electrical: null,
    file_software: null,
    file_others: null,
  },
  {
    id: 4,
    fullName: "James Okonkwo",
    quote: "When we share knowledge, we multiply impact.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    is_hidden: false,
    is_accepted: true,
    email: "james@openhand.org",
    phone: null,
    type: "MECHANIC",
    project: [1, 2],
    file_mechanical: null,
    file_electrical: null,
    file_software: null,
    file_others: null,
  },
  {
    id: 5,
    fullName: "Lena Kowalski",
    quote: "Documentation is an act of kindness to the next builder.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    is_hidden: false,
    is_accepted: true,
    email: "lena@openhand.org",
    phone: null,
    type: "OTHERS",
    project: [1, 3],
    file_mechanical: null,
    file_electrical: null,
    file_software: null,
    file_others: null,
  },
  {
    id: 6,
    fullName: "Tomás Gutierrez",
    quote: "I build so that others don't have to wait.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    is_hidden: false,
    is_accepted: true,
    email: "tomas@openhand.org",
    phone: null,
    type: "ELECTRIC",
    project: [2],
    file_mechanical: null,
    file_electrical: null,
    file_software: null,
    file_others: null,
  },
];

export const stories = [
  {
    id: 1,
    project: 1,
    name: "Rami's First Grip",
    country: "Lebanon",
    story:
      "<p>Rami, age 8, received his first OpenHand at a community workshop in Beirut. Within two weeks, he was drawing again — something he hadn't done since his accident. His mother learned to replace the finger pads herself using the printed guide.</p>",
    is_accepted: true,
  },
  {
    id: 2,
    project: 1,
    name: "Building Together in Nairobi",
    country: "Kenya",
    story:
      "<p>A university makerspace in Nairobi assembled three OpenHands in a single weekend workshop. Two went to local children, one became a teaching model for biomedical engineering students. The assembly guide was translated into Swahili by the students themselves.</p>",
    is_accepted: true,
  },
  {
    id: 3,
    project: 3,
    name: "Clara's Piano Practice",
    country: "Brazil",
    story:
      "<p>Clara, age 11, uses the Grip Assist to practice piano. Her teacher modified the tension settings following the documentation so that Clara could control the pressure on each key. She performed at her school's recital last month.</p>",
    is_accepted: true,
  },
];

export const useCases = [
  {
    id: 1,
    project: 1,
    heading: "Community Workshop Assembly",
    description:
      "<p>The OpenHand can be assembled in a community makerspace setting with basic 3D printers and common tools. A typical workshop takes 2 days and produces a fitted prosthetic hand from start to finish.</p>",
  },
  {
    id: 2,
    project: 1,
    heading: "Home Repair & Maintenance",
    description:
      "<p>Families can replace worn finger pads, re-tension tendons, and swap servo motors at home using the included maintenance manual. Average repair time is under 30 minutes.</p>",
  },
  {
    id: 3,
    project: 1,
    heading: "Educational Robotics Programs",
    description:
      "<p>Universities and STEM programs use the OpenHand as a teaching platform for mechatronics, embedded systems, and human-centered design. Full curriculum materials are available.</p>",
  },
];

export const stages = [
  {
    id: 1,
    project: 1,
    stage_no: 1,
    heading: "Research & Anatomy Study",
    description:
      "<p>Studied hand biomechanics, existing prosthetic designs, and user needs. Interviewed 12 families and 4 occupational therapists to understand real-world requirements.</p>",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&q=80",
  },
  {
    id: 2,
    project: 1,
    stage_no: 2,
    heading: "Mechanical Design v1",
    description:
      "<p>First iteration of the finger linkage mechanism using a four-bar linkage system. Tested 3 different tendon routing paths before settling on the dorsal channel approach.</p>",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80",
  },
  {
    id: 3,
    project: 1,
    stage_no: 3,
    heading: "Electronics Integration",
    description:
      "<p>Designed the control board with Arduino Nano as the brain. EMG sensors were calibrated for children's muscle signals which are significantly weaker than adult readings.</p>",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
  },
  {
    id: 4,
    project: 1,
    stage_no: 4,
    heading: "Software & Calibration",
    description:
      "<p>Developed the firmware for servo control with adaptive grip strength. Created a simple calibration wizard that can be run on any computer with a USB cable.</p>",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&q=80",
  },
  {
    id: 5,
    project: 1,
    stage_no: 5,
    heading: "User Testing & Iteration",
    description:
      "<p>Tested with 6 children over 3 months. Key findings: thumb opposition angle needed 15° adjustment, wrist socket required softer lining, battery life exceeded requirements at 8 hours.</p>",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80",
  },
];

export const statusBoard = [
  { id: 1, project: 1, heading: "Redesign thumb joint for better opposition", description: "The current thumb joint doesn't allow enough rotation for pinch grip. Need to implement a ball-and-socket mechanism.", status: "ONGOING" },
  { id: 2, project: 1, heading: "Add Bluetooth calibration app", description: "Create a mobile app that connects via BLE to calibrate EMG thresholds without needing a laptop.", status: "TODO" },
  { id: 3, project: 1, heading: "Waterproof coating research", description: "Investigate conformal coating options for the PCB and silicone sealing for the shell joints.", status: "TODO" },
  { id: 4, project: 1, heading: "Assembly video series — Episode 1", description: "Film the first episode covering tools needed, part identification, and palm assembly.", status: "ONGOING" },
  { id: 5, project: 1, heading: "EMG sensor board v2 layout", description: "Revised PCB layout with improved noise filtering and smaller form factor.", status: "TESTING" },
  { id: 6, project: 1, heading: "Finger pad mold design", description: "Designed silicone molds for finger pad tips using FDA-grade silicone.", status: "REVIEW" },
  { id: 7, project: 1, heading: "Wrist socket comfort liner", description: "New TPU liner design that conforms better to the residual limb.", status: "ACCEPTED" },
  { id: 8, project: 1, heading: "Battery management system", description: "Integrated BMS for safe charging and discharge protection of the LiPo pack.", status: "ACCEPTED" },
  { id: 9, project: 2, heading: "Initial neck brace CAD model", description: "First draft of the adjustable neck support frame with sensor mounting points.", status: "TODO" },
  { id: 10, project: 2, heading: "Posture sensor selection", description: "Evaluate IMU options for detecting head tilt and providing haptic feedback.", status: "TODO" },
];

export const projectImages = [
  { id: 1, project: 1, image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80" },
  { id: 2, project: 1, image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80" },
  { id: 3, project: 1, image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&q=80" },
  { id: 4, project: 3, image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&q=80" },
];

// Helper to get BOM for a project
export function getBOM(projectId) {
  return componentQuantityPerProject
    .filter((cqp) => cqp.project === projectId)
    .map((cqp) => {
      const comp = components.find((c) => c.id === cqp.components);
      return { ...comp, quantity: cqp.quantity };
    });
}

// Helper to get stages for a project
export function getStages(projectId) {
  return stages
    .filter((s) => s.project === projectId)
    .sort((a, b) => a.stage_no - b.stage_no);
}

// Helper to get status board for a project
export function getStatusBoard(projectId) {
  return statusBoard.filter((s) => s.project === projectId);
}

// Helper to get stories for a project
export function getStories(projectId) {
  return stories.filter((s) => s.project === projectId && s.is_accepted);
}

// Helper to get use cases for a project
export function getUseCases(projectId) {
  return useCases.filter((u) => u.project === projectId);
}

// Helper to get contributors for a project
export function getContributors(projectId) {
  return contributors.filter((c) => c.is_accepted && !c.is_hidden && c.project.includes(projectId));
}

// Helper to get visible contributors
export function getAllContributors() {
  return contributors.filter((c) => c.is_accepted && !c.is_hidden);
}
