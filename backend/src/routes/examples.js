import { Router } from 'express';
import { z } from 'zod';

const router = Router();

// Formularios: ejemplo de contacto
const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10)
});

router.post('/contact', (req, res, next) => {
  try {
    const data = contactSchema.parse(req.body);
    // No guardamos en BD: respondemos OK
    res.json({ ok: true, received: data });
  } catch (err) {
    err.status = 400;
    next(err);
  }
});

// Simular un error para probar el handler
router.get('/simulate-error', (req, res, next) => {
  const e = new Error('Error simulado desde /simulate-error');
  e.status = 500;
  next(e);
});

// Ejemplo endpoints sencillos para concurrencia en FE
router.get('/prices', async (req, res) => {
  // Simula respuesta lenta
  await new Promise(r => setTimeout(r, 600));
  res.json({ btc: 65000, eth: 3200 });
});

router.get('/news', async (req, res) => {
  await new Promise(r => setTimeout(r, 350));
  res.json([{ title: 'Nuevo bloque minado', ts: Date.now() }]);
});

export default router;
