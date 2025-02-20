import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
const faqData = [
    {
        question: "What is CouponDunia?",
        answer: "Founded in 2010, CouponDunia is India's largest discounts, offers, and cashback website. At CouponDunia, we help you save money through our comprehensive listing of coupons, offers, deals and discounts from 2000+ online brands including top stores like Flipkart, Amazon, MakeMyTrip, PayTM and BookMyShow. You can also earn real money in the form of Cashback on top of the merchant discounts every time you shop through us. Once you have 250 or more CD cashback, you can transfer it when and as you like - into your bank account, for a mobile recharge or Flipkart/Amazon vouchers. All you have to do to earn is: 1. Visit CouponDunia and find a store/deal you like Click on Activate Cashback or Get Deal or Show Coupon Code.3. Wait till we redirect you to the store website. Complete shopping and payment on the site. 4. Within a few minutes, you'll see Transaction tracked successfully message and money will get added to your account."
    },
    {
        question: "What are benefits of using CouponDunia?",
        answer: "Before you shop online, you should visit CouponDunia to get these benefits: 1. Real Money as cashback - CouponDunia offers CD Cashback on the majority of popular stores - these are extra savings you get in your CD account. This cashback is OVER & ABOVE the offers/discounts & coupons on the store and can be withdrawn without a fee/deduction.Note: CouponDunia provides the highest and best Cashback rates on most popular websites.2. Shopping Assistant: We know it can be difficult to find a good coupon or deal at the right time. So we bring to you the shopping assistant on Chrome and Android (part of the CouponDunia Android app)that reminds you to Activate Cashback and tell you the best offers available WHILE you shop.3. CD Special Coupon Codes: We have Special Coupon Codes on many stores like Oyo, McDonalds, HealthKart, HappyEasyGo & many others. You can also use CouponDunia to easily search for coupons on a store, category, bank or all - we provide multiple useful filters to help you narrow down applicable coupons. 4. Easy to find store deals for the best discounts: We show you all the available deals of a store in one place, making it easier for you to pick the best one.",
    },
    {
        question: "What is CouponDunia cashback?",
        answer: "CD Cashback is real money that you can earn over & above the discounts you get when shopping online. Stores and offers that have additional cashback can be identified by looking for labels in green, like '+ Upto 5% CD Cashback' or '+ Flat Rs. 100 CD Rewards' etc. The cashback you earn from CouponDunia can be in the form of :1. CD Cashback - When you shop on any store except Flipkart & Amazon. All withdrawal options are available.2. CD Rewards - Only when you shop on FLIPKART. All withdrawal options are available EXCEPT Bank Account withdrawal.3. CD Voucher Rewards - Only when you shop on AMAZON. Can ONLY be withdrawn as Amazon Pay Voucher.Irrespective of the type of cashback above, the entire amount can be withdrawn without any fee to multiple mediums as per your convenience. Check Withdrawal options for more."
    },
    {
        question: "What are CD rewards?",
        answer: "CD Rewards is cashback earned when you shop on FLIPKART via CouponDunia. This cashback is given the different name CD Rewards because Flipkart does not allow withdrawal of this cashback to a bank account.The process for earning of CD Rewards is the same as CD Cashback. CD Rewards can be withdrawn and used for mobile or DTH Recharge and converted to Flipkart Gift Card or Amazon Pay Voucher. In short, you can withdraw CD Rewards as you like, except to a bank account. This is why the balance available for bank transfer may be less than your total available balance."
    },
];
const FAQ = () => {
    const [open, setOpen] = useState(null);

    const toggleFAQ = (index) => {
        setOpen(open === index ? null : index);
    };
  return (
    <div>
        <div className="container mx-auto px-4 py-8">
                <h2 className="text-center text-2xl font-bold mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    {faqData.map((faq, index) => (
                        <div key={index} className="border rounded-lg">
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="flex justify-between items-center w-full px-4 py-3 text-left focus:outline-none"
                            >
                                <span className="text-lg font-medium">{faq.question}</span>
                                {open === index ? (
                                    <FiMinus className="text-2xl font-bold" />
                                ) : (
                                    <FiPlus className="text-2xl font-bold" />
                                )}
                            </button>
                            {open === index && (
                                <div className="px-4 pb-4">
                                    <p className="text-gray-700">{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
    </div>
     
  )
}

export default FAQ