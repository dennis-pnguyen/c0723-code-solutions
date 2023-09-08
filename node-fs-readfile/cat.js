import { readFile } from 'node:fs/promises';

const filenames = process.argv.slice(2);

try {
  const promises = filenames.map(async (filename) =>
    readFile(filename, 'utf8')
  );
  const contents = await Promise.all(promises);
  console.log(contents.join('\n'));
} catch (error) {
  console.error(error);
}
