
import lightmodel from "../models/lightmodel.js";

class LightController {

  //Retorna todos os dados de iluminação
  getAllLights(req, res) {
    const lights = LightModel.getAllLights();
    res.json(lights);
  }
  
  //Retorna os dados de iluminação pelo ID especifico
  getLightById(req, res) {
    const id = parseInt(req.params.id, 10);
    const light = LightModel.getLightById(id);
    if (light) {
      res.json(light);
    } else {
      res.status(404).json({ error: 'Light not found' });
    }
  }
  //Adiciona um novo dADO de iluminação
  addLight(req, res) {
    const { value } = req.body;
    if (value !== undefined) {
      const newLight = LightModel.addLight(value);
      res.status(201).json(newLight);
    } else {
      res.status(400).json({ error: 'Data invalide' });
    }
  }
  
  //Retorna os dados de iluminação msis recentes
  getLatestLight(req, res) {
    const light = LightModel.getLatestLight();
    res.json(light);
  }
  
  //Deleta um dado de iluminação pelo ID
  deleteLight(req, res) {
    const id = parseInt(req.params.id, 10);
    const deletedLight = LightModel.deleteLight(id);
    if (deletedLight) {
      res.json(deletedLight);
    } else {
      res.status(404).json({ error: 'Light not found' });
    }
  }

  

}

export default new LightController();
