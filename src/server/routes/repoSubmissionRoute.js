
import { Router } from 'express';

const router = Router();

router.post('/click', (req, res) => {
  console.log('Button clicked:', req.body);
  res.json({ ok: true });
});

export default router;
