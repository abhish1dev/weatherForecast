import express from 'express';
import path from 'path';
import weatherRoutes from './Weather';

const router = express.Router();

/** GET /welcome - Welcome to Trello Clone API */
router.get('/', (req, res) =>
  res.status(200).sendFile(path.resolve(`${__dirname}../../../../views/index.html`))
);

// mount user routes at /weather
router.use('/weather', weatherRoutes);


export default router;
