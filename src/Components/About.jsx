import a1 from '../Photos/Group_1484.png';
import a2 from '../Photos/stores-icon.png';
import a3 from '../Photos/Group_1499.png';

const About = () => {
  return (
    <div className="p-6 bg-gray-100 ">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">About CouponDunia</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-5 rounded-lg shadow-lg flex flex-col items-center text-center">
          <img src={a1} alt="img" className="w-20 h-20 mb-4 object-contain" />
          <h2 className="text-lg font-semibold text-gray-700">A Times Group Company</h2>
        </div>
        
        <div className="bg-white p-5 rounded-lg shadow-lg flex flex-col items-center text-center">
          <img src={a2} alt="img" className="w-20 h-20 mb-4 object-contain" />
          <h2 className="text-lg font-semibold text-gray-700">3000+ Online Brands</h2>
        </div>
        
        <div className="bg-white p-5 rounded-lg shadow-lg flex flex-col items-center text-center">
          <img src={a3} alt="img" className="w-20 h-20 mb-4 object-contain" />
          <h2 className="text-lg font-semibold text-gray-700">
            Trusted By <br /> 100 Cr+ Shoppers
          </h2>
        </div>
      </div>
    </div>
  );
};

export default About;