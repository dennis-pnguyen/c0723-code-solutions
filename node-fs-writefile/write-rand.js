import { writeFile } from 'node:fs/promises';

try {
  const data = Math.random().toString();
  await writeFile('random.txt', `${data} \n`);
} catch (error) {
  console.error(error);
}
