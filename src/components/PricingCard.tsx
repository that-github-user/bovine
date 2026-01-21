interface PricingCardProps {
  title: string;
  subtitle?: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

export default function PricingCard({
  title,
  subtitle,
  price,
  period,
  description,
  features,
  highlighted = false,
}: PricingCardProps) {
  return (
    <div
      className={`card relative ${
        highlighted
          ? "border-accent bg-gradient-to-b from-zinc-900 to-zinc-950"
          : ""
      }`}
    >
      {highlighted && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">
            Most Popular
          </span>
        </div>
      )}
      <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
      {subtitle && (
        <p className="text-accent text-sm font-medium mb-2">{subtitle}</p>
      )}
      <div className="mb-4">
        <span className="text-4xl font-bold text-white">{price}</span>
        {period && <span className="text-silver-dark text-sm ml-1">/{period}</span>}
      </div>
      <p className="text-silver-dark text-sm mb-6">{description}</p>
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start text-sm">
            <svg
              className="w-5 h-5 text-accent mr-2 flex-shrink-0 mt-0.5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-silver">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
