"use client";
import Image from "next/image";
import { Gallery, Item } from "react-photoswipe-gallery";

function PropertyImages({ images }) {
  return (
    <Gallery>
      <section className="bg-blue-50 p-4">
        <div className="container mx-auto">
          {images.length === 1 ? (
            <Item
              original={images[0]}
              thumbnail={images[0]}
              width="1000"
              height="600"
            >
              {({ ref, open }) => (
                <Image
                  src={images[0]}
                  ref={ref}
                  onClick={open}
                  alt=""
                  className="object-cover mx-auto rounded-xl cursor-pointer"
                  width="auto"
                  height={400}
                  // priorty={true}
                />
              )}
            </Item>
          ) : (
            <div className="grid grid-cols-2 gap-4">
              {images.map((image, index) => (
                <div
                  className={
                    images.length === 3 && index === 2
                      ? "col-span-2"
                      : "col-span-1"
                  }
                  key={index}
                >
                  <Item
                    original={image}
                    thumbnail={image}
                    width="1000"
                    height="600"
                  >
                    {({ ref, open }) => (
                      <Image
                        src={image}
                        ref={ref}
                        onClick={open}
                        alt=""
                        className="object-cover  w-full rounded-xl cursor-pointer"
                        width={1800}
                        height={400}
                        // priorty={true}
                      />
                    )}
                  </Item>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </Gallery>
  );
}

export default PropertyImages;
