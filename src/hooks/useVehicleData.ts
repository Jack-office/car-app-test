import { useState, useEffect } from 'react';
import { fetchVehicleMakes, fetchVehicleModels } from '../utils/api';
import { ApiUrls, VehicleData } from '@/interfaces/backend';


export const useVehicleData = ({ typesApiUrl, modelsApiUrl }: ApiUrls): VehicleData => {
 
  const [makes, setMakes] = useState<any[]>([]);
  const [models, setModels] = useState<any[]>([]);
  const [makeId, setMakeId] = useState<string | null>(null);
  const [modelYear, setModelYear] = useState<string>('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMakes = async () => {
      try {
        const data = await fetchVehicleMakes(typesApiUrl);
        setMakes(data.Results);
      } catch (error) {
        console.error('Error fetching vehicle makes:', error);
      }
    };

    fetchMakes();
  }, [typesApiUrl]);

  useEffect(() => {
    setIsButtonDisabled(!(makeId !== null && modelYear));
  }, [makeId, modelYear]);

  const handleButtonClick = async () => {
    if (!isButtonDisabled && makeId !== null && modelYear) {
      setLoading(true);
      setError(null);
      try {
        const results = await fetchVehicleModels(modelsApiUrl, makeId, modelYear);
        setModels(results);
      } catch (error) {
        setError('Failed to fetch vehicle models.');
        console.error('Error fetching vehicle models:', error);
      } finally {
        setLoading(false);
      }
    } else {
      console.error('Make ID or Model Year is not valid.');
    }
  };

  return {
    makes,
    models,
    makeId,
    modelYear,
    isButtonDisabled,
    loading,
    error,
    setMakeId,
    setModelYear,
    handleButtonClick
  };
};
