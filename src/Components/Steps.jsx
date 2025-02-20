import React from "react";
import { FaSignInAlt, FaRupeeSign, FaWallet } from "react-icons/fa";

const steps = [
  {
    id: 1,
    icon: <FaSignInAlt className="text-4xl text-red-500" />,
    title: "Log In & Shop",
    description: "Click your favourite coupon & Shop",
  },
  {
    id: 2,
    icon: <FaRupeeSign className="text-4xl text-red-500" />,
    title: "Cashback Earned",
    description: "Cashback gets added to your CouponDunia wallet",
  },
  {
    id: 3,
    icon: <FaWallet className="text-4xl text-red-500" />,
    title: "Withdraw Cashback",
    description: "To your bank account, or as a voucher, recharge",
  },
];

const Steps = () => {
  return (
    <div className="p-6 bg-white">
      <p className="text-xl font-bold text-gray-800 mb-6">
        Three Steps To Save With CouponDunia
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((step) => (
          <div
            key={step.id}
            className="relative bg-gray-50 p-6 rounded-lg shadow-lg flex flex-col items-center"
          >
            <span className="absolute -top-3 right-3 bg-purple-200 font-bold px-3 py-1 rounded">
              {step.id}
            </span>
            <div className="bg-green-100 p-4 rounded-full flex items-center justify-center">
              {step.icon}
            </div>
            <h3 className="mt-4 font-semibold text-lg">{step.title}</h3>
            <p className="text-gray-600 mt-2">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Steps;
