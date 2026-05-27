# Frontend Overview

This frontend is a supporting interface for the backend Web API. The main focus of this project is the backend API; this React app was added to provide a usable, visual experience for inspecting and testing backend functionality.

## What this frontend can do

- Allow users to register and log in with the backend authentication system.
- Display a searchable stock lookup page where users can find companies by ticker.
- Show a portfolio section populated from backend data, including the ability to add and remove stocks.
- Present detailed company information for each ticker, including price, market cap, volume, sector, and description.
- Provide financial analysis views such as company profile metrics, income statement, balance sheet, cash flow statement, and historical dividend data.
- Enable users to read and post stock comments tied to specific ticker symbols.

## Main user flows

- Sign up for a new account and authenticate with the backend.
- Sign in to access protected pages.
- Search for a company and add selected stocks to a portfolio.
- View saved portfolio items and delete symbols from the portfolio.
- Open a company details page to explore its financial overview and metrics.
- Navigate through company dashboard tabs for profile, financial statements, and dividend history.
- Post commentary for a chosen stock and view existing comments.

## Why this frontend exists

This frontend is intentionally designed as a complementary demonstration layer. It supports the backend by:

- showing the API in action with real user interactions,
- making backend data easy to explore through a UI,
- highlighting the application’s core functionality for portfolio review,
- supporting the project’s portfolio presentation with a full-stack experience.

## Running the frontend

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the app:
   ```bash
   npm start
   ```

> Note: The backend Web API remains the primary project component. The frontend is included to demonstrate and visualize the backend functionality.
