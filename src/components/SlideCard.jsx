export default function SlideCard({ image, title, description }) {
  return (
    <div className='card bg-base-100 image-full w-fit shadow-sm hover:brightness-125 items-center-safe'>
      <figure>
        <img src={image} alt='Shoes' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title text-xl sm:text-4xl md:text-6xl lg:text-4xl text-primary font-semibold'>
          {title}
        </h2>
        <p className='text-sm sm:text-2xl md:text-3xl lg:text-xl xl:text-2xl text-accent mt-4 text-right'>
          {description}
        </p>
        <div className='card-actions justify-end'>
          <button className='btn btn-primary'>Explore Now</button>
        </div>
      </div>
    </div>
  );
}
