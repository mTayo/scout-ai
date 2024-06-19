import Button from "../Button";

export default function PlanCard({cardDetails}: any) {
    const {type, value, imgSrc, text, btnText, featureListing} = cardDetails;
    const renderHeader = () => {};
    return (
          <div className={`relative md:max-w-[303px]  self-stretch self-auto w-full plan-card pt-[33px] px-[25px] pb-[37px] plan-card-${type}`}>
              <div>
                 <img src={imgSrc} alt={type} />
              </div>
              <div className="mt-[19px]">
                <span className="text-3xl text-white font-medium">{value}</span>
                <p className="font-normal text-white mt-4 md:max-w-[179px] opacity-50">
                    {text}
                </p>
                <div className="mt-[23px] flex justify-center font-normal">
                    <Button text={btnText} animateClass="w-full" className={`w-full text-center py-[9px] text-sm ${type ==="pro"? " pro-plan-btn text-[#09090A]": "normal-plan-btn text-white"}`} />
                </div>
                <div className="mt-6 font-normal">
                    {featureListing.map((feature: string, _i:number) => (
                        <div key={_i} className={`flex items-center gap-x-3 ${_i+1 !== featureListing.length? 'mb-3': ''}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                <path d="M15.5 10.2959L11 15.5341L9 13.6293M21.5 12.6769C21.5 17.4107 17.4705 21.2483 12.5 21.2483C7.52943 21.2483 3.5 17.4107 3.5 12.6769C3.5 7.94303 7.52943 4.10547 12.5 4.10547C17.4705 4.10547 21.5 7.94303 21.5 12.6769Z" stroke="#434343" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <p className={`${type === 'pro'? 'text-white': 'text-[#E2E8F0]'} text-sm opacity-50`}>{feature}</p>
                        </div>
                    ))}
                </div>
              </div>
  
          </div>
    );
  }