import React from "react";
import { ExternalLink } from "react-external-link";
import { FaLinkedinIn } from "react-icons/fa";
import namrata from "./images1/aa/namrata.jpg";
import jatin from "./images1/aa/JATIN SHARMA (1).jpg";
import yashaswini from "./images1/aa/YashaswiniK_1.jpg";
import sharanya from "./images1/aa/SharanyaBhat.jpg";
import suraj from "./images1/aa/Suraj Aribenchi.jpg";
import aadarsh from "./images1/aa/Aadarsh Shriniwas.jpg";
import ujjwal from "./images1/aa/UJJAWAL(jpeg).jpg";
import ketakl from "./images1/aa/_Ketaki.jpg";
import ashutosh from "./images1/aa/Ashutosh Malviya.jpg";
import ananya from "./images1/aa/Ananya.jpg";
import varsha from "./images1/aa/varsha.jpg";
import vritika from "./images1/aa/VritikaSavukar.jpg";
import pavanj from "./images1/aa/PavanJ.jpg"
import purbayan from "./images1/aa/PurbayanBiswas.jpg"
import adityaagg from "./images1/aa/AdityaAgarwal.jpg"
import yash from "./images1/aa/YASHJADHAV.png"
import dhruva from "./images1/aa/DhruvaD.png"
import jishnu from "./images1/aa/JishnuKhargharia.jpg"
import shravya from "./images1/aa/ShravyaGS.jpg"
import pratik from "./images1/aa/PratikGautam.jpg"
import rishabh from "./images1/aa/RishabhSingh.jpg"
import advaita from "./images1/aa/AdvaitaAmrit.jpg"
import anaya from "./images1/aa/MansiSingh.jpg"
import abhishek from "./images1/aa/AbhishekKumar.jpg"
import adityaloc from "./images1/aa/AdityaLochan.JPG"
import shashank from "./images1/aa/ShashankH.jpg"
import kritika from "./images1/aa/Kritika.jpg"
import arpreet from "./images1/aa/ArpreetSingh.jpg"
import aryan from "./images1/aa/AryanKumarSinha.jpg"
import tarun from "./images1/aa/TarunMuragodnavar.jpg"
import jahnvi from "./images1/aa/Jahnvi.jpg"



const people = [
  {
    id: 1,
    name: "OJAS SANGRA",
    linkedin: "https://www.linkedin.com/in/ojas-sangra-942351220",
    image: "./img/IMG_20230210_200320.jpg",
    role: "Chairman",
  },
  {
    id: 2,
    name: "ASHISH MAHANTH",
    linkedin: "https://www.linkedin.com/in/ashish-mahanth-887b0721b",
    image: "./img/Ashish.jpg",
    role: "Vice Chairman",
  },
  {
    name: "ADITYA DUBEY",
    linkedin: "https://www.linkedin.com/in/aditya-dubey-18927b152/",
    image: "./img/1SI20ET002.jpg",
    role: "Treasurer",
  },

  {
    name: "SAMEER KUMAR",
    linkedin: "https://www.linkedin.com/in/sameer-shetty-478481217",
    image: "./img/Sameer.jpg",
    role: "Tech Lead",
  },

  {
    name: "KUNAL",
    linkedin: "https://www.linkedin.com/in/kunal-chanda-104a63226",
    image: "./img/Kunal.jpg",
    role: "Fourth Year",
  },
  {
    name: "TANNISHTHA NANDY",
    linkedin: "https://www.linkedin.com/in/tannistha-nandy-22b8401b9",
    image: "./img/Tannistha Nandy .jpg",
    role: "Fourth Year",
  },

  {
    name: "YASHASWINI",
    linkedin: "https://www.linkedin.com/company/corsit/",
    image: yashaswini,
    role: "Fourth Year",
  },
  {
    name: "AYUSHMAN SHARMA",
    linkedin: "https://www.linkedin.com/in/ayushman-sharma-b43623213/",
    image: "./img/Ayushman Sharma.jpeg",
    role: "Fourth Year",
  },
  {
    name: "JEEVITHA",
    linkedin: "https://www.linkedin.com/in/jeevitha-k-a-744405229",
    image: "./img/1si20ec039_jeevitha.jpg",
    role: "Fourth Year",
  },
  {
    name: "UJJAWAL SINGH ",
    linkedin: "https://www.linkedin.com/company/corsit/",
    image: ujjwal,
    role: "Treasurer",
  },
  {
    name: "SHARANYA BHAT",
    linkedin: "https://www.linkedin.com/in/sharanya-bhat-b2070a239",
    image: sharanya,
    role: "Third Year",
  },
  {
    name: "ASHUTOSH MALVIYA",
    linkedin: "https://www.linkedin.com/in/ashumalviya",
    image: ashutosh,
    role: "Third Year",
  },
  {
    name: "KUMAR HARSH",
    linkedin: "https://www.linkedin.com/in/kumar-harsh-39bb2b249",
    image: "./img/Kumar Harsh.jpg",
    role: "Third Year",
  },
  {
    name: "RISHAV SHEKHAR",
    linkedin: "https://www.linkedin.com/in/rishav-shekhar-a21279232",
    image: "./img/IMG-20221119-WA0000.jpg",
    role: "Third Year",
  },
  {
    name: "NAMRATA BHARADWAJ",
    linkedin: "https://www.linkedin.com/company/corsit/",
    image: namrata,
    role: "Third Year",
  },
  {
    name: "JATIN SHARMA",
    linkedin: "https://www.linkedin.com/in/jatin-sharma-669590142",
    image: jatin,
    role: "Third Year",
  },
  {
    name: "SIDDHANT RAJ",
    linkedin: "https://www.linkedin.com/company/corsit/",
    image: "./img/SIDDHANT RAJ.jpg",
    role: "Third Year",
  },
  {
    name: "SURAJ ARIBENCHI",
    linkedin: "https://www.linkedin.com/company/corsit/",
    image: suraj,
    role: "Third Year",
  },
  {
    name: "VIVEK M",
    linkedin: "https://www.linkedin.com/in/vivekinnovator",
    image: "./img/Vivek M (EEE).jpg",
    role: "Third Year",
  },
  {
    name: "AADARSH SHRINIWAS",
    linkedin: "https://www.linkedin.com/in/aadarsh-shriniwas-512047227",
    image: aadarsh,
    role: "Third Year",
  },
  {
    name: "LEKHANA PATEL",
    linkedin: "https://www.linkedin.com/in/lekhana-patel-3b8986225",
    image: "./img/IMG_20230216_144211.jpg",
    role: "Third Year",
  },
  {
    name: "HARSH GAURAV",
    linkedin: "https://www.linkedin.com/in/harsh-gaurav-1434b624b",
    image: "./img/Harsh Gaurav.jpg",
    role: "Third Year",
  },
  {
    name: "ADITI JOSHI",
    linkedin: "https://www.linkedin.com/in/aditi-joshi-5a260b229",
    image: "./img/Aditi Joshi ECE.jpg",
    role: "Third Year",
  },
  {
    name: "VAISHALI CHOUDHARY",
    linkedin: "https://www.linkedin.com/in/b-vaishali-choudhary-671075239",
    image: "./img/B Vaishali Choudhary .jpg",
    role: "Third Year",
  },
  {
    name: "MAYANK PANDEY",
    linkedin: "https://www.linkedin.com/in/mayank-pandey-1a16b7240",
    image: "./img/Mayank Pandey .jpg",
    role: "Third Year",
  },
  {
    name: "BADAL",
    linkedin: "https://www.linkedin.com/company/corsit/",
    image: "./img/BADAL.jpg",
    role: "Third Year",
  },
  {
    name: "ARYAN",
    linkedin: "https://www.linkedin.com/in/aryan-kapoor-86535724b",
    image: "./img/Aryan.jpg",
    role: "Third Year",
  },
  {
    name: "CHAITHRA H R",
    linkedin: "https://www.linkedin.com/company/corsit/",
    image: "./img/_Chaithra HR , AIML.jpg",
    role: "Second Year",
  },
  {
    name: "KETAKI JOJANE",
    linkedin: "https://www.linkedin.com/in/ketaki-jojane-a030a7265",
    image: ketakl,
    role: "Second Year",
  },
  {
    name: "OM",
    linkedin: "https://www.linkedin.com/company/corsit/",
    image: "./img/_Om .jpg",
    role: "Second Year",
  },
  {
    name: "AISHWARYA ACHARYA P K",
    linkedin: "https://www.linkedin.com/in/aishwarya-acharya-pk-a9b661258",
    image: "./img/Aishwarya Acharya PK ,ISE.jpg",
    role: "Second Year",
  },
  {
    name: "NM SAI LIKHITHA",
    linkedin: "https://www.linkedin.com/in/sailikhithanm",
    image: "./img/NM Sai Likhitha.jpg",
    role: "Second Year",
  },
  {
    name: "MUDIT SHEKHAR",
    linkedin: "https://www.linkedin.com/company/corsit/",
    image: "./img/Mudit shekhar , EEE.jpg",
    role: "Second Year",
  },
  {
    name: "NEETHU",
    linkedin: "https://www.linkedin.com/in/neethu-546b23264",
    image: "./img/Neethu.jpg",
    role: "Second Year",
  },
  {
    name: "VARSHA",
    linkedin: "https://www.linkedin.com/in/varsha-t-k-415b25264",
    image: varsha,
    role: "Second Year",
  },
  {
    name: "YATIN BHATIA",
    linkedin: "https://www.linkedin.com/company/corsit/",
    image: "./img/YATIN BHATIA.jpg",
    role: "Second Year",
  },
  {
    name: "GURU SRISHA",
    linkedin: "https://www.linkedin.com/in/guru-srisha-45a699263/",
    image: "./img/Guru Srisha.jpg",
    role: "Second Year",
  },
  {
    name: "ANANYA C R",
    linkedin: "https://www.linkedin.com/in/c-r-ananya-71a052259",
    image: ananya,
    role: "Second Year",
  },
  {
    name: "VRITIKA V SAVUKAR",
    linkedin: "https://www.linkedin.com/company/corsit/",
    image: vritika,
    role: "Second Year",
  },
  {
    name: "PAVAN J",
    linkedin: "https://www.linkedin.com/company/corsit/",
    image: pavanj,
    role: "Second Year",
  },
  {
    name: "PURBAYAN BISWAS",
    linkedin: "https://www.linkedin.com/company/corsit/",
    image: purbayan,
    role: "Second Year",
  },
  {
    name: "ADITYA AGARWAL",
    linkedin: "https://www.linkedin.com/company/corsit/",
    image: adityaagg,
    role: "Second Year",
  },
  {
    name: "Tarun S M",
    linkedin: "https://www.linkedin.com/company/corsit/",
    image: tarun,
    role: "First Year",
  },
  {
    name: "ADITYA LOCHAN",
    linkedin: "https://www.linkedin.com/company/corsit/",
    image: adityaloc,
    role: "First Year",
  },
  {
    name: "SHRAVYA G S",
    linkedin: "https://www.linkedin.com/company/corsit/",
    image: shravya,
    role: "First Year",
  },
  {
    name: "ARYAN KUMAR",
    linkedin: "https://www.linkedin.com/company/corsit/",
    image: aryan,
    role: "First Year",
  },
  {
    name: "Shashank H",
    linkedin: "https://www.linkedin.com/company/corsit/",
    image: shashank,
    role: "First Year",
  },
  {
    name: "Jishnu khagaria",
    linkedin: "https://www.linkedin.com/company/corsit/",
    image: jishnu,
    role: "First Year",
  },
  {
    name: "ABHISHEK",
    linkedin: "https://www.linkedin.com/company/corsit/",
    image: abhishek,
    role: "First Year",
  },
  {
    name: "JAHNVI SHARMA",
    linkedin: "https://www.linkedin.com/company/corsit/",
    image: jahnvi,
    role: "First Year",
  },
  {
    name: "DHRUVA D",
    linkedin: "https://www.linkedin.com/company/corsit/",
    image: dhruva,
    role: "First Year",
  },
  {
    name: "ADVAITA AMRIT",
    linkedin: "https://www.linkedin.com/company/corsit/",
    image: advaita,
    role: "First Year",
  },
  {
    name: "RISHABH SINGH",
    linkedin: "https://www.linkedin.com/company/corsit/",
    image: rishabh,
    role: "First Year",
  },
  {
    name: "YASH JADHAV",
    linkedin: "https://www.linkedin.com/company/corsit/",
    image: yash,
    role: "First Year",
  },
  {
    name: "PRATIK GAUTAM",
    linkedin: "https://www.linkedin.com/company/corsit/",
    image: pratik,
    role: "First Year",
  },
  {
    name: "KRITIKA",
    linkedin: "https://www.linkedin.com/company/corsit/",
    image: kritika,
    role: "First Year",
  },
  {
    name: "ARPREET SINGH",
    linkedin: "https://www.linkedin.com/company/corsit/",
    image: arpreet,
    role: "First Year",
  },
  {
    name: "ANAYA SINGH",
    linkedin: "https://www.linkedin.com/company/corsit/",
    image: anaya,
    role: "First Year",
  },
];

const Team = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white ">
      <h2 className="text-3xl text-center font-bold tracking-tight text-gray-900 sm:text-4xl">
        Our Team
      </h2>
      <div className="max-w-[1240px]  my-14 mx-auto grid md:grid-cols-3 gap-8">
        {people.map((person, i) => (
          <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <img
              key={i}
              className="aspect-square obje w-70 h-56 rounded-xl mx-auto mt-[-3rem] bg-white object-cover "
              src={person.image}
              alt="/"
            />
            <h2 className="text-xl font-semibold text-center py-6">
              {person.name}
            </h2>
            <ExternalLink
              className="flex text-blue-700 justify-center"
              href={person.linkedin}
            >
              <FaLinkedinIn size={30} />
            </ExternalLink>
            <div className="text-center font-medium">
              <p className="  py-2 border-b mx-8 mt-3">{person.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
