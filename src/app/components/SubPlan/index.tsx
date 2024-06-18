import PlanCard from "../common/PlanCard";
import Section from "../common/Section";
import TiltCard from "../common/TiltingCard";


export default function SubPlan() {
    return (
            <div>
                <Section contentClass="" useContentBorder={false} useTopHorizontalBorder={false}>
                    <div className="text-center mt-[119px]">
                        <h2 className="text-white text-4xl font-bold">A plan for every need.</h2>
                        <p className="paragraph-color mt-4 text-lg font-normal">Whether you are just starting or require massive scale, we have a solution.</p>
                    </div>
                    <div className="mt-10 flex gap-x-4">
                        {cardData.map((card: any, _i: number) => (
                            <div key={_i} className="max-w-[303px] w-full">
                                <PlanCard  cardDetails={card} />
                            </div>
                        ))}
                        
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
