import React from 'react'

export default function CollectionsSection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-12 font-mulish" id="collections">
      <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
        {/* Left column - image (33% on md+) */}
        <div className="w-full md:w-1/3 flex-shrink-0">
          <div className="relative w-full h-[420px] md:h-[540px] overflow-hidden">
            {/* Using next/image for optimized loading in Next.js */}
            <img
              src="./collection.png"
              alt="ajarPay mobile"
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>

        {/* Right column - content (66% on md+) */}
        <div className="w-full md:w-2/3 px-4 md:px-14">
          <div className="flex flex-col gap-6">
            <div>
              <ul className="flex items-center gap-3 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-4 h-4 md:w-5 md:h-5">
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4 md:w-5 md:h-5 text-brand-yellow"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="currentColor"
                        d="M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z"
                      />
                    </svg>
                  </span>
                  <span className="font-semibold text-lg text-brand-black">Deadlock AI</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-brand-black">Collections to Support:</h2>
              <p className="mt-3 text-gray-600">Enterprise entities seeking reliable payment collection can effortlessly integrate with our platform for a smooth single-tap checkout option.</p>
            </div>

            {/* Feature list - Collections */}
            <div className="mt-2">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full">
                  <ul className="space-y-4 text-gray-700">
                    <FeatureItem text="Educational institutes, e.g. schools, colleges, universities, tuition centers for collection of fee, other charges." />
                    <FeatureItem text="Digital gaming platforms and applications offering digital goods." />
                    <FeatureItem text="e-Commerce platforms and applications offering clothing, groceries etc." />
                    <FeatureItem text="Marketplaces offering services." />
                    <FeatureItem text="Social media platform offering subscriptions and e-goods." />

                  </ul>
                </div>
              </div>
            </div>

            {/* Disbursements heading */}
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-brand-black">Efficient Transfers for:</h2>
            </div>

            {/* Feature list - Disbursements */}
            <div>
              <ul className="space-y-4">
                <FeatureItem text="Payrolls, commissions, Vendors and refunds for any entity." />
                <FeatureItem text="Refunds and reimbursements." />
                <FeatureItem text="Digital services, e.g. web-designing, Freelancing and content development etc." />
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

function FeatureItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-4">
      <div className="pt-1">
        <span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-brand-yellow border border-brand-yellow/20">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 text-brand-black" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <rect x="4" y="4" width="16" height="16" rx="2" />
          </svg>
        </span>
      </div>
      <p className="text-gray-700 leading-relaxed">{text}</p>
    </li>
  )
}
