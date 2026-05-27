# Stock Portfolio Management API

A comprehensive RESTful Web API built with ASP.NET Core for managing stock portfolios, tracking investments, and facilitating user discussion through comments. The API integrates with the Financial Modeling Prep (FMP) API to fetch real-time stock data and provides JWT-based authentication for secure access.

## 📋 Table of Contents

- [Features](#features)
- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Prerequisites](#prerequisites)
- [Installation & Setup](#installation--setup)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Database Schema](#database-schema)
- [Authentication & Security](#authentication--security)
- [External Integrations](#external-integrations)
- [Project Structure](#project-structure)

---

## Features

### 🔐 User Management & Authentication
- **User Registration**: Create new accounts with email and secure password
- **User Login**: Authenticate with JWT tokens for stateless, secure API access
- **JWT Authentication**: Token-based security for protected endpoints
- **Role-Based Access Control**: User roles for future authorization enhancements

### 📈 Stock Management
- **Browse Stocks**: Get a paginated list of all stocks in the database
- **Stock Details**: Retrieve detailed information about individual stocks (symbol, company name, purchase price, last dividend, industry, market cap)
- **Create Stocks**: Add new stocks to the database (admin functionality)
- **Update Stocks**: Modify stock information (price, dividend, etc.)
- **Delete Stocks**: Remove stocks from the database
- **Advanced Querying**: 
  - Pagination support (skip, take)
  - Sorting by various fields
  - Dynamic filtering capabilities

### 💼 Portfolio Management
- **User Portfolios**: Each authenticated user can maintain a personal stock portfolio
- **Add Stocks to Portfolio**: Link stocks to user's investment portfolio
- **Remove Stocks from Portfolio**: Easily divest from holdings
- **Portfolio Overview**: View all stocks in your portfolio with aggregated data
- **Real-time Stock Lookup**: Automatically fetch and add stocks from Financial Modeling Prep API if not in database

### 💬 Community Comments & Discussion
- **Stock Comments**: Users can comment on stocks they're interested in or own
- **Create Comments**: Add title and content-based comments on stocks
- **Read Comments**: Browse all comments on a stock or view individual comments
- **Update Comments**: Edit your own comments
- **Delete Comments**: Remove comments (creator only)
- **Comment Filtering**: 
  - Filter comments by stock
  - Pagination for large comment threads
  - Sort by creation date

### 🔄 External Data Integration
- **Financial Modeling Prep Integration**: Real-time stock data lookup from FMP API
- **Automatic Stock Creation**: When users search for a stock not in the database, it's automatically fetched and added from FMP
- **Comprehensive Stock Data**: Access to company profiles, market cap, industry information

---

## Overview

This is a backend API designed to provide complete stock portfolio management functionality. Users can register accounts, manage their stock portfolios, track individual stocks with detailed information, and engage with the community through comments on stocks. The API is built following clean architecture principles with separation of concerns through repositories, services, and DTOs.

---

### 🔐 User Management & Authentication
- **User Registration**: Create new accounts with email and secure password
- **User Login**: Authenticate with JWT tokens for stateless, secure API access
- **JWT Authentication**: Token-based security for protected endpoints
- **Role-Based Access Control**: User roles for future authorization enhancements

### 📈 Stock Management
- **Browse Stocks**: Get a paginated list of all stocks in the database
- **Stock Details**: Retrieve detailed information about individual stocks (symbol, company name, purchase price, last dividend, industry, market cap)
- **Create Stocks**: Add new stocks to the database (admin functionality)
- **Update Stocks**: Modify stock information (price, dividend, etc.)
- **Delete Stocks**: Remove stocks from the database
- **Advanced Querying**: 
  - Pagination support (skip, take)
  - Sorting by various fields
  - Dynamic filtering capabilities

### 💼 Portfolio Management
- **User Portfolios**: Each authenticated user can maintain a personal stock portfolio
- **Add Stocks to Portfolio**: Link stocks to user's investment portfolio
- **Remove Stocks from Portfolio**: Easily divest from holdings
- **Portfolio Overview**: View all stocks in your portfolio with aggregated data
- **Real-time Stock Lookup**: Automatically fetch and add stocks from Financial Modeling Prep API if not in database

### 💬 Community Comments & Discussion
- **Stock Comments**: Users can comment on stocks they're interested in or own
- **Create Comments**: Add title and content-based comments on stocks
- **Read Comments**: Browse all comments on a stock or view individual comments
- **Update Comments**: Edit your own comments
- **Delete Comments**: Remove comments (creator only)
- **Comment Filtering**: 
  - Filter comments by stock
  - Pagination for large comment threads
  - Sort by creation date

### 🔄 External Data Integration
- **Financial Modeling Prep Integration**: Real-time stock data lookup from FMP API
- **Automatic Stock Creation**: When users search for a stock not in the database, it's automatically fetched and added from FMP
- **Comprehensive Stock Data**: Access to company profiles, market cap, industry information

---

## Tech Stack

### Backend Framework
- **ASP.NET Core 10.0** - Modern, high-performance web framework
- **C# 13** - Latest language features for type safety and productivity

### Database
- **SQL Server** - Robust relational database management system
- **Entity Framework Core** - ORM for database access and migrations

### Authentication & Security
- **ASP.NET Core Identity** - User and role management
- **JWT (JSON Web Tokens)** - Stateless authentication
- **Bearer Token Authentication** - Secure API access

### API Documentation
- **Swagger/OpenAPI** - Interactive API documentation and testing
- **Swashbuckle** - Swagger integration for ASP.NET Core

### External Services
- **Financial Modeling Prep API** - Real-time stock data and market information

### Additional Libraries
- **Newtonsoft.Json (Json.NET)** - JSON serialization and deserialization
- **Microsoft.EntityFrameworkCore.SqlServer** - SQL Server provider for EF Core

---

## Architecture

The API follows a **layered architecture** with clear separation of concerns:

```
API Layer (Controllers)
    ↓
Service & Business Logic Layer (Services, Repositories)
    ↓
Data Access Layer (Entity Framework Core)
    ↓
Database (SQL Server)
```

### Key Design Patterns

- **Repository Pattern**: Abstracts data access logic with `IStockRepository`, `ICommentRepository`, `IPortfolioRepository`
- **Service Pattern**: Business logic encapsulation with `TokenService`, `FMPService`
- **Dependency Injection**: Loose coupling through interface-based dependencies
- **DTO Pattern**: Data Transfer Objects for request/response separation
- **Mapper Pattern**: Clean entity-to-DTO conversion with extension methods

---

## Prerequisites

Before running the application, ensure you have the following installed:

- **.NET 10.0 SDK** or later
- **SQL Server** (LocalDB, Express, or full version)
- **Visual Studio 2022** or **Visual Studio Code** with C# extensions (optional but recommended)
- **Git** (for version control)

---

## Installation & Setup

### 1. Clone the Repository
```bash
git clone <repository-url>
cd WebApi
```

### 2. Navigate to API Directory
```bash
cd api
```

### 3. Restore NuGet Packages
```bash
dotnet restore
```

### 4. Create or Update the Database
The application uses Entity Framework Core migrations to manage the database schema.

```bash
# Apply pending migrations to create/update the database
dotnet ef database update

# Or if using Visual Studio Package Manager Console
Update-Database
```

---

## Configuration

### appsettings.json Configuration

The `appsettings.json` file contains essential configuration:

```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Your-SQL-Server-Connection-String"
  },
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "AllowedHosts": "*",
  "FMP_API_KEY": "Your-Financial-Modeling-Prep-API-Key",
  "JWT": {
    "Issuer": "http://localhost:5246",
    "Audience": "http://localhost:5246",
    "SigningKey": "Your-Long-Secret-Signing-Key-Min-256-Bits"
  }
}
```

### Required Configuration Steps

1. **Database Connection String**
   - Update the `DefaultConnection` string with your SQL Server instance
   - Format: `Data Source=YOUR_SERVER;Initial Catalog=finshark;Integrated Security=True;`

2. **Financial Modeling Prep API Key**
   - Register at [financialmodelingprep.com](https://financialmodelingprep.com)
   - Get your free API key from the dashboard
   - Set `FMP_API_KEY` in appsettings.json

3. **JWT Configuration**
   - **Issuer**: URL where the token is issued (typically your API URL)
   - **Audience**: URL that will use the token (typically your API URL)
   - **SigningKey**: Long, random string used to sign JWT tokens (must be at least 256 bits)
   - Generate a secure key: Use a password generator or `dotnet user-secrets` for development

### Development Secrets

For sensitive data in development, use User Secrets:

```bash
# Initialize secrets for the project
dotnet user-secrets init

# Set API key
dotnet user-secrets set "FMP_API_KEY" "your-actual-api-key"

# Set JWT Signing Key
dotnet user-secrets set "Jwt:SigningKey" "your-secure-key"
```

---

## Running the Application

### Via Command Line

```bash
# Navigate to the api directory
cd api

# Run the application
dotnet run

# Application will start at http://localhost:5246 (or configured URL)
```

### Via Visual Studio

1. Open the solution file (`api.slnx`)
2. Set `api` as the startup project
3. Press **F5** or click **Run**

### Accessing the API

- **API Base URL**: `http://localhost:5246`
- **Swagger Documentation**: `http://localhost:5246/swagger/index.html`
- **HTTP File** (Visual Studio): `api.http` - Contains sample requests for all endpoints

---

## API Endpoints

### Account Endpoints
Base URL: `/api/account`

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---|
| POST | `/register` | Register a new user | No |
| POST | `/login` | Login and receive JWT token | No |

**Register Request:**
```json
{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "SecurePassword123!"
}
```

**Login Request:**
```json
{
  "username": "john_doe",
  "password": "SecurePassword123!"
}
```

**Response:**
```json
{
  "username": "john_doe",
  "email": "john@example.com",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### Stock Endpoints
Base URL: `/api/stock`

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---|
| GET | `/` | Get all stocks with pagination | Yes |
| GET | `/{id}` | Get stock by ID | No |
| POST | `/` | Create a new stock | Yes |
| PUT | `/{id}` | Update stock information | Yes |
| DELETE | `/{id}` | Delete a stock | Yes |

**Query Parameters for GET /:**
- `pageNumber`: Page number for pagination (default: 1)
- `pageSize`: Items per page (default: 20)
- `sortBy`: Field to sort by (symbol, companyName, etc.)
- `isDescending`: Descending order (true/false)

**Create Stock Request:**
```json
{
  "symbol": "AAPL",
  "companyName": "Apple Inc.",
  "purchase": 150.25,
  "lastDiv": 0.24,
  "industry": "Technology",
  "marketCap": 3000000000000
}
```

### Portfolio Endpoints
Base URL: `/api/portfolio`

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---|
| GET | `/` | Get user's portfolio | Yes |
| POST | `/` | Add stock to portfolio | Yes |
| DELETE | `/` | Remove stock from portfolio | Yes |

**Add to Portfolio Request:**
```
POST /api/portfolio?symbol=AAPL
```

### Comment Endpoints
Base URL: `/api/comment`

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---|
| GET | `/` | Get all comments | Yes |
| GET | `/{id}` | Get comment by ID | No |
| POST | `/` | Create new comment | Yes |
| PUT | `/{id}` | Update comment | Yes |
| DELETE | `/{id}` | Delete comment | Yes |

**Create Comment Request:**
```json
{
  "title": "Great stock for long-term",
  "content": "This stock has shown excellent growth potential...",
  "stockId": 1
}
```

**Query Parameters for GET /:**
- `pageNumber`: Page number for pagination
- `pageSize`: Items per page
- `isDescending`: Sort by newest first

---

## Database Schema

### Tables

#### AppUser
- Extends ASP.NET Core Identity User
- Fields: UserName, Email, PasswordHash, etc.
- Relations: One-to-Many with Portfolio and Comment

#### Stock
- **Id** (int, PK): Unique identifier
- **Symbol** (string): Stock ticker symbol (e.g., "AAPL")
- **CompanyName** (string): Full company name
- **Purchase** (decimal): Purchase/current price
- **LastDiv** (decimal): Last dividend paid
- **Industry** (string): Industry classification
- **MarketCap** (long): Market capitalization
- Relations: Many-to-Many with Portfolio, One-to-Many with Comment

#### Portfolio (Junction Table)
- **AppUserId** (string, FK): User reference
- **StockId** (int, FK): Stock reference
- Primary Key: Composite (AppUserId, StockId)
- Relations: Many-to-One with AppUser and Stock

#### Comment
- **Id** (int, PK): Unique identifier
- **Title** (string): Comment title
- **Content** (string): Comment body
- **CreatedOn** (datetime): Creation timestamp
- **StockId** (int, FK): Associated stock
- **AppUserId** (string, FK): Comment author
- Relations: Many-to-One with Stock and AppUser

### Entity Relationships

```
AppUser (1) ──── (Many) Portfolio (Many) ──── (1) Stock
  |                                              |
  └──────────── (1) ──── (Many) Comment ─────────┘
```

---

## Authentication & Security

### JWT Token Flow

1. **User Registration/Login** → Server validates credentials
2. **Token Generation** → Server creates JWT token containing user information
3. **Token Usage** → Client includes token in `Authorization: Bearer <token>` header
4. **Token Validation** → Server validates signature and claims on each request

### Token Components

- **Header**: Algorithm and token type (HS256, JWT)
- **Payload**: Contains issuer, audience, user claims, expiration time
- **Signature**: HMAC-SHA256 signature using the secret key

### Protected Routes

The following endpoints require a valid JWT token:
- `GET /api/stock` - Get all stocks
- `POST /api/stock/*` - Create/update/delete stocks
- `GET /api/portfolio` - View portfolio
- `POST /api/portfolio` - Manage portfolio
- `GET /api/comment` - View comments
- `POST /api/comment/*` - Create/update/delete comments

### Security Best Practices

1. **Never commit secrets** to version control
2. **Use strong JWT signing keys** (minimum 256 bits of entropy)
3. **Validate all user inputs** (performed via DTOs and ModelState)
4. **Hash passwords** (handled by ASP.NET Core Identity)
5. **HTTPS only in production** (configure in appsettings)
6. **Token expiration** (should be implemented in future versions)
7. **Refresh tokens** (recommended for production)

---

## External Integrations

### Financial Modeling Prep (FMP) API

The API integrates with FMP for real-time stock data:

**Integration Points:**
- `FMPService` class handles all FMP API calls
- Endpoint: `https://financialmodelingprep.com/stable/profile`
- Authentication: API key-based (query parameter)

**Features:**
- Automatic stock lookup by symbol
- Real-time company data retrieval
- Fallback mechanism: If stock not in database, fetches from FMP automatically

**Setup:**
1. Register at [financialmodelingprep.com](https://financialmodelingprep.com)
2. Get your free API key
3. Add to `appsettings.json`: `"FMP_API_KEY": "your-key"`

**Rate Limiting:**
- Free tier: 250 requests/day
- Consider implementing caching for production use

---

## Project Structure

```
api/
├── Controllers/              # HTTP request handlers
│   ├── AccountController.cs
│   ├── StockController.cs
│   ├── PortfolioController.cs
│   └── CommentController.cs
├── Data/                     # Database context
│   └── ApplicationDBContext.cs
├── Dtos/                     # Data Transfer Objects
│   ├── Account/
│   ├── Stock/
│   ├── Comment/
│   └── ...
├── Extensions/               # Extension methods
│   └── ClaimsExtensions.cs
├── Helpers/                  # Helper classes
│   ├── QueryObject.cs
│   └── CommentQueryObject.cs
├── Interfaces/               # Service/Repository contracts
│   ├── IStockRepository.cs
│   ├── ICommentRepository.cs
│   ├── IPortfolioRepository.cs
│   ├── ITokenService.cs
│   └── IFMPService.cs
├── Mappers/                  # DTO mapping extensions
│   ├── StockMapper.cs
│   └── CommentMapper.cs
├── Models/                   # Database entities
│   ├── AppUser.cs
│   ├── Stock.cs
│   ├── Portfolio.cs
│   └── Comment.cs
├── Migrations/               # EF Core migrations
├── Repository/               # Data access implementations
│   ├── StockRepository.cs
│   ├── CommentRepository.cs
│   └── PortfolioRepository.cs
├── Service/                  # Business logic
│   ├── FMPService.cs
│   └── TokenService.cs
├── Program.cs                # Application startup and configuration
├── appsettings.json          # Configuration file
├── api.csproj                # Project file
└── api.http                  # HTTP test file

frontend/                      # React frontend (complementary)
└── ...
```

---

## Future Enhancements

Potential improvements and features for future versions:

- [ ] **Token Refresh**: Implement refresh tokens for extended sessions
- [ ] **Token Expiration**: Add configurable token expiration times
- [ ] **Advanced Filtering**: More sophisticated stock filtering and search
- [ ] **Portfolio Analytics**: Gain/loss calculations, performance metrics
- [ ] **Real-time Updates**: WebSocket integration for live stock prices
- [ ] **Caching**: Redis integration for improved performance
- [ ] **Rate Limiting**: Protect API from abuse
- [ ] **Logging & Monitoring**: Serilog integration for better logging
- [ ] **Unit & Integration Tests**: Comprehensive test coverage
- [ ] **Email Notifications**: Alert users on portfolio changes
- [ ] **Dividend Tracking**: Track received dividends over time
- [ ] **Export Functionality**: Export portfolio data to CSV/PDF

---

## Troubleshooting

### Common Issues

**Issue**: "Cannot connect to database"
- **Solution**: Verify SQL Server is running and connection string is correct
- Check server name matches your SQL Server instance name

**Issue**: "FMP API returns 401 Unauthorized"
- **Solution**: Verify API key is valid and correctly set in `appsettings.json`
- Check if you've exceeded the free tier rate limit

**Issue**: "JWT Token Invalid"
- **Solution**: Ensure signing key is correctly set and matches between token generation and validation
- Verify token hasn't expired

**Issue**: "500 Internal Server Error"
- **Solution**: Check application logs in the console output
- Ensure all dependencies are correctly registered in `Program.cs`

---

## Contributing

When contributing to this project:

1. Follow C# naming conventions (PascalCase for classes/methods)
2. Keep controllers thin - business logic belongs in services
3. Use DTOs for API contracts
4. Add comments for complex logic
5. Test changes with the provided `.http` file

---

## License

This project is provided as-is for educational and portfolio purposes.