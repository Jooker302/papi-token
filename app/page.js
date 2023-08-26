"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegram, faXTwitter } from "@fortawesome/free-brands-svg-icons";
// import Loader from "@/components/Loader";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [isAVisible, setIsAVisible] = useState(false);
  const [isBVisible, setIsBVisible] = useState(false);
  const [isTVisible, setIsTVisible] = useState(false);
  const [isPVisible, setIsPVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleScroll = () => {
    const scrollY = window.scrollY || window.pageYOffset;
    const aboutSection = document.getElementById("about");
    const bannerSection = document.getElementById("banner");
    const tokenomicsSection = document.getElementById("tokenomics");
    const teamSection = document.getElementById("team");

    if (aboutSection) {
      const rect = aboutSection.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;

      if (rect.top <= windowHeight * 0.75) {
        setIsAVisible(true);
      }
    }

    if (bannerSection) {
      const rect = bannerSection.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;

      if (rect.top <= windowHeight * 0.75) {
        setIsBVisible(true);
      }
    }

    if (tokenomicsSection) {
      const rect = tokenomicsSection.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;

      if (rect.top <= windowHeight * 0.75) {
        setIsTVisible(true);
      }
    }

    if (teamSection) {
      const rect = teamSection.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;

      if (rect.top <= windowHeight * 0.75) {
        setIsPVisible(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 5000);

  // if (isLoading) {
  //   return <Loader />;
  // }

  return (
    <div className="bg-gray-100">
      <div id="header" className="relative bg-[#FED034]">
        <div className="flex justify-between items-center p-4">
          <div className="flex items-center space-x-4">
            <img src="main.jpeg" alt="Logo" className="h-8 w-8 rounded-full" />
          </div>
          <nav className="hidden md:flex flex-grow justify-center space-x-4">
            <a href="#" className="text-white">
              Home
            </a>
            <a href="#about" className="text-white">
              About
            </a>
            <a href="#team" className="text-white">
              Team
            </a>
          </nav>

          <div className="md:hidden z-10">
            <button
              className="text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
        <nav
          className={`${
            mobileMenuOpen ? "block" : "hidden"
          } absolute top-full left-0 right-0 z-10 bg-[#FED034] md:hidden transition-all duration-300`}
        >
          <div className="p-4 space-y-2">
            <a href="#" className="block text-white">
              Home
            </a>
            <a href="#about" className="block text-white">
              About
            </a>
            <a href="#team" className="block text-white">
              Team
            </a>
            <a href="https://t.me/Papii_Chul0" className="block text-white">
              Telegram
            </a>
            <a href="https://twitter.com/Papi3257" className="block text-white">
              Twiiter
            </a>
          </div>
        </nav>
      </div>

      <div
        id="banner"
        className={`py-10 md:pb-14 px-6 flex items-center bg-gray-100 border-t border-b border-[#FED034] justify-center ${
          isBVisible ? "slide-in active" : "slide-in"
        }`}
      >
        <img
          src="/cover.jpeg"
          alt="Pulsating Image"
          className="animated-image"
        />
      </div>

      <section
        id="intro"
        className="flex flex-col items-center justify-center py-12 bg-gray-100"
      >
        <img
          src="main.jpeg"
          alt="Logo"
          className=" h-32 w-32 md:h-64 md:w-64 rounded-full"
        />
        <h2 className="mt-4 text-xl font-extrabold md:text-2xl">
          🎉🌟Introducing🌟🎉
        </h2>
        <p className="mt-4 text-xl font-semibold text-center ">
          <span className={`font-bold text-[#FED034] wave`}>PAPI</span>:
          Infusing Fun into Crypto with Mysterious Puppetry!
        </p>
      </section>

      <div
        id="tokenomics"
        className={`p-6 flex justify-center flex-wrap ${
          isTVisible ? "slide-in active" : "slide-in"
        }`}
      >
        <div className="flex justify-center md:w-full">
          <p className="text-3xl font-extrabold py-3 ">Tokenomics</p>
        </div>
        <div className="bg-[#FED034] w-full rounded-lg flex justify-start flex-col items-center shadow-md m-2 p-4 md:w-4/5">
          <p className="text-3xl font-bold">Token Supply </p>
          <p className="p-1">
            Papi coin will have a fixed total supply of, let's say, 1 billion
            tokens.
          </p>
        </div>
        <div className="bg-[#FED034] w-full rounded-lg flex justify-start flex-col items-center p-4 md:w-4/5 shadow-md m-2">
          <p className="text-3xl font-bold">Distribution </p>
          <p className="p-1 font-semibold"> Initial Distribution:</p>
          <p>
            {" "}
            50% of the tokens could be allocated for an initial distribution
            event, which might involve airdrops, presale, or initial liquidity
            pool creation.
          </p>
          <p className="font-semibold">Development Team:</p>
          <p>
            {" "}
            Allocate around 15% to the development team to ensure ongoing
            project development and improvements.
          </p>
          <p className="font-semibold"> Marketing:</p>
          <p>
            Allocate 10% for marketing initiatives to promote the coin and
            increase its visibility.
          </p>
          <p className="font-semibold">Liquidity:</p>
          <p>
            {" "}
            Set aside 15% for liquidity on decentralized exchanges to ensure
            trading availability.
          </p>
          <p className="font-semibold"> Community and Partnerships:</p>
          <p>
            {" "}
            Allocate 10% for community rewards, partnerships, and
            collaborations.
          </p>
        </div>

        <div className="bg-[#FED034] w-full rounded-lg flex justify-start flex-col items-center p-4 md:w-2/5 shadow-md m-2">
          <p className="text-3xl font-bold mt-4">Utility</p>
          <p className="p-1 font-semibold">Staking:</p>
          <p>
            Holders can stake Papi tokens to earn rewards or participate in
            governance decisions.
          </p>
          <p className="p-1 font-semibold">NFTs:</p>
          <p>
            Papi could integrate with NFTs, allowing holders to mint or trade
            unique meme-related digital assets.
          </p>
          <p className="p-1 font-semibold">Governance:</p>
          <p>
            Holders can participate in the decision-making process, such as
            voting on proposals or changes to the project.
          </p>
        </div>

        <div className="bg-[#FED034] w-full rounded-lg flex justify-start flex-col items-center p-4 md:w-2/5 shadow-md m-2">
          <p className="text-3xl font-bold mt-4">Incentives</p>
          <p className="p-1 font-semibold">Liquidity Mining:</p>
          <p>
            Encourage liquidity provision on decentralized exchanges by offering
            Papi rewards to liquidity providers.
          </p>
          <p className="p-1 font-semibold">Staking Rewards:</p>
          <p>
            Provide incentives for token holders who participate in staking to
            secure the network.
          </p>
          <p className="p-1 font-semibold">Referral Program:</p>
          <p>
            Introduce a referral program to reward users who bring in new
            holders or participants.
          </p>
        </div>

        <div className="bg-[#FED034] w-full rounded-lg flex justify-start flex-col items-center p-4 md:w-2/5 shadow-md m-2">
          <p className="text-3xl font-bold mt-4">Token Burning</p>
          <p className="p-1 font-semibold">Periodic Burns:</p>
          <p>
            Implement regular token burns by using a portion of transaction
            fees, reducing the overall supply and potentially increasing
            scarcity.
          </p>
        </div>

        <div className="bg-[#FED034] w-full rounded-lg flex justify-start flex-col items-center p-4 md:w-2/5 shadow-md m-2">
          <p className="text-3xl font-bold mt-4">Fees and Revenue</p>
          <p className="p-1 font-semibold">Transaction Fees:</p>
          <p>
            A small portion of transaction fees could be collected and
            redistributed to token holders as rewards or used for burns.
          </p>
        </div>
      </div>

      <section
        id="about"
        className={`${isAVisible ? "slide-in active" : "slide-in"}`}
      >
        <div className="container mx-auto px-2 flex flex-col md:flex-row items-center md:justify-between">
          <div className="md:w-1/2 mb-6 md:mb-0 md:px-4">
            <img
              src="/main.jpeg"
              alt="About"
              className="w-full rounded-full shadow-lg md:ml-44 md:w-72 md:max-w-full"
            />
          </div>
          <div className="md:w-1/2 md:pl-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              About Papi
            </h2>
            <p className="text-gray-600">
              {" "}
              PAPI a decentralised meme project putting fun back into
              cryptocurrency with our mysterious puppet. A first in the
              cryptocurrency space, bringing Lotto Staking to the space. This
              trendy puppet is ready to breed future Papi Chulo’s!
            </p>
          </div>
        </div>
      </section>

      <div
        id="team"
        className={`flex flex-col justify-center md:p-10 bg-gray-100 ${
          isPVisible ? "slide-in active" : "slide-in"
        }`}
      >
        <p className="text-3xl text-center ml-6 md:ml-0 font-bold ">Partner</p>
        <div class="container flex flex-wrap justify-around">
          <div class="team-profile">
            <a href="https://dx.app">
              <img src="dxsale.png" class="team-img" />
              <h3 className="text-[#FED034]">DxSale</h3>
            </a>
          </div>

          <div class="team-profile">
            <img
              src="https://th.bing.com/th/id/OIP.1wTTp6-XPR-g6PS8D8ZAqAHaDt?pid=ImgDet&rs=1"
              class="team-img"
            />
            <h3 className="text-[#FED034]">BNB Chain</h3>
          </div>
          <div class="team-profile">
            <img
              src="https://th.bing.com/th/id/OIP.mleb5_jAlRxR3Yj8Zksc2gHaHa?pid=ImgDet&rs=1"
              class="team-img"
            />
            <h3 className="text-[#FED034]">Chain Link</h3>
          </div>
          <div class="team-profile">
            <img
              src="https://th.bing.com/th/id/R.95bf06d513ed7ae2ea7ee2457a8daf91?rik=IfsTHJ7lZxWswQ&pid=ImgRaw&r=0"
              class="team-img"
            />
            <h3 className="text-[#FED034]">1inch</h3>
          </div>
          <div class="team-profile">
            <img
              class="team-img"
              src="https://pbs.twimg.com/profile_images/1653532864309239810/ZjT_zBAS_400x400.png"
            />
            <h3 className="text-[#FED034]">ARB</h3>
          </div>
          <div class="team-profile">
            <img
              src="https://images.ctfassets.net/c5bd0wqjc7v0/3dFdY6GvgLgCIXmBiN6eiA/d4acc5d4c5d557566cf0e46f9b58de43/icon-buy-and-sell.svg"
              class="team-img"
            />
            <h3 className="text-[#FED034]">Coinbase</h3>
          </div>
        </div>
      </div>

      <div className="md:p-4 p-2 bg-[#FED034] items-center flex justify-between">
        <p className="text-white">Listed on Arbitrum Chain</p>
        <div>
        <a className="m-2" href="https://t.me/Papii_Chul0">
          <FontAwesomeIcon
            icon={faTelegram}
            size="lg"
            className="text-white hover:text-blue-400"
            style={{ width: "24px", height: "24px" }}
          />
        </a>
        <a className="m-2" href="https://twitter.com/Papi3257">
          <FontAwesomeIcon
            icon={faXTwitter}
            size="lg"
            className="text-white hover:text-blue-400"
            style={{ width: "24px", height: "24px" }}
          />
        </a>
        </div>
      </div>
    </div>
  );
}
