import { useState } from "react";

const Sponsors = () => {
  const [selectedTier, setSelectedTier] = useState("all");

  const sponsorTiers = {
    platinum: {
      name: "Platinum",
      benefits: [
        "Premium logo placement",
        "Speaking opportunity",
        "VIP networking access",
        "Media coverage",
        "Dedicated booth space",
      ],
      style:
        "bg-gradient-to-br from-[#E5E4E2] via-[#DAD9D7] to-[#C0C0C0] border-[#E5E4E2]",
      textStyle: "text-neutral-black",
      iconStyle: "text-neutral-black",
    },
    gold: {
      name: "Gold",
      benefits: [
        "Logo on materials",
        "Event passes",
        "Networking session",
        "Brand visibility",
      ],
      style:
        "bg-gradient-to-br from-[#FFD700] via-[#FFC000] to-[#FFB000] border-[#FFD700]",
      textStyle: "text-neutral-black",
      iconStyle: "text-neutral-black",
    },
    silver: {
      name: "Silver",
      benefits: ["Logo inclusion", "Event passes", "Brand mention"],
      style:
        "bg-gradient-to-br from-[#C0C0C0] via-[#A8A8A8] to-[#808080] border-[#C0C0C0]",
      textStyle: "text-neutral-white",
      iconStyle: "text-neutral-white",
    },
  };

  const handleTierChange = (tier) => {
    setSelectedTier(tier);
  };

  return (
    <section id="sponsors" className="py-20 bg-neutral-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-black mb-4">
            Sponsorship Opportunities
          </h2>
          <p className="text-neutral-gray mb-8">
            Join us in empowering the next generation of changemakers
          </p>
          <div className="w-20 h-1 bg-brand-primary mx-auto"></div>
        </div>

        {/* Tier Filter */}
        <div className="flex justify-center space-x-4 mb-12">
          <button
            onClick={() => handleTierChange("all")}
            className={`px-6 py-2 rounded-full ${
              selectedTier === "all"
                ? "bg-brand-primary text-neutral-white"
                : "bg-neutral-white text-neutral-gray border border-brand-primary"
            }`}
          >
            All Tiers
          </button>
          {Object.keys(sponsorTiers).map((tier) => (
            <button
              key={tier}
              onClick={() => handleTierChange(tier)}
              className={`px-6 py-2 rounded-full ${
                selectedTier === tier
                  ? "bg-brand-primary text-neutral-white"
                  : "bg-neutral-white text-neutral-gray border border-brand-primary"
              }`}
            >
              {sponsorTiers[tier].name}
            </button>
          ))}
        </div>

        {/* Sponsor Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(sponsorTiers)
            .filter(([tier]) => selectedTier === "all" || selectedTier === tier)
            .map(([tier, { name, benefits, style, textStyle, iconStyle }]) => (
              <div
                key={tier}
                className={`${style} p-8 rounded-lg shadow-xl border-2 hover:scale-105 transition-all duration-300 flex flex-col h-full`}
              >
                <div className="flex-grow">
                  <h3 className={`text-2xl font-bold ${textStyle} mb-2`}>
                    {name}
                  </h3>
                  <div
                    className={`w-12 h-1 ${textStyle} mb-6 opacity-60`}
                  ></div>
                  <ul className="space-y-4 mb-8">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <svg
                          className={`w-6 h-6 ${iconStyle} flex-shrink-0`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className={`${textStyle} opacity-80`}>
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  className={`w-full bg-neutral-white/20 backdrop-blur-sm hover:bg-neutral-white/30 ${textStyle} font-bold py-3 px-6 rounded-lg transition-colors border-2 border-current mt-auto`}
                >
                  Download Brochure
                </button>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
