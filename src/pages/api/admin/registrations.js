import { connectToDatabase } from "../../../lib/mongodb";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    console.log("Connecting to database...");
    const { db } = await connectToDatabase();
    console.log("Connected to database successfully");

    // Get all registrations, sorted by creation date (newest first)
    console.log("Fetching registrations...");
    const registrations = await db
      .collection("teamRegistrations")
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    console.log("Found registrations:", registrations.length);
    console.log("First registration:", registrations[0]);

    // Convert MongoDB ObjectIds to strings for JSON serialization
    const serializedRegistrations = registrations.map((registration) => ({
      ...registration,
      _id: registration._id.toString(),
      createdAt: registration.createdAt.toISOString(),
    }));

    return res.status(200).json(serializedRegistrations);
  } catch (error) {
    console.error("Error details:", {
      message: error.message,
      stack: error.stack,
      name: error.name,
    });
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
      details: error.stack,
    });
  }
}
