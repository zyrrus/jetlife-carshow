import Image from "next/image";
import { cn } from "~/lib/utils";

export default function HomePage() {
  return (
    <main className="">
      <Hero />
      <Endorsements />
      <Afterparty />
    </main>
  );
}

const Hero = () => {
  return (
    <section className="container grid min-h-screen grid-cols-2">
      <h1>Jetlife Car Show</h1>
      <div className="relative">
        <div className="absolute top-1/2 w-full -translate-y-1/2 translate-x-12">
          <Poster
            src="/assets/flyers/dream-doll.jpg"
            className={cn(
              "max-w-md -rotate-3",
              "before:absolute before:bottom-2.5 before:-z-10 before:h-2.5 before:w-2/5 before:shadow-[0_5px_14px_rgba(0,0,0,0.7)] before:transition-all before:content-['']",
              "after:absolute after:bottom-2.5 after:-z-10 after:h-2.5 after:w-2/5 after:shadow-[0_5px_14px_rgba(0,0,0,0.7)] after:transition-all after:content-['']",
              "before:left-4 before:rotate-0 before:-skew-x-6 before:-skew-y-6",
              "after:right-4 after:rotate-0 after:skew-x-6 after:skew-y-6",
            )}
          />
        </div>

        <div className="absolute top-1/2 w-full -translate-y-1/2">
          <Poster
            src="/assets/flyers/jetlife-carshow.jpg"
            className={cn(
              "max-w-md rotate-6",
              "before:absolute before:bottom-2.5 before:-z-10 before:h-2.5 before:w-2/5 before:shadow-[0_5px_14px_rgba(0,0,0,0.7)] before:transition-all before:content-['']",
              "after:absolute after:bottom-2.5 after:-z-10 after:h-2.5 after:w-2/5 after:shadow-[0_5px_14px_rgba(0,0,0,0.7)] after:transition-all after:content-['']",
              "before:left-4 before:rotate-0 before:-skew-x-6 before:-skew-y-6",
              "after:right-4 after:rotate-0 after:skew-x-6 after:skew-y-6",
            )}
          />
        </div>
      </div>
    </section>
  );
};

const Endorsements = () => {
  const images = [
    "/assets/jetlife.jpg",
    "/assets/Nascar.PNG",
    "/assets/Jrumz.PNG",
    "/assets/sailors-brew.png",
    "/assets/The504Live.JPG",
  ];
  return (
    <section className="container">
      <div className="mx-auto flex max-w-screen-lg flex-row justify-center">
        {images.map((src) => (
          <div key={src} className="relative aspect-[2/1] w-auto flex-1">
            <Image src={src} alt="" fill className="object-contain" />
          </div>
        ))}
      </div>
    </section>
  );
};

const Afterparty = () => {
  return (
    <section>
      <Poster src="/assets/flyers/dream-doll.jpg" className="max-w-52" />
    </section>
  );
};

const Poster = ({
  src,
  alt = "",
  className,
}: {
  src: string;
  alt?: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative aspect-[108/135] w-auto max-w-[1080px] bg-red-500",
        className,
      )}
    >
      <Image src={src} alt={alt} className="object-contain" fill />
    </div>
  );
};
