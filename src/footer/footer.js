import "./footer.css";
import footerImage from "../images/footerImage.png"

import youtubeIcon from "../images/youtubeIcon.png"
import instagramIcon from "../images/instagramIcon.png"
import facebookIcon from "../images/facebookIcon.png"

export const Footer = () => {

    return (
        <div className="bg-black">

            <div style={{height: "fit-content", paddingBottom: '100px',}} className="bg-black grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-10">
                <div className={Number(localStorage.getItem("myValue")) === 0 ? " order-0" : " order-3"}>
                    <div className={Number(localStorage.getItem("myValue")) === 0 ? "flex justify-start" : "flex justify-end" }>
                    <img className="w-40 mt-28" src={footerImage} />
                    </div>
                    <p className={Number(localStorage.getItem("myValue")) === 0 ? "text-white lg:mr-4 mt-4 footerPara text-sm" : "text-white lg:mr-4 mt-4 footerParaArabic text-sm" } style={{fontStyle: "italic"}}>
                    {Number(localStorage.getItem("myValue")) === 0 ? 
                    " At First Class by the innovative development of the energy drink brand, White Tiger®. With a commitment to excellence, we embarked on a journey to create a high-quality product that stands out as a superior alternative in the competitive energy drink market" 
                    :
                    " نحن في First Class Beverages of Sweden نقدم مشروب الطاقة White Tiger® بتطوير مبتكر. نحن ملتزمون بتقديم منتج عالي الجودة يتميز كبديل ممتاز في سوق مشروبات الطاقة المنافسة."}
                       
                    
                    </p>

                </div>

                <div className={Number(localStorage.getItem("myValue")) === 0 ? "mt-40 lg:ml-44 order-1" : "mt-40 lg:mr-44 order-2"}>
                    <p className={Number(localStorage.getItem("myValue")) === 0 ? "text-white p-2 text-lg englishtext" : "text-white p-2 text-lg arabictext" }>{Number(localStorage.getItem("myValue")) === 0 ? " Home " : "الرئيسية"} </p>
                    <p className={Number(localStorage.getItem("myValue")) === 0 ? "text-white p-2 text-lg englishtext" : "text-white p-2 text-lg arabictext" }>{Number(localStorage.getItem("myValue")) === 0 ? " Gallery  " : "معرض الصور"} </p>
                    <p className={Number(localStorage.getItem("myValue")) === 0 ? "text-white p-2 text-lg englishtext" : "text-white p-2 text-lg arabictext" }>{Number(localStorage.getItem("myValue")) === 0 ? " About Us " : "من نحن"} </p>
                    <p className={Number(localStorage.getItem("myValue")) === 0 ? "text-white p-2 text-lg englishtext" : "text-white p-2 text-lg arabictext" }>{Number(localStorage.getItem("myValue")) === 0 ? " Contact Us " : "الاتصال بنا"} </p>

                </div>

                <div className={Number(localStorage.getItem("myValue")) === 0 ? "mt-40 lg:ml-10 order-2" : "mt-40 lg:mr-10 order-1" }>
                    <p className={Number(localStorage.getItem("myValue")) === 0 ? "text-white p-2 pb-0 -mb-2 text-lg englishtext" : "text-white p-2 pb-0 -mb-2 text-lg arabictext"}> +9647844000698 </p>
                    <p className={Number(localStorage.getItem("myValue")) === 0 ? "text-white p-2 pb-1 text-lg englishtext" : "text-white p-2 pb-1 text-lg arabictext"}> +9647744000698 </p>
                    <p className={Number(localStorage.getItem("myValue")) === 0 ? "text-white p-2 pb-0 -mb-2 text-lg englishtext" : "text-white p-2 pb-0 -mb-2 text-lg arabictext"  }>  
                    {Number(localStorage.getItem("myValue")) === 0 ? "Mon-Fri" : "الاثنين-الجمعة" }
                    </p>
                    <p className={Number(localStorage.getItem("myValue")) === 0 ?"text-white p-2 text-lg englishtext" : "text-white p-2 text-lg arabictext"}>
                        {Number(localStorage.getItem("myValue")) === 0 ? "10:00 - 20:00 " : "20:00 - 10:00" }
                    </p>

                    <div className={Number(localStorage.getItem("myValue")) === 0 ? "flex ml-2 mt-2 justify-start" : "flex ml-2 mt-2 justify-end"}>
                    <img className="w-2 h-4 m-1" src={facebookIcon} />
                    <img className="w-4 h-4 m-1" src={instagramIcon} />
                    <img className="w-5 h-4 m-1" src={youtubeIcon}/>
                    </div>

                </div>

                <div className={Number(localStorage.getItem("myValue")) === 0 ? "mt-40 order-3" : "mt-40  order-0" }>
                    <p className={Number(localStorage.getItem("myValue")) === 0 ? "text-white p-2 text-2xl englishtext" : "text-white p-2 text-2xl arabictext"}> 
                    {Number(localStorage.getItem("myValue")) === 0 ? "Address" :" العنوان" }
                    </p>

                    <p className={Number(localStorage.getItem("myValue")) === 0 ? "text-white p-2 w-60 text-sm englishtext" : "text-white p-2 text-sm arabictext"}
                    style={{color: "#989898"}}>{Number(localStorage.getItem("myValue")) === 0 ? 
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor "
                    :
                    <>
                    <p>العراق- بغداد </p>
                    <p>العراق- دهوك </p>
                     </> } </p>


                    <p className={Number(localStorage.getItem("myValue")) === 0 ? "text-white p-2 text-sm englishtext" : "text-white p-2 text-sm arabictext" } 
                    style={{color: "#989898"}}>  {Number(localStorage.getItem("myValue")) === 0 ? "TEL: 009647844000698" :" هاتف : 009647844000698 " }  </p>

                    <p className={Number(localStorage.getItem("myValue")) === 0 ? "text-white p-2 text-sm englishtext" : "text-white p-2 text-sm arabictext" } 
                    style={{color: "#989898"}}>  {Number(localStorage.getItem("myValue")) === 0 ? "E-mail: info@whitetigerdrink.com " :                    <>
                    <p>:البريد الالكتروني</p>
                    <p>info@whitetigerdrink.com</p>
                     </>}  </p>

                    
 
               

                </div>

            </div>
            <div className="flex justify-center pb-10">
            <p className="text-sm" style={{color: "#8D8D8D"}}>{Number(localStorage.getItem("myValue")) === 0 ? " White Tiger Drink ® All rights reserved 2024 " :" جميع الحقوق محفوظة ® وايت تايجر 2024 " }  </p>
            </div>
           
        </div>
    )
} 