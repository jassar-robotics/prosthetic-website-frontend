// ============================================================
// DUMMY DATA - mirrors Django models from the schema
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
    software_githubLink: "https://github.com/OpenClaw/software",
    production_repo: "https://github.com/OpenClaw/hand-v2-production",
    video_description_link: "https://youtube.com/watch?v=example",
    status: "ONGOING",
    version: "2.1.0",
    description:
      "<p>A fully modular, 3D-printable prosthetic hand designed for children aged 6–14. Uses servo-driven tendon actuation with EMG sensor input. Every part is replaceable, every decision is documented.</p>",
    stories: [1, 2],
    is_hidden: false,
    mechanical_github_repo: "https://github.com/OpenClaw/mechanical",
    electrical_github_repo: "https://github.com/OpenClaw/electrical",
    software_github_repo: "https://github.com/OpenClaw/software",
    vision:
      "A hand that grows with the child - modular, repairable, and understandable by the family that uses it.",
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
    software_githubLink: "https://github.com/OpenClaw/neck-support",
    production_repo: "https://github.com/OpenClaw/neck-support-production",
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
    software_githubLink: "https://github.com/OpenClaw/grip-assist",
    video_description_link: null,
    production_repo: "https://github.com/OpenClaw/grip-assist-production",
    status: "FINAL",
    version: "1.0.0",
    description:
      "<p>A lightweight grip-assist exoskeleton for partial hand amputees. Completed design with full BOM and assembly guide available.</p>",
    stories: [3],
    is_hidden: false,
    mechanical_github_repo: "https://github.com/OpenClaw/grip-mech",
    electrical_github_repo: "https://github.com/OpenClaw/grip-elec",
    software_github_repo: "https://github.com/OpenClaw/grip-soft",
    vision: "Restore everyday grip for children without the cost barrier of commercial solutions.",
    readme_mechanical: null,
    readme_electrical: null,
    readme_software: null,
  },
  {
    id: 4,
    name: "Adaptive Thumb Module",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    whichHand: null,
    circuitDiagram: null,
    manuals: null,
    video: null,
    software_githubLink: "https://github.com/OpenClaw/thumb-module",
    video_description_link: null,
    status: "ONGOING",
    production_repo: "https://github.com/OpenClaw/thumb-module-production",
    version: "0.8.0",
    description:
      "<p>A standalone opposable thumb module with ball-and-socket joint and independent servo actuation. Designed to snap into the OpenClaw v2 palm or work as a retrofit for other prosthetic platforms.</p>",
    stories: [],
    is_hidden: false,
    mechanical_github_repo: "https://github.com/OpenClaw/thumb-mech",
    electrical_github_repo: null,
    software_github_repo: "https://github.com/OpenClaw/thumb-module",
    vision: "A universal thumb that fits multiple hand platforms and restores pinch grip.",
    readme_mechanical: null,
    readme_electrical: null,
    readme_software: null,
  },
  {
    id: 5,
    name: "Sensory Feedback Sleeve",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    whichHand: null,
    circuitDiagram: null,
    manuals: null,
    video: null,
    software_githubLink: null,
    video_description_link: null,
    status: "UPCOMING",
    version: "0.1.0",
    description:
      "<p>A wearable forearm sleeve with vibrotactile actuators that relay pressure and touch data from fingertip sensors on the prosthetic hand back to the user's skin.</p>",

    production_repo: null,  
    stories: [],
    is_hidden: false,
    mechanical_github_repo: null,
    electrical_github_repo: null,
    software_github_repo: null,
    vision: "Give users the ability to feel what their prosthetic hand touches.",
    readme_mechanical: null,
    readme_electrical: null,
    readme_software: null,
  },
  {
    id: 6,
    name: "Wrist Rotation Unit",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
    whichHand: null,
    circuitDiagram: null,
    manuals: null,
    video: "https://youtube.com/watch?v=example3",
    software_githubLink: "https://github.com/OpenClaw/wrist-unit",
    video_description_link: null,
    status: "FINAL",
    version: "1.2.0",
    description:
      "<p>A compact powered wrist rotation module using a worm gear mechanism. Provides 180° pronation/supination with position feedback. Compatible with the OpenClaw v2 socket.</p>",
    stories: [],
    production_repo: "https://github.com/OpenClaw/wrist-unit-production",
    is_hidden: false,
    mechanical_github_repo: "https://github.com/OpenClaw/wrist-mech",
    electrical_github_repo: "https://github.com/OpenClaw/wrist-elec",
    software_github_repo: "https://github.com/OpenClaw/wrist-unit",
    vision: "Natural wrist motion without bulk - pour a glass of water, turn a doorknob.",
    readme_mechanical: null,
    readme_electrical: null,
    readme_software: null,
  },
  {
    id: 7,
    name: "Child-Size Socket System",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
    whichHand: null,
    circuitDiagram: null,
    manuals: null,
    video: null,
    software_githubLink: null,
    video_description_link: null,
    status: "ONGOING",
    version: "0.5.0",
    description:
      "<p>A parametric socket system with adjustable sizing for children aged 4–16. Uses a two-part snap-fit design with soft TPU inner liner and rigid PLA outer shell.</p>",
    stories: [],
    is_hidden: false,
    mechanical_github_repo: "https://github.com/OpenClaw/socket-system",
    production_repo: null,
    electrical_github_repo: null,
    software_github_repo: null,
    vision: "A socket that grows with the child - resize in 20 minutes, not 2 weeks.",
    readme_mechanical: null,
    readme_electrical: null,
    readme_software: null,
  },
  {
    id: 8,
    name: "EMG Calibration App",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80",
    whichHand: null,
    circuitDiagram: null,
    manuals: null,
    video: null,
    software_githubLink: "https://github.com/OpenClaw/emg-app",
    video_description_link: null,
    status: "ONGOING",
    version: "0.3.0",
    description:
      "<p>A cross-platform mobile app (React Native) that connects via BLE to the OpenClaw control board. Allows users to calibrate EMG thresholds, adjust grip patterns, and run diagnostics without a laptop.</p>",
    stories: [],
    is_hidden: false,
    mechanical_github_repo: null,
    electrical_github_repo: null,
    software_github_repo: "https://github.com/OpenClaw/emg-app",
    production_repo: null,
    vision: "Calibrate your hand from your phone in under 5 minutes.",
    readme_mechanical: null,
    readme_electrical: null,
    readme_software: null,
  },
  {
    id: 9,
    name: "3D Print Profile Library",
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80",
    whichHand: null,
    circuitDiagram: null,
    manuals: null,
    video: null,
    software_githubLink: "https://github.com/OpenClaw/print-profiles",
    video_description_link: null,
    status: "FINAL",
    version: "2.0.0",
    description:
      "<p>Tested and validated slicer profiles for all OpenClaw parts across popular printers (Ender 3, Prusa i3, Bambu A1). Includes material settings for PLA, PETG, and TPU with recommended infill and support strategies.</p>",
    stories: [],
    is_hidden: false,
    mechanical_github_repo: null,
    electrical_github_repo: null,
    software_github_repo: "https://github.com/OpenClaw/print-profiles",
    vision: "Hit print and know it will work - no guesswork, no failed parts.",
    readme_mechanical: null,
    production_repo: "https://github.com/OpenClaw/print-profiles-production",
    readme_electrical: null,
    readme_software: null,
  },
  {
    id: 10,
    name: "Myoelectric Training Kit",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80",
    whichHand: null,
    circuitDiagram: null,
    manuals: null,
    video: null,
    software_githubLink: null,
    video_description_link: null,
    status: "UPCOMING",
    version: "0.0.1",
    description:
      "<p>An educational kit for clinicians and occupational therapists to train patients on myoelectric control before fitting a prosthetic. Includes a simplified EMG board, LED feedback panel, and guided exercise curriculum.</p>",
    stories: [],
    is_hidden: false,
    mechanical_github_repo: null,
    electrical_github_repo: null,
    software_github_repo: null,
    vision: "Learn to control a prosthetic hand before you even have one.",
    readme_mechanical: null,
    readme_electrical: null,
    readme_software: null,
    production_repo: null,
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
    bio: "Biomedical engineer with 8 years of experience in prosthetic design. Former researcher at MIT Media Lab's Biomechatronics group. Passionate about making assistive technology accessible to underserved communities.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    location: "Boston, MA",
    is_hidden: false,
    is_accepted: true,
    email: "sarah@OpenClaw.org",
    phone: null,
    type: "MECHANIC",
    project: [1],
    social: {
      x: "https://x.com/sarahchen",
      linkedin: "https://linkedin.com/in/sarahchen",
      github: "https://github.com/sarahchen",
      website: null,
    },
    file_mechanical: null,
    file_electrical: null,
    file_software: null,
    file_others: null,
  },
  {
    id: 2,
    fullName: "Marcus Rivera",
    quote: "Every child deserves a hand that fits their world.",
    bio: "Electronics engineer specializing in low-power embedded systems and PCB design. Contributed EMG sensor modules and power management circuits to multiple open-source prosthetic projects.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    location: "Austin, TX",
    is_hidden: false,
    is_accepted: true,
    email: "marcus@OpenClaw.org",
    phone: null,
    type: "ELECTRIC",
    project: [1, 3],
    social: {
      x: null,
      linkedin: "https://linkedin.com/in/marcusrivera",
      github: "https://github.com/marcusrivera",
      website: "https://marcusrivera.dev",
    },
    file_mechanical: null,
    file_electrical: null,
    file_software: null,
    file_others: null,
  },
  {
    id: 3,
    fullName: "Anika Patel",
    quote: "Code should serve people, not the other way around.",
    bio: "Full-stack developer and firmware engineer. Built the OpenClaw calibration app and BLE communication layer. Advocates for clean, well-documented code in open-source medical devices.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
    location: "Mumbai, India",
    is_hidden: false,
    is_accepted: true,
    email: "anika@OpenClaw.org",
    phone: null,
    type: "SOFTWARE",
    project: [1],
    social: {
      x: "https://x.com/anikapatel",
      linkedin: "https://linkedin.com/in/anikapatel",
      github: "https://github.com/anikapatel",
      website: null,
    },
    file_mechanical: null,
    file_electrical: null,
    file_software: null,
    file_others: null,
  },
  {
    id: 4,
    fullName: "James Okonkwo",
    quote: "When we share knowledge, we multiply impact.",
    bio: "Mechanical designer and 3D printing specialist based in Lagos. Designed the parametric socket system and contributed multiple print profiles optimized for affordable FDM printers available in West Africa.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    location: "Lagos, Nigeria",
    is_hidden: false,
    is_accepted: true,
    email: "james@OpenClaw.org",
    phone: null,
    type: "MECHANIC",
    project: [1, 2],
    social: {
      x: "https://x.com/jamesokonkwo",
      linkedin: "https://linkedin.com/in/jamesokonkwo",
      github: "https://github.com/jamesokonkwo",
      website: null,
    },
    file_mechanical: null,
    file_electrical: null,
    file_software: null,
    file_others: null,
  },
  {
    id: 5,
    fullName: "Lena Kowalski",
    quote: "Documentation is an act of kindness to the next builder.",
    bio: "Technical writer and community manager. Wrote the OpenClaw assembly manual, translated documentation into Polish and German, and manages the contributor onboarding process.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    location: "Warsaw, Poland",
    is_hidden: false,
    is_accepted: true,
    email: "lena@OpenClaw.org",
    phone: null,
    type: "OTHERS",
    project: [1, 3],
    social: {
      x: "https://x.com/lenakowalski",
      linkedin: "https://linkedin.com/in/lenakowalski",
      github: null,
      website: "https://lenakowalski.com",
    },
    file_mechanical: null,
    file_electrical: null,
    file_software: null,
    file_others: null,
  },
  {
    id: 6,
    fullName: "Tomás Gutierrez",
    quote: "I build so that others don't have to wait.",
    bio: "Electrical engineer and maker from São Paulo. Designed the neck support sensor array and contributes to quality assurance testing. Runs a local makerspace that builds prosthetics for children in need.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    location: "São Paulo, Brazil",
    is_hidden: false,
    is_accepted: true,
    email: "tomas@OpenClaw.org",
    phone: null,
    type: "ELECTRIC",
    project: [2],
    social: {
      x: null,
      linkedin: "https://linkedin.com/in/tomasgutierrez",
      github: "https://github.com/tomasgutierrez",
      website: null,
    },
    file_mechanical: null,
    file_electrical: null,
    file_software: null,
    file_others: null,
  },
];

// Thank you notes - only is_reviewed: true ones are shown on profile
export const thankYouNotes = [
  {
    id: 1,
    contributor_id: 1,
    message: "Dr. Chen, the assembly guide you wrote for the Hand Prosthetic v2 helped me build one for my nephew. He's so happy. Thank you!",
    is_reviewed: true,
    created_at: "2025-12-15",
  },
  {
    id: 2,
    contributor_id: 1,
    message: "Your research and documentation made it possible for our makerspace in Kenya to start building prosthetics. We are forever grateful.",
    is_reviewed: true,
    created_at: "2026-01-08",
  },
  {
    id: 3,
    contributor_id: 2,
    message: "Marcus, the EMG sensor module you designed is brilliant. Simple, affordable, and it just works. Thank you for making it open source.",
    is_reviewed: true,
    created_at: "2025-11-20",
  },
  {
    id: 4,
    contributor_id: 3,
    message: "The calibration app is so intuitive even my 10-year-old can use it. Amazing work Anika!",
    is_reviewed: true,
    created_at: "2026-01-22",
  },
  {
    id: 5,
    contributor_id: 3,
    message: "Your clean code and documentation set the standard for the whole project. Thank you for caring about the details.",
    is_reviewed: true,
    created_at: "2025-12-30",
  },
  {
    id: 6,
    contributor_id: 4,
    message: "James, the parametric socket design changed everything for us. We can now fit kids in 20 minutes instead of weeks. God bless you.",
    is_reviewed: true,
    created_at: "2026-02-01",
  },
  {
    id: 7,
    contributor_id: 5,
    message: "Lena, the Polish translation of the manual meant my grandmother could help me build the hand. She was so proud. Thank you.",
    is_reviewed: true,
    created_at: "2025-10-15",
  },
  {
    id: 8,
    contributor_id: 5,
    message: "Best technical documentation I've ever seen in an open-source project. Period.",
    is_reviewed: true,
    created_at: "2026-01-05",
  },
  {
    id: 9,
    contributor_id: 6,
    message: "Tomás, your makerspace workshop inspired me to start one in my city. Thank you for showing the way.",
    is_reviewed: true,
    created_at: "2025-11-30",
  },
  {
    id: 10,
    contributor_id: 2,
    message: "The wiring diagrams you provided saved me hours of debugging. Clear, accurate, and beautiful. Thank you Marcus!",
    is_reviewed: false,
    created_at: "2026-02-10",
  },
];

export const coreTeam = [
  {
    id: 1,
    name: "Bibek Phuyal",
    work: "Lead Developer & Systems Architect",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    social: {
      x: "https://x.com/bibekphuyal",
      linkedin: "https://linkedin.com/in/bibekphuyal",
      github: "https://github.com/bibekphuyal",
    },
  },
  {
    id: 2,
    name: "Dr. Sarah Chen",
    work: "Biomedical Engineering Lead",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964ac31?w=400&q=80",
    social: {
      x: "https://x.com/sarahchen",
      linkedin: "https://linkedin.com/in/sarahchen",
      github: null,
    },
  },
  {
    id: 3,
    name: "Marcus Rivera",
    work: "Electronics & PCB Design",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    social: {
      x: null,
      linkedin: "https://linkedin.com/in/marcusrivera",
      github: "https://github.com/marcusrivera",
    },
  },
  {
    id: 4,
    name: "Anika Patel",
    work: "Firmware & Embedded Systems",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
    social: {
      x: "https://x.com/anikapatel",
      linkedin: "https://linkedin.com/in/anikapatel",
      github: "https://github.com/anikapatel",
    },
  },
  {
    id: 5,
    name: "James Okonkwo",
    work: "Mechanical Design & CAD",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    social: {
      x: null,
      linkedin: "https://linkedin.com/in/jamesokonkwo",
      github: "https://github.com/jamesokonkwo",
    },
  },
  {
    id: 6,
    name: "Lena Kowalski",
    work: "Documentation & Community",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    social: {
      x: "https://x.com/lenakowalski",
      linkedin: "https://linkedin.com/in/lenakowalski",
      github: null,
    },
  },
  {
    id: 7,
    name: "Tomás Gutierrez",
    work: "Testing & Quality Assurance",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80",
    social: {
      x: null,
      linkedin: "https://linkedin.com/in/tomasgutierrez",
      github: "https://github.com/tomasgutierrez",
    },
  },
  {
    id: 8,
    name: "Priya Sharma",
    work: "UX Research & Accessibility",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80",
    social: {
      x: "https://x.com/priyasharma",
      linkedin: "https://linkedin.com/in/priyasharma",
      github: null,
    },
  },
];

export const stories = [
  {
    id: 1,
    project: 1,
    name: "Rami's First Grip",
    country: "Lebanon",
    story:
      "<p>Rami, age 8, received his first OpenClaw at a community workshop in Beirut. Within two weeks, he was drawing again - something he hadn't done since his accident. His mother learned to replace the finger pads herself using the printed guide.</p>",
    is_accepted: true,
  },
  {
    id: 2,
    project: 1,
    name: "Building Together in Nairobi",
    country: "Kenya",
    story:
      "<p>A university makerspace in Nairobi assembled three OpenClaws in a single weekend workshop. Two went to local children, one became a teaching model for biomedical engineering students. The assembly guide was translated into Swahili by the students themselves.</p>",
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
      "<p>The OpenClaw can be assembled in a community makerspace setting with basic 3D printers and common tools. A typical workshop takes 2 days and produces a fitted prosthetic hand from start to finish.</p>",
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
      "<p>Universities and STEM programs use the OpenClaw as a teaching platform for mechatronics, embedded systems, and human-centered design. Full curriculum materials are available.</p>",
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
  { id: 4, project: 1, heading: "Assembly video series - Episode 1", description: "Film the first episode covering tools needed, part identification, and palm assembly.", status: "ONGOING" },
  { id: 5, project: 1, heading: "EMG sensor board v2 layout", description: "Revised PCB layout with improved noise filtering and smaller form factor.", status: "TESTING" },
  { id: 6, project: 1, heading: "Finger pad mold design", description: "Designed silicone molds for finger pad tips using FDA-grade silicone.", status: "REVIEW" },
  { id: 7, project: 1, heading: "Wrist socket comfort liner", description: "New TPU liner design that conforms better to the residual limb.", status: "ACCEPTED" },
  { id: 8, project: 1, heading: "Battery management system", description: "Integrated BMS for safe charging and discharge protection of the LiPo pack.", status: "ACCEPTED" },
  { id: 9, project: 2, heading: "Initial neck brace CAD model", description: "First draft of the adjustable neck support frame with sensor mounting points.", status: "TODO" },
  { id: 10, project: 2, heading: "Posture sensor selection", description: "Evaluate IMU options for detecting head tilt and providing haptic feedback.", status: "TODO" },
];

export const projectImages = [
  // Project 1 - Hand Prosthetic v2
  { id: 1,  project: 1, image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80", caption: "Prototype assembly on workbench" },
  { id: 2,  project: 1, image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80", caption: "Tendon routing close-up" },
  { id: 3,  project: 1, image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80", caption: "Finger linkage mechanism test" },
  { id: 4,  project: 1, image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80", caption: "Control board with EMG sensor" },
  { id: 5,  project: 1, image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80", caption: "Firmware calibration interface" },
  { id: 6,  project: 1, image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80", caption: "3D printed palm components" },
  { id: 7,  project: 1, image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80", caption: "Servo motor mounting test" },
  { id: 8,  project: 1, image: "https://images.unsplash.com/photo-1530497610245-b484c7b79a24?w=800&q=80", caption: "Wiring harness layout" },
  // Project 2 - Neck Prosthetic Support
  { id: 9,  project: 2, image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80", caption: "Initial concept sketch" },
  { id: 10, project: 2, image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80", caption: "Sensor placement research" },
  // Project 3 - Pediatric Grip Assist
  { id: 11, project: 3, image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80", caption: "Completed grip assist device" },
  { id: 12, project: 3, image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80", caption: "Fit testing with user" },
  { id: 13, project: 3, image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80", caption: "Classroom demonstration" },
  { id: 14, project: 3, image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80", caption: "Internal mechanism view" },
  // Project 4 - Adaptive Thumb Module
  { id: 15, project: 4, image: "https://images.unsplash.com/photo-1530497610245-b484c7b79a24?w=800&q=80", caption: "Ball-and-socket joint prototype" },
  { id: 16, project: 4, image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80", caption: "PCB layout for thumb controller" },
  { id: 17, project: 4, image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80", caption: "Snap-fit attachment test" },
  // Project 6 - Wrist Rotation Unit
  { id: 18, project: 6, image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80", caption: "Worm gear mechanism" },
  { id: 19, project: 6, image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80", caption: "Position feedback testing" },
  { id: 20, project: 6, image: "https://images.unsplash.com/photo-1530497610245-b484c7b79a24?w=800&q=80", caption: "Socket integration view" },
  { id: 21, project: 6, image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80", caption: "Full rotation range demo" },
  { id: 22, project: 6, image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80", caption: "Motor driver board" },
  // Project 7 - Child-Size Socket System
  { id: 23, project: 7, image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80", caption: "Parametric sizing templates" },
  { id: 24, project: 7, image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80", caption: "TPU liner flex test" },
  { id: 25, project: 7, image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80", caption: "Snap-fit shell assembly" },
  // Project 8 - EMG Calibration App
  { id: 26, project: 8, image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80", caption: "App dashboard UI" },
  { id: 27, project: 8, image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80", caption: "BLE connection flow" },
  // Project 9 - 3D Print Profile Library
  { id: 28, project: 9, image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80", caption: "Print test comparison grid" },
  { id: 29, project: 9, image: "https://images.unsplash.com/photo-1530497610245-b484c7b79a24?w=800&q=80", caption: "Layer adhesion samples" },
  { id: 30, project: 9, image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80", caption: "Ender 3 profile results" },
  { id: 31, project: 9, image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80", caption: "TPU flexibility benchmark" },
];

// Helper to get gallery images for a project
export function getGallery(projectId) {
  return projectImages.filter((img) => img.project === projectId);
}

// Helper to get BOM for a project
export function getBOM(projectId) {  return componentQuantityPerProject
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

// Helper to get a single contributor by ID
export function getContributorById(id) {
  return contributors.find((c) => c.id === Number(id)) || null;
}

// Helper to get projects a contributor worked on
export function getContributorProjects(contributorId) {
  const contributor = getContributorById(contributorId);
  if (!contributor) return [];
  return projects.filter((p) => contributor.project.includes(p.id));
}

// Helper to get reviewed thank you notes for a contributor
export function getThankYouNotes(contributorId) {
  return thankYouNotes
    .filter((n) => n.contributor_id === Number(contributorId) && n.is_reviewed)
    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
}