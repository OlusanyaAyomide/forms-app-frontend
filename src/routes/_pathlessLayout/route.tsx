import { useState } from 'react';
import { Outlet, createFileRoute } from '@tanstack/react-router'
import { Carousel } from 'react-responsive-carousel';
import { carouselItems } from '@/static/authStatic';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Logo from '@/components/global/Logo';

export const Route = createFileRoute('/_pathlessLayout')({
  component: PathlessLayoutComponent,
})

function PathlessLayoutComponent() {
  const [showTextIndex, setShowTextIndex] = useState(0); // State to trigger text animation

  const handleCarouselChange = (index: number) => {
    setShowTextIndex(-1);
    setTimeout(() => setShowTextIndex(index), 50);
  };

  return (
    <div className="flex md:max-h-screen max-sm:px-2 p-4">
      <div className="hidden rounded-l-lg h-full overflow-hidden md:block md:w-2/5 lg:w-4/9 relative">
        <Carousel
          showThumbs={false}
          showStatus={false}
          showArrows={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={6000}
          transitionTime={800}
          onChange={handleCarouselChange} // Handle slide changes for text animation
          renderIndicator={(onClickHandler, isSelected, index, label) => {
            const defStyle = "inline-block h-2 w-2 rounded-full bg-gray-400 opacity-50 mx-1 cursor-pointer";
            const selectedStyle = "inline-block h-2 w-2 rounded-full bg-main mx-1 cursor-pointer"; // Use primary color for selected
            return (
              <li
                className={isSelected ? selectedStyle : defStyle}
                onClick={onClickHandler}
                onKeyDown={onClickHandler}
                value={index}
                key={index}
                role="button"
                tabIndex={0}
                title={`${label} ${index + 1}`}
                aria-label={`${label} ${index + 1}`}
              />
            );
          }}
        >
          {carouselItems.map((item, index) => (
            <div key={index} className="h-[calc(100vh-40px)] relative text-white">
              {/* Background Image */}
              <img
                src={item.imgSrc}
                alt={`Carousel image ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute bg-black/50 inset-0 bg-opacity-50"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 pb-20 z-10"> {/* Added pb-20 to lift text above dots */}
                <div
                  key={showTextIndex}
                  className={showTextIndex === index ? 'animate-fade-in-slow' : 'opacity-0'}
                >
                  <h2 className="text-2xl lg:text-3xl font-semibold mb-2">
                    {item.headline}
                  </h2>
                  <p className="text-sm lg:text-base opacity-90">
                    {item.subtext}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      <div className="flex flex-1 max-md:min-h-[calc(100vh-40px)]  ">
        <div className="w-full gap-2 overflow-hidden flex p-8 bg-white  relative rounded-r-lg shadow-md">
          <span className="absolute h-24 w-24 md:h-32 md:w-32 rounded-full bg-main opacity-20 -top-4 -right-6"></span>
          <div className='grow overflow-auto h-full'>
            <Logo />
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
