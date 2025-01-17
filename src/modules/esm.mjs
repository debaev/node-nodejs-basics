import { createServer as createServerHttp } from 'http';
import { release, version } from 'os';
import { sep } from 'path';
import { fileURLToPath } from 'url';
import { getDirname } from "../utils/helpers.js";

import './files/c.js';

const random = Math.random();
const unknownObject =
  random > 0.5 ? await import('./files/a.json', { assert: { type: 'json' } }) : await import('./files/b.json', { assert: { type: 'json' } });

const __filename = fileURLToPath(import.meta.url);
const __dirname = getDirname(import.meta.url);

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServerHttp((_, res) => {
  res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log('To terminate it, use Ctrl+C combination');
});

export { unknownObject, myServer };
