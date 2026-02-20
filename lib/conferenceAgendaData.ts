export type StageType = 'MAIN_STAGE' | 'COMMUNITY_STAGE';

export interface Speaker {
  name: string;
  company?: string;
  role?: string;
  image?: string;
  scale?: string; 
  isModerator?: boolean;
}

export interface AgendaItem {
  stage: StageType;
  time: string;          // '10:15 AM'
  duration?: string;     // optional if unknown
  type: 'CEREMONY' | 'PANEL' | 'TALK' | 'FIRESIDE CHAT' | 'ANNOUNCEMENT';
  title: string;
  speakers?: Speaker[];
  speakerProjectsImage?: string[];
  label?: Array<'DeFi' | 'Privacy' | 'AI'>;
  isFullWidth?: boolean;
}

export const agendaData: AgendaItem[] = [
  {
    stage: "MAIN_STAGE",
    time: "10:15 AM",
    duration: "15 mins",
    type: "CEREMONY",
    title: "Opening Ceremony",
    speakers: [
      {
        name: "Chandresh Jain",
        company: "ETHMumbai",
        image: "/assets/team/Chandresh.png",
        scale: "120%"
      }
    ],
    speakerProjectsImage: ["/1.png"],
    isFullWidth: true
  },
  {
    stage: "MAIN_STAGE",
    time: "10:30 AM",
    duration: "20 mins",
    type: "TALK",
    title: "Building a unicorn startup in the AI era",
    speakers: [
      {
        name: "Pareen Lathia",
        company: "Monad",
        image: "/assets/speakers/Pareen_Lathai.png",
        scale: "120%"
      }
    ],
    speakerProjectsImage: ["/assets/organisation/Monad.svg"],
    label: ["AI"]
  },
  {
    stage: "COMMUNITY_STAGE",
    time: "10:30 AM",
    duration: "20 mins",
    type: "TALK",
    title: "TBD",
    speakers: [
      {
        name: "",
        company: "",
        image: "",
        scale: "120%"
      }
    ],
    // speakerProjectsImage: ["/1.png"]
  },
{
    stage: "MAIN_STAGE",
    time: "10:45 AM",
    duration: "15 mins",
    type: "TALK",
    title: "Shipping onchain apps with agents",
    speakers: [
      {
        name: "Shiv Bhonde",
        company: "BuidlGuidl",
        image: "/assets/speakers/Shiv_Bhonde.png",
        scale: "120%"
      }
    ],
    speakerProjectsImage: ["/assets/organisation/BuidlGuidl.svg"],
    label: ["AI"]
  },
  {
    stage: "COMMUNITY_STAGE",
    time: "10:45 AM",
    duration: "20 mins",
    type: "TALK",
    title: "TBD",
    speakers: [
      {
        name: "",
        company: "",
        image: "",
        scale: "120%"
      }
    ],
    // speakerProjectsImage: ["/1.png"]
  },
  {
    stage: "MAIN_STAGE",
    time: "11:00 AM",
    duration: "15 mins",
    type: "TALK",
    title: "Agentic Commerce on Ethereum",
    speakers: [
      {
        name: "Dhaiwat Pandya",
        company: "ENS",
        image: "/assets/speakers/Dhaiwat2.png",
        scale: "125%"
      }
    ],
    speakerProjectsImage: ["/assets/organisation/ENS.svg"]
  },
  {
    stage: "COMMUNITY_STAGE",
    time: "11:00 AM",
    duration: "20 mins",
    type: "TALK",
    title: "Onboarding builders from Web2 to Web3",
    speakers: [
      {
        name: "Naina Sachdev",
        company: "dev3pack",
        image: "/assets/speakers/Naina_Sachdev_-_dev3pack-removebg-preview.png",
        scale: "135%"
      }
    ],
    speakerProjectsImage: ["/assets/organisation/Dev3Pack.svg"]
  },
  {
    stage: "MAIN_STAGE",
    time: "11:15 AM",
    duration: "15 mins",
    type: "TALK",
    title: "Markets for public goods",
    speakers: [
      {
        name: "Devansh Mehta",
        company: "Ethereum Foundation",
        image: "/assets/speakers/devansh_mehta_-_ethereum_foundation-removebg-preview.png",
        scale: "120%"
      }
    ],
    speakerProjectsImage: ["/assets/organisation/EF.svg"],
    label: ["DeFi"]
  },
  {
    stage: "COMMUNITY_STAGE",
    time: "11:15 AM",
    duration: "20 mins",
    type: "TALK",
    title: "Account Abstraction with EIP 7702",
    speakers: [
      {
        name: "Abhishek Yadav",
        company: "Etherspot",
        image: "/assets/speakers/Abhishek Yadav - Etherspot.png",
        scale: "145%"
      }
    ],
    speakerProjectsImage: ["/assets/organisation/Etherspot.svg"]
  },
  {
    stage: "MAIN_STAGE",
    time: "11:30 AM",
    duration: "15 mins",
    type: "FIRESIDE CHAT",
    title: "Privacy enables crime and that's the point",
    speakers: [
      {
        name: "Mykola",
        company: "Web3Privacy",
        image: "/assets/speakers/Mykola_-_Web3Privacy-removebg-preview.png",
        scale: "120%"
      },
      {
        name: "Vijay",
        company: "Fileverse",
        image: "/assets/speakers/vijay_-_fileverse-removebg-preview.png",
        scale: "120%"
      },
      {
        name: "Jobin",
        company: "TEN Protocol",
        image: "/assets/speakers/Jobin_-_ten-removebg-preview.png",
        scale: "170%"
      },
      {
        name: "Harsh",
        company: "Aztec Labs",
        image: "/assets/speakers/Harsh_Bajpai_-_Aztec_Labs-removebg-preview.png",
        scale: "110%",
      }
    ],
    speakerProjectsImage: ["/assets/organisation/privacy-mykola.jpg", "/assets/organisation/fileverse.jpg", "/assets/organisation/privacy-jobin.jpg", "/assets/organisation/privacy-harsh.svg"],
    label: ["Privacy"]
  },
  {
    stage: "COMMUNITY_STAGE",
    time: "11:30 AM",
    duration: "20 mins",
    type: "TALK",
    title: "Decentralize QR payments",
    speakers: [
      {
        name: "Sebastian Burkhard",
        company: "Yodl Pay",
        image: "/assets/speakers/Sebastian_Burkhard.png",
        scale: "120%"
      }
    ],
    speakerProjectsImage: ["/assets/organisation/Yodl Pay.svg"],
    label: ["DeFi"]
  },
 {
    stage: "MAIN_STAGE",
    time: "12:10 PM",
    duration: "15 mins",
    type: "TALK",
    title: "Raising from the internet",
    speakers: [
      {
        name: "Heet Tike",
        company: "noice",
        image: "/assets/speakers/heet_tike_-_noice-removebg-preview.png",
        scale: "120%"
      }
    ],
    speakerProjectsImage: ["/assets/organisation/noice.png"],
    label: ["AI"]
  },
  {
    stage: "COMMUNITY_STAGE",
    time: "11:45 AM",
    duration: "20 mins",
    type: "TALK",
    title: "Banks are the real shadow economy",
    speakers: [
      {
        name: "Siddharth Biju",
        company: "",
        image: "/assets/speakers/Siddharth Biju.png",
        scale: "120%"
      }
    ],
    speakerProjectsImage: [""],
    label: ["DeFi"]
  },
  {
    stage: "MAIN_STAGE",
    time: "12:25 PM",
    duration: "20 mins",
    type: "TALK",
    title: "Brand Soul in the era of Design AI",
    speakers: [
      {
        name: "Rahul Bhadoriya",
        company: "Dacoit Design",
        image: "/assets/speakers/Rahul_Bhadoriya.png",
        scale: "120%"
      }
    ],
    speakerProjectsImage: ["/1.png"]
  },
  {
    stage: "COMMUNITY_STAGE",
    time: "12:00 PM",
    duration: "15 mins",
    type: "PANEL",
    title: "crypto x ai: marriage or mismatch?",
    speakers: [
      {
        name: "Sharvil",
        company: "CapX",
        image: "/assets/speakers/Sharvil_-_Capx-removebg-preview.png",
        scale: "120%"
      },
      {
        name: "Iptisha",
        company: "Circulox",
        image: "/assets/speakers/Iptisha_-_Circulox-removebg-preview.png",
        scale: "120%"
      }
    ],
    speakerProjectsImage: ["/assets/organisation/ai-sharvil.jpg", "/assets/organisation/ai-iptisha.png"],
    label: ["AI"]
  },
  {
    stage: "MAIN_STAGE",
    time: "02:00 PM",
    duration: "20 mins",
    type: "TALK",
    title: "Stablecoins as global rails",
    speakers: [
      {
        name: "Kanika Mishra",
        company: "USDT Marketplace",
        image: "/assets/speakers/Kanika_Mishra.png",
        scale: "110%"
      }
    ],
    speakerProjectsImage: ["/assets/organisation/usdt-marketplace.png"],
    label: ["DeFi"]
  },
    {
    stage: "COMMUNITY_STAGE",
    time: "02:15 PM",
    duration: "20 mins",
    type: "TALK",
    title: "Past, present and future of interop",
    speakers: [
      {
        name: "Aniket Sharma",
        company: "Rath Finance",
        image: "/assets/speakers/Aniket Sharma - Rath Finance.png",
        scale: "100%"
      }
    ],
    speakerProjectsImage: ["/assets/organisation/rath-finance.jpg"]
  },
  {
    stage: "MAIN_STAGE",
    time: "02:15 PM",
    duration: "20 mins",
    type: "TALK",
    title: "ETH's biggest bug? A lack of business model",
    speakers: [
      {
        name: "Ale Marin",
        company: "NERDCONF",
        image: "/assets/speakers/ALE_MARIN_NERDCONF-removebg-preview.png",
        scale: "120%"
      },
      {
        name: "Tomas Octavio",
        company: "NERDCONF",
        image: "/assets/speakers/TOMAS_OCTAVIO_NERDCONF-removebg-preview.png",
        scale: "120%"
      }
    ],
    speakerProjectsImage: ["/assets/organisation/nerdconf.png", "/assets/organisation/nerdconf.png"],
  },
  {
    stage: "COMMUNITY_STAGE",
    time: "02:30 PM",
    duration: "15 mins",
    type: "TALK",
    title: "Vibe coding with Remix IDE",
    speakers: [
      {
        name: "Aniket",
        company: "Remix Labs",
        image: "/assets/speakers/Aniket_Remix_Judge-removebg-preview.png",
        scale: "120%"
      }
    ],
    speakerProjectsImage: ["/assets/organisation/remix-labs.jpg"]
  },
  {
    stage: "MAIN_STAGE",
    time: "02:30 PM",
    duration: "40 mins",
    type: "FIRESIDE CHAT",
    title: "Stablecoins are the real product, not DeFi",
    speakers: [
      {
        name: "Sunny",
        company: "Gnosis Business",
        image: "/assets/speakers/Sunny_Singh_-_Gnosis_Business-removebg-preview.png",
        scale: "120%"
      },
      {
        name: "Archana",
        company: "SSV Network",
        image: "/assets/speakers/archana-removebg-preview.png",
        scale: "100%"
      },
      {
        name: "Tanay",
        company: "PropellerHeads",
        image: "/assets/speakers/Tanay_-_PropellerHeads-removebg-preview.png",
        scale: "150%"
      },
      {
        name: "Piyush",
        company: "Avantis",
        image: "/assets/speakers/piyush.png",
        scale: "120%"
      }
    ],
    speakerProjectsImage: ["/assets/organisation/defi-sunny.jpg", "/assets/organisation/defi-archana.png", "/assets/organisation/defi-tanay.jpg", "/assets/organisation/defi-piyush.png"],
    label: ["DeFi"]
  },
  {
    stage: "COMMUNITY_STAGE",
    time: "02:45 PM",
    duration: "20 mins",
    type: "TALK",
    title: "Ethereum needs India’s institutions",
    speakers: [
      {
        name: "Shyam Sridhar",
        company: "Ethereum Foundation",
        image: "/assets/speakers/Shyam_Sridhar2.png",
        scale: "120%"
      }
    ],
    speakerProjectsImage: ["/assets/organisation/EF.svg"]
  },
{
    stage: "MAIN_STAGE",
    time: "03:10 PM",
    duration: "15 mins",
    type: "TALK",
    title: "Scaling Revenue: From L2 to Consumer apps",
    speakers: [
      {
        name: "Shubham Bhandari",
        company: "Manta Network",
        image: "/assets/speakers/Shubham_Bhandari_-_Manta_Network-removebg-preview.png",
        scale: "120%"
      }
    ],
    speakerProjectsImage: ["/assets/organisation/manta-option1.svg"],
    label: ["DeFi"]
  },
  {
    stage: "COMMUNITY_STAGE",
    time: "03:00 PM",
    duration: "15 mins",
    type: "TALK",
    title: "What's next for DeFi and AA: EIP-8141",
    speakers: [
      {
        name: "Krishang Shah",
        company: "Polygon Labs",
        image: "/assets/speakers/Krishang_Shah.png",
        scale: "120%"
      }
    ],
    speakerProjectsImage: ["/assets/organisation/polygon.svg"],
    label: ["DeFi"]
  },
  {
    stage: "MAIN_STAGE",
    time: "03:25 PM",
    duration: "20 mins",
    type: "TALK",
    title: "How to architect event-driven Ethereum apps",
    speakers: [
      {
        name : "Aditi Polkam",
        company: "Offline Protocol",
        image: "/assets/speakers/Aditi_Polkam.png",
        scale: "160%"
      }
    ],
    speakerProjectsImage: ["/assets/organisation/offline-protocol.jpg"]
  },
  {
    stage: "COMMUNITY_STAGE",
    time: "03:15 PM",
    duration: "15 mins",
    type: "TALK",
    title: "Make Agents safe again",
    speakers: [
      {
        name: "Ayush Bherwani",
        company: "MetaMask",
        image: "/assets/speakers/Ayush_Bherwani.png",
        scale: "120%"
      }
    ],
    speakerProjectsImage: ["/assets/organisation/MetaMask-fox.svg"],
    label: ["AI"]
  },
  {
    stage: "MAIN_STAGE",
    time: "03:40 PM",
    duration: "20 mins",
    type: "TALK",
    title: "Privacy Trilemma in single global state chains",
    speakers: [
      {
        name: "Jatin Pandya",
        company: "Canton Foundation",
        image: "/assets/speakers/Jatin_Pandya.png",
        scale: "120%"
      }
    ],
    speakerProjectsImage: ["/assets/organisation/canton-Ff.jpg"],
    label: ["Privacy"]
  },
  {
    stage: "COMMUNITY_STAGE",
    time: "03:30 PM",
    duration: "15 mins",
    type: "PANEL",
    title: "Is marketing dead?",
    speakers: [
      {
        name: "Kunal Gandhi",
        company: "HeyElsa",
        image: "/assets/hackathon/judges/kunal_gandhi-removebg-preview.png",
        scale: "95%"
      },
      {
        name: "Rachit",
        company: "Touch Grass Podcast",
        image: "/assets/speakers/Rachit.png",
        scale: "115%"
      }
    ],
    speakerProjectsImage: ["/1.png"]
  },
  {
    stage: "MAIN_STAGE",
    time: "03:55 PM",
    duration: "20 mins",
    type: "TALK",
    title: "Account Abstraction as a privacy primitive",
    speakers: [
      {
        name: "Akash Balasubramani",
        company: "StarkWare",
        image: "/assets/speakers/akash_-_starkware-removebg-preview.png",
        scale: "120%"
      }
    ],
    speakerProjectsImage: ["/assets/organisation/StarkWare.svg"],
    label: ["Privacy"]
  },
  {
    stage: "COMMUNITY_STAGE",
    time: "04:10 PM",
    duration: "20 mins",
    type: "TALK",
    title: "DeFi without the buzzwords",
    speakers: [
      {
        name: "Sweta Shaw",
        company: "Own Protocol",
        image: "/assets/speakers/Sweta_Judge-removebg-preview.png",
        scale: "120%"
      }
    ],
    speakerProjectsImage: ["/assets/organisation/own-finance.jpg"],
    label: ["DeFi"]
  },
  {
    stage: "MAIN_STAGE",
    time: "04:10 PM",
    duration: "45 mins",
    type: "TALK",
    title: "My secret agents (IYKYN)",
    speakers: [
      {
        name: "Vijay Krishnavanshi",
        company: "Fileverse",
        image: "/assets/speakers/vijay_-_fileverse-removebg-preview.png",
        scale: "120%"
      }
    ],
    speakerProjectsImage: ["/assets/organisation/fileverse.jpg"],
    label: ["AI"]
  },
  {
    stage: "COMMUNITY_STAGE",
    time: "04:25 PM",
    duration: "15 mins",
    type: "TALK",
    title: "Engineering 128-Bit soundness with PIL2",
    speakers: [
      {
        name: "Ayush Bhadauria",
        company: "ZisK",
        image: "/assets/speakers/Ayush Bhadauria - ZisK.png",
        scale: "120%"
      }
    ],
    speakerProjectsImage: ["/assets/organisation/ZisK.jpg"],
    label: ["Privacy"]
  },
{
    stage: "MAIN_STAGE",
    time: "04:25 PM",
    duration: "15 mins",
    type: "FIRESIDE CHAT",
    title: "India's crypto story",
    speakers: [
      {
        name: "Denver",
        company: "Devfolio",
        image: "/assets/speakers/Denver-Dsouza-removebg-preview.png",
        scale: "130%"
      },
      {
        name: "Irshad",
        company: "",
        image: "/assets/speakers/devansh_mehta_-_ethereum_foundation-removebg-preview.png",
        scale: "120%"
      },
      {
        name: "Nidhi",
        company: "VoiceDeck",
        image: "/assets/speakers/nidhi.png",
        scale: "145%"
      }
    ],
    speakerProjectsImage: ["/1.png", "", "/1.png"]
  },
  {
    stage: "COMMUNITY_STAGE",
    time: "04:40 PM",
    duration: "20 mins",
    type: "TALK",
    title: "What don't we know? AI, ZK Auditing and zkVM",
    speakers: [
      {
        name: "Vishal Singh",
        company: "ZippelLabs",
        image: "/assets/speakers/Vishal_Mentor-removebg-preview.png",
        scale: "120%"
      }
    ],
    speakerProjectsImage: ["/assets/organisation/zippel.png"],
    label: ["Privacy"]
  },
  {
    stage: "MAIN_STAGE",
    time: "05:05 PM",
    duration: "20 mins",
    type: "TALK",
    title: "TBD",
    speakers: [
      {
        name: "",
        company: "",
        image: "",
        scale: "120%"
      }
    ],
    // speakerProjectsImage: ["/1.png"]
  },
  {
    stage: "COMMUNITY_STAGE",
    time: "05:05 PM",
    duration: "20 mins",
    type: "TALK",
    title: "TBD",
    speakers: [
      {
        name: "",
        company: "",
        image: "",
        scale: "120%"
      }
    ],
    // speakerProjectsImage: ["/1.png"]
  },
  {
    stage: "MAIN_STAGE",
    time: "05:20 PM",
    duration: "20 mins",
    type: "TALK",
    title: "TBD",
    speakers: [
      {
        name: "",
        company: "",
        image: "",
        scale: "120%"
      }
    ],
    // speakerProjectsImage: ["/1.png"]
  },
  {
    stage: "COMMUNITY_STAGE",
    time: "05:20 PM",
    duration: "20 mins",
    type: "TALK",
    title: "TBD",
    speakers: [
      {
        name: "",
        company: "",
        image: "",
        scale: "120%"
      }
    ],
    // speakerProjectsImage: ["/1.png"]
  },
  {
    stage: "MAIN_STAGE",
    time: "05:35 PM",
    duration: "20 mins",
    type: "TALK",
    title: "TBD",
    speakers: [
      {
        name: "",
        company: "",
        image: "",
        scale: "120%"
      }
    ],
    // speakerProjectsImage: ["/1.png"]
  },
  {
    stage: "MAIN_STAGE",
    time: "05:50 PM",
    duration: "20 mins",
    type: "TALK",
    title: "Devcon 8 India: What Comes Next",
    speakers: [
      {
        name: "Ornella",
        company: "EF Devcon",
        image: "/assets/speakers/Ornella_-_EF_Devcon-removebg-preview.png",
        scale: "120%"
      }
    ],
    speakerProjectsImage: ["/assets/organisation/devcon.jpg"]
  },
  {
    stage: "MAIN_STAGE",
    time: "06:00 PM",
    duration: "15 mins",
    type: "CEREMONY",
    title: "Closing Ceremony",
    speakers: [
      {
        name: "Parth Mohite",
        company: "ETHMumbai",
        image: "/assets/team/Parth.png",
        scale: "120%"
      }
    ],
    speakerProjectsImage: ["/1.png"]
  },
  {
    stage: "MAIN_STAGE",
    time: "06:15 PM",
    duration: "15 mins",
    type: "ANNOUNCEMENT",
    title: "Announcements",
    speakers: [
      {
        name: "Dev3Pack",
        image: "/assets/organisation/Dev3Pack.svg"
      },
      {
        name: "Devfolio",
        image: "/assets/partners/Devfolio.svg"
      },
      {
        name: "Devcon",
        image: "/assets/organisation/devcon.jpg"
      }
    ]
  }
]
