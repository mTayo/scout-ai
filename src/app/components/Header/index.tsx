import Image from "next/image";

export default function Header() {
  return (
        <div>
            <div className="header-border">
                <div className="content-max-width mx-auto ">
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
                            <ul className="flex gap-x-6 text-[#CBD5E1] text-base">
                                <li className="p-1 pr-[16.82px]">Features</li>
                                <li className="p-1 pr-[22.22px]">Pricing</li>
                                <li className="p-1 pr-[5.41px]">Docs</li>
                                <li className="p-1 pr-[9.41px]">Blog</li>
                            </ul>
                        </div>
                        <div className="flex gap-x-[15.828px] items-center">
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
            <div className="hero-section">
                <div className="flex items-center">
                    <Image
                        src="/assets/hero/hero_btn_icon.svg"
                        alt="Scout AI UI"
                        width={57.19}
                        height={12}
                        // className="dark:invert"
                        // width={100}
                        // height={24}
                        priority
                    />
                    <span>is currently in beta</span>
                    <span>
                        <img src="/assets/chevron-right.svg" alt="Chevron right" />
                    </span>
                </div>
            </div>

        </div>
  );
}
