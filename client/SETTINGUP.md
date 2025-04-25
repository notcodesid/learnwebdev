# Getting Starting

Follow these steps to set up the project on your local machine.

## Installation

 **Clone the repository**

 Begin by cloning the repository and navigating into the project folder:

   ```bash
   git clone https://github.com/notcodesid/learnwebdev.git
   cd learnwebdev
npm install 
npm run dev
```

To view in your browser:
```bash
 http://localhost:3000 
```


   ## Environment Variables

   To configure environment variables, create a .env file in the root directory and add your variables there. 
```bash
   NEXT_PUBLIC_API_URL=https://learnwebdev.vercel.app/
   MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/myDatabase?retryWrites=true&w=majority
```
**MONGODB_URI**
Your MongoDB connection string. Make sure to replace <username>, <password>, and myDatabase with your actual MongoDB credentials and database name. Ensure your MongoDB cluster is set up, and you have the correct connection string.





