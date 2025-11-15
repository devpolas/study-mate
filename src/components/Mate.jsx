import ProfileInfoItem from "./ProfileInfoItem";

export default function Mate({ user }) {
  return (
    <div className='flex flex-col gap-3 sm:gap-4 md:gap-6'>
      <ProfileInfoItem label={"Name"} text={user?.name} />
      <ProfileInfoItem label={"Experience"} text={user?.experienceLevel} />
      <ProfileInfoItem label={"Subject"} text={user?.subject} />
      <ProfileInfoItem
        label={"Study Mode"}
        text={user?.studyMode ? "Online" : "Offline"}
      />
      <ProfileInfoItem label={"Location"} text={user?.location} />
      <ProfileInfoItem label={"Availability Time"} text={user?.availability} />
    </div>
  );
}
