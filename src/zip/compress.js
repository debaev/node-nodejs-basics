import { pipeline } from "stream/promises";
import { createGzip } from "zlib";
import { createReadStream, createWriteStream } from "fs";
import { resolve } from "path";

import { getDirname } from "../utils/helpers.js";

const __dirname = getDirname(import.meta.url);

const compress = async () => {
    const srcFilePath = resolve(__dirname, 'files', 'fileToCompress.txt');
    const compressedFilePath = resolve(__dirname, 'files', 'archive.gz');
    await pipeline(createReadStream(srcFilePath), createGzip(), createWriteStream(compressedFilePath));
};

await compress();