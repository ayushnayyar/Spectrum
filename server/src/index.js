import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import * as Sentry from "@sentry/node";
import * as Tracing from "@sentry/tracing";

import "dotenv/config";

import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/users.js";
import friendRequestRoutes from "./routes/requests.js";
import peopleRoutes from "./routes/people.js";
import rewardsRoutes from "./routes/rewards.js";
import searchRoutes from "./routes/search.js";

const app = express();

Sentry.init({
  dsn: "https://4caf125b9e8c4c30b162357c321cb4e1@o437945.ingest.sentry.io/6157602",
  integrations: [
    // enable HTTP calls tracing
    new Sentry.Integrations.Http({ tracing: true }),
    // enable Express.js middleware tracing
    new Tracing.Integrations.Express({ app }),
  ],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

// RequestHandler creates a separate execution context using domains, so that every
// transaction/span/breadcrumb is attached to its own Hub instance
app.use(Sentry.Handlers.requestHandler());
// TracingHandler creates a trace for every incoming request
app.use(Sentry.Handlers.tracingHandler());

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(cors());

app.use("/posts", postRoutes);
app.use("/user", userRoutes);
app.use("/friendrequest", friendRequestRoutes);
app.use("/people", peopleRoutes);
app.use("/rewards", rewardsRoutes);
app.use("/search", searchRoutes);

// The error handler must be before any other error middleware and after all controllers
app.use(Sentry.Handlers.errorHandler());

// Optional fallthrough error handler
app.use(function onError(err, req, res, next) {
  // The error id is attached to `res.sentry` to be returned
  // and optionally displayed to the user for support.
  res.statusCode = 500;
  res.end(res.sentry + "\n");
});

const port = process.env.PORT || 5000;

// Connect to DB
mongoose.connect(
  process.env.DB_CONNECTION_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => console.log("Connected to DB")
);

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
