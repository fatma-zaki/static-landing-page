
 
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
 
         if (data.trim() !== "") {
             document.querySelector(selector).innerHTML = data;
         } else {
             console.warn("The file seems empty or not loaded properly:", file);
         }
     } catch (error) {
         console.error("Error:", error);
     }
 }
 
 
 loadHTML("#navbar", "navbar.html");
 loadHTML("#footer", "footer.html");
 

