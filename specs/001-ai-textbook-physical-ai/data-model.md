# Data Model: AI-Native Textbook for Physical AI & Humanoid Robotics

## Entities

### Textbook Module
- **Fields**:
  - id: string (unique identifier)
  - title: string (module title)
  - description: string (brief description)
  - wordCount: integer (actual word count)
  - targetWordCount: integer (3000-5000 range)
  - learningObjectives: array of strings (specific learning outcomes)
  - content: string (Markdown content)
  - codeExamples: array of CodeExample objects
  - simulationExamples: array of SimulationExample objects
  - exercises: array of Exercise objects
  - summary: string (module summary)
  - prerequisites: array of strings (required knowledge)
  - nextModule: string (ID of subsequent module)
  - status: enum (draft, review, published)

### CodeExample
- **Fields**:
  - id: string (unique identifier)
  - title: string (example title)
  - description: string (what the example demonstrates)
  - code: string (actual code content)
  - language: string (programming language)
  - dependencies: array of strings (required libraries/tools)
  - setupInstructions: string (how to prepare environment)
  - executionSteps: array of strings (how to run the example)
  - expectedOutput: string (what user should see)
  - verificationSteps: array of strings (how to verify success)
  - relatedModule: string (ID of parent module)

### SimulationExample
- **Fields**:
  - id: string (unique identifier)
  - title: string (example title)
  - description: string (what the example demonstrates)
  - simulationEnvironment: enum (gazebo, unity, isaac_sim)
  - setupInstructions: string (how to prepare environment)
  - configurationFiles: array of strings (URDF, world files, etc.)
  - executionSteps: array of strings (how to run the simulation)
  - expectedBehavior: string (what user should observe)
  - verificationSteps: array of strings (how to verify success)
  - relatedModule: string (ID of parent module)

### Exercise
- **Fields**:
  - id: string (unique identifier)
  - title: string (exercise title)
  - description: string (what the exercise requires)
  - difficulty: enum (beginner, intermediate, advanced)
  - type: enum (theoretical, practical, coding, simulation)
  - instructions: string (detailed steps for completion)
  - hints: array of strings (optional guidance)
  - solution: string (for instructor reference)
  - relatedModule: string (ID of parent module)

### LearningObjective
- **Fields**:
  - id: string (unique identifier)
  - text: string (the specific objective)
  - module: string (ID of related module)
  - measurable: boolean (can it be tested/verified)
  - priority: enum (high, medium, low)

### Citation
- **Fields**:
  - id: string (unique identifier)
  - title: string (title of source)
  - authors: array of strings (author names)
  - publication: string (journal/book title)
  - date: string (publication date)
  - url: string (optional link)
  - doi: string (optional DOI)
  - apaCitation: string (formatted APA citation)
  - referencedIn: array of strings (IDs of modules/content that reference this)

## Relationships

- TextbookModule contains many CodeExample
- TextbookModule contains many SimulationExample
- TextbookModule contains many Exercise
- TextbookModule has many LearningObjective
- CodeExample belongs to one TextbookModule
- SimulationExample belongs to one TextbookModule
- Exercise belongs to one TextbookModule
- LearningObjective belongs to one TextbookModule
- TextbookModule references many Citation