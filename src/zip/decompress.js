import { pipeline } from "stream/promises";
import { createGunzip } from "zlib";
import { createReadStream, createWriteStream } from "fs";
import { resolve } from "path";

import { getDirname } from "../utils/helpers.js";

const __dirname = getDirname(import.meta.url);


const decompress = async () => {
    const destFilePath = resolve(__dirname, 'files', 'fileToCompress.txt');
    const compressedFilePath = resolve(__dirname, 'files', 'archive.gz');
    await pipeline(createReadStream(compressedFilePath), createGunzip(), createWriteStream(destFilePath));
};

await decompress();