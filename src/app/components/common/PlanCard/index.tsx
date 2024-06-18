import Button from "../Button";

export default function PlanCard({cardDetails}: any) {
    const {type, value, imgSrc, text, btnText, featureListing} = cardDetails;
    const renderHeader = () => {};
    return (
          <div className={`relative  plan-card pt-[33px] px-[25px] pb-[37px] plan-card-${type}`}>
              <div>
                 <img src={imgSrc} alt={type} />
              </div>
              <div className="mt-[19px]">
                <span className="text-3xl text-white font-medium">{value}</span>
                <p className="font-normal text-white mt-4 max-w-[179px]">
                    {text}
                </p>
                <div className="mt-[23px] flex justify-center font-normal">
                    <Button text={btnText} animateClass="w-full" className={`w-full text-center py-[9px] text-sm ${type ==="pro"? " pro-plan-btn text-[#09090A]": "normal-plan-btn text-white"}`} />
                </div>
              </div>
  
          </div>
    );
  }