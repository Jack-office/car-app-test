# Car Dealer App

## Overview

This project is organized as follows:

### `src/`

- **`components/`**: Contains reusable UI components.
  - `CustomSelect.tsx`: A component for rendering a custom select dropdown.

- **`hooks/`**: Custom React hooks for state and logic management.
  - `useVehicleData.ts`: Hook to manage vehicle data state and fetching logic.

- **`interfaces/`**: TypeScript interfaces and types.
  - `backend.ts`: Type definitions for API data and component props.

- **`utils/`**: Utility functions and API helpers.
  - `api.ts`: Functions for making API requests.

- **`app/`**: Main application files and styles.
  - `page.tsx`: The main page component.
  - `layout.tsx`: Layout component for the application.
  - `globals.css`: Global CSS styles applied to the entire application.
  - **`fonts/`**: Custom fonts used in the application.

### Configuration Files

- **`.env.local`**: Environment variables for local development.
- **`.eslintrc.js`** and **`.eslintrc.json`**: ESLint configuration files for linting the codebase.
- **`.prettierrc`**: Prettier configuration file for code formatting.
- **`.gitignore`**: Specifies files and directories to be ignored by Git.
- **`tsconfig.json`**: TypeScript configuration file.
- **`tailwind.config.ts`**: Tailwind CSS configuration file.
- **`postcss.config.mjs`**: PostCSS configuration file.
- **`next.config.mjs`**: Next.js configuration file.
- **`package.json`**: Defines project metadata and dependencies.
- **`package-lock.json`**: Locks the versions of project dependencies.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
