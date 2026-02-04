export type StageType = "MAIN_STAGE" | "COMMUNITY_STAGE";

export interface Speaker {
  name: string;
  company?: string;
  role?: string;
  image?: string;
}

export interface AgendaItem {
  stage: StageType;
  time: string;          // "10:15 AM"
  duration?: string;     // optional if unknown
  type: "CEREMONY" | "PANEL" | "TALK" | "BREAK" | "ANNOUNCEMENT";
  title: string;
  speakers?: Speaker[];
  speakerProjectsImage?: string[];
  label?: Array<"DeFi" | "Privacy" | "AI">;
  isFullWidth?: boolean;
}

export const agendaData: AgendaItem[] = [
  // ---------------- MAIN STAGE ----------------

  {
    stage: "MAIN_STAGE",
    time: "10:15 AM",
    duration: "15 mins",
    type: "CEREMONY",
    title: "Opening Ceremony",
    speakers: [{ name: "Chandresh", company: "ETHMumbai", image:"/assets/speakers/ALE_MARIN_NERDCONF-removebg-preview.png" }, ],
    speakerProjectsImage: [
      "/1.png",
    ],
    isFullWidth: true,
  },
  {
    stage: "MAIN_STAGE",
    time: "10:30 AM",
    duration: "20 mins",
    type: "TALK",
    title: "Stitching off-chain and on-chain data to make sense of web3",
    speakers: [{ name: "Shiv Bhonde", company: "BuidlGuidl", image:"/assets/speakers/Shiv_Bhonde.png" }, ],
    speakerProjectsImage: [
      "/1.png",
    ],
  },
  {
    stage: "COMMUNITY_STAGE",
    time: "10:30 AM",
    duration: "20 mins",
    type: "TALK",
    title: "Stitching off-chain and on-chain data to make sense of web3",
    speakers: [{ name: "Shyam Sridhar", company: "Ethereum Foundation", image:"/assets/speakers/Shyam_Sridhar2.png" }, ],
    speakerProjectsImage: [
      "/1.png",
    ],
  },
  {
    stage: "MAIN_STAGE",
    time: "10:50 AM",
    duration: "15 mins",
    type: "TALK",
    title: "Stitching off-chain and on-chain data to make sense of web3",
    speakers: [{ name: "Pareen Lathia", company: "Monad Foundation", image:"/assets/speakers/Pareen_Lathai.png" }],
    speakerProjectsImage: [
      "/1.png",
    ],
  },
  {
    stage: "COMMUNITY_STAGE",
    time: "10:50 AM",
    type: "TALK",
    title: "Stitching off-chain and on-chain data to make sense of web3",
    speakers: [{ name: "Robin Roy", company: "Avail", image:"/assets/speakers/Robin-Roy-removebg-preview.png" }],
    speakerProjectsImage: [
      "/1.png",
    ],
  },
  {
    stage: "MAIN_STAGE",
    time: "11:05 AM",
    duration: "15 mins",
    type: "TALK",
    title: "Stitching off-chain and on-chain data to make sense of web3",
    speakers: [{ name: "Sebastian Burkhard", company: "Yodl Pay", image:"/assets/speakers/Sebastian_Burkhard.png" }],
    speakerProjectsImage: [
      "/1.png",
    ],
  },
  {
    stage: "COMMUNITY_STAGE",
    time: "11:10 AM",
    duration: "15 mins",
    type: "TALK",
    title: "Stitching off-chain and on-chain data to make sense of web3",
    speakers: [{ name: "Krishang Shah", company: "Polygon Labs", image:"/assets/speakers/Krishang_Shah.png" }],
    speakerProjectsImage: [
      "/1.png",
    ],
  },
  {
    stage: "MAIN_STAGE",
    time: "11:20 AM",
    duration: "40 mins",
    type: "PANEL",
    title: "The Future of DeFi",
    speakers: [
      { name: "Zeel", company: "ETHMumbai", image:"/assets/speakers/ALE_MARIN_NERDCONF-removebg-preview.png" },
      { name: "Archana", company: "SSV Network", image:"/assets/speakers/archana-removebg-preview.png" },
    ],
    speakerProjectsImage: [
      "/1.png",
      "/1.png",
    ],
    label: ["DeFi"]
  },
  {
    stage: "COMMUNITY_STAGE",
    time: "11:25 AM",
    duration: "15 mins",
    type: "PANEL",
    title: "Privacy Panel",
    speakers: [
      { name: "Vijay", company: "Fileverse", image:"/assets/speakers/vijay_-_fileverse-removebg-preview.png" },
      { name: "Jobin", company: "TEN Protocol", image:"/assets/speakers/Jobin_-_ten-removebg-preview.png" },
    ],
    speakerProjectsImage: [
      "/1.png",
      "/1.png",
    ],
    label: ["Privacy"]
  },
  {
    stage: "MAIN_STAGE",
    time: "12:00 PM",
    duration: "20 mins",
    type: "TALK",
    title: "Stitching off-chain and on-chain data to make sense of web3",
    speakers: [{ name: "Rahul Bhadoriya", company: "Dacoit", image:"/assets/speakers/Rahul_Bhadoriya.png" }],
    speakerProjectsImage: [
      "/1.png",
    ],
  },
  {
    stage: "COMMUNITY_STAGE",
    time: "11:40 AM",
    type: "TALK",
    title: "Stitching off-chain and on-chain data to make sense of web3",
    speakers: [{ name: "Vishal", company: "Zippel Labs", image:"/assets/speakers/Vishal_Mentor-removebg-preview.png" }],
    speakerProjectsImage: [
      "/1.png",
    ],
  },
  {
    stage: "MAIN_STAGE",
    time: "12:20 PM",
    duration: "20 mins",
    type: "TALK",
    title: "Stitching off-chain and on-chain data to make sense of web3",
    speakers: [{ name: "Aditi Polkam", company: "Offline Protocol", image:"/assets/speakers/Aditi_Polkam.png" }],
    speakerProjectsImage: [
      "/1.png",
    ],
  },
  {
    stage: "COMMUNITY_STAGE",
    time: "12:20 PM",
    type: "TALK",
    title: "Stitching off-chain and on-chain data to make sense of web3",
    speakers: [{ name: "Abhishek Yadav", company: "Etherspot", image:"/assets/speakers/Abhishek Yadav - Etherspot.png" }],
    speakerProjectsImage: [
      "/1.png",
    ],
  },
  {
    stage: "MAIN_STAGE",
    time: "12:40 PM",
    duration: "20 mins",
    type: "TALK",
    title: "Stitching off-chain and on-chain data to make sense of web3",
    speakers: [{ name: "Kanika Mishra", company: "USDT Marketplace ", image:"/assets/speakers/Kanika_Mishra.png" }],
    speakerProjectsImage: [
      "/1.png",
    ],
  },
  {
    stage: "COMMUNITY_STAGE",
    time: "12:40 PM",
    type: "TALK",
    title: "Stitching off-chain and on-chain data to make sense of web3",
    speakers: [{ name: "Naina Sachdev", company: "dev3pack", image:"/assets/speakers/Naina_Sachdev_-_dev3pack-removebg-preview.png" }],
    speakerProjectsImage: [
      "/1.png",
    ],
  },

  // {
  //   stage: "MAIN_STAGE",
  //   time: "01:00 PM",
  //   type: "BREAK",
  //   title: "Lunch Break (1:00 PM – 2:00 PM)",
  //   speakers: [{ name: "", image:"" }],
  //   speakerProjectsImage: [
  //     "",
  //   ],
  // },

  {
    stage: "MAIN_STAGE",
    time: "02:00 PM",
    duration: "15 mins",
    type: "TALK",
    title: "Stitching off-chain and on-chain data to make sense of web3",
    speakers: [{ name: "Shankar Jayaraman", company: "ETHMumbai", image:"/assets/speakers/ALE_MARIN_NERDCONF-removebg-preview.png" }, ],
    speakerProjectsImage: [
      "/1.png",
      "/1.png",
    ],
  },
  {
    stage: "COMMUNITY_STAGE",
    time: "02:15 PM",
    type: "TALK",
    title: "Stitching off-chain and on-chain data to make sense of web3",
    speakers: [{ name: "Aniket", company: "Remix Labs", image:"/assets/speakers/Aniket_Remix_Judge-removebg-preview.png" }],
    speakerProjectsImage: [
      "/1.png",
    ],
  },
  {
    stage: "MAIN_STAGE",
    time: "02:20 PM",
    duration: "20 mins",
    type: "TALK",
    title: "Stitching off-chain and on-chain data to make sense of web3",
    speakers: [
      { name: "Ale Marin", company: "NERDCONF", image:"/assets/speakers/ALE_MARIN_NERDCONF-removebg-preview.png" },
      { name: "Tomas Octavio", company: "NERDCONF", image:"/assets/speakers/TOMAS_OCTAVIO_NERDCONF-removebg-preview.png" },
    ],
    speakerProjectsImage: [
      "/1.png",
      "/1.png",
    ],
    label: ["Privacy", "DeFi"]   
  },
   {
    stage: "COMMUNITY_STAGE",
    time: "02:30 PM",
    type: "TALK",
    title: " Stitching off-chain and on-chain data to make sense of web3",
    speakers: [{ name: "Aniket Sharma", company: "Rath Finance", image:"/assets/speakers/Aniket Sharma - Rath Finance.png" }],
    speakerProjectsImage: [
      "/1.png",
    ],
  },
  {
    stage: "MAIN_STAGE",
    time: "02:40 PM",
    duration: "20 mins",
    type: "TALK",
    title: "Stitching off-chain and on-chain data to make sense of web3",
    speakers: [{ name: "Jatin Pandya",  company: "Canton Foundation", image:"/assets/speakers/Jatin_Pandya.png" }, ],
    speakerProjectsImage: [
      "/1.png",
    ],
  },
  {
    stage: "COMMUNITY_STAGE",
    time: "02:50 PM",
    type: "TALK",
    title: "Stitching off-chain and on-chain data to make sense of web3",
    speakers: [{ name: "Ayush Bhadauria", company: "ZisK", image:"/assets/speakers/Ayush Bhadauria - ZisK.png" }],
    speakerProjectsImage: [
      "/1.png",
    ],
  },
  {
    stage: "MAIN_STAGE",
    time: "03:00 PM",
    duration: "15 mins",
    type: "TALK",
    title: "Stitching off-chain and on-chain data to make sense of web3",
    speakers: [{ name: "Dhaiwat", company: "ENS", image:"/assets/speakers/Dhaiwat.png" }],
    speakerProjectsImage: [
      "/1.png",
    ],
  },
  {
    stage: "COMMUNITY_STAGE",
    time: "03:05 PM",
    type: "TALK",
    title: "Stitching off-chain and on-chain data to make sense of web3",
    speakers: [{ name: "Ayush Bherwani", company: "MetaMask", image:"/assets/speakers/Ayush_Bherwani.png" }],
    speakerProjectsImage: [
      "/1.png",
    ],
  },
  {
    stage: "MAIN_STAGE",
    time: "03:15 PM",
    duration: "15 mins",
    type: "PANEL",
    title: "India Panel",
    speakers: [
      { name: "Denver", company: "Devfolio", image:"/assets/speakers/Denver-Dsouza-removebg-preview.png" },
      { name: "Devansh", company: "ETHMumbai", image:"/assets/speakers/devansh_mehta_-_ethereum_foundation-removebg-preview.png" },
    ],
    speakerProjectsImage: [ 
      "/1.png",
      "/1.png",
    ],
  },
  {
    stage: "COMMUNITY_STAGE",
    time: "03:20 PM",
    type: "TALK",
    title: "Stitching off-chain and on-chain data to make sense of web3",
    speakers: [{ name: "Siddharth Biju", company: "", image:"/assets/speakers/Siddharth Biju.png" }],
    speakerProjectsImage: [
      "/1.png",
    ],
  },
  {
    stage: "MAIN_STAGE",
    time: "03:30 PM",
    duration: "45 mins",
    type: "TALK",
    title: "Stitching off-chain and on-chain data to make sense of web3",
    speakers: [{ name: "Vijay", company: "Fileverse", image:"/assets/speakers/vijay_-_fileverse-removebg-preview.png" }],
    speakerProjectsImage: [
      "/1.png",
    ],
  },
  {
    stage: "MAIN_STAGE",
    time: "04:15 PM",
    duration: "20 mins",
    type: "TALK",
    title: "Stitching off-chain and on-chain data to make sense of web3",
    speakers: [{ name: "Akash", company: "StarkWare", image:"/assets/speakers/akash_-_starkware-removebg-preview.png" }],
    speakerProjectsImage: [
      "/1.png",
    ],
  },
  {
    stage: "MAIN_STAGE",
    time: "04:35 PM",
    duration: "15 mins",
    type: "TALK",
    title: "Stitching off-chain and on-chain data to make sense of web3",
    speakers: [{ name: "Shubham Bhandari", company: "ETHMumbai", image:"/assets/speakers/Shubham_Bhandari_-_Manta_Network-removebg-preview.png" }],
    speakerProjectsImage: [
      "/1.png",
    ],
  },
  {
    stage: "MAIN_STAGE",
    time: "04:50 PM",
    duration: "15 mins",
    type: "TALK",
    title: "Stitching off-chain and on-chain data to make sense of web3",
    speakers: [{ name: "Heet", company: "ETHMumbai", image:"/assets/speakers/ALE_MARIN_NERDCONF-removebg-preview.png" }],
    speakerProjectsImage: [
      "/1.png",
    ],
  },
  {
    stage: "COMMUNITY_STAGE",
    time: "04:50 PM",
    duration: "15 mins",
    type: "PANEL",
    title: "AI Panel",
    speakers: [{ name: "Sahil", company: "Quicknode", image:"/assets/speakers/Sahil Sen - Quicknode.png" }, ],
    speakerProjectsImage: [
      "/1.png",
    ],
    label: ["AI"]
  },
  {
    stage: "MAIN_STAGE",
    time: "05:05 PM",
    duration: "15 mins",
    type: "PANEL",
    title: "Marketing Panel",
    speakers: [{ name: "Se7en" }],
    speakerProjectsImage: [
      "/1.png",
    ],
  },
  {
    stage: "MAIN_STAGE",
    time: "05:20 PM",
    duration: "20 mins",
    type: "TALK",
    title: "Stitching off-chain and on-chain data to make sense of web3",
    speakers: [{ name: "Sweta Shaw", company: "Own Protocol", image:"/assets/speakers/Sweta_Judge-removebg-preview.png" }],
    speakerProjectsImage: [
      "/1.png",
    ],
  },
  {
    stage: "MAIN_STAGE",
    time: "05:40 PM",
    duration: "20 mins",
    type: "TALK",
    title: "Stitching off-chain and on-chain data to make sense of web3",
    speakers: [{ name: "Candela", company: "ETHMumbai", image:"/assets/speakers/ALE_MARIN_NERDCONF-removebg-preview.png" }],
    speakerProjectsImage: [
      "/1.png",
    ],
  },
  {
    stage: "MAIN_STAGE",
    time: "06:00 PM",
    duration: "15 mins",
    type: "CEREMONY",
    title: "Closing Ceremony",
    speakers: [{ name: "Parth", company: "ETHMumbai", image:"/assets/speakers/ALE_MARIN_NERDCONF-removebg-preview.png" }, ],
    speakerProjectsImage: [
      "/1.png",
    ],
  },
  {
    stage: "MAIN_STAGE",
    time: "06:15 PM",
    duration: "15 mins",
    type: "ANNOUNCEMENT",
    title: "Announcements",
    speakers: [
      { name: "Dev3Pack", image:"/assets/partners/Dev3Pack.svg" },
      { name: "Devfolio", image:"/assets/partners/Devfolio.svg" },
      { name: "Devcon", image:"/assets/partners/Devcon India.svg" },
    ],
  },
];
