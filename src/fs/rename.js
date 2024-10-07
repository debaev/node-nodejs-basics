import { rename as renameFile } from "fs/promises";
import { resolve } from "path";
import { getDirname } from "../utils/helpers.js";

const __dirname = getDirname(import.meta.url);

const rename = async () => {
	const srcFilePath = resolve(__dirname, 'files', 'wrongFilename.txt');
	const renamedFilePath = resolve(__dirname, 'files', 'properFilename.md');

	try {
		await renameFile(srcFilePath, renamedFilePath);
	} catch (error) {
		throw new Error('FS operation failed');
	}
};

await rename();