# Quickstart Guide: AI-Native Textbook for Physical AI & Humanoid Robotics

## Prerequisites

Before you begin working with the textbook content, ensure you have the following:

- Git installed on your system
- Node.js (version 18.12.0 or higher)
- npm (version 9.0.0 or higher) or yarn
- A GitHub account
- Basic familiarity with Markdown syntax

## Setting Up the Development Environment

1. **Clone the repository**
   ```bash
   git clone https://github.com/[your-repo]/[repo-name].git
   cd [repo-name]
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run start
   # or
   yarn start
   ```
   This will start a local development server at `http://localhost:3000`

4. **Open your browser** and navigate to `http://localhost:3000` to view the textbook

## Adding New Content

1. **Create a new module** in the `docs/` directory:
   ```bash
   # Create a new markdown file for your module
   touch docs/module-1-physical-ai.md
   ```

2. **Add frontmatter** to your module file:
   ```markdown
   ---
   id: module-1-physical-ai
   title: Module 1 - Physical AI Principles
   sidebar_label: Module 1
   wordCount: 3500
   learningObjectives:
     - Understand the fundamentals of Physical AI
     - Explain embodied intelligence concepts
     - Apply basic simulation techniques
   ---
   ```

3. **Write your content** using Markdown syntax, including:
   - Code examples with proper syntax highlighting
   - Simulation setup instructions
   - Exercises for students
   - APA-style citations

## Running Code Examples

1. **Navigate to the examples directory**:
   ```bash
   cd examples/
   ```

2. **Follow the setup instructions** provided in each example's README file

3. **Execute the example** using the provided commands

4. **Verify the output** matches the expected results described in the textbook

## Contributing to the Textbook

1. **Create a new branch** for your changes:
   ```bash
   git checkout -b feature/new-module-content
   ```

2. **Make your changes** to the appropriate files

3. **Test your changes** locally by running the development server

4. **Commit your changes** with a descriptive message:
   ```bash
   git add .
   git commit -m "Add new content for Module 1 on Physical AI"
   ```

5. **Push your changes** and create a pull request:
   ```bash
   git push origin feature/new-module-content
   ```

## Validation and Testing

1. **Run the linter** to ensure consistent formatting:
   ```bash
   npm run lint
   # or
   yarn lint
   ```

2. **Validate all links** in the documentation:
   ```bash
   npm run check-links
   # or
   yarn check-links
   ```

3. **Build the site** to test the production version:
   ```bash
   npm run build
   # or
   yarn build
   ```

## Deployment

The textbook is automatically deployed to GitHub Pages when changes are merged to the main branch. To manually trigger a deployment:

1. **Build the site**:
   ```bash
   npm run build
   # or
   yarn build
   ```

2. **Deploy to GitHub Pages**:
   ```bash
   npm run deploy
   # or
   yarn deploy
   ```