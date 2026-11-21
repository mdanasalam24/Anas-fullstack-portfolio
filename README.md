# Anas Alam | Full Stack Developer Portfolio

<p align="center">
  <strong>A Modern Full Stack Developer Portfolio</strong>
  <br/>
  Built with Next.js, React, ASP.NET Core Web API and Entity Framework Core.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Frontend-Next.js-black?logo=next.js" alt="Next.js"/>
  <img src="https://img.shields.io/badge/Backend-ASP.NET%20Core-512BD4?logo=dotnet" alt="ASP.NET Core"/>
  <img src="https://img.shields.io/badge/Language-TypeScript-blue?logo=typescript" alt="TypeScript"/>
  <img src="https://img.shields.io/badge/Language-C%23-239120?logo=csharp" alt="C#"/>
  <img src="https://img.shields.io/badge/Database-SQL%20Server-CC2927?logo=microsoftsqlserver" alt="SQL Server"/>
</p>

---

## Overview

Welcome to my personal developer portfolio!

This project is a full-stack web application designed to showcase my professional profile, technical skills, work experience, projects, and contact information.

The application features a modern and responsive Next.js frontend integrated with an ASP.NET Core Web API backend. Entity Framework Core handles database operations, while JWT authentication secures administrator functionality.

It also includes an interactive portfolio chatbot that provides information about my professional background, skills, and projects.

## Key Features

- **Modern Portfolio Interface** – Responsive and interactive user experience.
- **Professional Profile** – Introduction, education, and developer background.
- **Technical Skills** – Organized technology and skills showcase.
- **Work Experience** – Professional experience and career journey.
- **Projects Showcase** – Display of selected development projects.
- **Contact Form** – Visitors can send messages directly.
- **Admin Authentication** – Secure JWT-based administrator login.
- **Admin Dashboard** – Manage and review submitted contact messages.
- **Portfolio Chatbot** – Knowledge-based chatbot with Hindi and English responses.
- **Database Integration** – Entity Framework Core Code First migrations.
- **CV Download** – Direct access to my professional resume.

## Technology Stack

| Category | Technology |
|---|---|
| Frontend Framework | Next.js |
| UI Library | React |
| Programming Language | TypeScript |
| Styling | Tailwind CSS |
| Backend Framework | ASP.NET Core Web API (.NET 10) |
| Backend Language | C# |
| ORM | Entity Framework Core |
| Database | SQL Server LocalDB (Development) |
| Authentication | JWT |
| Password Hashing | BCrypt |
| API Architecture | RESTful API |
| Version Control | Git & GitHub |

## System Architecture

The application follows a separated frontend and backend architecture.

```text
                 VISITOR / ADMIN
                        |
                        v
               NEXT.JS FRONTEND
                  (React UI)
                        |
                        v
              ASP.NET CORE WEB API
                        |
          +-------------+-------------+
          |             |             |
          v             v             v
     CONTACT         ADMIN         CHATBOT
     SERVICES        AUTH          SERVICE
          |             |             |
          +-------------+-------------+
                        |
                        v
                ENTITY FRAMEWORK CORE
                        |
                        v
                  SQL SERVER
```

## Project Structure

```text
Anas-fullstack-portfolio/
│
├── frontend/
│   ├── app/
│   │   ├── admin/
│   │   │   ├── dashboard/
│   │   │   ├── login/
│   │   │   └── messages/
│   │   ├── api/
│   │   │   └── admin/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │
│   ├── components/
│   │   ├── chatbot/
│   │   └── technology/
│   │
│   ├── public/
│   │   ├── images/
│   │   └── Anas_Alam_CV.pdf/
│   │
│   ├── package.json
│   └── next.config.ts
│
├── backend/
│   ├── Controllers/
│   ├── Data/
│   ├── DTOs/
│   ├── Knowledge/
│   ├── Migrations/
│   ├── Models/
│   ├── Properties/
│   ├── Services/
│   │   └── Interfaces/
│   ├── Settings/
│   ├── Program.cs
│   ├── Portfolio.API.csproj
│   └── appsettings.example.json
│
├── .gitignore
├── PROJECT_PROGRESS.md
└── README.md
```

## Getting Started

Follow the instructions below to run the application locally.

### Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/)
- [.NET 10 SDK](https://dotnet.microsoft.com/download/dotnet/10.0)
- SQL Server LocalDB or a compatible SQL Server instance
- Visual Studio or Visual Studio Code
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/mdanasalam24/Anas-fullstack-portfolio.git
```

Navigate to the project directory:

```bash
cd Anas-fullstack-portfolio
```

### 2. Frontend Setup

Navigate to the frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Create a `.env.local` file and configure the environment variables required by the frontend.

Run the development server:

```bash
npm run dev
```

Open your browser:

```text
http://localhost:3000
```

### 3. Backend Setup

Open another terminal and navigate to the backend directory:

```bash
cd Anas-fullstack-portfolio/backend
```

Restore NuGet packages:

```bash
dotnet restore
```

Configure the backend using `appsettings.json` or environment variables.

Required configuration:

- Database connection string
- JWT Secret Key
- JWT Issuer
- JWT Audience

Use `appsettings.example.json` as a reference for the required configuration.

**Security Note:** Never commit actual database credentials, JWT secrets, administrator passwords, or API keys to GitHub.

### 4. Database Setup

The project uses Entity Framework Core Code First migrations.

Install Entity Framework Core CLI if required:

```bash
dotnet tool install --global dotnet-ef
```

Apply the existing migrations:

```bash
dotnet ef database update
```

This creates or updates the database schema using the configured SQL Server connection.

### 5. Run the Backend

From the backend directory:

```bash
dotnet run
```

The API runs using the configured ASP.NET Core launch profile.

## Backend Modules

| Component | Responsibility |
|---|---|
| AdminAuthController | Administrator authentication |
| ContactController | Contact message operations |
| ChatController | Portfolio chatbot functionality |
| PortfolioDbContext | Entity Framework Core database context |
| AdminSeeder | Development administrator initialization |
| AdminAuthService | JWT authentication and login logic |
| ChatService | Portfolio knowledge-based chatbot responses |

## Frontend Routes

| Route | Description |
|---|---|
| `/` | Main portfolio website |
| `/admin/login` | Administrator login |
| `/admin/dashboard` | Administrator dashboard |
| `/admin/messages` | Contact message management |

## Database & Migrations

Entity Framework Core Code First approach is used for database schema management.

The repository includes migrations for:

- Initial database creation
- Contact message status
- Administrator table
- Chatbot-related tables

The development environment uses SQL Server LocalDB. Production deployment requires a compatible hosted database and a production connection string.

## Security

Security-related implementation includes:

- JWT-based administrator authentication.
- BCrypt password hashing.
- Protected administrator functionality.
- Environment-based configuration for sensitive credentials.
- Git ignore rules for local configuration files and environment variables.

Production secrets and credentials must be configured separately through the hosting provider.

## Deployment

The project is maintained in a single GitHub repository with separate frontend and backend applications.

Both applications can be deployed independently using suitable hosting platforms.

Production deployment requires:

- Frontend hosting.
- ASP.NET Core API hosting.
- A hosted SQL Server-compatible database.
- Production environment variables.
- Correct CORS configuration between frontend and backend.

Deployment configuration will be maintained separately from local development settings.

## About Me

**MD Anas Alam**

Full Stack Developer | C# | ASP.NET Core | Next.js

I am a software developer passionate about building modern web applications, backend systems, RESTful APIs, and practical software solutions.

My technical interests include:

- C# and ASP.NET Core
- RESTful API Development
- Entity Framework Core
- SQL Server
- React and Next.js
- Full Stack Application Development

### Connect With Me

- **GitHub:** [github.com/mdanasalam24](https://github.com/mdanasalam24)
- **Portfolio:** Coming Soon
- **LinkedIn:** Add your LinkedIn profile URL

---

<p align="center">
  <strong>Designed and Developed by MD Anas Alam</strong>
  <br/>
  <i>Building, Learning and Improving Through Code.</i>
</p>
