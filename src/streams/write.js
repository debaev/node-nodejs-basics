import { createWriteStream } from "fs";
import { getDirname } from "../utils/helpers.js";
import { resolve } from "path";

const __dirname = getDirname(import.meta.url);

const write = async () => {
    const writeStream = createWriteStream(resolve(__dirname, 'files', 'fileToWrite.txt'));
    process.stdin.pipe(writeStream);
    console.log('Type here...');
};

await write();