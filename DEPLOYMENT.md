# Deployment Guide

This Next.js website is ready for production deployment. Follow the steps below to deploy to your preferred platform.

## Prerequisites

- Git repository initialized and committed
- Node.js 18+ installed locally
- A deployment platform account (Vercel, Netlify, AWS, or Docker hosting)

## Deployment Options

### Option 1: Vercel (Recommended)

Vercel is the official deployment platform for Next.js applications and offers the easiest setup.

#### Steps:

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Prepare for deployment"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js and use default settings
   - Click "Deploy"

3. **Configure Environment Variables (if needed)**
   - In Vercel dashboard, go to Settings → Environment Variables
   - Add any required environment variables
   - Redeploy if variables were added

#### Vercel Configuration:
- **Build Command**: `npm run build` (auto-detected)
- **Output Directory**: `.next` (auto-detected)
- **Install Command**: `npm install` (auto-detected)

The `vercel.json` file in this project provides additional optimization:
- Security headers (CORS, CSP, XSS protection)
- Image format optimization
- Cache control for static assets

### Option 2: Netlify

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Prepare for deployment"
   git push origin main
   ```

2. **Connect to Netlify**
   - Go to [netlify.com](https://app.netlify.com)
   - Click "New site from Git"
   - Select your GitHub repository
   - Set build settings:
     - **Build command**: `npm run build`
     - **Publish directory**: `.next`
   - Click "Deploy site"

### Option 3: Docker Deployment

For self-hosted or cloud platforms supporting Docker:

1. **Create a Dockerfile** (if not exists):
   ```dockerfile
   FROM node:18-alpine AS dependencies
   WORKDIR /app
   COPY package*.json ./
   RUN npm install

   FROM node:18-alpine AS builder
   WORKDIR /app
   COPY --from=dependencies /app/node_modules ./node_modules
   COPY . .
   RUN npm run build

   FROM node:18-alpine AS runner
   WORKDIR /app
   ENV NODE_ENV=production
   COPY --from=builder /app/.next ./.next
   COPY --from=builder /app/node_modules ./node_modules
   COPY --from=builder /app/package*.json ./
   EXPOSE 3000
   CMD ["npm", "start"]
   ```

2. **Build and Run Locally**:
   ```bash
   docker build -t zion-print-tech:latest .
   docker run -p 3000:3000 zion-print-tech:latest
   ```

3. **Deploy to Cloud**:
   - Push to Docker Hub or cloud registry
   - Deploy using your cloud platform's container service

### Option 4: Node.js Server (Manual)

For deployment to a Node.js hosting platform:

1. **Build locally**:
   ```bash
   npm run build
   ```

2. **Install production dependencies only**:
   ```bash
   npm install --production
   ```

3. **Start the server**:
   ```bash
   npm start
   ```

The app will run on `http://localhost:3000`

## Post-Deployment Checklist

- [ ] Verify all pages load correctly
- [ ] Test contact form and email functionality
- [ ] Check responsive design on mobile/tablet
- [ ] Verify images load correctly
- [ ] Test product navigation and filtering
- [ ] Check SEO metadata on each page
- [ ] Verify page performance (use Lighthouse)
- [ ] Set up monitoring/alerts
- [ ] Configure custom domain (if applicable)
- [ ] Set up SSL/TLS certificate (usually automatic)

## Performance Optimization

The project includes:
- ✅ Image optimization with Next.js Image component
- ✅ Automatic static generation for fast page loads
- ✅ Security headers configured
- ✅ CSS minification with Tailwind
- ✅ TypeScript for type safety
- ✅ Framer Motion for smooth animations

## Monitoring & Logs

**Vercel**: Dashboard → Deployments → View logs
**Netlify**: Site settings → Deploys → View logs
**Docker/Self-hosted**: Check server logs directly

## Rollback

If deployment fails:
- **Vercel/Netlify**: Use "Deployments" tab to revert to previous version
- **Docker**: Use image tags to deploy previous build
- **Manual**: Keep backup of previous build files

## Support & Troubleshooting

- **Build fails**: Check Node.js version (require 18+)
- **Pages not loading**: Verify all image paths are correct
- **Contact form not working**: Check email configuration
- **Performance issues**: Review analytics in deployment dashboard

## Next Steps

1. Monitor analytics and user feedback
2. Plan future feature releases
3. Set up CI/CD pipeline for automated deployments
4. Consider caching strategy for frequently accessed content

---

For more information on Next.js deployment:
- [Next.js Deployment Documentation](https://nextjs.org/docs/app/building-your-application/deploying)
- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com)
