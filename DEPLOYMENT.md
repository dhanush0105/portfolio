# Deploy to Vercel

Follow these steps to deploy your portfolio to Vercel:

## Prerequisites
- Git installed
- GitHub account
- Vercel account (sign up at https://vercel.com)

## Deployment Steps

### Option 1: Deploy via Vercel CLI (Recommended)

1. Install Vercel CLI globally:
```bash
npm install -g vercel
```

2. Navigate to your project directory:
```bash
cd e:\Code\dhanush-portfolio
```

3. Login to Vercel:
```bash
vercel login
```

4. Deploy to Vercel:
```bash
vercel
```

5. Follow the prompts:
   - Set up and deploy? **Y**
   - Which scope? Select your account
   - Link to existing project? **N**
   - Project name? **dhanush-portfolio** (or your preferred name)
   - In which directory is your code located? **./**
   - Want to override the settings? **N**

6. For production deployment:
```bash
vercel --prod
```

Your site will be live at: `https://your-project-name.vercel.app`

### Option 2: Deploy via GitHub + Vercel Dashboard

1. Initialize Git (if not already done):
```bash
git init
git add .
git commit -m "Initial commit with new color scheme"
```

2. Create a new repository on GitHub

3. Push your code to GitHub:
```bash
git remote add origin https://github.com/YOUR_USERNAME/dhanush-portfolio.git
git branch -M main
git push -u origin main
```

4. Go to https://vercel.com and sign in

5. Click "Add New Project"

6. Import your GitHub repository

7. Configure project:
   - Framework Preset: **Other**
   - Root Directory: **./**
   - Output Directory: **public**
   - Leave Build Command empty or use: `echo "No build needed"`

8. Click "Deploy"

Your portfolio will be live with a URL like: `https://dhanush-portfolio.vercel.app`

## Custom Domain (Optional)

After deployment, you can add a custom domain in your Vercel project settings.

## Environment

The portfolio uses static HTML/CSS/JS from the `public` folder, so no build process is needed.
