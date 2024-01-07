import "./content.css"
import Slider from 'react-slider';
import { Children, useState } from "react";

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import { createContext, useContext } from 'react';

import leftArrow from "../images/leftArrow.png";
import rightArrow from "../images/rightArrow.png";

import React from 'react';
import MySlider from 'react-slick';

import { useRef } from "react";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import background2 from "../images/backGround2.webp";
import background1 from "../images/backGround0.webp";
import background0 from "../images/backGround1.webp";

import ourStoryImage from "../images/ourStoryMainImage.png";

import productsMainImage from "../images/productsMainImage.png"

import { useInView } from 'react-intersection-observer';


import WhiteTigerClassic from "../images/WhiteTigerClassic.png"
import WhiteTigerMarshmallow from "../images/WhiteTigerMarshmallow.png"
import WhiteTigerMojitoLemonmint from "../images/WhiteTigerMojitoLemonmint.png"
import WhiteTigerPinkCherryMix from "../images/WhiteTigerPinkCherryMix.png"

import galleryImage1 from "../images/galleryImage1.png"
import galleryImage2 from "../images/galleryImage2.png"
import galleryImage3 from "../images/galleryImage3.png"
import galleryImage4 from "../images/galleryImage4.png"
import galleryImage5 from "../images/galleryImage5.png"

import reginstrationImage from "../images/reginstrationImage.png"

import myArrow from "../images/Arrow 2.png"


import circle from "../images/unCoCircle.png"
import { ScrollProvider, useScrollContext } from '../ScrollContext';
import { animateScroll } from 'react-scroll';



const sliderData =    
 {

  "workPic0" : background0,

  "workPic1": background1,

  "workPic2": background2,

  


}




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
 


    const settings = {
        infinite: true,
        speed: 200,
        slidesToShow: 4,

        arrows: false,

        responsive: [

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



      const imageRef = useRef();

      const [counter, usecounter] = useState({name: 1})

      const [isButtonClickable, setIsButtonClickable] = useState(true);

      const LeftArrowHandleClick = async () => {
        try {
          setIsButtonClickable(false);
          // Change image and counter after 400ms
          await new Promise(resolve => setTimeout(resolve, 400));
          if(sliderData){
          if (0 < Number(counter.name)) {
            usecounter({ name: Number(counter.name) - 1 });
          } else if (Object.keys(sliderData).length - 1 > Number(counter.name)) {
            usecounter({ name: Object.keys(sliderData).length - 1 });
          }
        }
      
          // Replace image class after 10ms
          await new Promise(resolve => setTimeout(resolve, 10));
      
          if (imageRef.current.classList.contains("myMainImage-img0")) {
            imageRef.current.classList.replace("myMainImage-img0", "myMainImage-img1");
          } else {
            imageRef.current.classList.replace("myMainImage-img1", "myMainImage-img0");
          }
      
          // Wait for the animation to complete (adjust the time if needed)
          await new Promise(resolve => setTimeout(resolve, 2000));
      
          setIsButtonClickable(true);
        } catch (error) {
          console.error(error);
        }
      };

      
      const RightArrowHandleClick = async () => {
       

    
        try {
          setIsButtonClickable(false);
          // Change image and counter after 400ms
          await new Promise(resolve => setTimeout(resolve, 400));
      if(sliderData){
            if(Object.keys(sliderData).length - 2  < Number(counter.name)){
              usecounter({name: 0})    
          }else{
              usecounter({name: Number(counter.name) + 1})   
          }
        }

          // Replace image class after 10ms
          await new Promise(resolve => setTimeout(resolve, 10));
      
          if (imageRef.current.classList.contains("myMainImage-img0")) {
            imageRef.current.classList.replace("myMainImage-img0", "myMainImage-img1");
          } else {
            imageRef.current.classList.replace("myMainImage-img1", "myMainImage-img0");
          }
      
          // Wait for the animation to complete (adjust the time if needed)
          await new Promise(resolve => setTimeout(resolve, 2000));
      
          setIsButtonClickable(true);
        } catch (error) {
          console.error(error);
        }
      };



    const handleMiniBallClick = (id) =>{

      setTimeout(() => {
        
      usecounter({name: Number(id)})

      if (imageRef.current.classList.contains("myMainImage-img0")){
        setTimeout(() => {
          imageRef.current.classList.replace("myMainImage-img0", "myMainImage-img1");
      }, 10);
      }else {
        setTimeout(() => {
          imageRef.current.classList.replace("myMainImage-img1", "myMainImage-img0");
      }, 10);
      }
      

      }, 100)
  }

    const maxIndex = Object.keys(sliderData).length ;
    const myArr = [];
    
    for (let i = 0; i < maxIndex; i++) {
      const key = `workPic${i}`;
    
      if (sliderData[key] === sliderData[`workPic${counter.name}`]) {
        myArr.push(i);
        break; 
      }
    }

    const theArr = []
    for (let i = 0; i < Object.keys(sliderData).length; i++){
      if(sliderData[`workPic${i}`] === sliderData[`workPic${counter.name}`]){
        theArr.push(1)
      }else{
        theArr.push(0)
      } 
  }

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

      const [refFour, inViewFour] = useInView({
        triggerOnce: true,
        threshold: 0.2, 
      });
      const { scrollToSection } = useScrollContext();
      scrollToSection('sectionId');


      

    return (
      <ScrollProvider>
    
        <div className="bg-black " style={{zIndex: "132"}}>

            {/* Main Section */}

            <div className="flex justify-between " id="mainSection" style={{height: "1000px", marginTop: "-220px"}}>

  
            <button onClick={() => LeftArrowHandleClick()} disabled={!isButtonClickable} className="prev-circleArrowTwo bg-white" style={{marginRight: "-100px", marginLeft: "0px", marginTop: "500px", zIndex: "432432"}}>
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

              {myArr.map((a) =><img ref={imageRef} src={sliderData[`workPic${a}`]} style={{width: "100%", marginTop: "140px"}} className={`myMainImage-img0`}/> )} 
           

             <button onClick={() => RightArrowHandleClick()} disabled={!isButtonClickable} className="next-circleArrowTwo bg-white" style={{marginLeft: "-170px", marginRight: "70px", marginTop: "500px", zIndex: "432432"}}>
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

            <div className="mainMiniDiv-div "  style={{marginTop: "-150px"}}>{theArr.map((a, b) => <div className={`miniOption${a}-div`} onClick={() => handleMiniBallClick(b)}></div>)}</div>
            {/* Our Story Section */}

            <section className=" p-10 lg:p-32" id="ourStorySection">
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

            <section id="productSection"> 

            <h1 className="text-white pb-14"> {Number(localStorage.getItem("myValue")) === 0 ? "TRENDING PRODUCTS" : " منتجات وايت تايجر " } </h1>

            <div  ref={refThree} className={` fade-up ${inViewThree ? 'visible' : ''}`}>
            <MySlider ref={sliderRef} {...settings} className="">

            <div className="flex justify-center p-5">
            <div className="p-10 text-white flex justify-center" style={{width: "300px", height: "500px", backgroundColor: "#131111", marginTop:"20px", borderTopRightRadius: "90px"}}>
                <img src={WhiteTigerClassic} className="absolute" style={{width: "170px", marginTop: "-80px"}}/>

                <h2 style={{marginTop: "350px"}}className= "text-white text-center text-2xl mb-3">  White Tiger Mojito </h2>
            </div>
            </div> 

            <div className="flex justify-center p-5">
            <div className="p-10 text-white flex justify-center" style={{width: "300px", height: "500px", backgroundColor: "#131111", marginTop:"20px", borderTopRightRadius: "90px"}}>
                <img src={WhiteTigerMarshmallow} className="absolute" style={{width: "170px", marginTop: "-80px"}}/>

                <h2 style={{marginTop: "350px"}}className= "text-white text-center text-2xl mb-3"> White Tiger Marshmallow </h2>
            </div>
            </div> 

            <div className="flex justify-center p-5">
            <div className="p-10 text-white flex justify-center" style={{width: "300px", height: "500px", backgroundColor: "#131111", marginTop:"20px", borderTopRightRadius: "90px"}}>
                <img src={WhiteTigerMojitoLemonmint} className="absolute" style={{width: "170px", marginTop: "-80px"}}/>

                <h2 style={{marginTop: "350px"}}className= "text-white text-center text-2xl mb-3"> White Tiger Mojito Lemon mint </h2>
            </div>
            </div> 
            

            <div className="flex justify-center p-5">
            <div className="p-10 text-white flex justify-center" style={{width: "300px", height: "500px", backgroundColor: "#131111", marginTop:"20px", borderTopRightRadius: "90px"}}>
                <img src={WhiteTigerPinkCherryMix} className="absolute" style={{width: "170px", marginTop: "-80px"}}/>

                <h2 style={{marginTop: "350px"}}className= "text-white text-center text-2xl mb-3"> White Tiger Pink Cherry Mix </h2>
            </div>
            </div> 

            <div className="flex justify-center p-5">
            <div className="p-10 text-white flex justify-center" style={{width: "300px", height: "500px", backgroundColor: "#131111", marginTop:"20px", borderTopRightRadius: "90px"}}>
                <img src={WhiteTigerClassic} className="absolute" style={{width: "170px", marginTop: "-80px"}}/>

                <h2 style={{marginTop: "350px"}}className= "text-white text-center text-2xl mb-3">  White Tiger Mojito </h2>
            </div>
            </div> 

            <div className="flex justify-center p-5">
            <div className="p-10 text-white flex justify-center" style={{width: "300px", height: "500px", backgroundColor: "#131111", marginTop:"20px", borderTopRightRadius: "90px"}}>
                <img src={WhiteTigerMarshmallow} className="absolute" style={{width: "170px", marginTop: "-80px"}}/>

                <h2 style={{marginTop: "350px"}}className= "text-white text-center text-2xl mb-3"> White Tiger Marshmallow </h2>
            </div>
            </div> 

            <div className="flex justify-center p-5">
            <div className="p-10 text-white flex justify-center" style={{width: "300px", height: "500px", backgroundColor: "#131111", marginTop:"20px", borderTopRightRadius: "90px"}}>
                <img src={WhiteTigerMojitoLemonmint} className="absolute" style={{width: "170px", marginTop: "-80px"}}/>

                <h2 style={{marginTop: "350px"}}className= "text-white text-center text-2xl mb-3"> White Tiger Mojito Lemon mint </h2>
            </div>
            </div> 
            

            <div className="flex justify-center p-5">
            <div className="p-10 text-white flex justify-center" style={{width: "300px", height: "500px", backgroundColor: "#131111", marginTop:"20px", borderTopRightRadius: "90px"}}>
                <img src={WhiteTigerPinkCherryMix} className="absolute" style={{width: "170px", marginTop: "-80px"}}/>

                <h2 style={{marginTop: "350px"}}className= "text-white text-center text-2xl mb-3"> White Tiger Pink Cherry Mix </h2>
            </div>
            </div> 



            </MySlider>
            </div>

            <div style={{ textAlign: 'center', marginTop: '20px' }} id="whiteTigerSection">
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
                    "White Tiger Classic" : " وايت تايجر كلاسيك " } 
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
                    "White Tiger Marshmallow" : " وايت تايجر مارشميلو " } 
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
                    "White Tiger Pink Cherry Mix" : " وايت تايجر مكس الكرز الوردي " } 
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

                <div className={Number(localStorage.getItem("myValue")) === 0 ? "flex justify-center lg:justify-end" : "flex justify-center lg:justify-start"} >
                    <img style={{width: "500px", height: "720px", objectFit: "cover"}} src={productsMainImage} />
                </div>

                </div>

            </section>

            {/* Gallery Section */}

            <section id="gallerySection">
            <h1 className="text-white -mb-10"> {Number(localStorage.getItem("myValue")) === 0 ? "GALLERY" : " معرض الصور " } </h1>

            <div ref={refFour} className={`grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 p-20 gap-5 fade-up ${inViewFour ? 'visible' : ''}`}>

              <div>
              <img className="mb-5" style={{width: "100%", height: "200px", objectFit: "cover", borderRadius: "20px"}} src={productsMainImage} />
              <img className="mb-5" style={{width: "100%", height: "385px", objectFit: "cover", borderRadius: "20px"}} src={galleryImage3} />
              </div>

              <div>
              <img className="mb-5" style={{width: "100%", height: "350px", objectFit: "cover", borderRadius: "20px"}} src={galleryImage1} />
              <img className="mb-5" style={{width: "100%", height: "235px", objectFit: "cover", borderRadius: "20px"}} src={galleryImage4} />
              </div>

              <div className=" justify-between md:flex lg:grid">
              <img className="mb-5" style={{width: "100%", height: "200px", objectFit: "cover", borderRadius: "20px"}} src={galleryImage2} />
              <img className="mb-5 sm:ml-0 md:ml-5 lg:ml-0" style={{width: "100%", height: "385px", objectFit: "cover", borderRadius: "20px"}} src={galleryImage5} />
              </div>

            </div>

            </section>

            {/* Registration Section */}

            <section id="contactUsSection">

              <img src={reginstrationImage} style= {Number(localStorage.getItem("myValue")) === 0 ? {width: "100%", height: "600px", position: "absolute", objectFit: "cover"} : {objectFit: "cover", width: "100%", height: "600px", position: "absolute", transform: "scaleX(-1)"} }  />

              <div className={Number(localStorage.getItem("myValue")) === 0 ? " flex justify-start p-5 md:p-20 pt-10" : "flex justify-end p-5 md:p-20 pt-10" }>

              <div className="brownSquare">

                <div className={Number(localStorage.getItem("myValue")) === 0 ? " flex justify-start mt-16 ml-14 text-white" : "flex justify-end mt-16 mr-14 text-white" }>
                <p className={Number(localStorage.getItem("myValue")) === 0 ? " englishWhiteTiger " : " arabichWhiteTiger " }> White Tiger </p>
                </div>

                
                <div className={Number(localStorage.getItem("myValue")) === 0 ? " flex justify-start mt-2 ml-14 text-white" : "flex justify-end mt-2 mr-14 text-white" }>
                <p className={Number(localStorage.getItem("myValue")) === 0 ? " englishRegistration " : "arabicRegistration" }>{Number(localStorage.getItem("myValue")) === 0 ? " Agents Registration Section " : " قسم تسجيل الوكلاء  " } </p>
                </div>   

                <div 
                style={{width: ""}}
                className={Number(localStorage.getItem("myValue")) === 0 ? " flex justify-start mt-2 ml-14 text-white" : "flex justify-end mt-2 mr-14 text-white" }>
                <p className={Number(localStorage.getItem("myValue")) === 0 ? " englishParagraph" : "arabicParagraph" }>{Number(localStorage.getItem("myValue")) === 0 ? 
                " You can now become one of the agents for White Tiger® energy drinks in Iraq. All you need to do is provide your information here, and one of the specialized teams at Masakin Al-Balad Company will get in touch with you. " : 
                " يمكنك الآن ان تصبح أحد وكلاء مشروبات الطاقة White Tiger® في العراق، كل ما عليك هو وضع معلوماتك هنا وسيتواصل معك أحد الفرق المختصة في شركة مساكن البلاد. " } </p>
                </div>  

                <div  className={Number(localStorage.getItem("myValue")) === 0 ? " flex justify-start" : "flex justify-end " }>   
                <button className={Number(localStorage.getItem("myValue")) === 0 ? " flex justify-start mt-10 ml-14 text-white" : "flex justify-end mt-10 mr-20 text-white" }>
                <p className={Number(localStorage.getItem("myValue")) === 0 ? " englishButton " : "arabicButton" }>{Number(localStorage.getItem("myValue")) === 0 ? " Registration " : " تسجيل كـ وكيل " } </p>



                <div class="circle-container">
                  
                <img  src={circle} style={{width: "50px", position: "absolute"}} />  
               
                <img  style={{zIndex: "42323", marginTop: "22px", marginLeft: "14px"}} src={myArrow} />
                
              
            
                
              </div>
                  
                </button> 
                </div>

              </div>

              </div>


            </section>
           
        </div>
        </ScrollProvider>
    )
}
