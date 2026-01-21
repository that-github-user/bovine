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
    price: "$420",
    mattPrice: "$450",
    period: "per 4 weeks",
    description: "Our most popular option for serious results. Train 3 days per week with personalized programming.",
    features: [
      "3 training sessions per week",
      "Customized workout programs",
      "Form and technique coaching",
      "Progress tracking",
      "Nutrition counseling included",
      "12-week minimum commitment",
    ],
    highlighted: true,
  },
  {
    title: "2-Day Program",
    price: "$320",
    mattPrice: "$340",
    period: "per 4 weeks",
    description: "Perfect for maintaining fitness or supplementing other activities with focused strength work.",
    features: [
      "2 training sessions per week",
      "Customized workout programs",
      "Form and technique coaching",
      "Nutrition counseling included",
      "12-week minimum commitment",
    ],
    highlighted: false,
  },
];

const packages = [
  { sessions: "10 Sessions", price: "$500", perSession: "$50/session" },
  { sessions: "20 Sessions", price: "$900", perSession: "$45/session" },
  { sessions: "30 Sessions", price: "$1,200", perSession: "$40/session" },
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pricingPlans.map((plan, index) => (
              <PricingCard
                key={index}
                title={plan.title}
                price={plan.price}
                mattPrice={plan.mattPrice}
                period={plan.period}
                description={plan.description}
                features={plan.features}
                highlighted={plan.highlighted}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Single Sessions & Packages */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Single Session */}
          <div className="text-center mb-12">
            <h2 className="section-title">Single Sessions</h2>
            <p className="section-subtitle">
              Drop-in training for flexible schedules or to try before committing.
            </p>
          </div>

          <div className="max-w-md mx-auto mb-16">
            <div className="card text-center border-2 border-zinc-700">
              <h3 className="text-xl font-bold text-white mb-2">Single Training Session</h3>
              <p className="text-4xl font-bold text-white mb-2">$60</p>
              <p className="text-silver-dark">per session</p>
            </div>
          </div>

          {/* Session Packages */}
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
                <p className="text-accent text-sm font-medium">{pkg.perSession}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Philosophy */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Training Philosophy</h2>
            <p className="section-subtitle">
              Strength First
            </p>
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-silver-dark text-lg leading-relaxed mb-6">
              We run a training system designed around a protocol that puts a focus on building
              strength first. The muscles, connective tissues, and joints must be strong and stable
              before asking the body to perform intensely in other ways. Whether those ways include
              running, jumping, throwing, biking, swimming, or any other challenge to the body.
            </p>
            <p className="text-silver-dark text-lg leading-relaxed mb-6">
              Strength comes with increased coordination and the ability to create tension by
              learning to use the entire body in all movements. You&apos;d be surprised by how much
              your body can do once you&apos;ve developed a baseline of strength.
            </p>
            <p className="text-silver-dark text-lg leading-relaxed">
              Our approach ensures you build a foundation that supports whatever physical goals
              you pursue—whether that&apos;s competitive athletics, recreational activities, or
              simply living life with more energy and fewer limitations.
            </p>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-zinc-950">
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
                  One-on-one attention from experienced trainers
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
