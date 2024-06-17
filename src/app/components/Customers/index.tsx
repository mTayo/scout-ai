import Section from "../Section";


export default function Customers() {
    const customerData = {
        first_row: ['/assets/logo/logo_1.svg', '/assets/logo/logo_2.svg','/assets/logo/logo_3.svg', '/assets/logo/logo_4.svg'],
        second_row: ['/assets/logo/logo_5.svg', '/assets/logo/logo_6.svg','/assets/logo/logo_7.svg', '/assets/logo/logo_8.svg']
    }
    return (
            <>
                <Section />
                <Section contentClass="">
                    <div className="mx-[120px]  vertical-border-right flex justify-between items-center">
                        {customerData.first_row.map((item, i) => (
                            <div className={`py-10 px-12 ${i  < customerData.first_row.length? 'vertical-border-left' : ''}`} key={i}>
                                <img src={item} alt={item} />
                            </div>
                        ))}
                    </div>
                </Section>
                <Section contentClass="py-[65px]" useContentBorder={false}>
                    <h2 className="text-white text-4xl text-center leading-[3.4rem] font-medium">Used by teams at Statsig, Deno, <span className="block">Dagster, Evidence and more.</span></h2>
                </Section>
                <Section contentClass="">
                    <div className="mx-[120px]   vertical-border-right flex justify-between items-center">
                        {customerData.second_row.map((item, i) => (
                            <div className={`py-10 px-12 ${i  < customerData.first_row.length? 'vertical-border-left' : ''}`} key={i}>
                                <img src={item} alt={item} />
                            </div>
                        ))}
                    </div>
                </Section>
            </>
    );
}
