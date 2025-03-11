# ChemPath Frontend

A React-based frontend for the ChemPath application, which helps students find step-by-step reaction pathways between chemical compounds.

## Features

- **Compound Explorer**: Browse and search through the database of chemical compounds
- **Pathway Finder**: Find reaction pathways between compounds with step-by-step instructions
- **Responsive Design**: Works on desktop and mobile devices
- **Modern UI**: Built with Material UI for a clean, modern look

## Technology Stack

- **React**: Frontend library for building user interfaces
- **TypeScript**: Type-safe JavaScript
- **Material UI**: Component library for consistent design
- **React Router**: For navigation between pages
- **React Query**: For data fetching and caching
- **Axios**: For API requests

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Navigate to the frontend directory:
   ```
   cd Frontend/chempath-frontend
   ```
3. Install dependencies:
   ```
   npm install
   ```
   or
   ```
   yarn install
   ```

### Running the Development Server

```
npm start
```

or

```
yarn start
```

This will start the development server at [http://localhost:3000](http://localhost:3000).

### Building for Production

```
npm run build
```

or

```
yarn build
```

This will create an optimized production build in the `build` folder.

## Project Structure

- `src/components`: Reusable UI components
- `src/pages`: Page components for different routes
- `src/services`: API service functions
- `src/utils`: Utility functions and configuration
- `src/hooks`: Custom React hooks
- `src/types`: TypeScript type definitions
- `src/assets`: Static assets like images

## Backend Integration

The frontend is designed to work with the ChemPath backend API. Make sure the backend server is running at the URL specified in `src/services/api.ts`.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.
