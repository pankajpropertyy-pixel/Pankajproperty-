# Netlify Deployment Guide for Pankaj Property Website

This project is completely configured and ready to deploy to Netlify in minutes.

---

## 1. Video File Placement (Very Important)

Before uploading or pushing to GitHub/Netlify, place your MP4 video file here:

```text
public/assets/hero-video.mp4
```

> **Why?** Any file inside the `public/` directory is automatically bundled into `dist/assets/hero-video.mp4` by Vite during the build. Netlify's global CDN will stream this video directly to all visitors with edge caching.

---

## 2. Deployment Method A: GitHub to Netlify (Recommended)

1. Push this project to your GitHub repository (e.g. `pankaj-property-website`).
2. Log in to [Netlify](https://app.netlify.com).
3. Click **"Add new site"** -> **"Import an existing project"**.
4. Select **GitHub** and choose your repository.
5. Netlify will automatically detect `netlify.toml` with the following pre-configured settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Click **"Deploy pankaj-property"**.
7. In 1-2 minutes, your website is live!

---

## 3. Deployment Method B: Netlify Drag & Drop (Zero Code / Instant)

1. Run the build command on your local machine:
   ```bash
   npm run build
   ```
2. Make sure your video is in `dist/assets/hero-video.mp4`.
3. Open [Netlify Sites](https://app.netlify.com/drop).
4. Drag and drop the generated `dist` folder directly into the Netlify browser window.
5. Your site is instantly live with a free SSL certificate!

---

## 4. Custom Domain Setup (e.g. pankajproperty.com)

1. In Netlify, go to **Site settings** -> **Domain management**.
2. Click **"Add custom domain"** and enter your domain (e.g. `pankajproperty.com`).
3. Follow the DNS instructions to point your domain to Netlify.
4. Netlify will automatically generate a free HTTPS SSL certificate.
