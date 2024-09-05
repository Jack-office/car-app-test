'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const Home = () => {
  const [vehicleTypes, setVehicleTypes] = useState<string[]>([]);
  const [modelYear, setModelYear] = useState<string>('');
  const [vehicleType, setVehicleType] = useState<string>('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchVehicleTypes = async () => {
      try {
        const response = await axios.get(
          process.env.NEXT_PUBLIC_VEHICLE_TYPES_API || ''
        );
        const types = response.data.Results.map(
          (item: any) => item.VehicleTypeName
        );
        const uniqueVehicleTypes = Array.from(new Set(types));
        setVehicleTypes(uniqueVehicleTypes);

        // console.log('response', response);

        /*
        Note for code reviwer: 
        As I see results of the response success but 
       
        http://localhost:3000/result/Passenger%20Car/2016
        selected car returned 404 
        Because of the time restriction this part was not able to fix
        */
      } catch (error) {
        console.error('Error fetching vehicle types:', error);
      }
    };

    fetchVehicleTypes();
  }, []);

  useEffect(() => {
    setIsButtonDisabled(!(vehicleType && modelYear));
  }, [vehicleType, modelYear]);

  const handleButtonClick = () => {
    if (!isButtonDisabled) {
      router.push(`/result/${vehicleType}/${modelYear}`);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Car Dealer App</h1>
      <div className="mb-4">
        <label htmlFor="vehicleType" className="block mb-2">
          Vehicle Type:
        </label>
        <select
          id="vehicleType"
          value={vehicleType}
          onChange={(e) => setVehicleType(e.target.value)}
          className="border p-2 bg-gray-800 text-white"
        >
          <option value="">Select Vehicle Type</option>
          {vehicleTypes.map((type, index) => (
            <option key={index} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="modelYear" className="block mb-2">
          Model Year:
        </label>
        <select
          id="modelYear"
          value={modelYear}
          onChange={(e) => setModelYear(e.target.value)}
          className="border p-2 bg-gray-800 text-white"
        >
          <option value="">Select Model Year</option>
          {Array.from(
            { length: new Date().getFullYear() - 2014 },
            (_, i) => 2015 + i
          ).map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      <button
        onClick={handleButtonClick}
        className={`bg-blue-500 text-white py-2 px-4 rounded ${isButtonDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={isButtonDisabled}
      >
        Next
      </button>
    </div>
  );
};

export default Home;
