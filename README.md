# Google Sheets API with NestJS

This application provides an API to save and read changes in Google Sheets rows. It is built using NestJS and integrates with a PostgreSQL database. 

## Environment Variables

Before running the application, ensure you have configured the environment variables correctly. Below is a table explaining each variable:

| Variable                    | Description                                            | Example Value          |
|-----------------------------|--------------------------------------------------------|------------------------|
| `PORT`                      | The port on which the server will run                  | `3001`                 |
| `DB_HOST`                   | The host of the PostgreSQL database                    | `localhost`            |
| `DB_PORT`                   | The port for connecting to the database                | `5432`                 |
| `DB_USERNAME`               | The username for accessing the database                | `postgres`             |
| `DB_PASSWORD`               | The password for accessing the database                | `password`             |
| `DB_NAME`                   | The name of the PostgreSQL database                    | `postgres`             |
| `SERVICE_EMAIL`             | The email used for sending service notifications       |                        |
| `EMAIL`                     | The email address used for application communication   |                        |
| `SENDGRID_API_KEY`          | The API key for SendGrid email service                 |                        |
| `GOOGLE_API_KEY`            | The API key for Google services                        |                        |
| `SHEET_ID`                  | The ID of the Google Sheet used in the application     |                        |
| `GOOGLE_SERVICE_ACCOUNT_KEY`| The service account key for Google API authentication  |                        |

## Installation and Setup

1. Clone the repository:

   `git clone <repository-url>`
   
2. Navigate to the project directory:

   `cd <project-directory>`

3. Install dependencies:

   `npm install`

4. Set up the environment variables by creating a `.env` file and adding the necessary variables (as shown in the table above).

5. Start the application:

   `npm run start`

## Running the Application

The application will be available at [http://localhost:3001](http://localhost:3001) if running locally. You can test the endpoints and functionalities using the API documentation provided above.
