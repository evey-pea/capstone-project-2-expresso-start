import cors from "cors";
import errorhandler from "errorhandler";
import express from "express";

const PORT = process.env.PORT || 4000;
// const database = process.env.TEST_DATABSE || "./database.sqlite";

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Errorhandling middleware (must go last before server initialization)
app.use(errorhandler());

app.listen(PORT, () => {
  console.log(`Server running and listening on PORT: ${PORT}`);
});

export { app };
