import { createContext, useContext } from 'react';


const ScrollContext = createContext();

export const useScrollContext = () => {
  return useContext(ScrollContext);
};

export const ScrollProvider = ({ children }) => {
  const scrollToSection = (num) => {
  if (num === 0){
    const element = document.getElementById("mainSection");
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }}

   if (num === 1){
        const element = document.getElementById("ourStorySection");
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
    }}

    if (num === 2){
        const element = document.getElementById("productSection");
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
    }}

    if (num === 3){
        const element = document.getElementById("whiteTigerSection");
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }}
    
       if (num === 4){
            const element = document.getElementById("gallerySection");
            if (element) {
              element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
              });
        }}
    
        if (num === 5){
            const element = document.getElementById("contactUsSection");
            if (element) {
              element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
              });
        }}
   
  };

  return (
    <ScrollContext.Provider value={{ scrollToSection }}>
      {children}
    </ScrollContext.Provider>
  );
};