import axios from 'axios';

class CarService {

  constructor() {
    const instance = axios.create({
      baseURL: 'http://localhost:8000/api',
    });
    this.apiClient = instance;
  }

  async getAllCars() {
    try {
      const { data } = await this.apiClient.get('cars');
      return data;
    } catch (error) {
      console.log('Error', error);
    }
  }

  async addCar(newVehicle) {
    try {
      const { data } = await this.apiClient.post('cars', newVehicle);
      return data;
    } catch (error) {
      console.log('Error', error);
    }
  }

  async get(id) {
    try {
      const { data } = await this.apiClient.get(`cars/${id}`)
    } catch (error) {
      console.log('Error', error)
    }
  }

  async delete(carId) {
    const { data } = await this.apiClient.delete(`cars/${carId}`)

    return true;
  }

  async edit(id, newVehicle) {
    try {
      const { data } = await this.apiClient.put(`cars/${id}`, newVehicle);
      return data;
    } catch (error) {
      console.log('Error', error);
    }
  }
}

export default new CarService();