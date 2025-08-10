StudyNotion - An EdTech PlatformStudyNotion is a full-stack Education Technology (EdTech) web application built with the MERN stack. It serves as an innovative platform where instructors can create, manage, and publish courses. Students can enroll in these courses, track their progress, and make payments securely. The application is designed to be robust, scalable, and user-friendly.🌐 Live DemoFrontend: https://studynotion-client.vercel.app/Backend: https://studynotion-server.vercel.app/✨ FeaturesUser Authentication: Secure user registration and login for Students, Instructors, and Admins using JWT.Course Management: Instructors can create, edit, and publish courses with detailed sections and lessons.Student Dashboard: Students can view their enrolled courses, track their progress, and manage their profiles.Instructor Dashboard: A comprehensive dashboard for instructors to monitor course statistics, total students, and income with visually appealing charts.Payment Integration: Secure payment processing for course enrollment powered by Razorpay.Cloud Media Storage: Course media (videos, thumbnails) is uploaded and securely stored on Cloudinary.Dynamic Profile Pictures: Automatically generates unique user profile pictures using the Dicebear API.Admin Panel: A dedicated panel for Admins to manage course categories.📸 ScreenshotsLanding PageLogin PageDashboardCourse Page🛠️ Technologies UsedFrontendReact.js: A JavaScript library for building user interfaces.Redux Toolkit: For state management.Tailwind CSS: For styling the application.React Router: For client-side routing.BackendNode.js: JavaScript runtime environment.Express.js: A web application framework for Node.js.MongoDB: A NoSQL database for storing application data.Mongoose: An ODM library for MongoDB and Node.js.Services & APIsCloudinary: For media storage and management.Razorpay: For secure payment processing.Dicebear: For generating user avatars.Nodemailer: For sending automated emails (e.g., OTP verification, password reset).🚀 Getting StartedFollow these instructions to set up the project on your local machine.1. PrerequisitesNode.js (v14 or higher)npm (Node Package Manager)MongoDB (local instance or a cloud-hosted one like MongoDB Atlas)2. Clone the Repositorygit clone [https://github.com/thatg33kyguy/StudyNotion.git](https://github.com/thatg33kyguy/StudyNotion.git)
cd StudyNotion
3. Install DependenciesInstall the required packages for both the client and the server.# Install frontend dependencies
npm install

# Install backend dependencies
cd server
npm install
cd ..
4. Set Up Environment VariablesCreate a .env file in the server directory and add the following variables. Replace the placeholder values with your actual credentials.# Port for the backend server
PORT=4000

# Your MongoDB Connection URL
MONGODB_URL="mongodb+srv://<user>:<password>@cluster-url/studynotion"

# A long, random, and secret string for JWT
JWT_SECRET="your-super-secret-key"

# Frontend URL for CORS
CORS_ORIGIN="http://localhost:3000"

# Nodemailer credentials for sending emails
MAIL_HOST="smtp.gmail.com"
MAIL_USER="your-email@gmail.com"
MAIL_PASS="your-email-app-password"

# Cloudinary credentials
CLOUD_NAME="your-cloudinary-cloud-name"
API_KEY="your-cloudinary-api-key"
API_SECRET="your-cloudinary-api-secret"

# Razorpay credentials
RAZORPAY_KEY="your-razorpay-key-id"
RAZORPAY_SECRET="your-razorpay-key-secret"
5. Start the Development ServerThis command will start both the frontend and backend servers concurrently.npm run dev
Your application should now be running at http://localhost:3000.📌 Important Setup NotesBackend Location: All backend code is located in the /server folder.Creating an Admin Account: To access the admin panel and create course categories, you must first create an Admin account.Sign up for a new account as a "Student" or "Instructor".Go to your MongoDB database, find the new user in the users collection.Manually change the accountType field for that user from "Student" or "Instructor" to "Admin".Creating Categories: You must create at least one course category from the admin panel before an instructor can add a new course.🤝 ContributingContributions are welcome! If you have any suggestions or find any issues, please feel free to open an issue or a pull request.✍️ Authorsthatg33kyguy
