import { Metadata } from "next";
import Link from "next/link";
import PricingCard from "@/components/PricingCard";

export const metadata: Metadata = {
  title: "Programs & Rates | Bovine Strength Systems",
  description: "View our personal training programs and rates at Bovine Strength Systems. Flexible options for individuals and pairs in Monterey, CA.",
};

const pricingPlans = [
  {
    title: "3-Day Program",
    price: "$450",
    period: "month",
    description: "Our most popular option for serious results. Train 3 days per week with personalized programming.",
    features: [
      "3 training sessions per week",
      "Customized workout programs",
      "Form and technique coaching",
      "Progress tracking",
      "Nutrition guidance included",
    ],
    highlighted: true,
  },
  {
    title: "2-Day Program",
    price: "$350",
    period: "month",
    description: "Perfect for maintaining fitness or supplementing other activities with focused strength work.",
    features: [
      "2 training sessions per week",
      "Customized workout programs",
      "Form and technique coaching",
      "Progress tracking",
      "Nutrition guidance included",
    ],
    highlighted: false,
  },
  {
    title: "Pairs Training",
    price: "$300",
    period: "person/month",
    description: "Train with a partner and save. Great for couples, friends, or workout buddies.",
    features: [
      "3 sessions per week (per pair)",
      "Partner accountability",
      "Shared motivation",
      "Individual attention within sessions",
      "Customized for both partners",
    ],
    highlighted: false,
  },
  {
    title: "Single Sessions",
    price: "$75",
    period: "session",
    description: "Drop-in sessions for those with variable schedules or wanting to try before committing.",
    features: [
      "No commitment required",
      "Full training session",
      "Form assessment",
      "Workout recommendations",
      "Flexible scheduling",
    ],
    highlighted: false,
  },
];

const packages = [
  { sessions: "5 Sessions", price: "$350", savings: "Save $25" },
  { sessions: "10 Sessions", price: "$650", savings: "Save $100" },
  { sessions: "20 Sessions", price: "$1,200", savings: "Save $300" },
];

export default function ProgramsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-zinc-950 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
            Programs & <span className="text-silver">Rates</span>
          </h1>
          <p className="text-xl text-silver-dark max-w-3xl mx-auto">
            Flexible training options designed to fit your goals, schedule, and budget.
            All programs include personalized attention and expert coaching.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingPlans.map((plan, index) => (
              <PricingCard
                key={index}
                title={plan.title}
                price={plan.price}
                period={plan.period}
                description={plan.description}
                features={plan.features}
                highlighted={plan.highlighted}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Session Packages */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Session Packages</h2>
            <p className="section-subtitle">
              Buy sessions in bulk and save. Perfect for flexible schedules.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg, index) => (
              <div key={index} className="card text-center">
                <h3 className="text-xl font-bold text-white mb-2">{pkg.sessions}</h3>
                <p className="text-3xl font-bold text-white mb-2">{pkg.price}</p>
                <p className="text-accent text-sm font-medium">{pkg.savings}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">What&apos;s Included</h2>
            <p className="section-subtitle">
              Every training program at Bovine Strength includes comprehensive support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-xl font-bold text-white mb-4">Personal Training</h3>
              <ul className="space-y-3 text-silver-dark">
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  One-on-one attention from certified trainers
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  Customized workout programs
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  Progressive overload planning
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  Form correction and technique coaching
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  Regular progress assessments
                </li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold text-white mb-4">Nutrition Counseling</h3>
              <ul className="space-y-3 text-silver-dark">
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  Nutritional assessment and planning
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  Macro and calorie recommendations
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  Meal planning guidance
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  Supplement recommendations
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  Ongoing dietary support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title">Ready to Start Training?</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Contact us to discuss which program is right for you. We&apos;ll help you find the perfect fit for your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-lg">
              Get Started
            </Link>
            <a href="tel:831-277-4766" className="btn-secondary text-lg">
              Call (831) 277-4766
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
