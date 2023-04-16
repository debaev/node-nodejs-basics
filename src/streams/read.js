import { createReadStream } from "fs";
import { getDirname } from "../utils/helpers.js";
import { resolve } from "path";

const __dirname = getDirname(import.meta.url);

const read = async () => {
    const readStream = createReadStream(resolve(__dirname, 'files', 'fileToRead.txt'), 'utf8');
    readStream.pipe(process.stdout);
};

await read();