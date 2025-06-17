import clientPromise from "../lib/mongodb";

export async function getServerSideProps() {
  const client = await clientPromise;
  const db = client.db();
  const registrations = await db
    .collection("registrations")
    .find({})
    .sort({ createdAt: -1 })
    .toArray();
  return {
    props: { registrations: JSON.parse(JSON.stringify(registrations)) },
  };
}

export default function AdminDashboard({ registrations }) {
  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Team Registrations</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Team Name</th>
              <th>Category</th>
              <th>Members</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Idea</th>
              <th>Payment</th>
              <th>Created</th>
            </tr>
          </thead>
          <tbody>
            {registrations.map((reg) => (
              <tr key={reg._id}>
                <td>{reg.teamName}</td>
                <td>{reg.category}</td>
                <td>
                  <ul className="space-y-1">
                    {reg.members.map((m, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span>{m.name}</span>
                        {reg.category === "university" ? (
                          <span>
                            Dept: {m.dept}, ID: {m.id}
                          </span>
                        ) : (
                          <span>
                            Profession: {m.profession}, NID: {m.nid}
                          </span>
                        )}
                        {m.photo && (
                          <img
                            src={m.photo}
                            alt="photo"
                            className="h-8 w-8 rounded-full object-cover"
                          />
                        )}
                      </li>
                    ))}
                  </ul>
                </td>
                <td>{reg.email}</td>
                <td>
                  {reg.contact}
                  <br />
                  {reg.contact2}
                </td>
                <td className="max-w-xs whitespace-pre-wrap">{reg.idea}</td>
                <td>
                  {reg.payment && (
                    <div>
                      <div>{reg.payment.method}</div>
                      <div>ID: {reg.payment.transactionId}</div>
                      {reg.payment.reference && (
                        <div>Ref: {reg.payment.reference}</div>
                      )}
                    </div>
                  )}
                </td>
                <td>
                  {reg.createdAt
                    ? new Date(reg.createdAt).toLocaleString()
                    : ""}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
