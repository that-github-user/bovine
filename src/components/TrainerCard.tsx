import Image from "next/image";

interface TrainerCardProps {
  name: string;
  title: string;
  image: string;
  bio: string;
  isPlaceholder?: boolean;
}

export default function TrainerCard({ name, title, image, bio, isPlaceholder = false }: TrainerCardProps) {
  return (
    <div className="card group">
      <div className="relative h-80 mb-6 overflow-hidden rounded-lg bg-zinc-800">
        {isPlaceholder ? (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center">
              <svg
                className="w-24 h-24 mx-auto text-zinc-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
              <p className="text-zinc-500 mt-2">Coming Soon</p>
            </div>
          </div>
        ) : (
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        )}
      </div>
      <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
      <p className="text-accent font-medium mb-3">{title}</p>
      <p className="text-silver-dark text-sm leading-relaxed">{bio}</p>
    </div>
  );
}
