# GitHub Pages Deployment Guide

This document provides instructions for deploying the textbook to GitHub Pages.

## Prerequisites

- GitHub repository with the textbook content
- Docusaurus configuration properly set up
- Build process working correctly

## Deployment Steps

### 1. Configure Docusaurus for GitHub Pages

Update your `docusaurus.config.js` with the correct deployment settings:

```javascript
module.exports = {
  // ...
  url: 'https://your-username.github.io',
  baseUrl: '/your-repo-name/',
  organizationName: 'your-username',
  projectName: 'your-repo-name',
  deploymentBranch: 'gh-pages',
  // ...
};
```

### 2. Build the Site

Run the build command to generate the static site:

```bash
npm run build
```

This creates a `build/` directory with the static files.

### 3. Deploy to GitHub Pages

Deploy using the Docusaurus command:

```bash
npm run deploy
```

This command:
- Runs the build command
- Creates a temporary local branch
- Pushes the build files to the `gh-pages` branch
- Cleans up the temporary branch

### 4. Configure GitHub Repository

In your GitHub repository:

1. Go to Settings
2. Navigate to Pages
3. Select the `gh-pages` branch as the source
4. Save the settings

### 5. Verify Deployment

After deployment:

1. Wait a few minutes for GitHub Pages to process
2. Visit `https://your-username.github.io/your-repo-name/`
3. Verify all content displays correctly
4. Test all navigation and links

## Automated Deployment

For continuous deployment, you can set up GitHub Actions:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18

      - name: Install dependencies
        run: npm install

      - name: Build website
        run: npm run build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./build
```

## Troubleshooting

### Common Issues

1. **Page not loading**: Check that the `baseUrl` in `docusaurus.config.js` matches your repository name
2. **Images not showing**: Ensure image paths are correct relative to the document location
3. **Links not working**: Verify that all internal links use the correct path structure

### Verification Checklist

- [ ] Site builds without errors (`npm run build`)
- [ ] All pages load correctly
- [ ] Navigation works properly
- [ ] Images and assets load
- [ ] Internal links work
- [ ] External links are valid
- [ ] Mobile responsiveness is maintained