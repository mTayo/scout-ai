/* eslint-disable react/no-unescaped-entities */
import Button from "../common/Button";
import PlanCard from "../common/PlanCard";
import Section from "../common/Section";
import TiltCard from "../common/TiltingCard";


export default function SubPlan() {
    const includedFeatures: Array<string> = ['Shared Slack Channel','Dedicated Support Engineer', 'Prompt Engineering Guidance', 'Context Sourcing Guidance'];
    return (
            <div>
                <Section contentClass="" useContentBorder={false} useTopHorizontalBorder={false}>
                    <div className="text-center mt-8 md:mt-[119px]">
                        <h2 className="text-white text-4xl font-bold md:px-0 px-2">A plan for every need.</h2>
                        <p className="paragraph-color mt-4 text-lg font-normal md:px-0 px-2">Whether you are just starting or require massive scale, we have a solution.</p>
                    </div>
                    <div className="mt-10 mb-5 flex gap-x-6 gap-y-6 px-4 md:px-0 flex-wrap justify-center">
                        {cardData.map((card: any, _i: number) => (
                            <PlanCard key={_i} cardDetails={card} />
                        ))}
                        
                    </div>
                    {/* DEDICATED SUPPORT */}
                    <div className="md:px-0 px-4">
                        <div className="dedicated-support-container md:pl-[14px]  rounded-[16px] max-w-[960px] mx-auto flex md:flex-nowrap flex-wrap mb-[142px]">
                            <div className="dedicated-support py-6 pl-5 flex-grow font-normal">
                                <h2 className="text-2xl text-white">Dedicated Support</h2>
                                <p className="text-white opacity-50 mt-3.5 ">We are here to help get you started with a dedicated support engineer who can assist with 
                                    scoping your first models and getting them deployed.
                                </p>
                                <h3 className="mt-5 text-white opacity-50 font-medium text-[13px]">WHAT'S INCLUDED</h3>
                                <div className="flex flex-wrap mt-5">
                                    {includedFeatures.map((item:string, _i:number) => (
                                        <div key={_i} className="flex items-center gap-x-4 lg:pr-[80px]">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                                <path d="M15.5 10.0928L11 15.3309L9 13.4261M21.5 12.4738C21.5 17.2076 17.4705 21.0452 12.5 21.0452C7.52943 21.0452 3.5 17.2076 3.5 12.4738C3.5 7.73991 7.52943 3.90234 12.5 3.90234C17.4705 3.90234 21.5 7.73991 21.5 12.4738Z" stroke="#434343" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                            <p className="text-white opacity-50 lg:max-w-[160px]">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="md:max-w-[307px] mt-4 md:mt-0 w-full add-on-container rounded-r-[16px]">
                                    <div className="mx-4 my-4 add-on-card rounded-xl">
                                        <div className="px-4 py-7">
                                        <div className="flex justify-center "> 
                                                <img src="/assets/plans/add_on.svg" alt="Add on"/>
                                            </div>
                                            <div className="text-white">
                                                <h3 className="text-center text-4xl mt-2.5">$750</h3>
                                                <p className="text-center mt-0 text-base">monthly</p>
                                                <Button text="Request Access" animateClass="w-full" className="w-full text-center py-[9px] text-sm pro-plan-btn text-[#09090A] mt-5" />
                                                <p className="opacity-50 text-xs mt-4">No long term contract obligation.</p>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </Section>
                <Section useContentBorder={false} />
            </div>
    );
}

const cardData = [
    {
        type: 'hobby',
        value: '$0',
        imgSrc: '/assets/plans/hobby.svg',
        text: 'Great for personal use or a first step to explore the Scout platform.',
        btnText: 'Sign Up',
        featureListing: [
            '100 Interactions (GPT-3.5 Only)',
            'Deploy 1 App',
            'Connect 1 Collection',
            '10GB of Storage',
            'Community Support (Discord)'
        ]
    },
    {
        type: 'pro',
        value: '$50',
        imgSrc: '/assets/plans/pro.svg',
        mostPopular: true,
        text: 'Perfect for building scaling models with limited context.',
        btnText: 'Sign Up',
        featureListing: [
            'Unlimited Interactions',
            '$0.09 per Interaction',
            'Deploy 10 Apps',
            'Connect 10 Collections',
            '1TB of Storage',
            'Community & Email Support'
        ]
    },
    {
        type: 'enterprise',
        value: 'Custom',
        imgSrc: '/assets/plans/enterprise.svg',
        text: 'For large scale models with large and ever-changing context',
        btnText: 'Request Access',
        featureListing: [
            'Unlimited Interactions',
            'Custom interaction Pricing',
            'Unlimited Apps',
            'Unlimited Collections',
            'Unlimited Storage',
            'Dedicated Support'
        ]
    },
];
