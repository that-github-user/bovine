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
      {/* Horizontal layout on desktop, vertical on mobile */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Image container - constrained size to prevent upscaling */}
        <div className="flex-shrink-0 mx-auto md:mx-0">
          <div className="relative w-48 h-48 md:w-40 md:h-40 lg:w-48 lg:h-48 overflow-hidden rounded-lg bg-zinc-800">
            {isPlaceholder ? (
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <svg
                    className="w-16 h-16 mx-auto text-zinc-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                  <p className="text-zinc-500 mt-2 text-sm">Coming Soon</p>
                </div>
              </div>
            ) : (
              <Image
                src={image}
                alt={name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 192px, 192px"
              />
            )}
          </div>
        </div>

        {/* Content */}
        <div className="flex-grow text-center md:text-left">
          <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
          <p className="text-accent font-medium mb-3">{title}</p>
          <p className="text-silver-dark text-sm leading-relaxed whitespace-pre-line">{bio}</p>
        </div>
      </div>
    </div>
  );
}
