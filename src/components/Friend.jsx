import { useState } from "react";
import useUserContext from "../context/useUserContext";
import { toast } from "react-toastify";

export default function Friend({ data = [], userId }) {
  const [deleteFriend, setDeleteFriend] = useState(false);
  const { unfriend } = useUserContext();
  const friend =
    data.requester._id === userId ? data.recipient : data.requester;

  async function handelDelete(id) {
    try {
      const response = await unfriend(id);
      if (response) {
        toast.success("successfully deleted!");
        setDeleteFriend(true);
      }
    } catch (error) {
      toast.error("fail to deleted!");
      if (error) {
        throw new Error("Fail to deleted!");
      }
    }
  }

  return (
    <div className='flex flex-row border justify-between border-primary p-4 rounded-md shadow mb-1'>
      <div className='flex flex-row gap-4'>
        <img
          className='w-16 h-16 rounded-full object-cover border border-accent'
          src={friend?.image}
          alt='profile image'
        />
        <div>
          <h1>
            <span className='text-lg font-semibold'>Name: </span>
            <span className='text-xl'>{friend?.name}</span>
          </h1>
          <h1>
            <span className='text-sm font-semibold'>Subject: </span>
            <span className='text-lg'>{friend?.subject}</span>
          </h1>
        </div>
      </div>
      <button
        disabled={deleteFriend}
        className='btn btn-outline btn-secondary'
        onClick={() => handelDelete(friend?._id)}
      >
        {deleteFriend ? "Deleted" : "Delete"}
      </button>
    </div>
  );
}
