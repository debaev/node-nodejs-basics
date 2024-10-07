import { readFile } from 'fs/promises';
import { resolve } from 'path';
import { getDirname } from "../utils/helpers.js";

const __dirname = getDirname(import.meta.url);

const read = async () => {
  try {
    const filePath = resolve(__dirname, './files', 'fileToRead.txt');
    const contents = await readFile(filePath, { encoding: 'utf8' });
    console.log(contents);
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await read();