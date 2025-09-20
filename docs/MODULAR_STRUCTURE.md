# Modular Architecture Documentation

## Overview

This massage school website is built using a modular architecture that promotes:
- **Maintainability**: Easy to update and modify individual components
- **Scalability**: Simple to add new features and pages
- **Reusability**: Components can be shared across different pages
- **Organization**: Clear structure that makes the codebase easy to navigate

## Project Structure

```
massage_website/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── common/         # Shared components (Header, Footer)
│   │   ├── forms/          # Form components
│   │   ├── layout/         # Layout components
│   │   └── sections/       # Page-specific sections
│   ├── pages/              # Main page components
│   ├── hooks/              # Custom React hooks
│   ├── utils/              # Utility functions
│   ├── data/               # Static data and content
│   ├── styles/             # Global styles and Tailwind config
│   └── types/              # TypeScript type definitions
├── public/                 # Static assets
├── docs/                   # Documentation
└── config/                 # Configuration files
```

## Component Organization

### 1. Common Components (`src/components/common/`)
These are used across multiple pages:
- **Header**: Navigation and branding
- **Footer**: Site-wide links and information
- **Navigation**: Reusable navigation elements

### 2. Layout Components (`src/components/layout/`)
Structure and layout components:
- **Layout**: Main wrapper component
- **Container**: Content width management
- **Grid**: Layout grid systems

### 3. Section Components (`src/components/sections/`)
Page-specific sections that can be reused:
- **HeroSection**: Landing page hero areas
- **FeatureSection**: Feature showcases
- **TestimonialSection**: Customer testimonials
- **CTASection**: Call-to-action areas

### 4. Form Components (`src/components/forms/`)
Reusable form elements:
- **ContactForm**: Contact form with validation
- **ApplicationForm**: Student application forms
- **SearchForm**: Search functionality

## Page Structure

Each page follows a consistent pattern:
1. **Hero Section**: Compelling headline and introduction
2. **Content Sections**: Main information organized in logical blocks
3. **Call-to-Action**: Clear next steps for visitors

### Current Pages:
- **HomePage**: Landing page with overview
- **ProgramsPage**: Course and program information
- **AdmissionsPage**: Application process and requirements
- **StudentResourcesPage**: Current student resources
- **AboutPage**: School information and faculty
- **ContactPage**: Contact information and forms

## Modular Benefits

### Easy Content Updates
- Content is stored in `src/data/` for easy updates
- Component structure allows for simple content swapping
- No need to modify code for content changes

### Simple Feature Addition
- New pages can be added by creating new components
- Existing components can be reused
- Routing is automatically handled

### Consistent Design
- Shared component library ensures consistency
- Tailwind CSS classes are standardized
- Design tokens are centralized

## Adding New Features

### 1. New Page
```jsx
// src/pages/NewPage.jsx
import React from 'react'
import Layout from '../components/layout/Layout'

const NewPage = () => {
  return (
    <Layout>
      {/* Page content */}
    </Layout>
  )
}

export default NewPage
```

### 2. New Component
```jsx
// src/components/sections/NewSection.jsx
import React from 'react'

const NewSection = ({ title, content }) => {
  return (
    <section className="section">
      <div className="container-custom">
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </section>
  )
}

export default NewSection
```

### 3. Update Routing
```jsx
// src/App.jsx
import NewPage from './pages/NewPage'

// Add to routes
<Route path="/new-page" element={<NewPage />} />
```

## Content Management

### Static Data
Store content in `src/data/` files:
```javascript
// src/data/programs.js
export const programs = [
  {
    title: 'Massage Therapy Program',
    description: 'Comprehensive training...',
    duration: '6-12 months',
    // ... more data
  }
]
```

### Component Usage
```jsx
import { programs } from '../data/programs'

const ProgramsPage = () => {
  return (
    <div>
      {programs.map(program => (
        <ProgramCard key={program.title} program={program} />
      ))}
    </div>
  )
}
```

## Styling System

### Tailwind CSS Classes
- **Utility-first approach**: Use Tailwind classes directly
- **Custom components**: Define reusable component classes
- **Responsive design**: Built-in responsive utilities

### Custom CSS
- **Global styles**: `src/styles/index.css`
- **Component styles**: Scoped to individual components
- **Design tokens**: Centralized color and spacing values

## Best Practices

### 1. Component Naming
- Use PascalCase for component names
- Be descriptive and specific
- Include the component type in the name

### 2. File Organization
- Keep related components together
- Use consistent folder structure
- Group by functionality, not by type

### 3. Props and State
- Keep components focused and single-purpose
- Use props for configuration
- Use state for component-specific data

### 4. Reusability
- Design components to be flexible
- Use prop spreading for customization
- Provide sensible defaults

## Deployment

### Build Process
```bash
npm run build    # Create production build
npm run preview  # Preview production build
npm run dev      # Development server
```

### GitHub Pages
1. Build the project: `npm run build`
2. Push to GitHub
3. Configure GitHub Pages to serve from `/docs` or `/dist`
4. Set custom domain if needed

## Maintenance

### Regular Updates
- Keep dependencies updated
- Review and optimize components
- Update content regularly
- Monitor performance

### Content Updates
- Update data files for content changes
- Modify component props for structural changes
- Use version control for all changes

## Conclusion

This modular architecture provides a solid foundation for a professional massage school website. It's designed to be:
- **Easy to maintain** by content managers
- **Simple to extend** by developers
- **Professional in appearance** for visitors
- **Scalable** for future growth

The structure allows for easy updates, additions, and modifications while maintaining consistency and quality across the entire site.
