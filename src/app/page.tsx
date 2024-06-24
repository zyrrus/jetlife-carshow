import Image from "next/image";
import { cn } from "~/lib/utils";

export default function HomePage() {
  return (
    <main className="">
      <Hero />
      <Endorsements />
      <Event />
      <Afterparty />
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
        <a
          href="#event-details"
          className="border-fg flex-1 rounded-xl border py-6 text-center text-xl font-bold transition-all hover:border-transparent hover:bg-white/20"
        >
          Learn more
        </a>
        <a
          href="https://www.eventbrite.com/e/the-jetlife-cars-coffee-bike-carshow-presented-by-nascar-tickets-888104393147?aff=oddtdtcreator"
          target="_blank"
          className="border-fg flex-1 rounded-xl border py-6 text-center text-xl font-bold transition-all hover:border-transparent hover:bg-white/20"
        >
          Feature your car
        </a>
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

const Event = () => {
  return (
    <section
      id="event-details"
      className="container grid max-w-md grid-cols-1 gap-x-8 gap-y-9 pt-24 md:max-w-screen-lg md:grid-cols-2"
    >
      <Poster
        src="/assets/flyers/jetlife-carshow.jpg"
        className={cn(
          "w-full max-w-md -rotate-3 justify-self-center",
          "before:absolute before:bottom-2.5 before:-z-10 before:h-2.5 before:w-2/5 before:shadow-[0_5px_14px_rgba(0,0,0,0.7)] before:transition-all before:content-['']",
          "after:absolute after:bottom-2.5 after:-z-10 after:h-2.5 after:w-2/5 after:shadow-[0_5px_14px_rgba(0,0,0,0.7)] after:transition-all after:content-['']",
          "before:left-4 before:rotate-0 before:-skew-x-6 before:-skew-y-6",
          "after:right-4 after:rotate-0 after:skew-x-6 after:skew-y-6",
        )}
      />
      <div className="border-fg space-y-2 self-center rounded-xl border p-6 shadow-lg">
        <h2 className="border-fg border-b text-3xl font-bold">Event Details</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
          labore, dolores architecto beatae nemo aspernatur voluptates excepturi
        </p>
        <ul className="list-inside list-disc">
          <li>Lorem ipsum, dolor</li>
          <li>Sit amet consectetur</li>
          <li>Dolores architecto beatae nemo</li>
        </ul>
        <p>
          Distinctio non maxime quis, illo quo sequi, quasi corrupti quae odit
          Eius eligendi similique, assumenda, delectus, soluta omnis numquam
          animi nisi nobis deleniti ea. Sunt!
        </p>
      </div>
    </section>
  );
};

const Afterparty = () => {
  return (
    <section
      id="afterparty"
      className="container grid max-w-md grid-cols-1 gap-x-8 gap-y-9 py-24 md:max-w-screen-lg md:grid-cols-2"
    >
      <Poster
        src="/assets/flyers/dream-doll.jpg"
        className={cn(
          "w-full max-w-md rotate-6 justify-self-center md:order-1",
          "before:absolute before:bottom-2.5 before:-z-10 before:h-2.5 before:w-2/5 before:shadow-[0_5px_14px_rgba(0,0,0,0.7)] before:transition-all before:content-['']",
          "after:absolute after:bottom-2.5 after:-z-10 after:h-2.5 after:w-2/5 after:shadow-[0_5px_14px_rgba(0,0,0,0.7)] after:transition-all after:content-['']",
          "before:left-4 before:rotate-0 before:-skew-x-6 before:-skew-y-6",
          "after:right-4 after:rotate-0 after:skew-x-6 after:skew-y-6",
        )}
      />
      <div className="border-fg space-y-2 self-center rounded-xl border p-6 shadow-lg">
        <h2 className="border-fg border-b text-3xl font-bold">After Party</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
          labore, dolores architecto beatae nemo aspernatur voluptates excepturi
        </p>
        <ul className="list-inside list-disc">
          <li>Lorem ipsum, dolor</li>
          <li>Sit amet consectetur</li>
          <li>Dolores architecto beatae nemo</li>
        </ul>
        <p>
          Distinctio non maxime quis, illo quo sequi, quasi corrupti quae odit
          Eius eligendi similique, assumenda, delectus, soluta omnis numquam
          animi nisi nobis deleniti ea. Sunt!
        </p>
      </div>
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
