import { parentPort, workerData } from 'node:worker_threads';
import crypto from 'node:crypto';

const { input, iterations } = workerData;

let output = input;
for (let i = 0; i < iterations; i++) {
  output = crypto.createHash('sha256').update(output).digest('hex');
}

parentPort.postMessage({ hash: output, iterations });
