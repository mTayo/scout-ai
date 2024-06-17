import Section from "../Section";


export default function Features() {
    
    return (
            <>
                {/* <Section /> */}
                <Section contentClass="" useContentBorder={false}>
                    {/* <div className="mx-[120px] vertical-border-left  vertical-border-right flex justify-between items-center">
                        {customerData.first_row.map((item, i) => (
                            <div className={`py-10 px-12 ${i  < customerData.first_row.length? 'vertical-border-left' : ''}`} key={i}>
                                <img src={item} alt={item} />
                            </div>
                        ))}
                    </div> */}
                    <div className="pt-[121px] flex items-center">
                        <img src="/assets/feature-cards/card_1.svg" alt="Feature card"/>
                        <img src="/assets/feature-cards/card_2.svg" alt="Feature card"/>
                        <img src="/assets/feature-cards/card_3.svg" alt="Feature card"/>
                    </div>
                    <div className="pt-[0px] flex items-center">
                        <img src="/assets/feature-cards/card_4.svg" alt="Feature card"/>
                        <img src="/assets/feature-cards/card_5.svg" alt="Feature card"/>
                        <img src="/assets/feature-cards/card_6.svg" alt="Feature card"/>
                    </div>
                </Section>
                
            </>
    );
}
