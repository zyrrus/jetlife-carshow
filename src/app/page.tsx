import Image from "next/image";
import { cn } from "~/lib/utils";

export default function HomePage() {
  return (
    <main className="container">
      <Hero />
      <Endorsements />
      <Afterparty />
    </main>
  );
}

const Hero = () => {
  return (
    <section className="container grid grid-cols-2">
      <h1>Jetlife Car Show</h1>
      <Poster src="/assets/flyers/jetlife-carshow.jpg" className="max-w-md" />
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
