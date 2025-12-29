/**
 * Learning Objectives Verification Script
 * This script checks that learning objectives are clearly defined and measurable
 */

const fs = require('fs');

function verifyLearningObjectives(content) {
  // Look for learning objectives in the content
  const learningObjectivesRegex = /learningObjectives:\s*\n((?:\s*-\s*.+\n?)*)/g;
  const matches = content.match(learningObjectivesRegex);
  
  if (!matches) {
    console.log('No learning objectives found in the content');
    return false;
  }
  
  console.log('Found learning objectives section');
  
  // Extract individual objectives
  const objectivesSection = matches[0];
  const objectiveLines = objectivesSection.split('\n').filter(line => line.trim().startsWith('-'));
  
  let allObjectivesValid = true;
  
  for (const line of objectiveLines) {
    const objective = line.replace(/^-/, '').trim();
    if (objective) {
      // Check if the objective is specific and measurable
      const isValid = isObjectiveMeasurable(objective);
      console.log(`${isValid ? '✅' : '❌'} Objective: "${objective}"`);
      if (!isValid) {
        allObjectivesValid = false;
      }
    }
  }
  
  return allObjectivesValid;
}

function isObjectiveMeasurable(objective) {
  // Check if the objective is specific and contains measurable terms
  const measurableTerms = [
    'understand', 'explain', 'apply', 'analyze', 'evaluate', 'create', 
    'demonstrate', 'implement', 'design', 'compare', 'calculate', 'solve'
  ];
  
  const lowerObjective = objective.toLowerCase();
  return measurableTerms.some(term => lowerObjective.includes(term));
}

// Example usage
if (require.main === module) {
  const filePath = process.argv[2];
  if (!filePath) {
    console.error('Please provide a file path as an argument');
    process.exit(1);
  }
  
  const content = fs.readFileSync(filePath, 'utf8');
  const isValid = verifyLearningObjectives(content);
  
  if (isValid) {
    console.log('✅ All learning objectives are clearly defined and measurable');
  } else {
    console.log('❌ Some learning objectives need improvement');
  }
}

module.exports = { verifyLearningObjectives, isObjectiveMeasurable };