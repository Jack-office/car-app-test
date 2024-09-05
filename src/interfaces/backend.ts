export interface Make {
	MakeId: string;
	MakeName: string;
  }
  
  export interface Model {
	Model_ID: string;
	Model_Name: string;
  }
  
  export interface Option {
	value: string;
	label: string;
  }
  
  export interface CustomSelectProps {
	id: string;
	value: string;
	onChange: (value: string) => void;
	options: Option[];
	placeholder?: string;
  }
  
  export interface VehicleData {
	makes: Make[];
	models: Model[];
	makeId: string | null;
	modelYear: string;
	isButtonDisabled: boolean;
	loading: boolean;
	error: string | null;
	setMakeId: (id: string | null) => void;
	setModelYear: (year: string) => void;
	handleButtonClick: () => void;
  }
  
  export interface ApiUrls {
	typesApiUrl: string;
	modelsApiUrl: string;
  }
  