import { writeFile } from 'node:fs/promises';

try {
  const data = process.argv[2];
  await writeFile('note.txt', `${data} \n`);
} catch (error) {
  console.error(error);
}
