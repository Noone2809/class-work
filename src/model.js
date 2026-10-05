import home from "../pages/home.js"
import about from "../pages/about.js"

export function loadPages(pageID){
    let pageContent = "";

    if(pageID === "home") {
        pageContent = home;
    } else if(pageID === "about") {
        pageContent = about;
    } else {
        pageContent = "Page not found";
    }

    document.getElementById('#app').innerHTML = pageContent;
}