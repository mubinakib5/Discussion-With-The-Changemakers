"use client";

import { useState } from "react";
import { sponsorTiers } from "../../data";

const Sponsors = () => {
  const [selectedTier, setSelectedTier] = useState("all");

  const handleTierChange = (tier) => {
    setSelectedTier(tier);
  };

  return (
    <section id="sponsors" className="py-20 bg-neutral-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-black mb-4">
            Sponsorship Milages
          </h2>
          <p className="text-neutral-gray mb-8">
            Partner with us to make a lasting impact
          </p>
          <div className="w-20 h-1 bg-brand-primary mx-auto"></div>
        </div>

        {/* Tier Filter */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12 px-2">
          <button
            onClick={() => handleTierChange("all")}
            className={`px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base transition-all duration-300 whitespace-nowrap ${
              selectedTier === "all"
                ? "bg-brand-primary text-neutral-white"
                : "bg-neutral-white text-neutral-gray border border-brand-primary hover:bg-brand-primary/10"
            }`}
          >
            All Tiers
          </button>
          {Object.keys(sponsorTiers).map((tier) => (
            <button
              key={tier}
              onClick={() => handleTierChange(tier)}
              className={`px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base transition-all duration-300 whitespace-nowrap ${
                selectedTier === tier
                  ? "bg-brand-primary text-neutral-white"
                  : "bg-neutral-white text-neutral-gray border border-brand-primary hover:bg-brand-primary/10"
              }`}
            >
              {sponsorTiers[tier].name}
            </button>
          ))}
        </div>

        {/* Sponsor Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {Object.entries(sponsorTiers)
            .filter(([tier]) => selectedTier === "all" || selectedTier === tier)
            .map(([tier, { name, benefits, style, textStyle, iconStyle }]) => (
              <div
                key={tier}
                className={`${style} p-6 sm:p-8 rounded-lg shadow-xl border-2 hover:scale-105 transition-all duration-300 flex flex-col h-full mx-auto w-full max-w-md`}
              >
                <div className="flex-grow">
                  <h3
                    className={`text-xl sm:text-2xl font-bold ${textStyle} mb-2 text-center`}
                  >
                    {name}
                  </h3>
                  <div
                    className={`w-12 h-1 ${textStyle} mx-auto mb-6 opacity-60`}
                  ></div>
                  <ul className="space-y-4 mb-8">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <svg
                          className={`w-5 h-5 sm:w-6 sm:h-6 ${iconStyle} flex-shrink-0 mt-1`}
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
                        <span
                          className={`${textStyle} opacity-90 text-xs sm:text-sm`}
                        >
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href="#contact"
                  className={`w-full bg-neutral-white/20 backdrop-blur-sm hover:bg-neutral-white/30 ${textStyle} font-bold py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors border-2 border-current mt-auto text-center text-sm sm:text-base`}
                >
                  Contact Us
                </a>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
