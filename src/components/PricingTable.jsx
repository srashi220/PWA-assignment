import React from 'react';

const plans = [
  {
    name: 'Basic',
    price: '$19/mo',
    features: ['1 Website', '10GB Storage', 'Basic Support'],
    highlighted: false,
  },
  {
    name: 'Recommended',
    price: '$39/mo',
    features: ['5 Websites', '50GB Storage', 'Priority Support'],
    highlighted: true,
  },
  {
    name: 'Premium',
    price: '$79/mo',
    features: ['Unlimited Websites', '200GB Storage', '24/7 Support'],
    highlighted: false,
  },
];

const PricingTable = () => {
  return (
    <div className="p-3 bg-gray-100 min-h-max content pb-9">
      <h2 className="text-3xl font-bold text-center mb-8">Our Pricing Plans</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-lg shadow-md p-6 transform transition hover:scale-105 ${
              plan.highlighted
                ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white scale-105 shadow-lg'
                : 'bg-white text-gray-800'
            }`}
          >
            <h3 className="text-xl font-semibold mb-4 text-center">{plan.name}</h3>
            <p className="text-3xl font-bold text-center mb-6">{plan.price}</p>
            <ul className="space-y-2 mb-6">
              {plan.features.map((feature, i) => (
                <li key={i} className="text-center">
                  {feature}
                </li>
              ))}
            </ul>
            <div className="flex justify-center">
              <button
                className={`px-6 py-2 rounded ${
                  plan.highlighted
                    ? 'bg-white text-blue-600 font-semibold hover:bg-gray-200'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                } transition`}
              >
                Choose Plan
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingTable;