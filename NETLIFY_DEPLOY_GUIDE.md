# Netlify Video Playback & Deployment Guide

### Why the video played in Google AI Studio preview vs. Why it failed on Netlify

1. **In Google AI Studio Preview**:
   - The preview runs in your active browser session where the video was attached/cached in browser memory.
2. **On Netlify Production**:
   - Netlify builds only the files present in your GitHub repository.
   - AI Studio conversation attachments are not automatically written to Git by the chat window.
   - If `public/assets/hero-video.mp4` is not physically committed to your GitHub repository, Netlify has no video file to serve.
   - The browser attempts to fetch `/assets/hero-video.mp4`, receives a 404 (or HTML redirect), and the `<video>` element fails to play.

---

### Step-by-Step Fix for Netlify

#### Step 1: Place your MP4 video in the assets folder
Copy your video file into your project at:
```text
public/assets/hero-video.mp4
```

> **Note on Case Sensitivity**: Ensure the filename is exactly all lowercase `hero-video.mp4`.

#### Step 2: Commit and push the video to GitHub
In your project terminal:
```bash
git add public/assets/hero-video.mp4
git commit -m "Add cinematic hero video asset"
git push origin main
```

#### Step 3: Verify Netlify Deployment
1. Netlify will detect the commit and trigger a new build (`npm run build`).
2. Vite automatically copies `public/assets/hero-video.mp4` into `dist/assets/hero-video.mp4`.
3. Open your Netlify site URL. The cinematic video will autoplay edge-to-edge in an infinite loop!

---

### Technical Configuration Applied
- **Video Element**: Configured with `autoPlay`, `muted`, `loop`, `playsInline`, and `preload="auto"`.
- **CSS Positioning**: `position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; z-index: 0;`
- **Autoplay Assurance**: Programmatic `video.muted = true` and `video.defaultMuted = true` to pass strict mobile browser autoplay policies.
- **Netlify Streaming Headers**: Added `Content-Type: video/mp4` and `Accept-Ranges: bytes` in `netlify.toml` for chunked video streaming.
