# Video Deployment Guide for Frame & Flight

## Current Status
The website is currently configured to work with or without video files. If the video file is not present, it will show a professional placeholder with your thumbnail image.

## How to Add Videos Safely

### Option 1: External Video Hosting (Recommended)
1. Upload your video to a service like:
   - **Vimeo** (professional, customizable player)
   - **YouTube** (free, but with branding)
   - **AWS S3** + CloudFront (full control)
   - **Vercel Blob Storage** (integrated with your hosting)

2. Update the video source in `/components/ServicesSection.tsx`:
   ```tsx
   <source src="https://your-video-host.com/video.mp4" type="video/mp4" />
   ```

### Option 2: Small Video Files in Public Directory
If you must host the video locally:

1. **Keep file size under 10MB** to avoid build timeouts
2. Use compressed formats (MP4 with H.264)
3. Add to `/public/` directory
4. Update the git repository carefully

### Option 3: Progressive Loading
For larger videos:
1. Create multiple quality versions (low, medium, high)
2. Load low quality first, then upgrade
3. Use lazy loading techniques

## Current Fallback Behavior
- Checks if video file exists before attempting to load
- Shows professional placeholder if video is unavailable
- Maintains all functionality without breaking the site
- Uses your existing thumbnail image as fallback

## Recommended Video Specs
- **Format**: MP4 (H.264 codec)
- **Size**: Under 10MB for local hosting
- **Resolution**: 1920x1080 (1080p) maximum
- **Duration**: Under 2 minutes for optimal loading
- **Compression**: Use tools like HandBrake for optimization

## Vercel Build Considerations
- Large files in git repos cause build timeouts
- Use `.gitignore` for local video files during development
- Consider Vercel's file size limits (100MB deployment limit)

## Next Steps
1. Choose your preferred video hosting method
2. Upload/configure your video
3. Test the deployment on a staging branch first
4. Update the video source URL in the component

The website will continue to work perfectly while you implement your preferred video solution!