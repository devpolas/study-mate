import Mate from "../components/Mate";
import useUserContext from "./../context/useUserContext.jsx";
import { useEffect, useState } from "react";
import { getAllFriend, getAllFriendRequest } from "../utils/dataLoader.js";
import useAuthContext from "../context/useAuthContext.jsx";
import { toast } from "react-toastify";
import useAxiosSecure from "../hooks/useAxiosSecure.jsx";
import { useParams } from "react-router";

export default function PartnerDetailsPage() {
  const params = useParams();
  const [mateData, setMateData] = useState();
  const [totalConnection, setTotalConnection] = useState([]);
  const [sentRequest, setSendRequest] = useState(false);
  const [isAlReadySent, setIsAlreadySent] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { authUser } = useAuthContext();
  const { sendFriendRequest } = useUserContext();
  const api = useAxiosSecure();

  let user;
  if (mateData) {
    user = mateData.data.user;
  }

  const { id } = params;

  useEffect(() => {
    async function geMate() {
      setIsLoading(true);
      const response = await api.get(`/users/${id}`);
      setMateData(response.data);
    }

    geMate();
  }, []);

  const isFriend = totalConnection.some(
    (el) =>
      ((el.requester?._id === authUser?._id &&
        el.recipient?._id === user?._id) ||
        (el.recipient?._id === authUser?._id &&
          el.requester?._id === user?._id)) &&
      el.status === "accepted"
  );

  const isAlreadySentRequest = isAlReadySent.some(
    (el) =>
      el.requester?._id === authUser?._id &&
      el.recipient?._id === user?._id &&
      el.status === "pending"
  );

  useEffect(() => {
    async function loadAllFriends() {
      const sendRequest = await getAllFriendRequest(authUser?._id);
      const response = await getAllFriend(authUser?._id);
      setTotalConnection(response.data);
      setIsAlreadySent(sendRequest.data);
    }

    if (user?._id) {
      loadAllFriends();
      setIsLoading(false);
    }
  }, [user?._id]);

  async function addMate(e) {
    try {
      const response = await sendFriendRequest(e);
      if (response) {
        toast.success("successfully send Request!");
        setSendRequest(true);
      }
    } catch (error) {
      if (error) {
        toast.error("fail to send Request!");
      }
    }
  }

  return (
    <div className='flex flex-col sm:flex-row justify-center-safe items-center sm:items-stretch gap-8 pt-16'>
      {isLoading ? (
        <span className='loading loading-spinner text-success'></span>
      ) : (
        <>
          <div className='flex flex-col justify-center md:justify-start'>
            <div>
              <img
                className='rounded-md w-56 lg:w-64 xl:w-72 h-2/4 object-cover'
                src={user?.image}
                alt='profile picture'
              />
              <div className='flex flex-col gap-2 pt-4'>
                <h3>
                  <span className='text-xl sm:text-2xl font-semibold'>
                    Email:
                  </span>{" "}
                  <span className='text-lg sm:text-xl'>{user?.email}</span>
                </h3>

                <h3>
                  <span className='text-xl sm:text-2xl font-semibold'>
                    Total Mates:
                  </span>{" "}
                  <span className='text-lg sm:text-xl'>
                    {totalConnection.length}
                  </span>
                </h3>

                <h3>
                  <span className='text-xl sm:text-2xl font-semibold'>
                    Ratings:
                  </span>{" "}
                  <span className='text-lg ml-2 sm:text-xl md:text-2xl font-bold text-yellow-500'>
                    {user?.ratingAverage}
                  </span>
                </h3>
                <button
                  disabled={isFriend || sentRequest || isAlreadySentRequest}
                  onClick={() => addMate(user?._id)}
                  className='btn btn-primary btn-lg btn-soft'
                >
                  {isFriend
                    ? "Already Friend"
                    : isAlreadySentRequest || sentRequest
                    ? "Already Requested"
                    : "Add Mate"}
                </button>
              </div>
            </div>
          </div>
          <Mate user={user} />
        </>
      )}
    </div>
  );
}
