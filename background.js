// background.js (updated)
// Initialize ruleset on extension startup
chrome.runtime.onStartup.addListener(() => {
    enableBlockingRuleset();
});

let authenticatedTabs = new Set();

function enableBlockingRuleset() {
    chrome.declarativeNetRequest.updateEnabledRulesets({
        enableRulesetIds: ["ruleset_1"],
        disableRulesetIds: []
    });
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "authenticate") {
        if (request.password === "password@2025") {
            authenticatedTabs.add(request.tabId);
            
            // Disable blocking for this session
            chrome.declarativeNetRequest.updateEnabledRulesets({
                disableRulesetIds: ["ruleset_1"],
                enableRulesetIds: []
            });
            
            // Set timeout to re-enable blocking after 1 minute of inactivity
            setTimeout(() => {
                if (authenticatedTabs.has(request.tabId)) {
                    authenticatedTabs.delete(request.tabId);
                    if (authenticatedTabs.size === 0) {
                        enableBlockingRuleset();
                    }
                }
            }, 60000); // 60 seconds
            
            sendResponse({ success: true });
            return true; // Keep message channel open
        } else {
            sendResponse({ success: false });
        }
    }
});

// Re-enable blocking when tab closes
chrome.tabs.onRemoved.addListener((tabId) => {
    if (authenticatedTabs.has(tabId)) {
        authenticatedTabs.delete(tabId);
        if (authenticatedTabs.size === 0) {
            enableBlockingRuleset();
        }
    }
});