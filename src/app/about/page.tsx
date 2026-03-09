"use client";

export default function AboutCompanySection() {
  return (
    <section className="w-full bg-white py-10 font-mulish" id="about">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Left Column - Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/about.png"
            alt="About Purpose Technologies"
            width={2000}
            height={2000}
            className="rounded-lg"
          />
        </div>

        {/* Right Column - Content */}
        <div className="w-full md:w-1/2 space-y-6 px-4 pr-5">
          {/* About Company */}
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 md:w-5 md:h-5">
              <svg
                aria-hidden="true"
                className="w-4 h-4 md:w-5 md:h-5 text-brand-yellow"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="currentColor"
                  d="M256 56c110.5 0 200 89.5 200 200s-89.5 200-200 200S56 366.5 56 256 145.5 56 256 56m0-48C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 168c-44.2 0-80 35.8-80 80s35.8 80 80 80 80-35.8 80-80-35.8-80-80-80z"
                />
              </svg>
            </span>
            <span className="font-bold text-[18px] text-brand-black">
              About Company
            </span>
          </div>

          <h2 className="text-2xl md:text-[35px] font-bold leading-snug text-brand-black">
            Revolutionizing Payment Solutions Through Deadlock AI
          </h2>

          <p className="text-gray-600">
            Deadlock AI is constructing a modern payment infrastructure by partnering with top-tier wallet and card networks. We aspire to offer diverse collection and payment channels, allowing businesses to ensure swift, protected, and friction-free single-tap purchasing processes.
            <br />
            <br />
            Through Deadlock AI integration, merchants access a consolidated checkout interface that eases technical implementation, minimizes transaction barriers, and strengthens buyer satisfaction throughout the payment experience.
          </p>

          {/* Vision */}
          <div className="flex items-start gap-4">
            <span className="w-10 h-10 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-10 h-10 text-brand-yellow"
              >
                <path
                  fill="currentColor"
                  d="M12 4.5c-7.633 0-11 7.5-11 7.5s3.367 7.5 11 7.5 11-7.5 11-7.5-3.367-7.5-11-7.5zm0 12c-2.485 0-4.5-2.015-4.5-4.5S9.515 7.5 12 7.5 16.5 9.515 16.5 12 14.485 16.5 12 16.5zm0-7a2.5 2.5 0 100 5 2.5 2.5 0 000-5z"
                />
              </svg>
            </span>
            <div>
              <h3 className="font-bold text-xl">Our Vision</h3>
              <p className="text-gray-600">
                To be recognized as a leading payment technology innovator for enterprises worldwide, delivering an integrated, dependable, and hassle-free single-tap purchasing option.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="flex items-start gap-4">
            <span className="w-10 h-10 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-10 h-10 text-brand-yellow"
              >
                <path
                  fill="currentColor"
                  d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 14.93V13h3.93A8.001 8.001 0 0113 16.93zM11 13v3.93A8.001 8.001 0 016.07 13H11zm-4.93-2A8.001 8.001 0 0111 5.07V11H6.07zM13 11V5.07A8.001 8.001 0 0117.93 11H13z"
                />
              </svg>
            </span>
            <div>
              <h3 className="font-bold text-xl">Our Mission</h3>
              <p className="text-gray-600">
                To streamline monetary transactions by furnishing enterprises with tested tools, facilitating enterprise prosperity, strategic efficiency, and sustainable industry benefit.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="flex items-start gap-4">
            <span className="w-10 h-10 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-10 h-10 text-brand-yellow"
              >
                <path
                  fill="currentColor"
                  d="M12 2l2.39 6.91L22 9.17l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.04 2 9.17l7.61-1.26L12 2z"
                />
              </svg>
            </span>
            <div>
              <h3 className="font-bold text-xl">Our Values</h3>
              <p className="text-gray-600">
                We stand by forward-thinking approaches, honesty, and confidence. These principles anchor our workplace, inform strategic choices, and strengthen our pledge to furnishing durable and expandable payment technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
