# Deploying to GitHub Pages with Custom Domain

This guide will help you deploy your landing page to GitHub Pages with a custom domain.

## Prerequisites

- A GitHub repository (already set up: `cursorphilly`)
- A custom domain name
- Access to your domain's DNS settings

## Step 1: Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/luiscielak/cursorphilly`
2. Click on **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions** (not "Deploy from a branch")
4. Save the settings

## Step 2: Configure Custom Domain

1. In the same **Settings** → **Pages** section
2. Under **Custom domain**, enter your domain (e.g., `cursorphilly.com` or `www.cursorphilly.com`)
3. Check **Enforce HTTPS** (recommended)
4. Click **Save**

## Step 3: Update CNAME File

1. Edit `public/CNAME` in your repository
2. Replace the placeholder with your actual domain:
   ```
   cursorphilly.com
   ```
   OR if you want www:
   ```
   www.cursorphilly.com
   ```
3. Commit and push the change

## Step 4: Configure DNS Records

You need to add DNS records at your domain registrar. Choose ONE of these options:

### Option A: Apex Domain (cursorphilly.com - no www)

Add these A records:
```
Type: A
Name: @ (or leave blank)
Value: 185.199.108.153
TTL: 3600 (or default)

Type: A
Name: @ (or leave blank)
Value: 185.199.109.153
TTL: 3600

Type: A
Name: @ (or leave blank)
Value: 185.199.110.153
TTL: 3600

Type: A
Name: @ (or leave blank)
Value: 185.199.111.153
TTL: 3600
```

### Option B: Subdomain (www.cursorphilly.com)

Add a CNAME record:
```
Type: CNAME
Name: www
Value: luiscielak.github.io
TTL: 3600 (or default)
```

**Note:** GitHub's IP addresses may change. For the most up-to-date IPs, check:
https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-an-apex-domain

## Step 5: Deploy

1. Push your code to the `main` branch:
   ```bash
   git add .
   git commit -m "Configure for GitHub Pages deployment"
   git push origin main
   ```

2. The GitHub Actions workflow will automatically:
   - Build your Vite app
   - Deploy to GitHub Pages
   - You can monitor progress in the **Actions** tab

## Step 6: Verify Deployment

1. Wait 5-10 minutes for DNS propagation
2. Visit your custom domain
3. Check that HTTPS is working (GitHub Pages provides free SSL)

## Troubleshooting

### DNS Not Working
- DNS changes can take up to 48 hours to propagate
- Use `dig yourdomain.com` or online DNS checkers to verify
- Make sure you're using the correct GitHub IP addresses

### Build Fails
- Check the **Actions** tab for error messages
- Ensure `package.json` has the correct build script
- Verify Node.js version compatibility

### Custom Domain Not Showing
- Make sure the CNAME file is in the `public/` directory
- Verify the domain is correctly entered in GitHub Settings → Pages
- Wait for DNS propagation

### HTTPS Not Working
- Enable "Enforce HTTPS" in GitHub Pages settings
- Wait a few minutes after enabling
- Clear your browser cache

## Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Custom Domain Setup Guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [DNS Propagation Checker](https://www.whatsmydns.net/)
