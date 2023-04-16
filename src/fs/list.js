import { readdir } from 'fs/promises';
import { resolve } from 'path';
import { getDirname } from "../utils/helpers.js";

const __dirname = getDirname(import.meta.url);

const list = async () => {
  try {
    const files = await readdir(resolve(__dirname, 'files'));
    files.forEach(file => console.log(file));
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await list();