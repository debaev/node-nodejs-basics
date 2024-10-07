import { cp } from "fs/promises";
import { resolve } from "path";
import { getDirname } from "../utils/helpers.js";

const __dirname = getDirname(import.meta.url);

const copy = async () => {
  const srcFolder = resolve(__dirname, 'files');
  const destFolder = resolve(__dirname, 'files_copy');

  try {
    await cp(srcFolder, destFolder, { recursive: true, force: false, errorOnExist: true });
  } catch (error) {
    throw Error('FS operation failed');
  }
};

await copy();
