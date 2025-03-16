
 
// const navbarFile = "navbar.html";
// const footerFile = "footer.html";
// const navbar = document.querySelector("#navbar");
// const footer = document.querySelector("#footer");
// console.log(navbarFile)




async function loadHTML(selector, file) {
     try {
         const response = await fetch(file, { cache: "no-store" });
         console.log("Response Status:", response.status);
 
         if (!response.ok) {
             throw new Error("Failed to load " + file);
         }
 
         const data = await response.text();
         console.log("File Content:", data);  
         document.querySelector(selector).innerHTML = data;
        //  setActiveNav();
     } catch (error) {
         console.error("Error:", error);
     }
 }
 document.addEventListener('DOMContentLoaded', ()=> {
    loadHTML("#body","home.html")
 })
 
 loadHTML("#navbar", "navbar.html");
 loadHTML("#footer", "footer.html");
 

//  function setActiveNav(){
//     const sections = document.querySelectorAll('section');
//     const navLinks = document.querySelectorAll('#navbar a');


//  }
