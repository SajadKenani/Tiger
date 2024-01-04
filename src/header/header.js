import "./header.css";

import { useState } from "react";
import { useRef } from "react";

import mainHeaderImage from "../images/main-header.webp"
import menuImage from "../images/menu.webp"

export const Header = () => {


    const [activatedmenu, useactivatedmenu] = useState(false);

    const [setfading, usesetfading] = useState(true);

    const barRef = useRef();
    const shadowRef = useRef();


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

    return (
        <div>
            <section className=" hidden lg:flex justify-center p-10 bg-black " >

                <div className="flex justify-between gap-14">

                <p className="text-white mt-4 nav-text"> {Number(localStorage.getItem("myValue")) === 0 ? "Home" : "الرئيسية" } </p>
                <p className="text-white mt-4 nav-text"> {Number(localStorage.getItem("myValue")) === 0 ? "OurStory" : "قصتنا" } </p>
                <p className="text-white mt-4 nav-text"> {Number(localStorage.getItem("myValue")) === 0 ? "Products" : "منتجاتنا" } </p>


                <div className="flex justify-center">
                <img className="w-44 -mt-6 absolute" src={mainHeaderImage} />
                <div className={setfading ? "relative fadingLight -mt-6 fadingAnimation" : "relative fadingLight -mt-6 appearenceAnimation"} ></div>
                 </div>

                <p className="text-white mt-4 nav-text"> {Number(localStorage.getItem("myValue")) === 0 ? "White Tiger" : "النمر الابيض" } </p>
                <p className="text-white mt-4 nav-text"> {Number(localStorage.getItem("myValue")) === 0 ? "Gallery" : "المحتويات" } </p>
                <p className="text-white mt-4 nav-text"> {Number(localStorage.getItem("myValue")) === 0 ? "Contact Us" : "تواصل معنا" } </p>

                </div>

            </section>
            

            <section className="flex  lg:hidden justify-between p-10 bg-black">
                

          <img className="w-14 h-14 mt-3 ml-0 -m-6 relative" style={{zIndex: "63654"}} onClick={() => activateMenu()} src={menuImage} />

          {activatedmenu && 
          <div style={{zIndex: "243432"}}>
            <div className="fixed bg-white side-bar bar pt-10 p-6 "  ref={barRef} style={{height: "100%", left: "0", top: "0", zIndex: "321"}}>
              <h1 className="text-end text-2xl"> Main Menu </h1>

              <div className="grid pt-4">
                <a className="text-end pt-3"> Home </a>
                <a className="text-end pt-3"> Products </a>
                <a className="text-end pt-3"> White Tiger </a>
                <a className="text-end pt-3"> Gallery </a>
                <a className="text-end pt-3"> Contact us </a>

                <a className="text-end pt-6" onClick={() => leaveBar()} > Back </a>
              </div>

            </div>
           
          </div>
        }
          <div className="flex justify-center">
          <img className="w-44 -mt-6 absolute" src={mainHeaderImage} />
          <div className={setfading ? "relative fadingLight -mt-6 fadingAnimation" : "relative fadingLight -mt-6 appearenceAnimation"} ></div>
          </div>

      




            
  

            </section>
        </div>
    )
}
