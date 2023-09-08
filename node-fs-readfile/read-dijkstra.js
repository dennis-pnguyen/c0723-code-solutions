import { readFile } from 'node:fs/promises';

async function read() {
  try {
    const filePath = './dijkstra.txt';
    const contents = await readFile(filePath, { encoding: 'utf-8' });
    console.log(contents);
  } catch (error) {
    console.log(error);
  }
}

await read();
