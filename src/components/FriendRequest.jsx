import { useState } from "react";
import useUserContext from "../context/useUserContext";
import { toast } from "react-toastify";

export default function Friend({ data = [], userId }) {
  const [friendAction, SetFriendAction] = useState(false);
  const { deleteRequest, acceptFriendRequest } = useUserContext();
  const friend =
    data.requester._id === userId ? data.recipient : data.requester;

  async function handelAcceptRequest(id) {
    try {
      const response = await acceptFriendRequest(id);
      if (response) {
        toast.success("successfully Accepted!");
        SetFriendAction(true);
      }
    } catch (error) {
      toast.error("fail to accept!");
      if (error) {
        throw new Error("Fail to accept!");
      }
    }
  }
  async function handelDeleteRequest(id) {
    try {
      const response = await deleteRequest(id);
      if (response) {
        toast.success("successfully deleted!");
        SetFriendAction(true);
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

      <div className='flex flex-row gap-4'>
        <button
          disabled={friendAction}
          className='btn btn-outline btn-secondary'
          onClick={() => handelAcceptRequest(friend?._id)}
        >
          {friendAction ? "Confirmed" : "Confirm"}
        </button>

        <button
          disabled={friendAction}
          className='btn btn-outline btn-secondary'
          onClick={() => handelDeleteRequest(friend?._id)}
        >
          {friendAction ? "Deleted" : "Delete"}
        </button>
      </div>
    </div>
  );
}
