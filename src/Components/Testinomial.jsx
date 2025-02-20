const testimonials = [
  {
    rating:"⭐⭐⭐⭐⭐",
    text: "My favourite app that gave me extra discounts and cashback on brands like Amazon, Flipkart & Myntra. Using this app for a long time and I am really enjoying its features.",
    name: "Madhuri Naik",
    location: "Navi Mumbai",
  },
  {
    rating:"⭐⭐⭐⭐⭐",
    text: "Thank You, CouponDunia, for providing a cashback of ₹1549 on the Dell laptop order. I must say you are truly a genuine cashback website. This review is from the heart. You rock!",
    name: "Shan Mallah",
    location: "Rudrapur",
  },
  {
    rating:"⭐⭐⭐⭐⭐",
    text: "Lot of options variety easy to choose thank you! Last week I redeemed my CouponDunia balance to Amazon. They gave full instructions about redeeming the amount. I redeemed my amount and feel very happy.",
    name: "Umapathy Sankar",
    location: "Patna",
  },
];

const Testinomial = () => {
  return (
    <div className="p-6 bg-gray-100">
      <h2 className="text-2xl font-bold mb-6">Hear It From Our Customers</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-5 rounded-lg shadow-lg">
            <p>{testimonial.rating}</p>
            <p className="text-gray-700 mb-4">{testimonial.text}</p>
            <p className="text-sm font-semibold text-gray-900">{testimonial.name}, {testimonial.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testinomial;
