/**
 * Module Word Count Verification
 * This script verifies that all modules meet the required word count (3,000-5,000 words)
 */

const fs = require('fs');
const path = require('path');

function countWords(content) {
  // Remove markdown syntax and count words
  const text = content.replace(/[#*\[\]`_~\-\d\|=<>+]/g, ' ');
  const words = text.split(/\s+/).filter(word => word.length > 0);
  return words.length;
}

function verifyModuleWordCount(modulePath) {
  console.log(`Verifying word count for module: ${modulePath}`);
  
  const files = fs.readdirSync(modulePath);
  let totalWords = 0;
  
  for (const file of files) {
    if (path.extname(file) === '.md') {
      const filePath = path.join(modulePath, file);
      const content = fs.readFileSync(filePath, 'utf8');
      const wordCount = countWords(content);
      
      console.log(`  ${file}: ${wordCount} words`);
      totalWords += wordCount;
    }
  }
  
  console.log(`  Total words in module: ${totalWords}`);
  
  if (totalWords >= 3000 && totalWords <= 5000) {
    console.log('  ✅ Module meets word count requirements (3,000-5,000 words)');
    return true;
  } else {
    console.log('  ❌ Module does not meet word count requirements (3,000-5,000 words)');
    return false;
  }
}

// Verify all modules
const modules = [
  './docs/module-1-physical-ai',
  './docs/module-2-digital-twin',
  './docs/module-3-ai-brain',
  './docs/module-4-vla',
  './docs/capstone-project'
];

let allModulesValid = true;

for (const module of modules) {
  if (fs.existsSync(module)) {
    const isValid = verifyModuleWordCount(module);
    if (!isValid) {
      allModulesValid = false;
    }
  } else {
    console.log(`Module does not exist: ${module}`);
  }
}

if (allModulesValid) {
  console.log('\n✅ All modules meet word count requirements');
} else {
  console.log('\n❌ Some modules do not meet word count requirements');
}

module.exports = { countWords, verifyModuleWordCount };