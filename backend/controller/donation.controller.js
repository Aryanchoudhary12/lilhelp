import Donation from "../model/donation.model.js";

export const donationdata = async (req, res) => {
  try {
    const data = await Donation.find();
    return res.status(201).json({ message: "sucessfully fetched", data: data });
  } catch (error) {
    console.log("Internal server error");
     return res.status(500).json({ message: "Internal server error" });
  }
};
