import { Metadata } from "next";
import TrainerCard from "@/components/TrainerCard";
import { getImagePath } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Our Trainers | Bovine Strength Systems",
  description: "Meet our expert personal trainers dedicated to helping you achieve your fitness goals at Bovine Strength Systems in Monterey, CA.",
};

const trainers = [
  {
    name: "Matt Lamarque",
    title: "Owner & Head Trainer",
    image: getImagePath("/images/matt.jpg"),
    bio: `Matt has been in the athletic/fitness world since he started working out with his dad at thirteen years old. At sixteen, he began competing in powerlifting and has since competed all over the world. After twenty years of competition, he has achieved an elite level in the sport, and his training protocols have been published in several internationally distributed magazines.

Through years of research and practical experience, Matt has designed five custom pieces of strength equipment—two of which have been granted United States Patents. He uses these pieces in the day-to-day training of his clients, his trainers, and himself.

Early in his career, Matt worked with a local doctor treating patients who were extremely de-conditioned, post-surgical, or trying to avoid surgery—many with spine-related issues. This experience taught him the importance of progression, no matter how small the steps, and a person's accommodation to prescribed progression.

Matt still competes in powerlifting and is constantly seeking new challenges in non-specific athletic competitions. He leads by example and always challenges his clients to progress. His philosophy: "Stagnancy creates weakness. Weakness breeds injury. Injury causes stagnancy. It's a vicious cycle."`,
    isPlaceholder: false,
  },
  {
    name: "Travis",
    title: "Personal Trainer",
    image: getImagePath("/images/travis.jpg"),
    bio: `Travis brings energy, enthusiasm, and expert knowledge to every training session. Specializing in functional fitness and strength development, Travis works with clients to build practical strength that translates into everyday life.

His training style combines traditional strength training with modern functional movement patterns, ensuring clients develop balanced, injury-resistant physiques. Travis is known for his ability to motivate and push clients beyond their perceived limits while maintaining a supportive, encouraging atmosphere.

Whether your goal is weight loss, muscle building, or improved athletic performance, Travis will design a program tailored specifically to your needs and goals.`,
    isPlaceholder: false,
  },
  {
    name: "Profile Coming Soon",
    title: "Personal Trainer",
    image: "",
    bio: "Another member of our expert training team. Full profile coming soon!",
    isPlaceholder: true,
  },
  {
    name: "Profile Coming Soon",
    title: "Personal Trainer",
    image: "",
    bio: "Another member of our expert training team. Full profile coming soon!",
    isPlaceholder: true,
  },
];

export default function TrainersPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-zinc-950 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
            Meet Our <span className="text-silver">Trainers</span>
          </h1>
          <p className="text-xl text-silver-dark max-w-3xl mx-auto">
            Our experienced personal trainers are dedicated to helping you achieve your fitness goals
            with personalized programs and expert guidance.
          </p>
        </div>
      </section>

      {/* Trainers */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {trainers.map((trainer, index) => (
              <TrainerCard
                key={index}
                name={trainer.name}
                title={trainer.title}
                image={trainer.image}
                bio={trainer.bio}
                isPlaceholder={trainer.isPlaceholder}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title">Our Training Philosophy</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-silver-dark text-lg leading-relaxed mb-6">
              At Bovine Strength Systems, we believe that effective training is built on a foundation
              of proper technique, progressive programming, and individualized attention. Our trainers
              don&apos;t believe in one-size-fits-all approaches.
            </p>
            <p className="text-silver-dark text-lg leading-relaxed mb-6">
              Every client receives a customized training program designed around their unique goals,
              abilities, and schedule. We focus on building strength safely and sustainably, ensuring
              long-term success rather than quick fixes.
            </p>
            <p className="text-silver-dark text-lg leading-relaxed">
              Whether you&apos;re new to fitness or a seasoned athlete, our trainers meet you where you are
              and guide you to where you want to be.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
