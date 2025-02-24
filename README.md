# Customer Engagement Dashboard

A full-stack application that provides actionable insights to drive customer retention through visualization of user engagement metrics and AI-powered recommendations.


## Project Links
- **GitHub Repository:** [Source code](https://github.com/s11saurabh/Customer_Engagement_Dashboard)
- **Deployed Application:** [Live Site](https://demos.creative-tim.com/vision-ui-dashboard-react/#/dashboard)
## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Installation & Setup](#installation--setup)
- [Usage Guide](#usage-guide)
- [API Documentation](#api-documentation)
- [Engagement Score Formula](#engagement-score-formula)
- [Churn Prediction Logic](#churn-prediction-logic)
- [Research Findings](#research-findings)
- [Future Improvements](#future-improvements)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

The Customer Engagement Dashboard is designed to help businesses track, analyze, and improve user interactions with their products. It provides comprehensive metrics and visualizations that help understand user behavior, identify trends, and suggest actions to enhance customer retention.

This project was developed as part of an internship selection assignment to demonstrate full-stack development capabilities, data visualization skills, and understanding of user engagement metrics.

## Features

### Dashboard Overview
- **Active Users Metrics**: Track daily, weekly, and monthly active users
- **Engagement Score**: Custom metric based on user actions like logins and feature usage
- **Retention Rate**: Percentage of returning users within specific time periods
- **Churn Prediction**: AI-powered predictions identifying users likely to churn

### User Activity Table
- Detailed list of users with information including:
  - Name, email, and last login date
  - Individual engagement scores
  - Predicted retention categories (High/Medium/Low)
  - Filtering and search functionality

### AI Insights Panel
- Actionable recommendations to reduce churn
- Highlights of most-used and underperforming features
- Trend analysis and pattern recognition

### Filters and Search
- Date range selection
- Engagement score filtering
- Retention category filtering
- User search by name or email

## Technology Stack

### Frontend
- **React.js**: For building the user interface
- **Chart.js/Recharts**: For data visualization components
- **Responsive Design**: Optimized for both desktop and mobile views
- **CSS Framework**: Styled components for consistent UI

### Backend
- **Node.js**: Runtime environment
- **Express.js**: Web application framework
- **MongoDB**: Database for storing user data and engagement metrics
- **RESTful APIs**: For communication between frontend and backend

## Project Structure

```
├── client/                 # Frontend React application
├── config/                 # Configuration files and environment variables
├── controllers/            # Express route controllers
├── helpers/                # Utility functions and helpers
├── middlewares/            # Express middlewares
├── models/                 # MongoDB models and schemas
├── public/                 # Static files
├── routes/                 # API routes
├── .gitattributes          # Git attributes file
├── .gitignore              # Git ignore file
├── README.md               # Project documentation
├── package-lock.json       # Package lock file
├── package.json            # Node.js dependencies and scripts
└── server.js               # Entry point for the application
```

### Detailed Structure Breakdown

#### `client/`
Contains the React frontend application with components, pages, services, and assets.

#### `config/`
Stores configuration files including database connection details, API keys, and environment variables.

#### `controllers/`
Houses the logic for handling API requests, processing data, and sending responses. Includes controllers for users, engagement metrics, and AI insights.

#### `helpers/`
Contains utility functions, data transformers, and reusable code snippets that support the application.

#### `middlewares/`
Express middleware functions for authentication, request validation, error handling, and logging.

#### `models/`
MongoDB schema definitions for:
- User data
- Activity logs
- Engagement metrics
- Retention predictions

#### `public/`
Stores static assets like images, fonts, and the compiled frontend when deployed.

#### `routes/`
API route definitions that map endpoints to controller functions.

## Installation & Setup

### Prerequisites
- Node.js (v14.x or higher)
- MongoDB (v4.x or higher)
- npm or yarn package manager

### Installation Steps

1. Clone the repository:
```bash
git clone https://github.com/s11saurabh/Customer_Engagement_Dashboard.git
cd Customer_Engagement_Dashboard
```

2. Install backend dependencies:
```bash
npm install
```

3. Install frontend dependencies:
```bash
cd client
npm install
cd ..
```

4. Create a `.env` file in the root directory with the following variables:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/customer_engagement
NODE_ENV=development
```

5. Start the development servers:
```bash
# Run backend and frontend concurrently
npm run dev

# Or run separately
npm run server
npm run client
```

6. The application should now be running at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## Usage Guide

### Dashboard Navigation
- The main dashboard displays key metrics and visualizations at a glance
- Use the sidebar to navigate between different sections
- Top navbar contains search functionality and user settings

### Analyzing User Engagement
1. View the main engagement metrics on the dashboard overview
2. Drill down into specific user segments using filters
3. Identify trends over time using the date range selector
4. Export reports for further analysis

### Working with AI Insights
1. Check the AI Insights panel for automated recommendations
2. Review users at risk of churning
3. Implement suggested actions to improve retention
4. Monitor changes in engagement metrics after implementing actions

## API Documentation

### User Endpoints

- `GET /api/users`: Retrieve all users with pagination
- `GET /api/users/:id`: Get details for a specific user
- `POST /api/users`: Create a new user
- `PUT /api/users/:id`: Update user information
- `DELETE /api/users/:id`: Delete a user

### Engagement Metrics Endpoints

- `GET /api/metrics/engagement`: Get overall engagement metrics
- `GET /api/metrics/engagement/:userId`: Get engagement metrics for a specific user
- `GET /api/metrics/active-users`: Get active users counts (DAU, WAU, MAU)
- `GET /api/metrics/retention`: Get retention rates for different time periods

### AI Insights Endpoints

- `GET /api/insights/churn-prediction`: Get users likely to churn
- `GET /api/insights/recommendations`: Get AI-powered recommendations
- `GET /api/insights/feature-usage`: Get analysis of feature usage

## Engagement Score Formula

The engagement score is calculated using a weighted formula that considers various user actions:

```
Engagement Score = (0.4 * Login Frequency) + 
                   (0.3 * Feature Usage Breadth) + 
                   (0.2 * Session Duration) + 
                   (0.1 * Interaction Depth)
```

Where:
- **Login Frequency**: Number of logins in the last 30 days (normalized)
- **Feature Usage Breadth**: Percentage of available features used
- **Session Duration**: Average time spent per session (normalized)
- **Interaction Depth**: Average number of actions per session (normalized)

The resulting score is on a scale of 0-100, with higher scores indicating more engaged users.

## Churn Prediction Logic

Churn prediction utilizes a combination of engagement metrics and user behavior patterns:

1. **Risk Factors Identification**:
   - Low engagement score (< 30)
   - Declining login frequency
   - Reduced feature usage
   - Shortened session duration

2. **Categorization**:
   - High Risk (>70% probability of churning)
   - Medium Risk (30-70% probability)
   - Low Risk (<30% probability)

3. **Early Warning System**:
   - Flags users showing early signs of disengagement
   - Identifies sudden drops in activity

## Research Findings

Our research into engagement metrics and retention strategies revealed:

1. **Engagement Indicators**: The most reliable indicators of user engagement are login frequency, feature adoption rate, and time spent in the application.

2. **Retention Drivers**: Key factors that drive retention include:
   - Regular new feature releases
   - Personalized onboarding
   - In-app guidance and education
   - Community building

3. **Industry Benchmarks**: Average engagement scores across SaaS platforms typically fall between 40-60, with top-performing applications achieving scores of 70+.

4. **Churn Prevention**: Proactive outreach to at-risk users can reduce churn by up to 30% when implemented early.

## Future Improvements

Planned enhancements for future versions:

1. **Advanced Analytics**:
   - Cohort analysis
   - Customer journey mapping
   - Predictive lifetime value calculation

2. **Integration Capabilities**:
   - CRM system connections
   - Marketing automation triggers
   - Support ticket correlation

3. **Enhanced Visualization**:
   - Customizable dashboard widgets
   - Interactive drill-down capabilities
   - Additional chart types and visualizations

4. **Machine Learning Enhancements**:
   - Improved churn prediction accuracy
   - User segmentation clustering
   - Personalized recommendation engine

## Contributing

We welcome contributions to improve the Customer Engagement Dashboard:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Created by [Saurabh](https://github.com/s11saurabh) as part of an internship selection process.
