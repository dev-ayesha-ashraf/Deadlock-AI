import { Check } from "lucide-react";

export default function Products() {
  return (
    <section className="relative pb-12 font-mulish mt-[20px] lg:mt-[-66px]" id="products">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-8">

        {/* First Column */}
        <div className="relative bg-brand-black rounded-lg font-mulish py-[40px] px-[50px] shadow space-y-6 text-white w-full lg:w-[40%]">
          <h2 className="text-[25px] font-bold">Our Services:</h2>
          <ul className="space-y-3">
            <li className="font-medium text-brand-yellow">Collections (Pay-In Service)</li>
            <li className="flex items-center space-x-2">
              <Check className="text-brand-yellow w-4 h-4" />
              <span>Mobile wallets</span>
            </li>
            <li className="flex items-center space-x-2">
              <Check className="text-brand-yellow w-4 h-4" />
              <span>Debit and Credit Cards</span>
            </li>
          </ul>
          <ul className="space-y-3">
            <li className="font-medium text-brand-yellow">Disbursements (Pay-Out Service)</li>
            <li className="flex items-center space-x-2">
              <Check className="text-brand-yellow w-4 h-4" />
              <span>Mobile wallets</span>
            </li>
            <li className="flex items-center space-x-2">
              <Check className="text-brand-yellow w-4 h-4" />
              <span>IBFT</span>
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
                <span className="text-gray-800 text-base">Online Payment


                </span>
              </li>
              <li className="flex items-center">
                <span className="text-brand-yellow mr-3">
                  <Check className="w-5 h-5" strokeWidth={3} />
                </span>
                <span className="text-gray-800 text-base">Platform Support</span>
              </li>
              <li className="flex items-center">
                <span className="text-brand-yellow mr-3">
                  <Check className="w-5 h-5" strokeWidth={3} />
                </span>
                <span className="text-gray-800 text-base">Secured Transactions</span>
              </li>
              <li className="flex items-center">
                <span className="text-brand-yellow mr-3">
                  <Check className="w-5 h-5" strokeWidth={3} />
                </span>
                <span className="text-gray-800 text-base">
                  Responsive Web App</span>
              </li>
              <li className="flex items-center">
                <span className="text-brand-yellow mr-3">
                  <Check className="w-5 h-5" strokeWidth={3} />
                </span>
                <span className="text-gray-800 text-base">Divide Group Payments</span>
              </li>
              <li className="flex items-center">
                <span className="text-brand-yellow mr-3">
                  <Check className="w-5 h-5" strokeWidth={3} />
                </span>
                <span className="text-gray-800 text-base">Lock Protection</span>
              </li>
            </ul>

            {/* Heading + Paragraph - Right on lg */}
            <div className="space-y-4 lg:w-1/2 order-1 lg:order-2">
              <h3 className="text-2xl font-semibold text-brand-black">
                The Deadlock Offering:
              </h3>
              <p className="text-gray-600 leading-relaxed">
                An efficient, trouble-free single-tap purchasing method for all kinds of payins and transfers. We proudly accommodate the following business verticals:
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
