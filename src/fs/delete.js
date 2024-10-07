import { unlink } from 'fs/promises';
import { resolve } from 'path';
import { getDirname } from "../utils/helpers.js";

const __dirname = getDirname(import.meta.url);

const remove = async () => {
  try {
    await unlink(resolve(__dirname, 'files', 'fileToRemove.txt'));
  } catch (error) {
    throw Error('FS operation failed');
  }
};

await remove();
