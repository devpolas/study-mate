import { HiOutlineUserGroup } from "react-icons/hi";
import { HiOutlineUserAdd } from "react-icons/hi";
import { HiLink } from "react-icons/hi";
import Friends from "./Friends";
import FriendRequests from "./FriendRequests";

export default function AllFriends({ user, allFriend, allRequest }) {
  const sentRequests = allRequest.filter(
    (allRequest) => allRequest.requester._id === user?._id
  );
  const receivedRequests = allRequest.filter(
    (allRequest) => allRequest.recipient._id === user?._id
  );

  return (
    <div className='tabs tabs-lift'>
      <label className='tab'>
        <input type='radio' name='my_tabs_4' />
        <HiOutlineUserGroup />
        <span className='text-xs md:text-sm'>Friends</span>
      </label>
      <div className='tab-content bg-base-100 border-base-300 p-6'>
        <Friends user={user} data={allFriend} />
      </div>
      <label className='tab'>
        <input type='radio' name='my_tabs_4' defaultChecked />
        <HiOutlineUserAdd />
        <span className='text-xs md:text-sm'>Requests</span>
      </label>
      <div className='tab-content bg-base-100 border-base-300 p-6'>
        <FriendRequests user={user} data={receivedRequests} />
      </div>
      <label className='tab'>
        <input type='radio' name='my_tabs_4' />
        <HiLink />
        <span className='text-xs md:text-sm'>Send Request</span>
      </label>
      <div className='tab-content bg-base-100 border-base-300 p-6'>
        <FriendRequests user={user} data={sentRequests} />
      </div>
    </div>
  );
}
