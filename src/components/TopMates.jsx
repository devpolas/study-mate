import MateIntro from "./MateIntro";

export default function TopMates() {
  return (
    <div className='grid  gap-4 grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4'>
      <MateIntro />
      <MateIntro />
      <MateIntro />
      <MateIntro />
    </div>
  );
}
