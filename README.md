# TD Scripts Documentation

This repository contains the documentation website for TD Scripts, a collection of professional FiveM resources.

## Structure

- `index.html` - Main homepage with resource listings
- `td-dmv.html` - TD-DMV specific documentation
- `style.css` - Shared CSS styles
- `script.js` - Shared JavaScript functionality

## Features

### Homepage (`index.html`)
- Resource overview with cards for each script
- Feature highlights and benefits
- Support information and statistics
- Responsive design for all devices

### TD-DMV Documentation (`td-dmv.html`)
- Comprehensive installation guide
- Configuration options
- Feature explanations
- Command reference
- Database schema
- Troubleshooting guide

## GitHub Pages Setup

To deploy this documentation to GitHub Pages:

1. **Create GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial documentation setup"
   git branch -M main
   git remote add origin https://github.com/yourusername/td-scripts-docs.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings
   - Navigate to Pages section
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Save settings

3. **Custom Domain (Optional)**
   - Add `CNAME` file with your domain
   - Configure DNS records as instructed by GitHub

## URL Structure

- **Homepage**: `https://yourusername.github.io/td-scripts-docs/`
- **TD-Store**: `https://imthomasss.github.io/docs.td-store.github-io/` (external)
- **TD-DMV**: `https://yourusername.github.io/td-scripts-docs/td-dmv.html`

## Adding New Resources

To add documentation for new resources:

1. **Create new HTML file** (e.g., `td-banking.html`)
2. **Add resource card** to `index.html`:
   ```html
   <div class="resource-card" onclick="openResource('td-banking')">
       <div class="resource-icon">
           <i class="fas fa-university"></i>
       </div>
       <div class="resource-content">
           <h4>TD-Banking</h4>
           <p>Advanced banking system description...</p>
           <div class="resource-tags">
               <span class="tag">Banking System</span>
               <span class="tag">Financial Management</span>
           </div>
       </div>
       <div class="resource-status">
           <span class="status-badge released">Released</span>
       </div>
   </div>
   ```
3. **Update JavaScript** in `script.js`:
   ```javascript
   case 'banking':
       window.location.href = 'td-banking.html';
       break;
   ```

## Styling Guidelines

- Use consistent color scheme (blue primary: #3b82f6)
- Maintain dark theme throughout
- Ensure responsive design for mobile
- Use Inter font family
- Include Font Awesome icons

## Content Guidelines

- Write clear, concise documentation
- Include code examples with syntax highlighting
- Provide step-by-step installation guides
- Add troubleshooting sections
- Include command references and API documentation

## Maintenance

- Update resource status badges as needed
- Add new features to documentation
- Keep installation guides current
- Update support information
- Monitor and fix broken links

## Support

For documentation issues or suggestions:
- Discord: https://discord.gg/tWwfPnxz47
- Email: support@tdscripts.com
