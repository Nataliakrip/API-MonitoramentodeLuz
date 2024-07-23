// routes/lightRoutes.js
import { Router } from 'express';
import lightcontroller from '../controllers/lightcontroler.js';

//Instaciando o roteador
const router = Router();

//Criando as 3 rotas get e uma rota post e uma delete
router.get('/lights', (req, res) => LightController.getAllLights(req, res));
router.get('/lights/:id', (req, res) => LightController.getLightById(req, res));
router.post('/lights', (req, res) => LightController.addLight(req, res));
router.get('/lights/latest', (req, res) => LightController.getLatestLight(req, res));
router.delete('/lights/:id', (req, res) => lightcontroller.deleteLight(req, res));

export default router;