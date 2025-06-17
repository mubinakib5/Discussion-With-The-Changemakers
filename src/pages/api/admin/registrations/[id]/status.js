import { ObjectId } from "mongodb";
import { connectToDatabase } from "../../../../../lib/mongodb";

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method !== "PATCH") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { status } = req.body;
    if (!["pending", "approved", "rejected"].includes(status)) {
      return res.status(400).json({ message: "Invalid status value" });
    }
    const { db } = await connectToDatabase();
    const result = await db
      .collection("teamRegistrations")
      .updateOne({ _id: new ObjectId(id) }, { $set: { status } });
    if (result.matchedCount === 0) {
      return res.status(404).json({ message: "Registration not found" });
    }
    return res.status(200).json({ message: "Status updated" });
  } catch (error) {
    console.error("Error updating status:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
