export type StageType = 'MAIN_STAGE' | 'COMMUNITY_STAGE' | 'OPEN_STAGE';

export interface Speaker {
  name: string;
  company?: string;
  role?: string;
  image?: string;
  scale?: string; 
  isModerator?: boolean;
  xLink? : string;
}

export interface AgendaItem {
  stage: StageType;
  time: string;          // '10:15 AM'
  duration?: string;     // optional if unknown
  type: 'CEREMONY' | 'PANEL' | 'TALK' | 'FIRESIDE CHAT' | 'ANNOUNCEMENT';
  title: string;
  speakers?: Speaker[];
  speakerProjectsImage?: string[];
  label?: Array<'DEFI' | 'PRIVACY' | 'AI'>;
  isFullWidth?: boolean;
  hasModerator?: boolean;
}

export const agendaData: AgendaItem[] = [
  {
    stage: "MAIN_STAGE",
    time: "10:15 AM",
    duration: "15 MIN",
    type: "CEREMONY",
    title: "Opening Ceremony",
    speakers: [
      {
        name: "Chandresh Jain",
        company: "ETHMumbai",
        image: "/assets/agenda-speakers/chandresh.png",
        scale: "120%",
        xLink: "https://x.com/thisischandresh"
      }
    ],
    speakerProjectsImage: ["/1.png"],
    isFullWidth: true
  },
  {
    stage: "MAIN_STAGE",
    time: "10:30 AM",
    duration: "15 MIN",
    type: "TALK",
    title: "Building a Unicorn Startup in the AI Era",
    speakers: [
      {
        name: "Pareen Lathia",
        company: "Monad",
        image: "/assets/agenda-speakers/pareen.png",
        scale: "120%",
        xLink: "https://x.com/pareen"
      }
    ],
    speakerProjectsImage: ["/assets/organisation/monad.png"],
    label: ["AI"],
    isFullWidth: true
  },
  // {
  //   stage: "COMMUNITY_STAGE",
  //   time: "10:30 AM",
  //   duration: "20 MIN",
  //   type: "TALK",
  //   title: "TBD",
  //   speakers: [
  //     {
  //       name: "",
  //       company: "",
  //       image: "",
  //       scale: "120%"
  //     }
  //   ],
  //   // speakerProjectsImage: ["/1.png"]
  // },
{
    stage: "MAIN_STAGE",
    time: "10:45 AM",
    duration: "15 MIN",
    type: "TALK",
    title: "Shipping Onchain Apps with Agents",
    speakers: [
      {
        name: "Shiv Bhonde",
        company: "BuidlGuidl",
        image: "/assets/agenda-speakers/shiv.png",
        scale: "120%",
        xLink: "https://x.com/ShivBhonde"
      }
    ],
    speakerProjectsImage: ["/assets/organisation/buidlguidl.png"],
    label: ["AI"],
    isFullWidth: true
  },
  // {
  //   stage: "COMMUNITY_STAGE",
  //   time: "10:45 AM",
  //   duration: "20 MIN",
  //   type: "TALK",
  //   title: "TBD",
  //   speakers: [
  //     {
  //       name: "",
  //       company: "",
  //       image: "",
  //       scale: "120%"
  //     }
  //   ],
  //   // speakerProjectsImage: ["/1.png"]
  // },
  {
    stage: "MAIN_STAGE",
    time: "11:00 AM",
    duration: "15 MIN",
    type: "TALK",
    title: "Agentic Commerce on Ethereum",
    speakers: [
      {
        name: "Dhaiwat Pandya",
        company: "ENS",
        image: "/assets/agenda-speakers/dhaiwat.png",
        scale: "120%",
         xLink: "https://x.com/dhaiwat10"
      }
    ],
    speakerProjectsImage: ["/assets/organisation/ens.png"]
  },
  {
    stage: "COMMUNITY_STAGE",
    time: "11:00 AM",
    duration: "15 MIN",
    type: "TALK",
    title: "Onboarding Builders from Web2 to Web3",
    speakers: [
      {
        name: "Naina Sachdev",
        company: "Dev3pack",
        image: "/assets/agenda-speakers/naina.png",
        scale: "120%",
        xLink: "https://x.com/nainasachdev_?s=11"
      }
    ],
    speakerProjectsImage: ["/assets/organisation/dev3pack.png"]
  },
  {
    stage: "MAIN_STAGE",
    time: "11:15 AM",
    duration: "15 MIN",
    type: "TALK",
    title: "Markets for Public Goods",
    speakers: [
      {
        name: "Devansh Mehta",
        company: "Ethereum Foundation",
        image: "/assets/agenda-speakers/devansh.png",
        scale: "120%",
        xLink: "https://x.com/devanshmehta"
      }
    ],
    speakerProjectsImage: ["/assets/organisation/ethereum.png"],
    label: ["DEFI"]
  },
  {
    stage: "COMMUNITY_STAGE",
    time: "11:15 AM",
    duration: "15 MIN",
    type: "TALK",
    title: "Account Abstraction with EIP 7702",
    speakers: [
      {
        name: "Abhishek Yadav",
        company: "Etherspot",
        image: "/assets/agenda-speakers/abhishek.png",
        scale: "120%",
        xLink: "https://x.com/abhixh"
      }
    ],
    speakerProjectsImage: ["/assets/organisation/etherspot.png"]
  },
  {
    stage: "MAIN_STAGE",
    time: "11:30 AM",
    duration: "40 MIN",
    type: "FIRESIDE CHAT",
    title: "Privacy Enables Crime and That's the Point",
    speakers: [
      {
        name: "Mykola",
        company: "Web3Privacy",
        image: "/assets/agenda-speakers/mykola.png",
        scale: "120%",
        xLink: "https://x.com/nicksvyaznoy"
      },
      {
        name: "Vijay",
        company: "Fileverse",
        image: "/assets/agenda-speakers/vijay.png",
        scale: "120%",
        xLink: "https://x.com/0x6b8"
      },
      {
        name: "Jobin",
        company: "TEN Protocol",
        image: "/assets/agenda-speakers/jobin.png",
        scale: "120%",
        xLink: "https://x.com/0xjba"
      },
      {
        name: "Harsh",
        company: "Aztec Labs",
        image: "/assets/agenda-speakers/harsh.png",
        scale: "120%",
        xLink: "https://x.com/bajpaiharsh244"
      }
    ],
    speakerProjectsImage: ["/assets/organisation/web3privacy now.png", "/assets/organisation/fileverse.png", "/assets/organisation/ten.png", "/assets/organisation/aztec.png"],
    label: ["PRIVACY"]
  },
  {
    stage: "COMMUNITY_STAGE",
    time: "11:30 AM",
    duration: "15 MIN",
    type: "TALK",
    title: "Decentralize QR Payments",
    speakers: [
      {
        name: "Sebastian Burkhard",
        company: "Yodl Pay",
        image: "/assets/agenda-speakers/sebastian.png",
        scale: "120%",
        xLink: "https://x.com/yodl_meister"
      }
    ],
    speakerProjectsImage: ["/assets/organisation/yodl pay.png"],
    label: ["DEFI"]
  },
 {
    stage: "MAIN_STAGE",
    time: "12:10 PM",
    duration: "15 MIN",
    type: "TALK",
    title: "Raising from the Internet",
    speakers: [
      {
        name: "Heet Tike",
        company: "noice",
        image: "/assets/agenda-speakers/heet.png",
        scale: "120%",
        xLink: "https://x.com/heettike"
      }
    ],
    speakerProjectsImage: ["/assets/organisation/noice.png"],
    label: ["AI"]
  },
  {
    stage: "COMMUNITY_STAGE",
    time: "11:45 AM",
    duration: "15 MIN",
    type: "TALK",
    title: "Banks are the Real Shadow Economy",
    speakers: [
      {
        name: "Siddharth Biju",
        company: "",
        image: "/assets/agenda-speakers/sidharth.png",
        scale: "120%",
        xLink: "https://x.com/sidbharth"
      }
    ],
    speakerProjectsImage: [""],
    label: ["DEFI"]
  },
  {
    stage: "MAIN_STAGE",
    time: "12:25 PM",
    duration: "15 MIN",
    type: "TALK",
    title: "Brand Soul in the Era of Design AI",
    speakers: [
      {
        name: "Rahul Bhadoriya",
        company: "Dacoit Design",
        image: "/assets/agenda-speakers/rahul.png",
        scale: "120%",
        xLink: "https://x.com/rahulbhadoriya"
      }
    ],
    speakerProjectsImage: ["/assets/organisation/dacoit.png"]
  },
  {
    stage: "COMMUNITY_STAGE",
    time: "12:00 PM",
    duration: "40 MIN",
    type: "PANEL",
    title: "Crypto x Ai: Marriage or Mismatch?",
    speakers: [
      {
        name: "Sharvil",
        company: "CapX",
        image: "/assets/agenda-speakers/sharvil.png",
        scale: "120%",
        xLink: "https://x.com/0xsharvil"
      },
      {
        name: "Iptisha",
        company: "Circulox",
        image: "/assets/agenda-speakers/iptisha.png",
        scale: "120%",
        xLink: "https://x.com/iptishax"
      },
      {
        name: "Sheena",
        company: "NodeOps",
        image: "/assets/agenda-speakers/sheena.png",
        scale: "120%",
        isModerator: true
      }
    ],
    speakerProjectsImage: ["/assets/organisation/capx.png", "/assets/organisation/circulox.png", "/assets/organisation/nodeops.png"],
    label: ["AI"],
    hasModerator: true,
  },
  {
    stage: "MAIN_STAGE",
    time: "02:00 PM",
    duration: "15 MIN",
    type: "TALK",
    title: "Stablecoins as Global Rails",
    speakers: [
      {
        name: "Kanika Mishra",
        company: "USDT Marketplace",
        image: "/assets/agenda-speakers/kanika.png",
        scale: "120%",
        xLink: "https://x.com/mishrakanika3"
      }
    ],
    speakerProjectsImage: ["/assets/organisation/usdt marketplace.png"],
    label: ["DEFI"]
  },
    {
    stage: "COMMUNITY_STAGE",
    time: "02:15 PM",
    duration: "15 MIN",
    type: "TALK",
    title: "Past, Present and Future of Interop",
    speakers: [
      {
        name: "Aniket Sharma",
        company: "Rath Finance",
        image: "/assets/agenda-speakers/aniket sharma.png",
        scale: "120%",
        xLink: "https://x.com/0xaniketsharma"
      }
    ],
    speakerProjectsImage: ["/assets/organisation/rath.png"]
  },
  {
    stage: "MAIN_STAGE",
    time: "02:15 PM",
    duration: "15 MIN",
    type: "TALK",
    title: "ETH's Biggest Bug? A Lack of Business Model",
    speakers: [
      {
        name: "Ale Marin",
        company: "NERDCONF",
        image: "/assets/agenda-speakers/ale marin.png",
        scale: "120%",
        xLink: "https://x.com/AleeeM1"
      },
      {
        name: "Tomas Octavio",
        company: "NERDCONF",
        image: "/assets/agenda-speakers/tomas.png",
        scale: "120%",
        xLink: "https://x.com/tomasoctavio_"
      }
    ],
    speakerProjectsImage: ["/assets/organisation/nerdconf.png", "/assets/organisation/nerdconf.png"],
  },
  {
    stage: "COMMUNITY_STAGE",
    time: "02:30 PM",
    duration: "15 MIN",
    type: "TALK",
    title: "Vibe Coding with Remix IDE",
    speakers: [
      {
        name: "Aniket",
        company: "Remix Labs",
        image: "/assets/agenda-speakers/aniket - remix.png",
        scale: "120%",
        xLink: "https://x.com/AniketEngg"
      }
    ],
    speakerProjectsImage: ["/assets/organisation/remix ide.png"]
  },
  {
    stage: "MAIN_STAGE",
    time: "02:30 PM",
    duration: "40 MIN",
    type: "FIRESIDE CHAT",
    title: "Stablecoins are the Real Product, not DeFi",
    speakers: [
      {
        name: "Sunny",
        company: "Gnosis Business",
        image: "/assets/agenda-speakers/sunny.png",
        scale: "120%",
        xLink: "https://x.com/TheSupremeDegen"
      },
      {
        name: "Archana",
        company: "SSV Network",
        image: "/assets/agenda-speakers/archana.png",
        scale: "100%",
        xLink: "https://x.com/0xArchana"
      },
      {
        name: "Tanay",
        company: "PropellerHeads",
        image: "/assets/agenda-speakers/tanay.png",
        scale: "120%",
        xLink: "https://x.com/tanayjain"
      },
      {
        name: "Piyush",
        company: "Avantis",
        image: "/assets/agenda-speakers/piyush.png",
        scale: "120%",
        isModerator: true,
        xLink: "https://x.com/314yush"
      }
    ],
    speakerProjectsImage: ["/assets/organisation/Gnosis.png", "/assets/organisation/ssv network.png", "/assets/organisation/propellerheads.png", "/assets/organisation/avantis.png"],
    label: ["DEFI"]
  },
  {
    stage: "COMMUNITY_STAGE",
    time: "02:45 PM",
    duration: "15 MIN",
    type: "TALK",
    title: "Ethereum Needs India’s Institutions",
    speakers: [
      {
        name: "Shyam Sridhar",
        company: "Ethereum Foundation",
        image: "/assets/agenda-speakers/shyam.png",
        scale: "100%",
        xLink: "https://x.com/ShyamSridhar7"
      }
    ],
    speakerProjectsImage: ["/assets/organisation/ethereum.png"]
  },
{
    stage: "MAIN_STAGE",
    time: "03:10 PM",
    duration: "15 MIN",
    type: "TALK",
    title: "Scaling Revenue: From L2 to Consumer Apps",
    speakers: [
      {
        name: "Shubham Bhandari",
        company: "Manta Network",
        image: "/assets/agenda-speakers/shubham.png",
        scale: "120%",
        xLink: "https://x.com/Shubhamb"
      }
    ],
    speakerProjectsImage: ["/assets/organisation/manta.png"],
    label: ["DEFI"]
  },
  {
    stage: "COMMUNITY_STAGE",
    time: "03:00 PM",
    duration: "15 MIN",
    type: "TALK",
    title: "What's Next for DeFi and AA: EIP-8141",
    speakers: [
      {
        name: "Krishang Shah",
        company: "Polygon Labs",
        image: "/assets/agenda-speakers/krishang.png",
        scale: "120%",
        xLink: "https://x.com/0xkrishang"
      }
    ],
    speakerProjectsImage: ["/assets/organisation/polygon.png"],
    label: ["DEFI"]
  },
  {
    stage: "MAIN_STAGE",
    time: "03:25 PM",
    duration: "15 MIN",
    type: "TALK",
    title: "How to Architect Event-Driven Ethereum Apps",
    speakers: [
      {
        name : "Aditi Polkam",
        company: "Offline Protocol",
        image: "/assets/agenda-speakers/aditi.png",
        scale: "120%",
        xLink: "https://x.com//aditipolkam"
      }
    ],
    speakerProjectsImage: ["/assets/organisation/offline.png"]
  },
  {
    stage: "COMMUNITY_STAGE",
    time: "03:15 PM",
    duration: "15 MIN",
    type: "TALK",
    title: "Make Agents Safe Again",
    speakers: [
      {
        name: "Ayush Bherwani",
        company: "MetaMask",
        image: "/assets/agenda-speakers/ayush bherwani.png",
        scale: "120%",
        xLink: "http://x.com/ayushbherwani"
      }
    ],
    speakerProjectsImage: ["/assets/organisation/metamask.png"],
    label: ["AI"]
  },
  {
    stage: "MAIN_STAGE",
    time: "03:40 PM",
    duration: "15 MIN",
    type: "TALK",
    title: "Privacy Trilemma in Single Global State Chains",
    speakers: [
      {
        name: "Jatin Pandya",
        company: "Canton Foundation",
        image: "/assets/agenda-speakers/jatin.png",
        scale: "120%",
        xLink: "ttps://twitter.com/Jpandya26"
      }
    ],
    speakerProjectsImage: ["/assets/organisation/canton.png"],
    label: ["PRIVACY"]
  },
  {
    stage: "COMMUNITY_STAGE",
    time: "03:30 PM",
    duration: "40 MIN",
    type: "PANEL",
    title: "Is Marketing Dead?",
    speakers: [
      {
        name: "Kunal Gandhi",
        company: "HeyElsa",
        image: "/assets/agenda-speakers/kunal.png",
        scale: "120%",
        xLink: "https://x.com/kunalvg"
      },
      {
        name: "Rachit",
        company: "Touch Grass Podcast",
        image: "/assets/agenda-speakers/rachit.png",
        scale: "120%",
        xLink: "hhttps://x.com/rachit"
      },
      {
        name: "Satyaki",
        company: "SE7EN & Co.",
        scale: "120%",
        isModerator: true,
        image: "/assets/agenda-speakers/satyaki.png"
      }
    ],
    speakerProjectsImage: ["/assets/organisation/hey elsa.png", "/assets/organisation/touch grass pod.png","/assets/organisation/seven & co.png"],
    hasModerator: true,
  },
  {
    stage: "MAIN_STAGE",
    time: "03:55 PM",
    duration: "15 MIN",
    type: "TALK",
    title: "Account Abstraction as a Privacy Primitive",
    speakers: [
      {
        name: "Akash Balasubramani",
        company: "StarkWare",
        image: "/assets/agenda-speakers/akash.png",
        scale: "120%",
        xLink: "https://x.com/akashneelesh"
      }
    ],
    speakerProjectsImage: ["/assets/organisation/starkware.png"],
    label: ["PRIVACY"]
  },
  {
    stage: "COMMUNITY_STAGE",
    time: "04:10 PM",
    duration: "15 MIN",
    type: "TALK",
    title: "DeFi Without the Buzzwords",
    speakers: [
      {
        name: "Sweta Shaw",
        company: "Own Protocol",
        image: "/assets/agenda-speakers/sweta.png",
        scale: "120%",
        xLink: "https://x.com/swetashaw_"
      }
    ],
    speakerProjectsImage: ["/assets/organisation/own.png"],
    label: ["DEFI"]
  },
  {
    stage: "MAIN_STAGE",
    time: "04:10 PM",
    duration: "15 MIN",
    type: "TALK",
    title: "My Secret Agents (IYKYN)",
    speakers: [
      {
        name: "Vijay Krishnavanshi",
        company: "Fileverse",
        image: "/assets/agenda-speakers/vijay.png",
        scale: "120%",
        xLink: "https://x.com/0x6b8"
      }
    ],
    speakerProjectsImage: ["/assets/organisation/fileverse.png"],
    label: ["AI"]
  },
  {
    stage: "COMMUNITY_STAGE",
    time: "04:25 PM",
    duration: "15 MIN",
    type: "TALK",
    title: "Engineering 128-Bit Soundness with PIL2",
    speakers: [
      {
        name: "Ayush Bhadauria",
        company: "ZisK",
        image: "/assets/agenda-speakers/ayush bhadauria.png",
        scale: "120%",
        xLink: "https://x.com/0xAbix"
      }
    ],
    speakerProjectsImage: ["/assets/organisation/zisk.png"],
    label: ["PRIVACY"]
  },
{
    stage: "MAIN_STAGE",
    time: "04:25 PM",
    duration: "40 MIN",
    type: "FIRESIDE CHAT",
    title: "India's Crypto Story",
    speakers: [
      {
        name: "Denver",
        company: "Devfolio",
        image: "/assets/agenda-speakers/denver.png",
        scale: "120%",
        xLink: "https://x.com/denverjude"
      },
      {
        name: "Irshad",
        company: "",
        image: "/assets/agenda-speakers/irshad.png",
        scale: "120%",
        xLink: "https://x.com/irshaddahmed"
      },
      {
        name: "Nidhi",
        company: "VoiceDeck",
        image: "/assets/agenda-speakers/nidhi.png",
        scale: "120%",
        xLink: "https://x.com/NidhiHarihar"
      }
    ],
    speakerProjectsImage: ["/assets/organisation/devfolio.png", "", "/assets/organisation/voicedeck.png"]
  },
  {
    stage: "COMMUNITY_STAGE",
    time: "04:40 PM",
    duration: "15 MIN",
    type: "TALK",
    title: "What Don't We Know? AI, ZK Auditing and zkVM",
    speakers: [
      {
        name: "Vishal Singh",
        company: "ZippelLabs",
        image: "/assets/agenda-speakers/vishal.png",
        scale: "120%",
        xLink: "https://x.com/thisvishalsingh"
      }
    ],
    speakerProjectsImage: ["/assets/organisation/zippel labs.png"],
    label: ["PRIVACY"]
  },
  {
    stage: "MAIN_STAGE",
    time: "05:05 PM - 05:50 PM",
    duration: "",
    type: "CEREMONY",
    title: "TBD",
    speakers: [
      {
        name: "",
        company: "",
        image: "",
        scale: "120%",
        xLink: ""
      }
    ],
    // speakerProjectsImage: ["/1.png"]
    isFullWidth: true
  },
  // {
  //   stage: "COMMUNITY_STAGE",
  //   time: "05:00 PM",
  //   duration: "20 MIN",
  //   type: "TALK",
  //   title: "TBD",
  //   speakers: [
  //     {
  //       name: "",
  //       company: "",
  //       image: "",
  //       scale: "120%"
  //     }
  //   ],
  //   // speakerProjectsImage: ["/1.png"]
  // },
  // {
  //   stage: "MAIN_STAGE",
  //   time: "05:20 PM",
  //   duration: "20 MIN",
  //   type: "TALK",
  //   title: "TBD",
  //   speakers: [
  //     {
  //       name: "",
  //       company: "",
  //       image: "",
  //       scale: "120%"
  //     }
  //   ],
  //   // speakerProjectsImage: ["/1.png"]
  // },
  // {
  //   stage: "COMMUNITY_STAGE",
  //   time: "05:20 PM",
  //   duration: "20 MIN",
  //   type: "TALK",
  //   title: "TBD",
  //   speakers: [
  //     {
  //       name: "",
  //       company: "",
  //       image: "",
  //       scale: "120%"
  //     }
  //   ],
  //   // speakerProjectsImage: ["/1.png"]
  // },
  // {
  //   stage: "MAIN_STAGE",
  //   time: "05:35 PM",
  //   duration: "20 MIN",
  //   type: "TALK",
  //   title: "TBD",
  //   speakers: [
  //     {
  //       name: "",
  //       company: "",
  //       image: "",
  //       scale: "120%"
  //     }
  //   ],
  //   // speakerProjectsImage: ["/1.png"]
  // },
  {
    stage: "MAIN_STAGE",
    time: "05:50 PM",
    duration: "15 MIN",
    type: "TALK",
    title: "Devcon 8 India: What Comes Next",
    speakers: [
      {
        name: "Ornella",
        company: "EF Devcon",
        image: "/assets/agenda-speakers/ornella.png",
        scale: "120%",
        xLink: "https://x.com/ornellaweb3"
      }
    ],
    speakerProjectsImage: ["/assets/organisation/devcon.png"],
    isFullWidth: true
  },
  {
    stage: "MAIN_STAGE",
    time: "06:00 PM",
    duration: "15 MIN",
    type: "ANNOUNCEMENT",
    title: "Announcements",
    speakers: [
      {
        name: "Naina Sachdev",
        company: "Dev3pack",
        image: "/assets/agenda-speakers/naina.png",
        scale: "120%",
        xLink: "https://x.com/nainasachdev_?s=11"
      },
      {
        name: "Denver",
        company: "Devfolio",
        image: "/assets/agenda-speakers/denver.png",
        scale: "120%",
        xLink: "https://x.com/denverjude"
      },
      {
        name: "Candela",
        company: "EF Devcon",
        image: "/assets/agenda-speakers/candela.png",
        scale: "120%",
        xLink: "https://x.com/candufaz"
      }
    ],
    speakerProjectsImage: ["/assets/organisation/dev3pack.png", "/assets/organisation/devfolio.png", "/assets/organisation/devcon.png"],
    isFullWidth: true
  },
  {
    stage: "MAIN_STAGE",
    time: "06:15 PM",
    duration: "15 MIN",
    type: "CEREMONY",
    title: "Closing Ceremony",
    speakers: [
      {
        name: "Parth",
        company: "ETHMumbai",
        image: "/assets/agenda-speakers/Parth.png",
        scale: "120%"
      }
    ],
    speakerProjectsImage: ["/1.png"],
    isFullWidth: true
  }
]

export const communityHub: AgendaItem[] = [
  {
    stage: "OPEN_STAGE",
    time: "10:15 AM",
    duration: "15 MIN",
    type: "CEREMONY",
    title: "Opening Ceremony",
    speakers: [
      {
        name: "Chandresh Jain",
        company: "ETHMumbai",
        image: "/assets/agenda-speakers/chandresh.png",
        scale: "120%",
        xLink: "https://x.com/thisischandresh"
      }
    ],
    speakerProjectsImage: ["/1.png"],
    isFullWidth: true
  },
  {
    stage: "OPEN_STAGE",
    time: "10:15 AM",
    duration: "15 MIN",
    type: "CEREMONY",
    title: "Opening Ceremony",
    speakers: [
      {
        name: "Chandresh Jain",
        company: "ETHMumbai",
        image: "/assets/agenda-speakers/chandresh.png",
        scale: "120%",
        xLink: "https://x.com/thisischandresh"
      }
    ],
    speakerProjectsImage: ["/1.png"],
    isFullWidth: true
  },
  {
    stage: "OPEN_STAGE",
    time: "10:15 AM",
    duration: "15 MIN",
    type: "CEREMONY",
    title: "Opening Ceremony",
    speakers: [
      {
        name: "Chandresh Jain",
        company: "ETHMumbai",
        image: "/assets/agenda-speakers/chandresh.png",
        scale: "120%",
        xLink: "https://x.com/thisischandresh"
      }
    ],
    speakerProjectsImage: ["/1.png"],
    isFullWidth: true
  },
  {
    stage: "OPEN_STAGE",
    time: "10:15 AM",
    duration: "15 MIN",
    type: "CEREMONY",
    title: "Opening Ceremony",
    speakers: [
      {
        name: "Chandresh Jain",
        company: "ETHMumbai",
        image: "/assets/agenda-speakers/chandresh.png",
        scale: "120%",
        xLink: "https://x.com/thisischandresh"
      }
    ],
    speakerProjectsImage: ["/1.png"],
    isFullWidth: true
  },
];
