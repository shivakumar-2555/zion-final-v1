const fs = require('fs');
const path = require('path');
const pdfParse = require('pdf-parse');
const mammoth = require('mammoth');

const brochuresDir = path.join(__dirname, 'public', 'docs', 'brochures');
const outputFile = path.join(
  'C:\\Users\\ADMIN\\.gemini\\antigravity-ide\\brain\\5ce07064-cfb2-43b1-8641-a83c25434b12\\scratch',
  'brochure_extractions.txt'
);

async function extractFiles() {
  const files = fs.readdirSync(brochuresDir);
  let output = '';

  for (const file of files) {
    const filePath = path.join(brochuresDir, file);
    output += `\n\n=========================================\n`;
    output += `FILENAME: ${file}\n`;
    output += `=========================================\n\n`;

    try {
      if (file.toLowerCase().endsWith('.pdf')) {
        const dataBuffer = fs.readFileSync(filePath);
        const data = await pdfParse(dataBuffer);
        output += data.text;
      } else if (file.toLowerCase().endsWith('.docx')) {
        const result = await mammoth.extractRawText({ path: filePath });
        output += result.value;
      } else {
        output += `[Unsupported file format]`;
      }
    } catch (err) {
      output += `[Error extracting text: ${err.message}]`;
    }
  }

  // Make sure the scratch directory exists
  const scratchDir = path.dirname(outputFile);
  if (!fs.existsSync(scratchDir)) {
    fs.mkdirSync(scratchDir, { recursive: true });
  }

  fs.writeFileSync(outputFile, output);
  console.log(`Extraction complete. Written to ${outputFile}`);
}

extractFiles().catch(console.error);
