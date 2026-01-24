const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

try {
  // Get the last commit date from git
  const gitDate = execSync('git log -1 --format=%cd --date=format:"%b. %Y"')
    .toString()
    .trim()
    .replace(/"/g, ''); // Remove quotes from the date format

  // Create the TypeScript file content
  const content = `// This file is auto-generated. Do not edit manually.
// Generated at build time with the last git commit date.

export const BUILD_INFO = {
  lastUpdated: '${gitDate}',
  generatedAt: '${new Date().toISOString()}'
};
`;

  // Write to src/buildInfo.ts
  const outputPath = path.join(__dirname, '..', 'src', 'buildInfo.ts');
  fs.writeFileSync(outputPath, content, 'utf8');

  console.log(`✓ Build info generated: Last updated ${gitDate}`);
} catch (error) {
  console.error('Error generating build info:', error.message);

  // Fallback: create a file with current date if git fails
  const fallbackContent = `// This file is auto-generated. Do not edit manually.

export const BUILD_INFO = {
  lastUpdated: '${new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}',
  generatedAt: '${new Date().toISOString()}'
};
`;

  const outputPath = path.join(__dirname, '..', 'src', 'buildInfo.ts');
  fs.writeFileSync(outputPath, fallbackContent, 'utf8');

  console.log('✓ Build info generated with fallback date');
}
