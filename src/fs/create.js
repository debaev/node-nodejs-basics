import { writeFile } from 'fs/promises';
import { resolve } from 'path';
import { getDirname } from '../utils/helpers.js';

const __dirname = getDirname(import.meta.url);

export const create = async () => {
	const destFilePath = resolve(__dirname, 'files', 'fresh.txt');
	const fileContent = 'I am fresh and young';

	try {
		await writeFile(destFilePath, fileContent, { flag: 'wx' });
	} catch (error) {
		throw Error('FS operation failed');
	}
};

create();