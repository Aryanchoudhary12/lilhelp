import mongoose from "mongoose";
import { type } from "os";

const donationSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    refferalCode: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    event: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

const Donation = mongoose.model("Donation", donationSchema);
export default Donation;
