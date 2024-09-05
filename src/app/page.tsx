"use client";

import { useVehicleData } from '../hooks/useVehicleData';
import CustomSelect from '../components/CustomSelect';
import { Option, Make, Model } from '../interfaces/backend';

const Home = () => {
  const {
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
  } = useVehicleData({
    typesApiUrl: process.env.NEXT_PUBLIC_VEHICLE_TYPES_API || '',
    modelsApiUrl: process.env.NEXT_PUBLIC_VEHICLE_MODELS_API || ''
  });

  const makeOptions: Option[] = makes.map((make: Make) => ({
    value: make.MakeId,
    label: make.MakeName
  }));

  const yearOptions: Option[] = Array.from({ length: new Date().getFullYear() - 2014 }, (_, i) => 2015 + i).map(year => ({
    value: year.toString(),
    label: year.toString()
  }));

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Car Dealer App</h1>

      <CustomSelect
        id="vehicleMake"
        value={makeId ?? ''}
        onChange={setMakeId}
        options={makeOptions}
        placeholder="Select Vehicle Make"
      />

      <CustomSelect
        id="modelYear"
        value={modelYear}
        onChange={setModelYear}
        options={yearOptions}
        placeholder="Select Model Year"
      />

      <button
        onClick={handleButtonClick}
        className={`bg-blue-500 text-white py-2 px-4 rounded ${isButtonDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={isButtonDisabled}
      >
        Fetch Models
      </button>

      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {models.length > 0 && (
        <ul className="mt-4">
          {models.map((model: Model) => (
            <li key={model.Model_ID}>{model.Model_Name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
