# Mohsin Razak Academy – Website Project

Navy / dark-blue themed academy landing page with a **private Admin panel**.

## How to open

1. Unzip the folder
2. Open **index.html** in Chrome / any browser → public website
3. Open **admin.html** → private admin dashboard (password protected)

## Admin Access (only for you)

- Go to: `admin.html`
- Default password: **mohsin2026**
- Change it immediately in the Password tab after first login
- Visitors **never** see any Admin link on the public website
- Only people who know the exact URL `admin.html` + password can enter

## What you can control from Admin

| Tab | What you can change |
|-----|---------------------|
| Brand & Hero | Website name, logo letters, hero titles, description, stats, CTA text |
| Courses | Course titles, badges, descriptions, bullet points, **thumbnail image URLs** |
| About & Social | Your name, bio, photo URL, YouTube / Instagram / X / Facebook / Threads links |
| Password | Change the admin password |

No email, phone number or address is required anywhere. Privacy-friendly.

## How content is saved

Everything is stored in your browser’s **localStorage**.  
When you open the same browser later, your changes stay.  
When you upload the site to hosting, each visitor’s browser starts with the default content until you edit from Admin on that same computer (or you can later move to a real backend).

**Tip for production:** After you finalize text and images, you can hard-code the values into the HTML if you want the same content for every visitor.

## Adding your photos

1. Put images inside the `images/` folder
2. In Admin → Courses / About, type the path, e.g.  
   `images/my-photo.jpg`  
   or a full URL `https://...`

## File structure

```
academy-site/
├── index.html          ← public homepage
├── admin.html          ← private admin (password protected)
├── css/styles.css
├── js/
│   ├── content.js      ← defaults + localStorage
│   └── main.js
├── images/             ← put your photos & logo here
└── README.md
```

## Next steps when you go live

1. Buy a domain
2. Upload the whole folder to hosting (Netlify, Vercel, Hostinger, etc.)
3. Only you bookmark `yoursite.com/admin.html`
4. Later you can add real payments, login, course videos, etc.

Enjoy building your brand, Mohsin!
