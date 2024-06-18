import Section from "../common/Section";
import TiltCard from "../common/TiltingCard";


export default function Features() {
    
    return (
            <>
          
                <Section contentClass="" useContentBorder={false}>
                    <div className="features-section-container relative">
                        <div className="pt-[121px] flex justify-between items-center">
                            <TiltCard>
                                <img src="/assets/feature-cards/card_1.svg" alt="Feature card"/>
                            </TiltCard>
                            <TiltCard>
                                <img src="/assets/feature-cards/card_2.svg" alt="Feature card"/>
                            </TiltCard>
                            <TiltCard>
                                <img src="/assets/feature-cards/card_3.svg" alt="Feature card"/>
                            </TiltCard>
                        </div>
                        <div className="mt-[-10px] pb-[121px] flex justify-between items-center">
                            <TiltCard>
                                <img src="/assets/feature-cards/card_4.svg" alt="Feature card"/>
                            </TiltCard>
                            <TiltCard>
                                <img src="/assets/feature-cards/card_5.svg" alt="Feature card"/>
                            </TiltCard>
                            <TiltCard>
                                <img src="/assets/feature-cards/card_6.svg" alt="Feature card"/>
                            </TiltCard>
                        </div>
                    </div>
                </Section>
                <Section useContentBorder={false} />
                
            </>
    );
}
