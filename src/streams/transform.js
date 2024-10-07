import { EOL } from "os";
import { Transform } from "stream";
import { pipeline } from "stream/promises";
const transform = async () => {
  const reverseChunk = (chunk) => chunk.toString().replace(EOL, '').split('').reverse().join('') + EOL;
  const transformStream = new Transform({
    transform(chunk, _, callback) {
      callback(null, reverseChunk(chunk));
    }
  });
  await pipeline(process.stdin, transformStream, process.stdout);
};

await transform();