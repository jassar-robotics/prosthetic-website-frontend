// OpenHand AI Knowledge Base
// Used by the local chatbot to answer questions about the project

const knowledgeBase = [
  // === GENERAL / OVERVIEW ===
  {
    keywords: ["what", "openhand", "about", "project", "what is", "tell me"],
    answer:
      "OpenHand is an open-source prosthetic hand project. We design, build, and document modular prosthetic hands that anyone can manufacture using a 3D printer and commonly available electronic components. Our designs are fully open - CAD files, firmware, assembly guides, and BOMs are all published on GitHub.",
  },
  {
    keywords: ["who", "behind", "team", "founders", "created", "started", "made"],
    answer:
      "OpenHand is built by a global community of engineers, designers, makers, and families. Our core team includes biomedical engineers, firmware developers, mechanical designers, and technical writers spread across multiple continents. You can meet them on our About page.",
  },
  {
    keywords: ["mission", "goal", "purpose", "why", "exist"],
    answer:
      "Our mission is to make prosthetic hands accessible, repairable, and community-driven. We believe assistive technology shouldn't be locked behind patents or high costs. Every child who needs a hand should be able to get one - and every maker should be able to build one.",
  },
  {
    keywords: ["open source", "license", "free", "cost", "price"],
    answer:
      "Yes, OpenHand is completely open source. All designs, code, and documentation are freely available on GitHub. There are no licensing fees. The only costs involved are the materials to build a hand - typically under $50–100 for parts and filament depending on your location.",
  },
  {
    keywords: ["philosophy", "believe", "values", "principles"],
    answer:
      "We operate on five core beliefs: 1) Knowledge over money - shared designs compound impact. 2) Failures are progress - we document what didn't work. 3) Leave it easier for the next person. 4) Ownership without possession - completed designs belong to everyone. 5) Build bridges, not walls - open collaboration across disciplines.",
  },

  // === PROJECTS ===
  {
    keywords: ["projects", "how many", "list", "all projects", "available"],
    answer:
      "We currently have 10 projects in various stages: Hand Prosthetic v2 (ongoing), Neck Prosthetic Support (upcoming), Pediatric Grip Assist (final), Adaptive Thumb Module (ongoing), Sensory Feedback Sleeve (upcoming), Wrist Rotation Unit (final), Child-Size Socket System (ongoing), EMG Calibration App (ongoing), 3D Print Profile Library (final), and Myoelectric Training Kit (upcoming).",
  },
  {
    keywords: ["hand", "prosthetic", "v2", "main", "flagship"],
    answer:
      "The Hand Prosthetic v2 is our flagship project - a fully modular, 3D-printable prosthetic hand designed for the right hand. It uses MG996R servo motors, an Arduino Nano for control, EMG sensors for gesture input, and PLA/TPU filament for the structure. It's currently in active development (v2.1.0).",
  },
  {
    keywords: ["grip", "assist", "pediatric", "children", "kids"],
    answer:
      "The Pediatric Grip Assist is a lightweight grip-assist exoskeleton designed for partial hand amputees, especially children. It's a completed project (v1.0.0) with full BOM and assembly guide available. The vision is to restore everyday grip for children without the cost barrier of commercial solutions.",
  },
  {
    keywords: ["neck", "support", "brace"],
    answer:
      "The Neck Prosthetic Support is an adjustable neck support brace with embedded sensors for posture monitoring and correction feedback. It's currently in the upcoming/planning stage (v0.1.0).",
  },
  {
    keywords: ["thumb", "module", "adaptive"],
    answer:
      "The Adaptive Thumb Module is a standalone opposable thumb with a ball-and-socket joint and independent servo actuation. It's designed to snap into the OpenHand v2 palm or work as a retrofit for other prosthetic platforms. Currently ongoing at v0.8.0.",
  },
  {
    keywords: ["wrist", "rotation", "unit"],
    answer:
      "The Wrist Rotation Unit is a compact powered module using a worm gear mechanism providing 180° pronation/supination with position feedback. It's a completed project (v1.2.0) compatible with the OpenHand v2 socket.",
  },
  {
    keywords: ["socket", "child", "size", "parametric"],
    answer:
      "The Child-Size Socket System is a parametric socket with adjustable sizing for children aged 4–16. It uses a two-part snap-fit design with soft TPU inner liner and rigid PLA outer shell. Resize in 20 minutes, not 2 weeks. Currently at v0.5.0.",
  },
  {
    keywords: ["emg", "calibration", "app", "mobile", "bluetooth"],
    answer:
      "The EMG Calibration App is a cross-platform mobile app (React Native) that connects via BLE to the OpenHand control board. It lets users calibrate EMG thresholds, adjust grip patterns, and run diagnostics without a laptop. Currently at v0.3.0.",
  },
  {
    keywords: ["print", "profile", "slicer", "3d print", "settings"],
    answer:
      "The 3D Print Profile Library contains tested and validated slicer profiles for all OpenHand parts across popular printers (Ender 3, Prusa i3, Bambu A1). Includes settings for PLA, PETG, and TPU. It's a completed project at v2.0.0 - just hit print and it works.",
  },
  {
    keywords: ["myoelectric", "training", "kit", "education"],
    answer:
      "The Myoelectric Training Kit is an educational kit for clinicians and occupational therapists to train patients on myoelectric control before fitting a prosthetic. It includes a simplified EMG board, LED feedback panel, and guided exercise curriculum. Currently in planning at v0.0.1.",
  },

  // === BUILDING / MAKING ===
  {
    keywords: ["build", "make", "how to", "start", "begin", "get started", "maker"],
    answer:
      "To build an OpenHand: 1) Go to the Projects page and click 'I'm a Maker'. 2) Pick a project that interests you (ongoing or final status). 3) Check the Assembly tab for step-by-step instructions. 4) Download files from the Resources repo. 5) Gather parts from the BOM tab. 6) Watch the video walkthrough. Most builds take a weekend with a 3D printer.",
  },
  {
    keywords: ["printer", "3d", "which", "recommend", "need"],
    answer:
      "Any standard FDM 3D printer with at least 200x200x200mm build volume works. We have tested profiles for the Ender 3, Prusa i3 MK3S, and Bambu A1. You'll need PLA for structural parts and TPU (95A Shore) for flexible finger pads and joints.",
  },
  {
    keywords: ["parts", "materials", "components", "bom", "bill of materials", "buy", "where"],
    answer:
      "Each project has a detailed BOM (Bill of Materials) tab listing every component with part numbers, specifications, quantities, and source links. Key components for the Hand v2 include: MG996R servos (x5), Arduino Nano, EMG sensors (x2), 7.4V LiPo battery, PLA and TPU filament, braided fishing line for tendons, and micro limit switches.",
  },
  {
    keywords: ["cost", "expensive", "cheap", "budget", "affordable", "how much"],
    answer:
      "A complete Hand Prosthetic v2 build costs approximately $50–100 depending on your location and where you source components. The most expensive parts are the servo motors (~$3–5 each) and the LiPo battery (~$10–15). Filament costs roughly $5–10 per hand. This is dramatically less than commercial prosthetics which can cost $5,000–50,000+.",
  },
  {
    keywords: ["tools", "equipment", "need", "required"],
    answer:
      "You'll need: a 3D printer (FDM), basic hand tools (screwdrivers, pliers, wire strippers), a soldering iron for the electronics, a computer to upload firmware, and fishing line or cable for the tendon system. No specialized or expensive tools required.",
  },
  {
    keywords: ["time", "how long", "duration", "days"],
    answer:
      "Printing all parts takes about 15–20 hours depending on your printer settings. Assembly takes 4–8 hours following the guide. Electronics wiring and firmware upload adds another 2–3 hours. Most people complete a full build over a weekend.",
  },

  // === CONTRIBUTING ===
  {
    keywords: ["contribute", "help", "volunteer", "join", "how can i", "contributor"],
    answer:
      "There are many ways to contribute! Fork a GitHub repo and submit a PR, write or translate documentation, test prototypes and log results, review other contributors' submissions, or submit files through the contribution form on any project's Contribute tab. We value all skills - mechanical, electrical, software, documentation, photography, and testing.",
  },
  {
    keywords: ["github", "repo", "repository", "code", "source"],
    answer:
      "Each project has up to three GitHub repositories: Software (firmware, apps), Mechanical (CAD files, STLs), and Electrical (schematics, PCB designs). Plus a Production repo with all maker resources. You can find repo links on each project's detail page.",
  },
  {
    keywords: ["status", "board", "tasks", "todo", "tracking"],
    answer:
      "Each project has a Status Board visible in the contributor view. It tracks tasks with statuses like TODO, TESTING, REVIEW, and ACCEPTED. Contributors can pick up tasks, work on them, and submit their work for review.",
  },
  {
    keywords: ["form", "submit", "upload", "don't know github", "no github"],
    answer:
      "If you're not familiar with GitHub, no problem! Each project's Contribute tab has a file submission form. Just fill in your name, email, select the contribution type, describe what you did, attach your file, and submit. The core team will review it and integrate it into the project.",
  },

  // === TECHNICAL ===
  {
    keywords: ["arduino", "firmware", "microcontroller", "code", "programming"],
    answer:
      "The Hand Prosthetic v2 uses an Arduino Nano (ATmega328P) as the main controller. The firmware handles EMG signal processing, servo control for 5 fingers, and BLE communication with the calibration app. Source code is available in the Software GitHub repo.",
  },
  {
    keywords: ["emg", "sensor", "muscle", "signal", "gesture"],
    answer:
      "EMG (Electromyography) sensors detect electrical signals from muscle contractions in the residual limb. The OpenHand uses two analog EMG sensor modules (0–5V output) placed on the forearm to detect grip and release gestures. Thresholds are calibrated through the mobile app.",
  },
  {
    keywords: ["servo", "motor", "actuator", "finger"],
    answer:
      "Each finger is actuated by an MG996R servo motor (11kg/cm torque at 6V). The servos pull braided fishing line tendons that flex the finger joints. The thumb uses an independent servo with a ball-and-socket base for opposable movement.",
  },
  {
    keywords: ["battery", "power", "charge", "runtime"],
    answer:
      "The Hand v2 uses a 7.4V 2000mAh 2S LiPo battery pack. This provides approximately 4–6 hours of active use depending on grip frequency. The battery is rechargeable and housed in the forearm section of the socket.",
  },

  // === SAFETY / MEDICAL ===
  {
    keywords: ["safe", "safety", "medical", "certified", "fda", "clinical"],
    answer:
      "Important: OpenHand is an open hardware project in active development - it is NOT a certified medical device. It has not been evaluated or approved by the FDA or any medical regulatory body. Any clinical use should be done under the supervision of qualified healthcare professionals. We are honest about our limits.",
  },
  {
    keywords: ["disclaimer", "risk", "liability", "legal"],
    answer:
      "OpenHand provides designs and documentation as-is, without warranty. Users build and use devices at their own risk. We strongly recommend consulting with occupational therapists and medical professionals before fitting any prosthetic device, especially for children. See our Policies page for the full medical disclaimer.",
  },

  // === COMMUNITY ===
  {
    keywords: ["contact", "reach", "email", "talk", "touch"],
    answer:
      "You can reach us through the Contact page on our website, via email, or through our GitHub repositories. We're also active on social media. For project-specific questions, the best place is the relevant GitHub repo's Issues section.",
  },
  {
    keywords: ["sponsor", "donate", "fund", "support financially", "money"],
    answer:
      "We accept sponsorships for materials, equipment, and workshop space. We don't sell products. If you'd like to support us, the best way is to contribute your skills - but if you want to help financially, visit our Contact page to discuss sponsorship opportunities.",
  },
  {
    keywords: ["thank", "note", "appreciation", "gratitude"],
    answer:
      "You can leave an anonymous thank-you note for any contributor by visiting their profile page. Notes are reviewed by the core team before being published to ensure contributor safety. It's a great way to show appreciation for someone's work!",
  },

  // === FALLBACK RESPONSES ===
  {
    keywords: ["hello", "hi", "hey", "greetings", "sup"],
    answer:
      "Hey there! 👋 I'm the OpenHand assistant. I can answer questions about our prosthetic projects, how to build or contribute, technical specs, and more. What would you like to know?",
  },
  {
    keywords: ["thanks", "thank you", "helpful", "great", "awesome", "cool"],
    answer:
      "Happy to help! If you have more questions about OpenHand, feel free to ask. You can also explore our Projects page to dive deeper into any specific project.",
  },
  {
    keywords: ["bye", "goodbye", "see you", "later"],
    answer:
      "See you around! Remember - whether you're a maker or a contributor, there's a place for you in the OpenHand community. Come build something meaningful. ✌️",
  },
];

/**
 * Simple keyword-scoring chatbot.
 * Scores each knowledge entry against the user's query
 * and returns the best match (or a fallback).
 */
export function getAnswer(query) {
  const q = query.toLowerCase().trim();
  if (!q) return "Please type a question and I'll do my best to answer it!";

  let bestScore = 0;
  let bestAnswer = null;

  for (const entry of knowledgeBase) {
    let score = 0;
    for (const kw of entry.keywords) {
      if (q.includes(kw.toLowerCase())) {
        // Longer keyword matches get higher score
        score += kw.length;
      }
    }
    if (score > bestScore) {
      bestScore = score;
      bestAnswer = entry.answer;
    }
  }

  if (bestScore >= 3 && bestAnswer) {
    return bestAnswer;
  }

  return "That's a great question! I don't have a specific answer for that yet, but you can find detailed information on our Projects page, or reach out to the team through the Contact page. Is there anything else about OpenHand I can help with?";
}

// Suggested questions for the chat landing
export const suggestedQuestions = [
  "What is OpenHand?",
  "How do I build a prosthetic hand?",
  "What parts do I need?",
  "How can I contribute?",
  "How much does it cost?",
  "Is it safe to use?",
  "What projects are available?",
  "Tell me about the EMG sensors",
];

export default knowledgeBase;