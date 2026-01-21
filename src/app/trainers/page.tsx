import { Metadata } from "next";
import TrainerCard from "@/components/TrainerCard";

export const metadata: Metadata = {
  title: "Our Trainers | Bovine Strength Systems",
  description: "Meet our expert personal trainers dedicated to helping you achieve your fitness goals at Bovine Strength Systems in Monterey, CA.",
};

const trainers = [
  {
    name: "Matt",
    title: "Owner & Head Trainer",
    image: "/images/matt.jpg",
    bio: `Matt is the owner and founder of Bovine Strength Systems. With decades of experience in strength training and personal fitness, Matt has dedicated his career to helping clients of all levels achieve their goals.

His philosophy centers on building a strong foundation through proper form, progressive overload, and individualized programming. Whether you're a beginner looking to start your fitness journey or an experienced athlete seeking to break through plateaus, Matt's expertise and personalized approach will help you succeed.

Matt believes that fitness is for everyone, and creates a welcoming, non-intimidating environment where clients feel supported and motivated. His passion for strength training is infectious, and he takes pride in seeing every client reach milestones they never thought possible.`,
    isPlaceholder: false,
  },
  {
    name: "Travis",
    title: "Personal Trainer",
    image: "/images/travis.jpg",
    bio: `Travis brings energy, enthusiasm, and expert knowledge to every training session. Specializing in functional fitness and strength development, Travis works with clients to build practical strength that translates into everyday life.

His training style combines traditional strength training with modern functional movement patterns, ensuring clients develop balanced, injury-resistant physiques. Travis is known for his ability to motivate and push clients beyond their perceived limits while maintaining a supportive, encouraging atmosphere.

Whether your goal is weight loss, muscle building, or improved athletic performance, Travis will design a program tailored specifically to your needs and goals.`,
    isPlaceholder: false,
  },
  {
    name: "Coming Soon",
    title: "Personal Trainer",
    image: "",
    bio: "We're expanding our team! A new trainer will be joining Bovine Strength Systems soon. Stay tuned for more information about our newest team member.",
    isPlaceholder: true,
  },
  {
    name: "Coming Soon",
    title: "Personal Trainer",
    image: "",
    bio: "We're expanding our team! A new trainer will be joining Bovine Strength Systems soon. Stay tuned for more information about our newest team member.",
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
            Our certified personal trainers are dedicated to helping you achieve your fitness goals
            with personalized programs and expert guidance.
          </p>
        </div>
      </section>

      {/* Trainers Grid */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
