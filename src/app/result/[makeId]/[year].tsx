import { notFound } from 'next/navigation';

interface VehicleModel {
  Model_Name: string;
}

interface VehicleModelsResponse {
  Results: VehicleModel[];
}

async function fetchVehicleModels(
  makeId: string,
  year: string
): Promise<VehicleModel[]> {
  try {
    const apiUrl =
      process.env.NEXT_PUBLIC_VEHICLE_MODELS_API?.replace(
        '{makeId}',
        makeId
      ).replace('{year}', year) || '';

    const response = await fetch(apiUrl);
    const data: VehicleModelsResponse = await response.json();
    return data.Results;
  } catch (error) {
    console.error('Error fetching vehicle models:', error);
    return [];
  }
}

export default async function Result({
  params,
}: {
  params: { makeId: string; year: string };
}) {
  const { makeId, year } = params;
  const models = await fetchVehicleModels(makeId, year);

  if (models.length === 0) {
    return notFound();
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">
        Results for {makeId} - {year}
      </h1>
      {models.length > 0 ? (
        <ul>
          {models.map((model) => (
            <li key={model.Model_Name} className="border-b p-2">
              {model.Model_Name}
            </li>
          ))}
        </ul>
      ) : (
        <p>No models found</p>
      )}
    </div>
  );
}
