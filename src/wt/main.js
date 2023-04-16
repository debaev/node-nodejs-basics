import { Worker } from "worker_threads";
import { cpus } from "os";
import { resolve as resolvePath } from "path";
import { getDirname } from "../utils/helpers.js";

const __dirname = getDirname(import.meta.url);

const performCalculations = async () => {
  const cp = cpus();
  let number = 10;

  const workersResults = await Promise.allSettled(
    cp.map(() => {
      return new Promise((resolve, reject) => {
        const worker = new Worker(resolvePath(__dirname, 'worker.js'), {
          workerData: number++
        });
        worker.on('message', msg => resolve(msg));
        worker.on('error', err => reject(err));
      });
    })
  );

  const results = workersResults.map(({ status, value }) => ({
    status: status === 'fulfilled' ? 'resolved' : 'error',
    data: status === 'fulfilled' ? value : null
  }));
  console.log(results);
  return results;
};

await performCalculations();