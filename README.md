# TaskFlare

TaskFlare is a full-stack application built using Next.js, React, Node.js, MongoDB, and TailwindCSS. It provides a streamlined interface for managing tasks, offering functionalities for creating, updating, and deleting tasks with dynamic status updates and priority levels.

## Getting Started

### Prerequisites

Ensure you have Node.js and npm installed on your local development environment.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Mo-Gamer-2000/TaskFlare.git
   cd TaskFlare
   ```
   
2. Install dependencies:
   
   ```bash
   npm install
   ```

4. Set up environment variables:
   
   Create a .env.local file in the root directory and add your environment variables:
   ```
      MONGODB_URI=your_mongodb_uri
      MONGODB_AUTH_URI=your_mongodb_auth_uri
      GITHUB_ID=your_github_id
      GITHUB_SECRET=your_github_secret
      GOOGLE_ID=your_google_id
      GOOGLE_SECRET=your_google_secret
      NEXTAUTH_SECRET=your_nextauth_secret
   ```

### Running the Development Server

   Start the development server:
   ```bash
   npm run dev
   ```

Open http://localhost:3000 in your browser to view the application.

### Folder Structure

* /pages: Next.js pages including TaskPage and API routes.
* /components: Reusable React components for UI elements.
* /public: Static assets used in the application.

### Technologies Used

* Frontend: React, Next.js, TailwindCSS
* Backend: Node.js, Express.js
* Database: MongoDB, Mongoose

### Features

* Task Management: Create, update, and delete tasks.
* Dynamic Updates: Real-time updates of task status and priority.
* Responsive Design: Utilises TailwindCSS for responsive and modern UI.
* Role-Based Authentication: Implement authentication on both server-rendered and client-rendered pages with OAuth providers like Google and GitHub, and custom authentication provider using MongoDB.

### Contributing

Contributions are welcome! Please fork the repository and create a pull request with your improvements. For major changes, please open an issue first to discuss what you would like to change.

### License

This project is licensed under the MIT License - see the LICENSE file for details.

### Acknowledgements

* Built with ❤️ by Moeez Abdul
* Icons by Font Awesome
* Dependencies managed with npm
