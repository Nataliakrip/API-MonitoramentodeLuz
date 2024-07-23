import { lights } from "../database/database.js";

//Criando a classe modelo para as requisições
class LightModel {
    getAllLights() {
        return lights;
    }


    getLigtById(id) {
    return lights.find(light => light.id === id);
}

    addLight(value) {
    const newLight = {
      id: lights.length + 1,
      value,
      timestamp: new Date().toISOString()
    };
    lights.push(newLight);
    return newLight;
  }

    getLatestLight() {
    return lights[lights.length - 1];
  }

    deleteLight(id) {
    const index = lights.findIndex(light => light.id === id);
    if (index !== -1) {
      return lights.splice(index, 1)[0];
    }
    return null;
  }
}
export default new LightModel();