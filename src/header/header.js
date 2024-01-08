import "./header.css";

import { useState } from "react";
import { useRef } from "react";

import { useEffect } from "react";

import { Link, animateScroll as scroll } from 'react-scroll';

import mainHeaderImage from "../images/main-header.webp"
import menuImage from "../images/menu.webp"

import { createContext, useContext } from 'react';

import { useScrollContext } from '../ScrollContext';

import { ScrollProvider } from '../ScrollContext';



export const Header = () => {


  const sectionRef = useRef();
  const { scrollToSection } = useScrollContext();

    const [activatedmenu, useactivatedmenu] = useState(false);

    const [setfading, usesetfading] = useState(true);

    const barRef = useRef();
    const shadowRef = useRef();

    const navMainRef = useRef()
    const navStoryRef = useRef()
    const navProductRef = useRef()
    const navWhiteTigerRef = useRef()
    const navGalleryRef = useRef()
    const navContactUsRef = useRef()



    const  activateMenu = () => {

        if (barRef.current){
          barRef.current.classList.replace("hide-bar", "side-bar");}
   
        if (shadowRef.current){
          shadowRef.current.classList.replace("hide-shadow", "shadow-div");}
          
  
        setTimeout(() => useactivatedmenu(!activatedmenu), 0);


  
      }
  
      const leaveBar = () => {
        if (barRef.current){
          barRef.current.classList.replace("side-bar", "hide-bar");}
   
        if (shadowRef.current){
          shadowRef.current.classList.replace("shadow-div", "hide-shadow");}
  
        setTimeout(() => useactivatedmenu(!activatedmenu), 490);
      }

      setTimeout(() => usesetfading(!setfading), 1500);


    
      const myFunction = () => {
        if(Number(localStorage.getItem("myValue")) === 0){
        localStorage.setItem("myValue", "1")
        
        } else if (Number(localStorage.getItem("myValue")) === 1){
        localStorage.setItem("myValue", "0")
        }
    
    
    
        window.location.reload();
      }



      const handleMain = () => {
        scrollToSection(0);
        leaveBar()
     
      }

      const handleOurStory = () => {
        scrollToSection(1)
        leaveBar()
      }

      const handleProduct = () => {
        scrollToSection(2)
        leaveBar()
      }

      const handleWhiteTiger = () => {
        scrollToSection(3)
        leaveBar()
      }

      const handleGallery = () => {
        scrollToSection(4)
        leaveBar()
      }

      const handleContactUs = () => {
        scrollToSection(5)
        leaveBar()
      }

      const captureMain = () => {if (navMainRef.current){ navMainRef.current.classList.replace("p", "pointerDiv");}}
      const leaveMain = () => {if (navMainRef.current){  navMainRef.current.classList.replace("pointerDiv", "p") }}

      const captureOurStory = () => {if (navStoryRef.current){ navStoryRef.current.classList.replace("p", "pointerDiv");}}
      const leaveOurStory = () => {if (navStoryRef.current){  navStoryRef.current.classList.replace("pointerDiv", "p") }}

      const captureProducts = () => {if (navProductRef.current){ navProductRef.current.classList.replace("p", "pointerDiv");}}
      const leaveProducts = () => {if (navProductRef.current){  navProductRef.current.classList.replace("pointerDiv", "p") }}

      const captureWhiteTiger = () => {if (navWhiteTigerRef.current){ navWhiteTigerRef.current.classList.replace("p", "pointerDiv");}}
      const leaveWhiteTiger = () => {if (navWhiteTigerRef.current){  navWhiteTigerRef.current.classList.replace("pointerDiv", "p") }}

      const captureGallery = () => {if (navGalleryRef.current){ navGalleryRef.current.classList.replace("p", "pointerDiv");}}
      const leaveGallery = () => {if (navGalleryRef.current){  navGalleryRef.current.classList.replace("pointerDiv", "p") }}

      const captureContactUs = () => {if (navContactUsRef.current){ navContactUsRef.current.classList.replace("p", "pointerDiv");}}
      const leaveContactUs = () => {if (navContactUsRef.current){  navContactUsRef.current.classList.replace("pointerDiv", "p") }}

    return (
      <div >
      
          <div className="upperShadow"></div>
            <section className=" hidden lg:flex block justify-center pt-10 pb-10 "   style={{zIndex: "24343213", position: "relative"}}>

            
            <div className={window.scrollY > 0 ? 
            (Number(localStorage.getItem("myValue")) === 0 ?  "flex justify-between gap-14 navBar pl-6" : "flex justify-between gap-14 navBar pr-6")

            : 

            (Number(localStorage.getItem("myValue")) === 0 ?  "flex justify-between gap-14 pr-2 nav" : "flex justify-between gap-14 pr-8 nav")}
            style={ Number(localStorage.getItem("myValue")) === 0 ? {marginLeft: "10px"} :{marginLeft: "0"} } >


                <div className=" p-5 mr-20"  style={{marginLeft: '-220px'}}>
                <button 
                onClick={myFunction}
                style={{ zIndex: "2434343"}}
                className="bg-white p-1 innerButton"> 
                {Number(localStorage.getItem("myValue")) === 0 ? "AR" : "EN" } 
                </button>
                </div>
                {Number(localStorage.getItem("myValue")) === 0 ?
                <>

                <div>
                <p className="pointer text-white mt-2 nav-text"  onClick={handleMain} onMouseEnter={captureMain} onMouseLeave={leaveMain}> Home </p>
                <div ref={navMainRef} className="p"></div>
                </div>


                <div>
                <p className="pointer text-white mt-2 nav-text" onClick={handleOurStory} onMouseEnter={captureOurStory} onMouseLeave={leaveOurStory}> OurStory </p>
                <div ref={navStoryRef} className="p"></div>
                </div>

                <div>
                <p className="pointer text-white mt-2 nav-text" onClick={handleProduct} onMouseEnter={captureProducts} onMouseLeave={leaveProducts}> Products </p>
                <div ref={navProductRef} className="p"></div>
                </div>

                <div className="flex justify-center">
                <img className="w-36 -mt-6 absolute" src={mainHeaderImage} />
                <div className={setfading ? "relative fadingLight -mt-6 fadingAnimation" : "relative fadingLight -mt-6 appearenceAnimation"} ></div>
                 </div>

                <div>
                <p className="pointer text-white mt-2 nav-text" onClick={handleWhiteTiger} onMouseEnter={captureWhiteTiger} onMouseLeave={leaveWhiteTiger}> White Tiger</p>
                <div ref={navWhiteTigerRef} className="p"></div>
                </div>

                <div>
                <p className="pointer text-white mt-2 nav-text" onClick={handleGallery} onMouseEnter={captureGallery} onMouseLeave={leaveGallery}> Gallery </p>
                <div ref={navGalleryRef} className="p"></div>
                </div>

                <div>
                <p className="pointer text-white mt-2 nav-text" onClick={handleContactUs} onMouseEnter={captureContactUs} onMouseLeave={leaveContactUs}> Contact Us </p>
                <div ref={navContactUsRef} className="p"></div>
                </div>

                </>
                :
                <>
                <div>
                <p className="pointer text-white mt-2 nav-text" onClick={handleContactUs} onMouseEnter={captureContactUs} onMouseLeave={leaveContactUs}> الاتصال بنا </p>
                <div ref={navContactUsRef} className="p"></div>
                </div>

                <div>
                <p className="pointer text-white mt-2 nav-text" onClick={handleOurStory} onMouseEnter={captureOurStory} onMouseLeave={leaveOurStory}> قصتنا </p>
                <div ref={navStoryRef} className="p"></div>
                </div>

                <div>
                <p className="pointer text-white mt-2 nav-text" onClick={handleGallery} onMouseEnter={captureGallery} onMouseLeave={leaveGallery}> معرض الصور </p>
                <div ref={navGalleryRef} className="p"></div>
                </div>

                <div className="flex justify-center">
                <img className="w-36 -mt-6 absolute" src={mainHeaderImage} />
                <div className={setfading ? "relative fadingLight -mt-6 fadingAnimation" : "relative fadingLight -mt-6 appearenceAnimation"} ></div>
                 </div>

                
                 <div>
                <p className="pointer text-white mt-4 nav-text" onClick={handleWhiteTiger} onMouseEnter={captureWhiteTiger} onMouseLeave={leaveWhiteTiger}> وايت تايجر </p>
                <div ref={navWhiteTigerRef} className="p"></div>
                </div>
                
                <div>
                <p className="pointer text-white mt-4 nav-text" onClick={handleProduct} onMouseEnter={captureProducts} onMouseLeave={leaveProducts}> المنتجات </p>
                <div ref={navProductRef} className="p"></div>
                </div>

                <div>
                <p className="pointer text-white mt-4 nav-text"  onClick={handleMain} onMouseEnter={captureMain} onMouseLeave={leaveMain}> الرئيسية </p>
                <div ref={navMainRef} className="p"></div>
                </div>

                </>
                  }


                </div>

            </section>
            

            <section className="flex  lg:hidden justify-between p-10 bg-black">
                

          <img className="w-14 h-14 mt-3 ml-0 -m-6  fixed" style={{zIndex: "63654"}} onClick={() => activateMenu()} src={menuImage} />

          {activatedmenu && 
          <div className="fixed" style={{zIndex: "243432"}}>
            <div className="fixed bg-white side-bar bar pt-10 p-6 "  ref={barRef} style={{height: "100%", left: "0", top: "0", zIndex: "321"}}>
              <h1 className="text-end text-2xl"> {Number(localStorage.getItem("myValue")) === 0 ? "Main Menu" : "القائمة الرئيسية"} </h1>

              <div className="grid pt-4">
              {Number(localStorage.getItem("myValue")) === 0 ?
                <>
                <a className="text-end pt-3" onClick={handleMain}> Home </a>
                <a className="text-end pt-3" onClick={handleOurStory}> Our Story </a>
                <a className="text-end pt-3" onClick={handleProduct}> Products </a>
                <a className="text-end pt-3" onClick={handleWhiteTiger}> White Tiger </a>
                <a className="text-end pt-3" onClick={handleGallery}> Gallery </a>
                <a className="text-end pt-3" onClick={handleContactUs}> Contact us </a>
                </>
                :
                <>
                <a className="text-end pt-3" onClick={handleMain}> الرئيسية </a>
                <a className="text-end pt-3" onClick={handleOurStory}> قصتنا </a>
                <a className="text-end pt-3" onClick={handleProduct}> المنتجات </a>
                <a className="text-end pt-3" onClick={handleWhiteTiger}> وايت تايجر </a>
                <a className="text-end pt-3" onClick={handleGallery}> معرض الصور </a>
                <a className="text-end pt-3" onClick={handleContactUs}> الاتصال بنا </a>
                </>
          }

                <button 
                onClick={myFunction}
                style={{ zIndex: "2434343"}}
                className="pt-3 p-2 "> 
                {Number(localStorage.getItem("myValue")) === 0 ? "AR" : "EN" } 
                </button>
      

                <a className="text-end pt-6" onClick={() => leaveBar()} > Back </a>
              </div>

            </div>
           
          </div>
        }
          <div className="fixed" style={{right: "0", zIndex: "2432432"}}>
          <img className="w-44 -mt-6 " src={mainHeaderImage} />
          <div className={setfading ? "relative fadingLightSmallScreen  fadingAnimation " : "relative fadingLightSmallScreen  appearenceAnimation"} ></div>
          </div>

      
   


            
  

            </section>
          
        </div>

   
    )
}