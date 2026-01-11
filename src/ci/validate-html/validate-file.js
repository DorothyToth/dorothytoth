import { spawn } from 'child_process';

export default function validateFile(filePath) {
  return new Promise((resolve, reject) => {
    console.log(`Validating: ${filePath}`);
    
    const process = spawn('pnpm', ['html-validate', '--preset', 'standard,a11y', filePath], {
      stdio: 'inherit'
    });
    
    process.on('close', (code) => {
      console.log('---');
      resolve(code);
    });
    
    process.on('error', (error) => {
      reject(error);
    });
  });
}
