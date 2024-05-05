console.log("is this loading???");

let socksProxySettings = {
    proxyType: "manual",
    socks: "http://localhost:8080",
    socksVersion: 5,
    proxyDNS: true,
  };

  let noProxySettings = {
    proxyType: "none"
  }
  

document.addEventListener("click", (e) => {

    console.log(e.target.id);
    console.log(e.target);
    console.log(e);

    if (e.target.tagName !== "BUTTON" || !e.target.closest("#popup-content")) {
        // Ignore when click is not on a button within <div id="popup-content">.
        return;
    }
    if (e.target.id === "on") {
        browser.proxy.settings.set({ value: socksProxySettings });
    }
    else if (e.target.id === "off") {
        browser.proxy.settings.set({ value: noProxySettings });
        
    }
    else {
        console.log("NOTHING IS HAPPENING");
        console.log(e.target.id);
        console.log(e.target);
    }
});