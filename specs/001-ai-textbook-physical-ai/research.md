# Research: AI-Native Textbook for Physical AI & Humanoid Robotics

## Decision: Docusaurus Framework Selection
**Rationale**: Docusaurus is a modern, open-source static site generator optimized for documentation and educational content. It supports Markdown, has built-in search, and can be easily deployed to GitHub Pages. It also supports versioning, which is useful for textbook updates.

**Alternatives considered**:
- GitBook: Good for books but less flexible for custom components
- Hugo: More complex setup, requires knowledge of Go templates
- Jekyll: Older technology, less feature-rich than Docusaurus
- Custom React app: More complex to maintain and deploy

## Decision: Docusaurus Version and Node.js Requirements
**Rationale**: Using Docusaurus v3.x with Node.js 18.x or higher provides the latest features, security updates, and performance improvements. This version has good support for plugins and themes needed for educational content.

**Specifics**:
- Docusaurus version: 3.1.0 or latest stable
- Node.js version: 18.12.0 or higher
- npm version: 8.0.0 or higher

## Decision: Primary Dependencies and Versions
**Rationale**: These dependencies provide the necessary functionality for building and deploying the educational textbook:

- Docusaurus: Core framework for documentation site
- React: Component-based UI library
- Node.js: JavaScript runtime environment
- npm/yarn: Package managers

**Specific versions**:
- Docusaurus: ^3.1.0
- React: ^18.2.0
- Node.js: ^18.12.0
- npm: ^9.0.0 or yarn ^1.22.0

## Decision: Storage Approach
**Rationale**: For the current scope of the project, file-based Markdown content stored in the repository is sufficient. This approach is simple, version-controlled, and works well with Docusaurus. For future AI-native features (like RAG chatbots), a database may be needed, but that's outside the current scope.

**Current approach**: Markdown files in the repository
**Future consideration**: Database for AI-native features (to be addressed later)

## Decision: Testing Framework and Methodology
**Rationale**: For content validation and reproducibility checks, we'll use a combination of:

- Markdown linting tools to ensure consistent formatting
- Automated checks for broken links
- Code example validation scripts
- Manual testing of simulation examples

**Specific tools**:
- markdownlint-cli for Markdown validation
- Remark-lint for additional Markdown checks
- Custom scripts for code example validation
- Browser testing for deployed site

## Decision: Target Platform and Browser Compatibility
**Rationale**: The textbook needs to be accessible to students on various devices and browsers. Supporting modern browsers ensures the best user experience while keeping development manageable.

**Requirements**:
- Modern browsers (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
- Mobile-responsive design
- Fast loading times (under 3 seconds for initial load)
- Accessible content (WCAG 2.1 AA compliance)

## Decision: Performance Goals
**Rationale**: Educational content should load quickly to maintain student engagement and accommodate various network conditions.

**Specific metrics**:
- Initial page load: < 3 seconds
- Subsequent page navigation: < 1 second
- Lighthouse performance score: > 80
- Bundle size: < 250KB for initial load

## Decision: Hardware Requirements for Examples
**Rationale**: To accommodate students with different hardware capabilities, we'll provide both local and cloud-based options for running examples.

**Requirements**:
- Local: RTX 3060 or equivalent GPU recommended for simulation
- Cloud: NVIDIA Ether Labs or AWS RoboMaker as alternatives
- Minimum: 8GB RAM, 4-core CPU for basic examples
- Recommended: 16GB RAM, 6-core CPU, dedicated GPU for complex simulations

## Decision: Expected Number of Users/Visitors
**Rationale**: Based on similar educational resources, we expect moderate traffic with potential for growth as the content becomes known in academic circles.

**Estimates**:
- Initial: 100-500 unique visitors per month
- After marketing: 500-2000 unique visitors per month
- Peak times (course start): Up to 5000 unique visitors per month
- Concurrent users: Up to 50 during peak hours