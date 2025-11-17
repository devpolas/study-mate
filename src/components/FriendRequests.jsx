import FriendRequest from "./FriendRequest";

export default function FriendRequests({ data, user }) {
  if (data.length === 0) {
    return <p>No friends yet.</p>;
  }

  return (
    <div>
      {data.map((el) => (
        <FriendRequest key={el?._id} data={el} userId={user?._id} />
      ))}
    </div>
  );
}
