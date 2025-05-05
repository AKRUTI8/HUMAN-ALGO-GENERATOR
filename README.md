# Human Algorithm Generator Backend

This is the backend service for the Human Algorithm Generator project.

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Setup

1. Clone the repository:

```bash
git clone <repository-url>
cd human-algo-generator
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Create a `.env` file in the root directory and add the following variables:

```
PORT=3000
NODE_ENV=development
```

## Running the Application

### Development Mode

```bash
npm run dev
# or
yarn dev
```

### Production Mode

```bash
npm start
# or
yarn start
```

### Running Tests

```bash
npm test
# or
yarn test
```

## API Endpoints

- `GET /`: Welcome message
- More endpoints to be added...

## Project Structure

```
├── src/
│   └── index.js          # Main application entry point
├── .env                  # Environment variables
├── .gitignore           # Git ignore rules
├── package.json         # Project dependencies and scripts
└── README.md           # Project documentation
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
