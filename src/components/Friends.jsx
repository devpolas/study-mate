import Friend from "./Friend";

export default function Friends({ data, user }) {
  if (data.length === 0) {
    return <p>No friends yet.</p>;
  }

  return (
    <div>
      {data.map((el) => (
        <Friend key={el?._id} data={el} userId={user?._id} />
      ))}
    </div>
  );
}
