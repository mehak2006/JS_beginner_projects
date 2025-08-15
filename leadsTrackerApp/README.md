# 📌 Leads Tracker PWA

Deployed Site: https://leadtrackerpwawebapp.netlify.app/

A **Progressive Web App** that lets you save and track website leads (URLs) for quick access — accessible across devices with real-time cloud sync.  
Built with **HTML, CSS, JavaScript, and Firebase Realtime Database**, inspired by the [Scrimba JavaScript course](https://scrimba.com).

-Right now, this works for single user only
---

## 🚀 Features

- **Manually input and save** a URL.
- **Cloud sync** using Firebase Realtime Database — access your leads anywhere.
- **Installable** on desktop or mobile devices via site manifest.
- **Delete all leads** with a double-click (for quick cleanup).
- **Clickable links** that open in a new tab.
- Minimal, responsive design.
- **Single-user data** — in the current version, multiple people would share the same database path, so the app is intended for use by a single user or trusted group.

---
## ⚠️ Limitations

- **Single-user only in current version**  
  The app uses one shared database path for all users. If multiple people use the app, everyone will see and modify the same list of leads.  
  This makes it suitable for:
  - Personal use  
  - A small trusted group who intentionally share leads  
  To enable **private lists per user**, Firebase Authentication and user-specific database paths would need to be implemented.

---

## 🛠️ Tech Stack

- **HTML**
- **CSS**
- **JavaScript**
- **Firebase Realtime Database**
- **PWA (Site Manifest + Service Worker)**

---

## 💡 Usage

1. **Open the app** in your browser (installable as a PWA for mobile/desktop use).
2. **Enter a URL** in the input field and click `SAVE INPUT`.
3. All saved links will appear in the list below.
4. **Click a link** to open it in a new tab.
5. **Double-click the delete button** to remove all leads from your list.

---

## 📲 Progressive Web App Installation

- **On Mobile**: Open the app(deployed site) → Click “Add to Home Screen” from the browser menu.
- **On Desktop (Chrome/Edge)**: Open the deployed site


---

## 🙏 Acknowledgements

- This project was developed following the **Scrimba JavaScript Course** — huge thanks to the Scrimba team for their fantastic interactive learning platform!
- Firebase integration, PWA support, and cloud sync were added 

---
