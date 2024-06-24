import Image from "next/image";
import { cn } from "~/lib/utils";

export default function HomePage() {
  return (
    <main className="">
      <Hero />
      <Endorsements />
      {/*  <Afterparty /> */}
    </main>
  );
}

const Hero = () => {
  // max screen width = 1800px
  return (
    <section className="flex flex-col overflow-hidden">
      <div className="mx-auto -mb-[20vw] mt-[min(10vw,1800px*0.10)] flex h-full max-w-fit flex-col-reverse leading-none md:-mb-[min(22.5vw,1800px*0.225)] md:flex-col ">
        <h1 className="text-[min(7.25vw,1800px*0.0725)] font-black text-white">
          Jetlife Car Show
        </h1>
        <div className="flex flex-col-reverse justify-between text-sm font-bold uppercase md:flex-row md:text-[min(1.7vw,1800px*0.017)]">
          <p>1540 Canal St, New Orleans</p>
          <p>July 6th</p>
        </div>
      </div>
      {/* Background Image */}
      <div className="relative -z-10 mx-auto mt-[min(8vw,1800px*0.08)] aspect-[1792/1024] w-full max-w-[1800px]">
        <Image
          src="/assets/hero.png"
          alt=""
          fill
          className="object-contain object-bottom"
        />
        <div className="absolute inset-0 [background-image:linear-gradient(to_top,#C0B2AC,rgba(0,0,0,0)_30%),linear-gradient(to_bottom,#C0B2AC,rgba(0,0,0,0)_20%),linear-gradient(to_left,#C0B2AC,rgba(0,0,0,0)_10%),linear-gradient(to_right,#C0B2AC,rgba(0,0,0,0)_10%)]" />
      </div>
      {/* CTA */}
      <div className="container -mt-[min(12.5vw,1800px*0.125)] mb-[min(5vw,1800px*0.05)] flex flex-col justify-center gap-4 md:flex-row">
        <button className="border-fg flex-1 rounded-xl border py-6 text-xl font-bold transition-all hover:border-transparent hover:bg-white/20">
          Learn more
        </button>
        <button className="border-fg flex-1 rounded-xl border py-6 text-xl font-bold transition-all hover:border-transparent hover:bg-white/20">
          Feature your car
        </button>
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
    <section className="mx-auto flex max-w-screen-lg flex-row justify-center">
      {images.map((src) => (
        <div key={src} className="relative aspect-[2/1] w-auto flex-1">
          <Image
            src={src}
            alt=""
            fill
            className="object-contain mix-blend-multiply grayscale"
          />
        </div>
      ))}
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
