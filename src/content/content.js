import "./content.css"
import Slider from 'react-slider';
import { useState } from "react";

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';


import leftArrow from "../images/leftArrow.png";
import rightArrow from "../images/rightArrow.png";

import React from 'react';
import MySlider from 'react-slick';

import { useRef } from "react";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import background2 from "../images/backGround2.png";
import background1 from "../images/backGround0.png";
import background0 from "../images/backGround1.png";

import ourStoryImage from "../images/ourStoryMainImage.webp";

import productsMainImage from "../images/productsMainImage.png"

import { useInView } from 'react-intersection-observer';

import whiteBottle from "../images/whiteBottle.png"



export const Content = () => {
    const ourStoryRightPara = {
        display: "flex", 
        justifyContent: "start",

        fontFamily: "LightSomerSans",
        fontWeight: "200",
        fontStyle: "italic",
        fontSize: "16px",

        color: "#989898",


    }

    const ourStoryLeftPara = {
        display: "flex", 
        justifyContent: "end",

        fontFamily: "LightSomerSans",
        fontWeight: "200",
        fontStyle: "italic",
        fontSize: "16px",

        color: "#989898",
    }



    const sliderRef = useRef(null);
    const mySliderRef = useRef(null)

    

    const settings = {
        infinite: true,
        speed: 200,
        slidesToShow: 4.68,
        slidesToScroll: 1,
        arrows: false,

        responsive: [
            {
              breakpoint: 1290,
              settings: {
                slidesToShow: 3.68,
                slidesToScroll: 1,
              },
            },
            {
                breakpoint: 1250,
                settings: {
                  slidesToShow: 3.67,
                  slidesToScroll: 1,
                },
              },
            {
              breakpoint: 1150,
              settings: {
                slidesToShow: 3.3,
                slidesToScroll: 1,
              },
            },

            {
                breakpoint: 1035,
                settings: {
                  slidesToShow: 2.67,
                  slidesToScroll: 1,
                },
              },


              {
                breakpoint: 870, 
                settings: {
                  slidesToShow: 2.7,
                  slidesToScroll: 1,
                },
              },

              {
                breakpoint: 855,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                },
              },

              {
                breakpoint: 650, 
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,

                },
              },

          ],

      };

      const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,

      };


      const [ref, inView] = useInView({
        triggerOnce: true, 
        threshold: 0.5, 
      });

      const [refTwo, inViewTwo] = useInView({
        triggerOnce: true,
        threshold: 0.2, 
      });

      const [refThree, inViewThree] = useInView({
        triggerOnce: true,
        threshold: 0.2, 
      });

      const MSlider = ({ className, style, children, ...settings }) => {
        // Manually add the dots here
        const dots = Array.from({ length: React.Children.count(children) }).map((_, index) => (
          <li key={index}>
            <button> {/* You can customize the button as needed */}
              {index + 1}
            </button>
          </li>
        ));
      }

    return (
        <div className="bg-black " style={{zIndex: "132"}}>

            {/* Main Section */}

            <div className="flex justify-between " style={{height: "1000px", marginTop: "-220px"}}>

  
            <button onClick={() => mySliderRef.current.slickPrev()} className="prev-circleArrowTwo bg-white" style={{marginRight: "-100px", marginLeft: "0px", marginTop: "400px", zIndex: "432432"}}>
              <svg
                 xmlns="http://www.w3.org/2000/svg"
                 width="100"
                 height="100"
                 viewBox="0 0 24 24"
                 fill="none"
                 stroke="white" 
                 strokeWidth="0.3"
                 strokeLinecap="round"
                 strokeLinejoin="round"

                 className="ml-2"
                >
                <polyline points="15 18 9 12 15 6"></polyline>
               </svg>
              </button>
         
             <div className="slide-container " style={{zIndex: "107900", width: "100%"}}>

              <MySlider ref={mySliderRef}  {...sliderSettings} className="your-slider" style={{zIndex: '2342', padding: "0", marginTop: "-75px"}}>

              <div className="">
              <img src={background0} className="" style={{height:"1000px", width: "100%", margin: "0px", marginTop: "100px", objectFit: "cover"}}/>         
              </div> 
              
              <div className="">
              <img src={background1} className="" style={{height:"1000px", width: "100%", margin: "0px", marginTop: "100px", objectFit: "cover"}}/> 
              </div> 
              
              <div className="">
              <img src={background2} className="" style={{height:"1000px", width: "100%", margin: "0px", marginTop: "100px", objectFit: "cover"}}/>   
              </div> 
              
              </MySlider>
    
             </div>
  
             <button onClick={() => mySliderRef.current.slickNext()} className="next-circleArrowTwo bg-white" style={{marginLeft: "-170px", marginRight: "70px", marginTop: "400px", zIndex: "432432"}}>
              <svg
                 xmlns="http://www.w3.org/2000/svg"
                 width="100"
                 height="100"
                 viewBox="0 0 24 24"
                 fill="none"
                 stroke="white" 
                 strokeWidth="0.3"
                 strokeLinecap="round"
                 strokeLinejoin="round"

                 className="ml-2"
              >
              <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
              </button>


            </div>

            {/* Our Story Section */}

            <section className=" p-10 lg:p-32">
                <h1 className="text-white pb-14"> {Number(localStorage.getItem("myValue")) === 0 ? "OUR STORY" : " قصتنا " } </h1>


                <div ref={ref} className={` grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 fade-up ${inView ? 'visible' : ''}`} >
                    <div className={Number(localStorage.getItem("myValue")) === 0 ? "order-0  mt-10" : " md:order-0 lg:order-1  mt-10" }>
                        <h3 className=  {Number(localStorage.getItem("myValue")) === 0 ? "text-white text-center lg:text-left mb-3" : "text-white text-center lg:text-right mb-3" }> 
                        {Number(localStorage.getItem("myValue")) === 0 ?
                        "About us" : " من نحن " } </h3>

                        <div style={Number(localStorage.getItem("myValue")) === 0 ? {...ourStoryRightPara} : {...ourStoryLeftPara} }>

                        <p 
                        className={Number(localStorage.getItem("myValue")) === 0 ? "text-white text-center lg:text-left" : "text-white text-center lg:text-right" } 
                        style={{marginBottom: "50px", color: "#989898"}}> 
                        {Number(localStorage.getItem("myValue")) === 0 ? 
                        "At First Class by the innovative development of the energy drink brand, White Tiger®. With a commitment to excellence, we embarked on a journey to create a high-quality product that stands out as a superior alternative in the competitive energy drink market. White Tiger® is the embodiment of our dedication to delivering a refreshingly distinctive experience, setting new standards for taste, quality, and invigorating energy. Join us in embracing a beverage crafted with precision and passion, as we redefine the energy drink landscape Beverages of Sweden AB, our legacy is defined." 
                        : 
                        " في الدرجة الأولى من خلال التطوير المبتكر للعلامة التجارية لمشروبات الطاقة White Tiger®. مع الالتزام بالتميز، شرعنا في رحلة لإنشاء منتج عالي الجودة يبرز كبديل متميز في سوق مشروبات الطاقة التنافسية. White Tiger® هو تجسيد لتفانينا في تقديم تجربة مميزة ومنعشة، ووضع معايير جديدة للذوق والجودة والطاقة التنشيطية. انضم إلينا في احتضان مشروب مصنوع بدقة وشغف، بينما نعيد تعريف مشهد مشروبات الطاقة، مشروبات السويد AB، يتم تحديد تراثنا. " 
                        } 
                        </p>

                        </div>

                    </div>

                    <div className={Number(localStorage.getItem("myValue")) === 0 ? "order-1  flex justify-center lg:justify-end" : "  lg:order-0 flex justify-center lg:justify-start " }>
                        <img style={{width: "500px"}} src={ourStoryImage} />

                    </div>
                </div>

   


            </section>

            {/* TRENDING PRODUCTS */}

            <section>

            <h1 className="text-white pb-14"> {Number(localStorage.getItem("myValue")) === 0 ? "TRENDING PRODUCTS" : " قصتنا " } </h1>

            <div style={{ margin: '0 auto' }} ref={refThree} className={` fade-up ${inViewThree ? 'visible' : ''}`}>
            <MySlider ref={sliderRef} {...settings} className="" style={{margin: "0px"}}>

            <div className="flex justify-center p-5">
            <div className="p-10 text-white flex justify-center" style={{width: "300px", height: "450px", backgroundColor: "#131111", marginTop:"20px", borderTopRightRadius: "90px"}}>
                <img src={whiteBottle} className="absolute" style={{width: "350px", marginTop: "-100px"}}/>

                <h2 style={{marginTop: "330px"}}className=  {Number(localStorage.getItem("myValue")) === 0 ? "text-white text-center text-2xl mb-3" : "text-white text-center text-lg text-3xl mb-3" }> 
                    {Number(localStorage.getItem("myValue")) === 0 ?
                    "White Tiger Mojito " : " وايت تايجر موهيتو  " }  
                </h2>
            </div>
            </div> 

            <div className="flex justify-center p-5">
            <div className="p-10 text-white flex justify-center" style={{width: "300px", height: "450px", backgroundColor: "#131111", marginTop:"20px", borderTopRightRadius: "90px"}}>
                <img src={whiteBottle} className="absolute" style={{width: "350px", marginTop: "-100px"}}/>

                <h2 style={{marginTop: "330px"}}className=  {Number(localStorage.getItem("myValue")) === 0 ? "text-white text-center text-2xl mb-3" : "text-white text-center text-lg text-3xl mb-3" }> 
                    {Number(localStorage.getItem("myValue")) === 0 ?
                    "White Tiger Mojito " : " وايت تايجر موهيتو  " }  
                </h2>
            </div>
            </div> 

            <div className="flex justify-center p-5">
            <div className="p-10 text-white flex justify-center" style={{width: "300px", height: "450px", backgroundColor: "#131111", marginTop:"20px", borderTopRightRadius: "90px"}}>
                <img src={whiteBottle} className="absolute" style={{width: "350px", marginTop: "-100px"}}/>

                <h2 style={{marginTop: "330px"}}className=  {Number(localStorage.getItem("myValue")) === 0 ? "text-white text-center text-2xl mb-3" : "text-white text-center text-lg text-3xl mb-3" }> 
                    {Number(localStorage.getItem("myValue")) === 0 ?
                    "White Tiger Mojito " : " وايت تايجر موهيتو  " }  
                </h2>
            </div>
            </div> 

            <div className="flex justify-center p-5">
            <div className="p-10 text-white flex justify-center" style={{width: "300px", height: "450px", backgroundColor: "#131111", marginTop:"20px", borderTopRightRadius: "90px"}}>
                <img src={whiteBottle} className="absolute" style={{width: "350px", marginTop: "-100px"}}/>

                <h2 style={{marginTop: "330px"}}className=  {Number(localStorage.getItem("myValue")) === 0 ? "text-white text-center text-2xl mb-3" : "text-white text-center text-lg text-3xl mb-3" }> 
                    {Number(localStorage.getItem("myValue")) === 0 ?
                    "White Tiger Mojito " : " وايت تايجر موهيتو  " }  
                </h2>
            </div>
            </div> 

            <div className="flex justify-center p-5">
            <div className="p-10 text-white flex justify-center" style={{width: "300px", height: "450px", backgroundColor: "#131111", marginTop:"20px", borderTopRightRadius: "90px"}}>
                <img src={whiteBottle} className="absolute" style={{width: "350px", marginTop: "-100px"}}/>

                <h2 style={{marginTop: "330px"}}className=  {Number(localStorage.getItem("myValue")) === 0 ? "text-white text-center text-2xl mb-3" : "text-white text-center text-lg text-3xl mb-3" }> 
                    {Number(localStorage.getItem("myValue")) === 0 ?
                    "White Tiger Mojito " : " وايت تايجر موهيتو  " }  
                </h2>
            </div>
            </div> 

            <div className="flex justify-center p-5">
            <div className="p-10 text-white flex justify-center" style={{width: "300px", height: "450px", backgroundColor: "#131111", marginTop:"20px", borderTopRightRadius: "90px"}}>
                <img src={whiteBottle} className="absolute" style={{width: "350px", marginTop: "-100px"}}/>

                <h2 style={{marginTop: "330px"}}className=  {Number(localStorage.getItem("myValue")) === 0 ? "text-white text-center text-2xl mb-3" : "text-white text-center text-lg text-3xl mb-3" }> 
                    {Number(localStorage.getItem("myValue")) === 0 ?
                    "White Tiger Mojito " : " وايت تايجر موهيتو  " }  
                </h2>
            </div>
            </div> 

            </MySlider>
            </div>

            <div style={{ textAlign: 'center', marginTop: '20px' }}>
              <button onClick={() => sliderRef.current.slickPrev()} className="prev-circleArrow bg-white   m-10 mt-0">
              <svg
                 xmlns="http://www.w3.org/2000/svg"
                 width="24"
                 height="24"
                 viewBox="0 0 24 24"
                 fill="none"
                 stroke="white" 
                 strokeWidth="2"
                 strokeLinecap="round"
                 strokeLinejoin="round"

                 className="ml-2"
                >
                <polyline points="15 18 9 12 15 6"></polyline>
               </svg>
              </button>

              <button onClick={() => sliderRef.current.slickNext()} className="next-circleArrow bg-white  m-10 mt-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"

                className="ml-3"
              >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
              </button>
            </div>
            
            </section>

            <section >


                <div ref={refTwo} className={` grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 p-20 fade-up ${inViewTwo ? 'visible' : ''}`}>

                <div  className={Number(localStorage.getItem("myValue")) === 0 ? "order-0" : "order-1" }>
                   <div>
                    <h2 className=  {Number(localStorage.getItem("myValue")) === 0 ? "text-white text-center lg:text-left mb-3" : "text-white text-center lg:text-right mb-3" }> 
                    {Number(localStorage.getItem("myValue")) === 0 ?
                    "White Tiger Mojito Lemon Mint" : " وايت تايجر موهيتو ليمون نعناع " } 
                    </h2>

                    <p className={Number(localStorage.getItem("myValue")) === 0 ? "text-white text-center lg:text-left" : "text-white text-center lg:text-right" } 
                    style={{marginBottom: "50px", color: "#989898"}}> 
                    {Number(localStorage.getItem("myValue")) === 0 ? 
                    "is a non-alcoholic, carbonated energy drink for adults with caffeine (32mg/100ml) and taurine. Ingredients include carbonated water, sugar, citric acid, mint, and B vitamins." 
                    : 
                    " مشروب طاقة غير كحولي، معبأ بالغاز، مع كمية مرتفعة من الكافيين (32 ملغ/100 مل) والتورين. المكونات تشمل مياه، سكر، جلوكوز، حمض الستريك، التورين (0.4٪)، الكافيين (0.032٪)، وفيتامينات متنوعة. إنتاج شركة Eko-vit Sp.z o.o. بالنيابة عن First Class Beverages of Sweden. " 
                    } 
                    </p>

                   </div>
                   <div>
                    <h2 className=  {Number(localStorage.getItem("myValue")) === 0 ? "text-white text-center lg:text-left mb-3" : "text-white text-center lg:text-right mb-3" }> 
                    {Number(localStorage.getItem("myValue")) === 0 ?
                    "White Tiger Classic" : " وايت تايجر موهيتو ليمون نعناع " } 
                    </h2>

                    <p className={Number(localStorage.getItem("myValue")) === 0 ? "text-white text-center lg:text-left" : "text-white text-center lg:text-right" } 
                    style={{marginBottom: "50px", color: "#989898"}}> 
                    {Number(localStorage.getItem("myValue")) === 0 ? 
                    "is a non-alcoholic, carbonated energy drink with elevated caffeine (32mg/100ml) and taurine. Ingredients include water, sugar, glucose, citric acid, taurine (0.4%), caffeine (0.032%), and various vitamins. Produced for First Class Beverages of Sweden by Eko-vit Sp.z o.o." 
                    : 
                    " مشروب طاقة غير كحولي، معبأ بالغاز، للكبار يحتوي على الكافيين (32 ملغ/100 مل) والتورين. المكونات تشمل مياه غازية، سكر، حمض الستريك، نعناع، وفيتامينات B. " 
                    } 
                    </p>

                   </div>
                   <div>
                    <h2 className=  {Number(localStorage.getItem("myValue")) === 0 ? "text-white text-center lg:text-left mb-3" : "text-white text-center lg:text-right mb-3" }> 
                    {Number(localStorage.getItem("myValue")) === 0 ?
                    "White Tiger Marshmallow" : " وايت تايجر موهيتو ليمون نعناع " } 
                    </h2>

                    <p className={Number(localStorage.getItem("myValue")) === 0 ? "text-white text-center lg:text-left" : "text-white text-center lg:text-right" } 
                    style={{marginBottom: "50px", color: "#989898"}}> 
                    {Number(localStorage.getItem("myValue")) === 0 ? 
                    "is a non-alcoholic, carbonated energy drink with elevated caffeine (32mg/100ml) and taurine. Ingredients include water, sugar, glucose, citric acid, taurine (0.4%), caffeine (0.032%), and various vitamins. Produced exclusively for First Class Beverages of Sweden by Eko-vit Sp.z o.o." 
                    : 
                    " مشروب طاقة غير كحولي، معبأ بالغاز، مع كمية مرتفعة من الكافيين (32 ملغ/100 مل) والتورين. المكونات تشمل مياه، سكر، جلوكوز، حمض الستريك، التورين (0.4٪)، الكافيين (0.032٪)، وفيتامينات متنوعة. إنتاج حصري لشركة Eko-vit Sp.z o.o. بالنيابة عن First Class Beverages of Sweden. " 
                    } 
                    </p>

                   </div>
                   <div>
                    <h2 className=  {Number(localStorage.getItem("myValue")) === 0 ? "text-white text-center lg:text-left mb-3" : "text-white text-center lg:text-right mb-3" }> 
                    {Number(localStorage.getItem("myValue")) === 0 ?
                    "White Tiger Pink Cherry Mix" : " وايت تايجر موهيتو ليمون نعناع " } 
                    </h2>

                    <p className={Number(localStorage.getItem("myValue")) === 0 ? "text-white text-center lg:text-left" : "text-white text-center lg:text-right" } 
                    style={{marginBottom: "50px", color: "#989898"}}> 
                    {Number(localStorage.getItem("myValue")) === 0 ? 
                    "is a non-alcoholic, carbonated energy drink for adults with caffeine (32mg/100ml) and taurine. Ingredients include carbonated water, sugar, citric acid, Tutti Frutti and Cranberry flavors, and B vitamins. Produced with pasteurization for a refreshing experience." 
                    : 
                    "مشروب طاقة غير كحولي، معبأ بالغاز، للكبار يحتوي على الكافيين (32 ملغ/100 مل) والتورين. المكونات تشمل مياه غازية، سكر، حمض الستريك، نكهات توتي فروتي وتوت الكرز، وفيتامينات B. إنتاج مع عملية التعقيم لتجربة منعشة." 
                    } 
                    </p>

                   </div>
                </div>

                <div className={Number(localStorage.getItem("myValue")) === 0 ? "flex justify-end" : "flex justify-start"} >
                    <img style={{width: "500px", height: "720px"}} src={productsMainImage} />
                </div>

                </div>

            </section>
           
        </div>
    )
}
