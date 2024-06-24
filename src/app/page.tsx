import Image from "next/image";
import { cn } from "~/lib/utils";

export default function HomePage() {
  return (
    <main className="">
      <Hero />
      {/* <Endorsements />
      <Afterparty /> */}
    </main>
  );
}

const Hero = () => {
  return (
    <section className="mx-auto flex min-h-screen flex-col">
      <div className="mx-auto -mb-[22.5vw] mt-auto flex h-full max-w-fit flex-col-reverse leading-none md:flex-col">
        <h1 className="text-[7.25vw] font-black text-white">
          Jetlife Car Show
        </h1>
        <div className="flex flex-col-reverse justify-between text-sm font-bold uppercase md:flex-row md:text-[1.7vw]">
          <p>1540 Canal St, New Orleans</p>
          <p>July 6th</p>
        </div>
      </div>
      {/* Background Image */}
      <div className="relative -z-10 mx-auto mt-[7vw] aspect-[1792/1024] w-full max-w-screen-2xl">
        <Image
          src="/assets/hero.png"
          alt=""
          fill
          className="object-contain object-bottom"
        />
        <div className="absolute inset-0 [background-image:linear-gradient(to_top,#C0B2AC,rgba(0,0,0,0)_30%),linear-gradient(to_bottom,#C0B2AC,rgba(0,0,0,0)_20%)]" />
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
