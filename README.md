# Details of changes
Please find below details of ALL changes
Thank you for this wonderful and unique coding challenge! It was very enjoyable and fun. 
I wish you a great day ahead :)

## Steps to RUN
- Run Node Server - `npm run start-server`
- Run React Client - `npm start`

## Steps to RUN Tests
- To run unit tests - `npm run test`
- To run unit tests and snapshots - `npm run test -- -u`

## Tech stack used
- Server - Node with express.js
- Frontend Client
    - Typescript
    - React
    - Redux, Saga
- Styling
    - Material UI
    - Theme and Styled-Components
- Unit Testing - React Testing Library

## Component Structure
1. Created 3 Main Components (In order of their appearence on screen)
    - Header Bar
    - Image Gallery
    - Image Card
    - Modal
2. Each Component has -
    - Separate folder
    - index.tsx
    - styles.tsx (Styled-Components)
    - index.spec.tsx

## Provider (Redux and Saga)
1. Redux and Redux-Saga used to called Mock API to get Image urls and manage store
2. Has Reducer, Action and Saga files

## Theme
1. A THEME file (inside Theme folder) exports custom Theme object with colors
2. This Theme object is used in All Styled Components

## Responsiveness
1. Material-UI GRID and Flexbox used
2. Image Gallery is responsive and adapts to changing screen/window size