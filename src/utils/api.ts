import axios from 'axios';

export const fetchVehicleMakes = async (apiUrl: string) => {
  const response = await fetch(apiUrl);
  const data = await response.json();
  return data;
};

export const fetchVehicleModels = async (apiUrl: string, makeId: string, modelYear: string) => {
  const url = apiUrl
    .replace('{makeId}', makeId.toString())
    .replace('{year}', modelYear);
  
  const response = await axios.get(url);
  return response.data.Results;
};
