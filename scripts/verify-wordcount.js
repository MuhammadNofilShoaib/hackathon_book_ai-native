/**
 * Word count verification script
 * This script checks that module content meets the required word count (3,000-5,000 words)
 */

const fs = require('fs');
const path = require('path');

function countWords(content) {
  // Remove markdown syntax and count words
  const text = content.replace(/[#*\[\]`_~\-\d\|=<>+]/g, ' ');
  const words = text.split(/\s+/).filter(word => word.length > 0);
  return words.length;
}

function verifyWordCount(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const wordCount = countWords(content);
  
  console.log(`File: ${filePath}`);
  console.log(`Word count: ${wordCount}`);
  
  if (wordCount >= 3000 && wordCount <= 5000) {
    console.log('✅ Word count is within the required range (3,000-5,000 words)');
    return true;
  } else {
    console.log('❌ Word count is outside the required range (3,000-5,000 words)');
    return false;
  }
}

// Example usage
if (require.main === module) {
  const filePath = process.argv[2];
  if (!filePath) {
    console.error('Please provide a file path as an argument');
    process.exit(1);
  }
  
  verifyWordCount(filePath);
}

module.exports = { countWords, verifyWordCount };