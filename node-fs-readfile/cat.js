import { readFile } from 'node:fs/promises';

const args = process.argv.slice(2);

async function cat() {
  try {
    for (let i = 0; i < args.length; i++) {
      const text = args[i];
      const contents = await readFile(`./${text}`, 'utf8');
      console.log(contents);
    }
  } catch (error) {
    console.log(error);
  }
}

await cat();
