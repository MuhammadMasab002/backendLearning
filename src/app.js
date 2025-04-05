import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN, // Replace with your frontend URL
    credentials: true, // Enables setting cookies in the response
  })
);

app.use(express.json({ limit: "16kb" })); // Middleware to parse JSON request bodies
app.use(express.urlencoded({ extended: true, limit: "16kb" })); // Middleware to parse URL-encoded request bodies
app.use(express.static("public")); // Serve static files from the 'public' directory
app.use(cookieParser()); // Middleware to parse cookies

export { app };
