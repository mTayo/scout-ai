"use client";
import { useReducer } from "react";
import Section from "../common/Section";
import AnimateElement from "../common/AnimateElement";
import TiltCard from "../common/TiltingCard";

export default function Testimonials() {
    const initialState = {
        currentId : 0
    };
    const [state, setState] = useReducer((state: any, newState: any) => ({ ...state, ...newState }), initialState);
    const { currentId } = state;
    const spliceArray = (firstMenu= true) => {
        const newArray = [...testimonialsArray];
        if(firstMenu){
            return newArray.splice(3);
        }else{
            return newArray.splice(0, 3)
        }
    };
    const changeActiveId = (id: number) => {
        setState({
            currentId: id
        })
    };
    return (
            <>
                <Section contentClass="" useContentBorder={false} useContentMaxWidth={false}>
                    <div className="flex w-full">
                        <div className="w-[222px]">
                            {spliceArray().map((item, _i: number) => (
                                <div key={_i} className="flex horizontal-border-bottom" >
                                    <div className="w-[80px] vertical-border-right" />
                                    <AnimateElement className={`z-10   pointer w-full flex-grow `}>
                                        <div className="h-[141.83px] w-full flex justify-center items-center " onClick={()=>changeActiveId(item.id)}>
                                            <img src={item.icon} alt={item?.text} />
                                        </div>
                                    </AnimateElement>
                                  
                                </div>
                            ))}
                        </div>
                        <div className="text-white flex-grow vertical-border-left vertical-border-right">
                            <div className="max-w-[470px] mx-auto w-full py-[27.97px]">
                                <p className="text-center text-3xl mt-6">{testimonialsArray[currentId].text}</p>
                                <div className="flex justify-center mt-10">
                                    <TiltCard>
                                        <img src={testimonialsArray[currentId].avatar} alt="testimonial image" className="h-20 w-20 object-cover rounded-full  ring-white" />
                                    </TiltCard>
                                </div>
                            </div>
                        </div>
                        <div className="w-[222px]">
                            {spliceArray(false).map((item, _j: number) => (
                                <div key={_j} className="flex horizontal-border-bottom">
                                    <AnimateElement className={`z-10  pointer w-full flex-grow`}>
                                        <div className="h-[141.83px] w-full flex justify-center items-center " onClick={()=>changeActiveId(item.id)}>
                                            <img src={item.icon} alt={item?.text} />
                                        </div>
                                    </AnimateElement>
                                <div className="w-[80px] vertical-border-left" />
                                </div>
                            ))}
                        </div>
                    </div>
                </Section>
            </>
    );
}

const testimonialsArray = [
    {
        id: 0,
        text: `"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
        industry's standard dummy text ever..."`,
        icon:'/assets/testimonial_logo/statsig-logo-dark.e0b1cbe0.svg',
        avatar:'/assets/testimonial_logo/user1.jpg',
    },
    {
        id: 1,
        text: `"Scout is an indispensable tool for our Engineering, DS and Sales teams to engage with our customers.  We
                rely on Scout daily, making ..."`,
        icon:'/assets/testimonial_logo/quipli-logo-dark.4af9d042.svg',
        avatar:'/assets/testimonial_logo/user2.jpg',
    },
    {
        id: 2,
        text: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
        magna aliqua. Ut enim ad minim veniam..."`,
        icon:'/assets/testimonial_logo/hyper-logo-dark.9334a3bc.svg',
        avatar:'/assets/testimonial_logo/user3.jpg',
    },
    {
        id: 3,
        text: `"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem 
        aperiam, eaque ipsa quae ab illo inventore..."`,
        icon:'/assets/testimonial_logo/dagster-logo-dark.ddf4d3c1.svg',
        avatar:'/assets/testimonial_logo/user4.jpg',
    },
    {
        id: 4,
        text: `"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I 
        will give you a complete account of the system..."`,
        icon:'/assets/testimonial_logo/citibot-logo-dark.ac42107f.svg',
        avatar:'/assets/testimonial_logo/user5.jpg',
    },
    {
        id: 5,
        text: `"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
         atque corrupti quos dolores et quas molestias ..."`,
        icon:'/assets/testimonial_logo/casestatus-logo-dark.3eccb07d.svg',
        avatar:'/assets/testimonial_logo/user6.jpg',
    }
];
