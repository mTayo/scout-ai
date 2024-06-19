import Section from "../common/Section";


export default function Customers() {
    const customerData = {
        first_row: ['/assets/logo/logo_1.svg', '/assets/logo/logo_2.svg','/assets/logo/logo_3.svg', '/assets/logo/logo_4.svg'],
        second_row: ['/assets/logo/logo_5.svg', '/assets/logo/logo_6.svg','/assets/logo/logo_7.svg', '/assets/logo/logo_8.svg']
    }
    return (
            <>
                <Section useContentBorder={false} useTopHorizontalBorder={false}/>
                <Section contentClass="" useTopHorizontalBorder={false}>
                    <div className="lg:mx-[120px]  vertical-border-right flex justify-between items-center">
                        {customerData.first_row.map((item, i) => (
                            <div className={`md:py-10 md:px-12 px-2 py-4 ${i  < customerData.first_row.length? 'vertical-border-left' : ''}`} key={i}>
                                <img src={item} alt={item} className="w-full" />
                            </div>
                        ))}
                    </div>
                </Section>
                <Section contentClass="py-6 lg:py-[65px]" useContentBorder={false} useTopHorizontalBorder={false}>
                    <h2 className="text-white text-2xl lg:text-4xl text-center leading-[3rem] lg:leading-[3.4rem] font-medium">Used by teams at Statsig, Deno, <span className="block">Dagster, Evidence and more.</span></h2>
                </Section>
                <Section contentClass="" useTopHorizontalBorder={false}>
                    <div className="lg:mx-[120px]   vertical-border-right flex justify-between items-center">
                        {customerData.second_row.map((item, i) => (
                            <div className={`md:py-10 md:px-12 px-2 py-4 ${i  < customerData.first_row.length? 'vertical-border-left' : ''}`} key={i}>
                                <img src={item} alt={item} className="w-full"  />
                            </div>
                        ))}
                    </div>
                </Section>
            </>
    );
}
