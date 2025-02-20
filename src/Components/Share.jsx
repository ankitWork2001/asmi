import share1 from '../Photos/Group_1499.png';
import share2 from '../Photos/Group_8.png';
import share3 from '../Photos/Group_1543.png';

const Share = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-center bg-gray-800">
      <div className="bg-yellow-50 p-6 rounded-lg shadow-md">
        <img src={share1} alt="img" className="mx-auto w-24" />
        <p className="mt-4 text-gray-700">Get the free browser extension for instant access to top cashback & coupons for your favorite online stores!</p>
        <a href="/" className="mt-4 inline-block  text-blue-400 py-2 px-4 ">Add To Browser</a>
      </div>
      <div className="bg-red-50 p-6 rounded-lg shadow-md">
        <img src={share2} alt="img" className="mx-auto w-24" />
        <p className="mt-4 text-gray-700">Share offer links and earn money when someone shops through them</p>
        <a href="/" className="mt-4 inline-block text-blue-400 py-2 px-4">Share Now</a>
      </div>
      <div className="bg-blue-50 p-6 rounded-lg shadow-md">
        <img src={share3} alt='img' className="mx-auto w-24" />
        <p className="mt-4 text-gray-700">Refer CouponDunia, earn 10% of your friend’s earnings for life!</p>
        <a href="/" className="mt-4 inline-block  text-blue-400 py-2 px-4 ">Refer Now</a>
      </div>
    </div>
  );
};

export default Share;
