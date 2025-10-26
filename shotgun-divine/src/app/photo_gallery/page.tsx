import Image from 'next/image';
import pizzaGuitar from '../../../public/images/pizza_guitar.jpg'

export default function PhotoGallery() {
  return (
    <div className="grid grid-cols-5 grid-rows-4 justify-self-center min-w-xl min-h-200">
      <div className="col-span-5 row-span-1">
        <h1 className="font-black text-center">Shotgun Divine - Photo Gallery</h1>
      </div>
          <div className="col-start-1 col-span-1 row-start-2 row-span-1">
            <Image
              src={pizzaGuitar}
              alt="Background"
              layout="contain" // Stretches the image to fill the parent
              objectFit="contain" // Ensures the image covers the area without distortion
              quality={75} // Adjust quality as needed
              priority // For images above the fold
              style={{ zIndex: -2 }} // Puts the image behind other content
            />
          </div>
          <div className="col">
            <Image
              src={pizzaGuitar}
              alt="Background"
              layout="contain" // Stretches the image to fill the parent
              objectFit="contain" // Ensures the image covers the area without distortion
              quality={75} // Adjust quality as needed
              priority // For images above the fold
              style={{ zIndex: -2 }} // Puts the image behind other content
            />
          </div>
          <div className="col">
            <Image
              src={pizzaGuitar}
              alt="Background"
              layout="contain" // Stretches the image to fill the parent
              objectFit="contain" // Ensures the image covers the area without distortion
              quality={75} // Adjust quality as needed
              priority // For images above the fold
              style={{ zIndex: -2 }} // Puts the image behind other content
            />
          </div>
          <div className="col">
            <Image
              src={pizzaGuitar}
              alt="Background"
              layout="contain" // Stretches the image to fill the parent
              objectFit="contain" // Ensures the image covers the area without distortion
              quality={75} // Adjust quality as needed
              priority // For images above the fold
              style={{ zIndex: -2 }} // Puts the image behind other content
            />
          </div>
          <div className="col">
            <Image
              src={pizzaGuitar}
              alt="Background"
              layout="contain" // Stretches the image to fill the parent
              objectFit="contain" // Ensures the image covers the area without distortion
              quality={75} // Adjust quality as needed
              priority // For images above the fold
              style={{ zIndex: -2 }} // Puts the image behind other content
            />
          </div>
          <div className="col">
            <Image
              src={pizzaGuitar}
              alt="Background"
              layout="contain" // Stretches the image to fill the parent
              objectFit="contain" // Ensures the image covers the area without distortion
              quality={75} // Adjust quality as needed
              priority // For images above the fold
              style={{ zIndex: -2 }} // Puts the image behind other content
            />
          </div>
          <div className="col">
            <Image
              src={pizzaGuitar}
              alt="Background"
              layout="contain" // Stretches the image to fill the parent
              objectFit="contain" // Ensures the image covers the area without distortion
              quality={75} // Adjust quality as needed
              priority // For images above the fold
              style={{ zIndex: -2 }} // Puts the image behind other content
            />
          </div>
          <div className="col">
            <Image
              src={pizzaGuitar}
              alt="Background"
              layout="contain" // Stretches the image to fill the parent
              objectFit="contain" // Ensures the image covers the area without distortion
              quality={75} // Adjust quality as needed
              priority // For images above the fold
              style={{ zIndex: -2 }} // Puts the image behind other content
            />
          </div>
          <div className="col">
            <Image
              src={pizzaGuitar}
              alt="Background"
              layout="contain" // Stretches the image to fill the parent
              objectFit="contain" // Ensures the image covers the area without distortion
              quality={75} // Adjust quality as needed
              priority // For images above the fold
              style={{ zIndex: -2 }} // Puts the image behind other content
            />
          </div>
          <div className="col">
            <Image
              src={pizzaGuitar}
              alt="Background"
              layout="contain" // Stretches the image to fill the parent
              objectFit="contain" // Ensures the image covers the area without distortion
              quality={75} // Adjust quality as needed
              priority // For images above the fold
              style={{ zIndex: -2 }} // Puts the image behind other content
            />
          </div>
          <div className="col">
            <Image
              src={pizzaGuitar}
              alt="Background"
              layout="contain" // Stretches the image to fill the parent
              objectFit="contain" // Ensures the image covers the area without distortion
              quality={75} // Adjust quality as needed
              priority // For images above the fold
              style={{ zIndex: -2 }} // Puts the image behind other content
            />
          </div>
          <div className="col">
            <Image
              src={pizzaGuitar}
              alt="Background"
              layout="contain" // Stretches the image to fill the parent
              objectFit="contain" // Ensures the image covers the area without distortion
              quality={75} // Adjust quality as needed
              priority // For images above the fold
              style={{ zIndex: -2 }} // Puts the image behind other content
            />
          </div>
          <div className="col">
            <Image
              src={pizzaGuitar}
              alt="Background"
              layout="contain" // Stretches the image to fill the parent
              objectFit="contain" // Ensures the image covers the area without distortion
              quality={75} // Adjust quality as needed
              priority // For images above the fold
              style={{ zIndex: -2 }} // Puts the image behind other content
            />
          </div>
          <div className="col">
            <Image
              src={pizzaGuitar}
              alt="Background"
              layout="contain" // Stretches the image to fill the parent
              objectFit="contain" // Ensures the image covers the area without distortion
              quality={75} // Adjust quality as needed
              priority // For images above the fold
              style={{ zIndex: -2 }} // Puts the image behind other content
            />
          </div>
          <div className="col">
            <Image
              src={pizzaGuitar}
              alt="Background"
              layout="contain" // Stretches the image to fill the parent
              objectFit="contain" // Ensures the image covers the area without distortion
              quality={75} // Adjust quality as needed
              priority // For images above the fold
              style={{ zIndex: -2 }} // Puts the image behind other content
            />
          </div>
        </div>
  )
}