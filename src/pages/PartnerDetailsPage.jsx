import { useLoaderData } from "react-router";
import Mate from "../components/Mate";
import useUserContext from "./../context/useUserContext.jsx";
import { useEffect, useState } from "react";
import { getAllFriend } from "../utils/dataLoader.js";

export default function PartnerDetailsPage() {
  const mateData = useLoaderData();
  const user = mateData.data.user;
  const [totalConnection, setTotalConnection] = useState([]);

  const { sendFriendRequest } = useUserContext();

  useEffect(function () {
    async function loadAllFriends() {
      const response = await getAllFriend(user?._id);
      setTotalConnection(response.data);
    }

    return () => loadAllFriends();
  }, []);

  async function addMate(e) {
    try {
      const response = await sendFriendRequest(e);
      console.log(response);
    } catch (error) {
      if (error) {
        console.log(error);
      }
    }
  }

  return (
    <div className='flex flex-col sm:flex-row justify-center-safe items-center sm:items-stretch gap-8 pt-16'>
      <div className='flex flex-col justify-center md:justify-start'>
        <div>
          <img
            className='rounded-md w-56 lg:w-64 xl:w-72 h-2/4 object-cover'
            src={user?.image}
            alt='profile picture'
          />
          <div className='flex flex-col gap-2 pt-4'>
            <h3>
              <span className='text-xl sm:text-2xl font-semibold'>Email:</span>{" "}
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
              onClick={() => addMate(user?._id)}
              className='btn btn-primary btn-lg btn-soft'
            >
              Add Mate
            </button>
          </div>
        </div>
      </div>
      <Mate user={user} />
    </div>
  );
}
