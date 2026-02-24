import { Check } from "lucide-react";

export default function Products() {
  return (
    <section className="relative pb-12 font-mulish mt-[20px] lg:mt-[-66px]" id="products">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-8">

        {/* First Column */}
        <div className="relative bg-brand-black rounded-lg font-mulish py-[40px] px-[50px] shadow space-y-6 text-white w-full lg:w-[40%]">
          <h2 className="text-[25px] font-bold">Our AI Services:</h2>
          <ul className="space-y-3">
            <li className="font-medium text-brand-yellow">Core Capabilities</li>
            <li className="flex items-center space-x-2">
              <Check className="text-brand-yellow w-4 h-4" />
              <span>Predictive Analytics</span>
            </li>
            <li className="flex items-center space-x-2">
              <Check className="text-brand-yellow w-4 h-4" />
              <span>Natural Language Processing</span>
            </li>
            <li className="flex items-center space-x-2">
              <Check className="text-brand-yellow w-4 h-4" />
              <span>Computer Vision</span>
            </li>
          </ul>
          <ul className="space-y-3">
            <li className="font-medium text-brand-yellow">Solutions for Enterprise</li>
            <li className="flex items-center space-x-2">
              <Check className="text-brand-yellow w-4 h-4" />
              <span>Intelligent Automation</span>
            </li>
            <li className="flex items-center space-x-2">
              <Check className="text-brand-yellow w-4 h-4" />
              <span>Sentiment Analysis</span>
            </li>
            <li className="flex items-center space-x-2">
              <Check className="text-brand-yellow w-4 h-4" />
              <span>Custom LLM Training</span>
            </li>
          </ul>
        </div>

        {/* Second Column */}
        <div className="bg-white rounded-[20px] shadow p-6 space-y-6 w-full">
          <div className="flex flex-col lg:flex-row lg:items-start lg:gap-8">

            <ul className="space-y-4 lg:w-1/2 order-2 lg:order-1">
              <li className="flex items-center">
                <span className="text-brand-yellow mr-3">
                  <Check className="w-5 h-5" strokeWidth={3} />
                </span>
                <span className="text-gray-800 text-base">Neural Architectures</span>
              </li>
              <li className="flex items-center">
                <span className="text-brand-yellow mr-3">
                  <Check className="w-5 h-5" strokeWidth={3} />
                </span>
                <span className="text-gray-800 text-base">Cloud Deployment</span>
              </li>
              <li className="flex items-center">
                <span className="text-brand-yellow mr-3">
                  <Check className="w-5 h-5" strokeWidth={3} />
                </span>
                <span className="text-gray-800 text-base">Data Privacy & Security</span>
              </li>
              <li className="flex items-center">
                <span className="text-brand-yellow mr-3">
                  <Check className="w-5 h-5" strokeWidth={3} />
                </span>
                <span className="text-gray-800 text-base">Real-time Insights</span>
              </li>
              <li className="flex items-center">
                <span className="text-brand-yellow mr-3">
                  <Check className="w-5 h-5" strokeWidth={3} />
                </span>
                <span className="text-gray-800 text-base">Scalable APIs</span>
              </li>
              <li className="flex items-center">
                <span className="text-brand-yellow mr-3">
                  <Check className="w-5 h-5" strokeWidth={3} />
                </span>
                <span className="text-gray-800 text-base">Ethical AI Compliance</span>
              </li>
            </ul>

            {/* Heading + Paragraph - Right on lg */}
            <div className="space-y-4 lg:w-1/2 order-1 lg:order-2">
              <h3 className="text-2xl font-semibold text-brand-black">
                The Deadlock Advantage:
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We provide sophisticated AI solutions tailored for the modern enterprise, helping you scale with intelligence across all industry sectors:
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
