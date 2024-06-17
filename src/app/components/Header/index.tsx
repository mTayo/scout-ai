/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
// background: linear-gradient(180deg, rgba(255, 255, 255, 0.06) 0%, #1F1F1F 10%);
export default function Header() {
  return (
        <div className="header-container relative">
            <div className="header-border">
                <div className="container-max-width mx-auto relative">
                    <div className="content-max-width mx-auto ">
                        <div className="content-border web-border relative">
                            <nav className="flex justify-between px-2 pt-[26px] pb-[21px]">
                                <div className="flex gap-x-6 items-center">
                                    <div>
                                        <Image
                                            src="/assets/hero/hero_logo_icon.svg"
                                            alt="Scout AI UI"
                                            // className="dark:invert"
                                            width={100}
                                            height={24}
                                            priority
                                        />
                                    </div>
                                    <ul className="flex gap-x-6 text-[#CBD5E1] text-[15px]">
                                        <li className="p-1 pr-[16.82px] text-slate-300">Features</li>
                                        <li className="p-1 pr-[22.22px] text-slate-300">Pricing</li>
                                        <li className="p-1 pr-[5.41px] text-slate-300">Docs</li>
                                        <li className="p-1 pr-[9.41px] text-slate-300">Blog</li>
                                    </ul>
                                </div>
                                <div className="flex  text-[15px] gap-x-[15.828px] items-center">
                                    <button className="login-btn text-white">
                                        Login
                                    </button>
                                    <button className="signup-btn">
                                        Sign Up
                                    </button>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

                <div className="container-max-width mx-auto relative ">
                    <div className="hero-section relative text-center content-max-width mx-auto overflow-x-hidden">
                        <div className="content-border relative flex justify-center flex-col pb-[96px]">
                            <div className="flex items-center justify-center mt-[92px] hero-beta py-2 max-w-[236.83px] mx-auto w-full">
                                <Image
                                    src="/assets/hero/hero_btn_icon.svg"
                                    alt="Scout AI UI"
                                    width={57.19}
                                    height={12}
                                    priority
                                />
                                <span className="warm-grey text-sm">is currently in beta</span>
                                <span>
                                    <img src="/assets/chevron-right.svg" alt="Chevron right" />
                                </span>
                            </div>
                            <div className="mt-6">
                                <h2 className="hero-heading leading-[5.5rem]">AI for teams building <span className="block">what's next.</span></h2>
                                <p className="mt-8 hero-paragraph text-lg">Scout gives you the tools to build custom agents and <span className="block">workflows in record time.</span></p>
                            </div>
                            <div className="flex items-center justify-center mt-10">
                                <button className="signup-btn flex items-center">
                                    Get Started
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="21" viewBox="0 0 22 21" fill="none">
                                        <path d="M9.43433 14.2249L13.0344 10.6249L9.43433 7.0249" stroke="#09090A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </button>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="vertical-border-top">
                <div className="container-max-width mx-auto relative">
                    <div className=" content-max-width mx-auto overflow-x-hidden">
                    <div className="content-border ">
                        <img src="/assets/hero/apps-dark.75a53e10.svg" alt="Hero Image" />
                    </div>
                    </div>
                </div>
            </div>

        </div>
  );
}
