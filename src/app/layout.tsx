import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Bovine Strength Systems | Premium Personal Training in Monterey, CA",
  description: "6,000 sq ft private gym offering personalized strength training, nutrition counseling, and a welcoming environment for all fitness levels in Monterey, California.",
  keywords: "personal training, gym, strength training, Monterey, California, fitness, nutrition counseling",
  openGraph: {
    title: "Bovine Strength Systems | Premium Personal Training in Monterey, CA",
    description: "6,000 sq ft private gym offering personalized strength training, nutrition counseling, and a welcoming environment for all fitness levels.",
    type: "website",
    locale: "en_US",
  },
};

// Schema.org structured data for local business SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Gym",
  name: "Bovine Strength Systems",
  description: "Premium personal training gym offering strength training, nutrition counseling, and personalized fitness programs in Monterey, California.",
  url: "https://boviness.com",
  telephone: "+1-831-717-4291",
  email: "info@boviness.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "524 Fremont Street",
    addressLocality: "Monterey",
    addressRegion: "CA",
    postalCode: "93940",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 36.6002,
    longitude: -121.8944,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "05:00",
      closes: "18:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "10",
    bestRating: "5",
    worstRating: "1",
  },
  priceRange: "$$",
  image: "https://boviness.com/images/logo.jpg",
  sameAs: [],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Personal Training Programs",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "3-Day Training Program (Matt Lamarque)",
          description: "3 personal training sessions per week with owner/head trainer, including customized programming and nutrition counseling",
        },
        price: "450",
        priceCurrency: "USD",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "450",
          priceCurrency: "USD",
          unitText: "4 weeks",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "3-Day Training Program (Staff Trainer)",
          description: "3 personal training sessions per week with staff trainer, including customized programming and nutrition counseling",
        },
        price: "420",
        priceCurrency: "USD",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "420",
          priceCurrency: "USD",
          unitText: "4 weeks",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "2-Day Training Program (Matt Lamarque)",
          description: "2 personal training sessions per week with owner/head trainer, including customized programming and nutrition counseling",
        },
        price: "340",
        priceCurrency: "USD",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "340",
          priceCurrency: "USD",
          unitText: "4 weeks",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "2-Day Training Program (Staff Trainer)",
          description: "2 personal training sessions per week with staff trainer, including customized programming and nutrition counseling",
        },
        price: "320",
        priceCurrency: "USD",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "320",
          priceCurrency: "USD",
          unitText: "4 weeks",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Single Training Session",
          description: "Drop-in personal training session",
        },
        price: "60",
        priceCurrency: "USD",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
