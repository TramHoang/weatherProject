window.addEventListener("load",()) => {
    
}            
//set icon
                setIcons(icon, document.querySelector(".icon"));

function setIcons(icon, iconID){
                var skycons = new Skycons();
                const currentIcon = icon.replace(/-/g, "_").toUpperCase();
                skycons.play();
                return skycons.set(iconID, Skycons[currentIcon]);
                
            }