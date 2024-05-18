# KnitSoftware Website

Welcome to the official repository for the KnitSoftware website. This project aims to build a dynamic, responsive, and user-friendly web presence that effectively communicates our brand, showcases our products and services, and engages with our clients and community.

## Overview

The KnitSoftware website is built using Next.js for a robust frontend experience, Spring Boot for a scalable backend, and AWS for secure and reliable deployment. This setup ensures a seamless, high-performance user experience, quick load times, and a flexible architecture for future growth.

## Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js and npm**: Required for Next.js development. [Download Node.js](https://nodejs.org/)
- **Java Development Kit (JDK) 21**: Necessary to compile and run Spring Boot applications. [AdoptOpenJDK](https://adoptopenjdk.net/) is a good choice.
- **Git**: For version control. [Download Git](https://git-scm.com/downloads)
- **IDE**: Visual Studio Code for frontend and IntelliJ IDEA (or any preferred Java IDE) for backend development.
- **AWS CLI**: For deploying to AWS. Follow the installation guide on the [AWS CLI documentation](https://aws.amazon.com/cli/).

## Getting Started

1. **Clone the repository**
   ```git clone https://github.com/yourusername/knitsoftware-website.git```


2. **Set up the frontend**

Navigate to the frontend directory:
```cd knitsoftware-website/frontend```

Install dependencies:
```npm install```

Run the development server:
```npm run dev```

Your frontend should now be running on [http://localhost:3000](http://localhost:3000).

3. **Set up the backend**

Navigate to the backend directory:
```cd ../backend```

Build the project using Maven (or your preferred build tool):
```./mvnw clean install```

Run the Spring Boot application:
```./mvnw spring-boot:run```

The backend API should now be accessible on [http://localhost:8080](http://localhost:8080).

## Running Tests

### Frontend

Run frontend tests with:
```npm test```

### Backend

Run backend tests using Maven:
```./mvnw test```

## Deployment

To deploy on AWS, ensure you have configured your AWS CLI with `aws configure` and then follow these steps for a basic deployment. You might need to adapt these instructions based on the specific AWS services you plan to use (e.g., EC2, S3, Elastic Beanstalk, RDS for databases).

## Built With

- **Next.js** - The web framework used for the frontend.
- **Spring Boot** - The backend framework.
- **AWS** - Cloud services for hosting and running the application.

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/yourusername/knitsoftware-website/tags).

## Authors

- **Adam Agar** - *Initial Work* - [adamagar](https://github.com/adamagar)

See also the list of [contributors](https://github.com/knitsoftware/knitsoftware-website/contributors) who have participated in this project.

## License

This project and its contents are proprietary to KnitSoftware and its contributors. Unauthorized copying, modification, distribution, or use of this software is strictly prohibited without the express permission of KnitSoftware. All rights reserved.
