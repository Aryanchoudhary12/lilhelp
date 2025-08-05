import { Router } from "express";
import { donationdata } from "../controller/donation.controller.js";
const router = Router();
router.get("/data", donationdata);

export default router;
