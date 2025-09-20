# Massage School Website

A professional, modular website for massage therapy education built with React and modern web technologies.

## 🏗️ Project Structure

```
massage-school-website/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── common/         # Shared components (Header, Footer, etc.)
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
├── docs/                   # Documentation and content planning
└── config/                 # Configuration files
```

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

## 🧩 Modular Architecture

This website is built using a modular approach:

- **Component-based**: Each UI element is a reusable component
- **Feature-based**: Related functionality is grouped together
- **Scalable**: Easy to add new features and content
- **Maintainable**: Clear separation of concerns

## 📚 Key Features

- **Program Information**: Course catalogs, curriculum, schedules
- **Student Resources**: Handbooks, forms, policies
- **Accreditation**: Licensing requirements, compliance docs
- **Career Information**: Job placement, salary data
- **Responsive Design**: Works on all devices
- **SEO Optimized**: Search engine friendly

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Linting**: ESLint + Prettier

## 📁 Content Organization

The website content is organized into logical modules:

1. **Programs Module** - Course information and curriculum
2. **Students Module** - Resources and forms
3. **About Module** - School information and staff
4. **Admissions Module** - Enrollment process
5. **Resources Module** - Industry information and tools

## 🔄 Development Workflow

1. Create new components in appropriate module folders
2. Use existing components when possible
3. Follow naming conventions and file structure
4. Test components before integrating
5. Commit changes with descriptive messages

## 📝 Content Management

- Content is stored in `src/data/` for easy updates
- Images and documents in `public/` folder
- Component structure allows for easy content swapping
- Modular approach makes content updates simple

## 🚀 Live Website

🌐 **View the live website:** [https://YOUR_USERNAME.github.io/massage-school-website/](https://YOUR_USERNAME.github.io/massage-school-website/)

## 🚀 Deployment

This project is automatically deployed to GitHub Pages when you push to the main branch.

### Manual Deployment
```bash
npm run build
npm run deploy
```

### Other Deployment Options
- Netlify
- Vercel
- Any static hosting service

## 🤝 Contributing

1. Follow the modular structure
2. Use consistent naming conventions
3. Test your changes
4. Update documentation as needed

## 📄 License

MIT License - feel free to use this project for your massage school!
