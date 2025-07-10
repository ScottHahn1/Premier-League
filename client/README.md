# Premier League

## Overview

This is a sports website built with React (frontend) and Node.js/Express (backend), focused on the English Premier League. The site provides key information including the league table, latest news, upcoming fixtures, recent results, and video highlights.

## Features

- **Home Page**: Displays a news article about a Premier League team (team changes on each render using Math.random()).
- **Fixtures**: Shows upcoming Premier League fixtures.
- **Results**: Shows past Premier League results.
- **League Table**: Shows the current standings including position, points, and goal difference.
- **Hightlights**:  Embedded video highlights from the past weekend’s matches.

## Technologies Used
- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express
- **Other**: RESTful APIs, Tanstack Query(React Query)

## Run Locally

Clone the project

```bash
  git clone https://github.com/ScottHahn1/Premier-League.git
```

Go to the project directory

```bash
  cd Premier-League
```

Install client-side(frontend) dependencies

```bash
  cd client
  npm install
```

Start the frontend server

```bash
  npm start
```

Install server-side(backend) dependencies

```bash
  cd server
  npm install
```

Start the backend server

```bash
  npm run dev
```