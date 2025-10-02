import { Router } from 'express';
import { Worker } from 'node:worker_threads';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const router = Router();

router.get('/hash', (req, res, next) => {
  const input = String(req.query.input || 'blockchain');
  const iterations = Number(req.query.iterations || 50000);

  const worker = new Worker(join(__dirname, '../workers/hash.js'), {
    workerData: { input, iterations }
  });

  worker.once('message', msg => res.json({ ok: true, ...msg }));
  worker.once('error', next);
  worker.once('exit', code => {
    if (code !== 0) next(new Error(`Worker parado con código ${code}`));
  });
});

export default router;
