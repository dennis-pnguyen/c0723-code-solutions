import { readFile, writeFile } from 'node:fs/promises';

const parseData = JSON.parse(await readFile('./data.json', 'utf8'));
const operator = process.argv[2];

try {
  operator === 'create' && (await create());
  operator === 'read' && (await read());
  operator === 'update' && (await update());
  operator === 'delete' && (await deleteNote());
} catch (error) {
  console.error(error);
}
function create() {
  const newNote = process.argv[3];
  parseData.notes[parseData.nextId] = newNote;
  parseData.nextId++;
  writeData();
}

function read() {
  for (const key in parseData.notes) {
    console.log(`${key}: ${parseData.notes[key]}`);
  }
}

function update() {
  const [entryId, updatedNote] = process.argv.slice(3);
  for (const key in parseData.notes) {
    if (key === entryId) {
      parseData.notes[key] = updatedNote;
    }
  }
  writeData();
}

function deleteNote() {
  const entryId = process.argv[3];
  for (const key in parseData.notes) {
    if (key === entryId) {
      delete parseData.notes[key];
    }
  }
  writeData();
}

async function writeData() {
  await writeFile('./data.json', JSON.stringify(parseData));
}
