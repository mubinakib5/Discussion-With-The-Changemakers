import { ObjectId } from "mongodb";
import { connectToDatabase } from "../../../../lib/mongodb";

export default async function handler(req, res) {
  const { id } = req.query;
  console.log("DELETE /api/admin/registrations/[id] called with id:", id);

  if (req.method === "DELETE") {
    try {
      const { db } = await connectToDatabase();
      const result = await db
        .collection("teamRegistrations")
        .deleteOne({ _id: new ObjectId(id) });
      console.log("Delete result:", result);
      if (result.deletedCount === 1) {
        return res
          .status(200)
          .json({ message: "Registration deleted successfully" });
      } else {
        return res.status(404).json({ message: "Registration not found" });
      }
    } catch (error) {
      console.error("Delete error:", error);
      return res.status(500).json({
        message: "Failed to delete registration",
        error: error.message,
      });
    }
  }

  // You can keep other methods (GET, PATCH, etc.) here as needed
  res.setHeader("Allow", ["DELETE"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
