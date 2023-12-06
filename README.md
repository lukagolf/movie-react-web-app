# Run a React client using Docker

### Step 0: Install Docker
- Before you begin, ensure that Docker is installed on your system. Docker is available for Windows, macOS, and various distributions of Linux.
- To install Docker, visit the [Docker official website](https://www.docker.com/get-started) and download the appropriate installer for your operating system.
- Follow the installation instructions provided on the website to install Docker on your machine.

### Step 1: Navigate to the Frontend Repository
- Open a new terminal tab or window.
- Change directory to the root of the frontend repository (`movie-react-web-app`).
  ```
  cd path/to/movie-react-web-app
  ```

### Step 2: Build the Docker Image
- Build the Docker image for the frontend. This will create a production build of your React application and set up Nginx to serve it.
  ```
  docker build -t movie-react-web .
  ```

### Step 3: Run the Docker Container
- Run the Docker container, mapping port 80 of the container to port 3000 on your host machine.
  ```
  docker run -p 3000:80 movie-react-web
  ```
- The frontend should now be accessible at `http://localhost:3000`.