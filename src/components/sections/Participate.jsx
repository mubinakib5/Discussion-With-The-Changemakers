import { participateData } from "../../data";

const Participate = () => {
  return (
    <section id="participate" className="py-20 bg-neutral-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-black mb-4">
            How to Participate
          </h2>
          <div className="w-20 h-1 bg-brand-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Eligibility Criteria */}
          <div className="bg-brand-primary p-8 rounded-lg">
            <h3 className="text-xl font-bold text-neutral-white mb-6">
              Eligibility Criteria
            </h3>
            <ul className="space-y-4">
              {participateData.criteria.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <svg
                    className="w-6 h-6 text-neutral-white flex-shrink-0"
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
                  <span className="text-neutral-white/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits */}
          <div className="bg-brand-primary p-8 rounded-lg">
            <h3 className="text-xl font-bold text-neutral-white mb-6">
              What You Get
            </h3>
            <ul className="space-y-4">
              {participateData.benefits.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <svg
                    className="w-6 h-6 text-neutral-white flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 7l-8 8-4-4"
                    />
                  </svg>
                  <span className="text-neutral-white/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Registration Steps */}
          <div className="bg-brand-primary p-8 rounded-lg">
            <h3 className="text-xl font-bold text-neutral-white mb-6">
              Registration Steps
            </h3>
            <ul className="space-y-4">
              {participateData.steps.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-neutral-white rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-brand-primary text-sm font-medium">
                      {index + 1}
                    </span>
                  </div>
                  <span className="text-neutral-white/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center">
          <button className="bg-brand-primary hover:bg-brand-light text-neutral-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-300 transform hover:scale-105">
            Register Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Participate;
