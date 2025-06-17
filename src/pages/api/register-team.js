import { connectToDatabase } from "../../lib/mongodb";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    console.log("Received registration request:", req.body);
    const { db } = await connectToDatabase();
    console.log("Connected to database successfully");

    const registration = {
      ...req.body,
      createdAt: new Date(),
      status: "pending",
    };

    console.log("Saving registration:", registration);
    const result = await db
      .collection("teamRegistrations")
      .insertOne(registration);
    console.log("Registration saved successfully:", result);

    return res.status(200).json({
      message: "Registration successful",
      registrationId: result.insertedId,
    });
  } catch (error) {
    console.error("Registration error details:", {
      message: error.message,
      stack: error.stack,
      name: error.name,
    });
    return res.status(500).json({
      message: "Registration failed",
      error: error.message,
      details: error.stack,
    });
  }
}
