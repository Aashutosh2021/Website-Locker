# Website-Locker

🚀 Built My Own Chrome Extension to Lock Particular Websites! 🔥
I recently developed a Chrome extension that allows access to Particular Website through a password-protected system! This was a fun project where I explored Manifest V3, Content Security Policies (CSP), and Chrome Declarative Net Requests.

The extension blocks Particular Websites by default and only unlocks it when the correct password is entered. I faced challenges with CSP errors and inline script restrictions, but after debugging and optimizing the code, everything works smoothly!

This project helped me deepen my understanding of Chrome extensions and web security. Excited for more projects ahead! 🚀💡

#How To Setup

This extension blocks a website (e.g., Instagram) and allows access only after entering the correct password.

🛠️ Setup Instructions (Step-by-Step)
1. Clone or Download the Repository 
  git clone https://github.com/Aashutosh2021/Website-Locker.git
  cd your-extension-name

2. Set Your Desired Website URL
  Update the domain you want to block in the matching condition:
  Open the file:
  📄 password.js
  if (details.url.includes("instagram.com"))  // Change this to your target site
  
  📄 manifest.js
  "host_permissions": ["https://www.instagram.com/"]
  
  📄 ruleset.js
  "urlFilter": "*://*.instagram.com/*"

3. Set Your Password
  Open the file:
  📄 background.js
  Find this line and set your custom password:
  if (request.password === "yourPassword")  // Set your own secure password

4. Load the Extension in Chrome
  Open chrome://extensions/ in your Chrome browser.
  Enable Developer mode (top-right).
  Click Load unpacked.
  Select the folder where you cloned the repo.

5. Usage
  When you visit the target website (e.g., https://www.instagram.com), you'll be redirected to a password page.
  Enter the correct password to gain access.

⚠️ Notes
Manifest V3 is used, so ensure you’re not using deprecated APIs like webRequestBlocking.

Make sure to follow Chrome's Content Security Policy (CSP)—avoid inline scripts.

📁 Files Overview
manifest.json – Extension configuration

password.js – Handles URL blocking/unblocking

index.html & background.js – UI and password logic

rules.json – Domain control rules

✅ Example
Blocks: instagram.com
Unlocks on password entry: yourPassword

#ChromeExtension #WebDevelopment #Coding
