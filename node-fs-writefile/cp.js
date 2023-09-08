import { readFile, writeFile } from 'node:fs/promises';

try {
  const file = await readFile(process.argv[2]);
  const write = process.argv[3];
  await writeFile(write, `${file} \n`);
} catch (error) {
  console.error(error);
}
