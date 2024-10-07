import { readFile } from "fs/promises";
import { resolve } from "path";
import { createHash } from "crypto";
import { getDirname } from "../utils/helpers.js";

const __dirname = getDirname(import.meta.url);

const calculateHash = async () => {
  try {
    const fileContent = await readFile(resolve(__dirname, 'files', 'fileToCalculateHashFor.txt'));
    console.log(createHash('sha256').update(fileContent).digest('hex'));
  } catch (error) {
    throw error;
  }
};

await calculateHash();