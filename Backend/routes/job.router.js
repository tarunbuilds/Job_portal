import express from "express";
import { getAdminJobs, getAllJobs, getJobById, postJob } from "../controllers/job.controller.js";
import authenticateToken from "../middleware/isAuthenticated.js";

const router = express.Router();

router.post("/post", authenticateToken, postJob);
router.get("/get", getAllJobs);
router.get("/getadminjobs", authenticateToken,getAdminJobs)
router.get("/get/:id",getJobById);

export default router;