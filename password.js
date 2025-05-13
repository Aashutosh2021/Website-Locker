// password.js (updated)
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("submitBtn").addEventListener("click", function() {
        const password = document.getElementById("passwordInput").value;
        
        chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
            const tabId = tabs[0].id;
            
            chrome.runtime.sendMessage({
                action: "authenticate",
                password: password,
                tabId: tabId
            }, (response) => {
                if (response?.success) {
                    document.getElementById("status").innerText = "Access Granted! Redirecting...";
                    chrome.tabs.update(tabId, {url: "https://www.instagram.com/"});
                } else {
                    document.getElementById("status").innerText = "Incorrect password! Try again.";
                }
            });
        });
    });
});