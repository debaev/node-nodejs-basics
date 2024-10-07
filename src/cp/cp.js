import { fork } from "child_process";
import { resolve } from "path";
import { getDirname } from "../utils/helpers.js";

const __dirname = getDirname(import.meta.url);

const spawnChildProcess = async (args) => {
    const childProcess = fork(resolve(__dirname, 'files', 'script.js'), args, { silent: true });

    process.stdin.pipe(childProcess.stdin);
    childProcess.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess( /* [someArgument1, someArgument2, ...] */);
