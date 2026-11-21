\# Anas Alam | Full Stack Developer Portfolio



A modern, responsive full-stack developer portfolio built to showcase my professional profile, technical skills, work experience, projects, and contact information.



The application combines a \*\*Next.js frontend\*\* with an \*\*ASP.NET Core Web API backend\*\*, using Entity Framework Core and SQL Server for data persistence.



It also includes a secure admin dashboard for managing contact messages and an interactive portfolio chatbot.



\---



\## Overview



This portfolio is designed to provide a professional overview of my development journey and technical capabilities.



\### Key Features



\- \*\*Modern Portfolio UI:\*\* Responsive and interactive user interface.

\- \*\*About Me:\*\* Professional introduction and background.

\- \*\*Technical Skills:\*\* Organized presentation of technologies and skills.

\- \*\*Work Experience:\*\* Professional experience and career journey.

\- \*\*Projects Showcase:\*\* Selected projects and technical work.

\- \*\*Contact Form:\*\* Allows visitors to send messages.

\- \*\*Admin Authentication:\*\* JWT-based administrator authentication.

\- \*\*Admin Dashboard:\*\* Manage and review contact messages.

\- \*\*Portfolio Chatbot:\*\* Interactive chatbot using portfolio-specific knowledge.

\- \*\*Database Integration:\*\* Persistent data storage using Entity Framework Core and SQL Server.

\- \*\*CV Download:\*\* Visitors can access my resume directly from the portfolio.



\---



\## Technology Stack



| Layer | Technologies |

|---|---|

| Frontend | Next.js, React, TypeScript |

| Styling | Tailwind CSS |

| Backend | ASP.NET Core Web API (.NET 10) |

| Programming Language | C# |

| ORM | Entity Framework Core |

| Database | SQL Server / LocalDB (Development) |

| Authentication | JWT Authentication |

| Password Security | BCrypt |

| Chatbot | Backend-integrated portfolio knowledge chatbot |

| Version Control | Git \& GitHub |



\---



\## System Architecture



The application follows a frontend-backend architecture with a separate database layer.



```text

&#x20;             Visitor / Admin

&#x20;                    |

&#x20;                    v

&#x20;         Next.js Frontend

&#x20;            (React UI)

&#x20;                    |

&#x20;                    v

&#x20;         ASP.NET Core Web API

&#x20;                    |

&#x20;         +----------+----------+

&#x20;         |          |          |

&#x20;         v          v          v

&#x20;      Contact     Admin      Chatbot

&#x20;      Services    Auth       Service

&#x20;         |          |          |

&#x20;         +----------+----------+

&#x20;                    |

&#x20;                    v

&#x20;            Entity Framework Core

&#x20;                    |

&#x20;                    v

&#x20;               SQL Server

```



\---



\## Project Structure



```text

Anas-fullstack-portfolio/

│

├── frontend/

│   ├── app/

│   │   ├── admin/

│   │   ├── api/

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

│   │   └── Anas\_Alam\_CV.pdf/

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

│   ├── Services/

│   ├── Settings/

│   ├── Program.cs

│   └── Portfolio.API.csproj

│

├── .gitignore

├── PROJECT\_PROGRESS.md

└── README.md

```



\---



\## Getting Started



Follow these instructions to run the project locally.



\### Prerequisites



Install the following tools:



\- Node.js and npm

\- .NET 10 SDK

\- SQL Server LocalDB or a compatible SQL Server instance

\- Visual Studio or Visual Studio Code

\- Git



\### 1. Clone the Repository



```bash

git clone https://github.com/mdanasalam24/Anas-fullstack-portfolio.git

```



Navigate into the project:



```bash

cd Anas-fullstack-portfolio

```



\### 2. Frontend Setup



Navigate to the frontend directory:



```bash

cd frontend

```



Install dependencies:



```bash

npm install

```



Create a `.env.local` file and configure the backend/API URL according to the frontend configuration.



Run the development server:



```bash

npm run dev

```



Frontend URL:



```text

http://localhost:3000

```



\### 3. Backend Setup



Open a new terminal and navigate to:



```bash

cd Anas-fullstack-portfolio/backend

```



Restore dependencies:



```bash

dotnet restore

```



Configure the backend settings in `appsettings.json` or through environment variables.



Required configuration:



\- Database connection string

\- JWT secret key

\- JWT issuer

\- JWT audience



\*\*Important:\*\* Never commit actual credentials, API keys, database passwords, or JWT secrets to source control.



\### 4. Database Setup



The project uses Entity Framework Core migrations to manage database schema changes.



Apply migrations:



```bash

dotnet ef database update

```



If the EF Core CLI is not installed:



```bash

dotnet tool install --global dotnet-ef

```



Run the backend:



```bash

dotnet run

```



The backend API address depends on the configured application launch profile.



\---



\## Main Backend Modules



| Module | Responsibility |

|---|---|

| AdminAuthController | Administrator authentication |

| ContactController | Contact message operations |

| ChatController | Portfolio chatbot operations |

| PortfolioDbContext | Database context |

| AdminSeeder | Development admin initialization |

| AdminAuthService | JWT authentication and login logic |

| ChatService | Portfolio knowledge-based responses |



\---



\## Frontend Routes



| Route | Description |

|---|---|

| `/` | Main portfolio |

| `/admin/login` | Administrator login |

| `/admin/dashboard` | Admin dashboard |

| `/admin/messages` | Contact message management |



\---



\## Database \& Migrations



Entity Framework Core Code First migrations are used to maintain the database schema.



The repository includes migrations for:



\- Initial database creation

\- Contact message status

\- Admin table

\- Chatbot-related tables



The development database uses SQL Server LocalDB. A compatible hosted database and production connection string are required for deployment.



\---



\## Security



Security-related implementation includes:



\- JWT-based administrator authentication

\- BCrypt password hashing

\- Protected admin functionality

\- Environment-based configuration for sensitive settings

\- Git ignore rules for local configuration and environment files



Production credentials must be configured separately through the hosting provider.



\---



\## Deployment



The project is maintained as a single GitHub repository with independently deployable frontend and backend applications.



Deployment configuration and production database setup are separate from local development.



\*\*Repository:\*\*  

https://github.com/mdanasalam24/Anas-fullstack-portfolio



\---



\## About Me



\*\*MD Anas Alam\*\*  

Full Stack Developer | C# | ASP.NET Core | Next.js



I am a software developer interested in building scalable backend applications, RESTful APIs, and modern web experiences.



My primary technical interests include:



\- C# and ASP.NET Core

\- REST API Development

\- Entity Framework Core

\- SQL Server

\- React and Next.js

\- Full Stack Application Development



\### Connect With Me



\- \*\*GitHub:\*\* https://github.com/mdanasalam24

\- \*\*Portfolio:\*\* Coming Soon

\- \*\*LinkedIn:\*\* Add your LinkedIn profile URL



\---



\*Built with passion for software development and continuous learning.\*

