import Section from "../common/Section";
import TiltCard from "../common/TiltingCard";


export default function Features() {
    
    return (
            <>
          
                <Section contentClass="" useContentBorder={false} useTopHorizontalBorder={false}>
                    <div className="features-section-container relative overflow-x-hidden">
                        <div className="pt-6 lg:pt-[121px] flex flex-wrap justify-center lg:justify-between items-center">
                            <div className="w-full md:w-auto hidden lg:block">
                                <TiltCard>
                                    <img src="/assets/feature-cards/card_1.svg" className="w-auto" alt="Feature card"/>
                                </TiltCard>
                            </div>
                            <div className=" w-[80%] md:w-auto">
                                <TiltCard>
                                    <img src="/assets/feature-cards/card_2.svg" className="w-auto mx-auto" alt="Feature card"/>
                                </TiltCard>
                            </div>
                            <div className="w-[80%] md:w-auto">
                                <TiltCard>
                                    <img src="/assets/feature-cards/card_3.svg" alt="Feature card" className="w-auto mx-auto"/>
                                </TiltCard>
                            </div>
                        </div>
                        <div className="mt-[-10px] pb-5 md:pb-[121px] flex flex-wrap justify-center lg:justify-between items-center">
                            <div className="w-[80%] md:w-auto">
                                <TiltCard>
                                    <img src="/assets/feature-cards/card_4.svg" className="w-auto mx-auto" alt="Feature card"/>
                                </TiltCard>
                            </div>
                            <div className="w-[80%] md:w-auto">
                                <TiltCard>
                                    <img src="/assets/feature-cards/card_5.svg" className="w-auto mx-auto" alt="Feature card"/>
                                </TiltCard>
                            </div>
                            <div className="w-full md:w-auto hidden lg:block">
                                <TiltCard>
                                    <img src="/assets/feature-cards/card_6.svg" className="w-auto mx-auto" alt="Feature card"/>
                                </TiltCard>
                            </div>
                        </div>
                    </div>
                </Section>
                <Section useContentBorder={false} useTopHorizontalBorder={false} />
                
            </>
    );
}
