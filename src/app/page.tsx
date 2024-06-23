import Image from "next/image";
import { cn } from "~/lib/utils";

export default function HomePage() {
  return (
    <main className="">
      <Hero />
      <Sponsor />
      <Flyer />
      <Endorsements />
      <Afterparty />
    </main>
  );
}

const Hero = () => {
  return (
    <section>
      <h1>Jetlife Carshow</h1>
      <Poster src="/assets/flyers/jetlife-carshow.jpg" />
      <Poster src="/assets/flyers/dream-doll.jpg" />
    </section>
  );
};

const Sponsor = () => {
  return <section></section>;
};

const Flyer = () => {
  return <section></section>;
};

const Endorsements = () => {
  return <section></section>;
};

const Afterparty = () => {
  return <section></section>;
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
    <div className={cn("relative size-60", className)}>
      <Image src={src} alt={alt} className="object-contain" fill />
    </div>
  );
};
