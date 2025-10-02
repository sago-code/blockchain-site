import { Router } from 'express';
const router = Router();

router.get('/blockchain', (req, res) => {
  res.json({
    title: '¿Qué es Blockchain?',
    summary:
      'Blockchain es un libro contable distribuido e inmutable. Permite registrar transacciones de forma segura mediante bloques enlazados criptográficamente.',
    concepts: [
      'Bloques, hash y encadenamiento',
      'Consenso (PoW, PoS)',
      'Carteras y direcciones',
      'Smart contracts',
      'Casos de uso: finanzas, supply chain, identidad, NFTs'
    ],
    examples: {
      addressExample: '0x1234...ABCD',
      txExampleHash: '0xTXHASH...'
    }
  });
});

export default router;
