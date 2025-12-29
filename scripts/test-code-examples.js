/**
 * Code Example Execution Test
 * This script verifies that code examples execute successfully in the recommended environment
 */

const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

function testCodeExample(filePath) {
  return new Promise((resolve, reject) => {
    const extension = path.extname(filePath);
    let command;

    // Determine execution command based on file type
    switch (extension) {
      case '.py':
        command = `python3 ${filePath}`;
        break;
      case '.js':
        command = `node ${filePath}`;
        break;
      case '.ts':
        command = `ts-node ${filePath}`;
        break;
      default:
        console.log(`Unsupported file type: ${extension}`);
        resolve(false);
        return;
    }

    console.log(`Testing code example: ${filePath}`);
    console.log(`Command: ${command}`);

    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.log(`❌ Execution failed: ${error.message}`);
        console.log(`stderr: ${stderr}`);
        resolve(false);
      } else {
        console.log(`✅ Execution successful`);
        console.log(`stdout: ${stdout}`);
        resolve(true);
      }
    });
  });
}

// Example usage
if (require.main === module) {
  const examplePath = process.argv[2];
  if (!examplePath) {
    console.error('Please provide a file path as an argument');
    process.exit(1);
  }

  testCodeExample(examplePath)
    .then(success => {
      if (success) {
        console.log('✅ Code example executed successfully in recommended environment');
      } else {
        console.log('❌ Code example failed to execute in recommended environment');
        process.exit(1);
      }
    });
}

module.exports = { testCodeExample };