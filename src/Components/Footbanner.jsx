import logo from '../Photos/Group_1418.png'
import logo1 from '../Photos/Group.png'
const Footbanner = ()=>{
            return (
              <footer className="bg-gray-800 text-white py-10 px-6">
                <div className="max-w-7xl mx-auto">
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    
                    <div className="bg-gray-700 p-5 rounded-lg">
                      <h3 className="font-bold text-lg mb-3">Latest From The Blog</h3>
                      <div className="flex items-start space-x-3">
                        <img src={logo1} alt="Blog" className="w-16 h-16 rounded-md" />
                        <div>
                          <p className="text-sm font-semibold">
                            Diwali Shopping on a Budget: Top Tips for Scoring Great Discounts
                          </p>
                          <p className="text-xs text-gray-400">By Preksha Malavia</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-700 p-5 rounded-lg">
                      <h3 className="font-bold text-lg border-l-4 border-red-500 pl-2">We Are Hiring!</h3>
                      <p className="text-sm text-gray-300 mt-3">
                        Seeking deal-driven superheroes! Join the discount hunters at CouponDunia and embark on an 
                        epic mission to save wallets and conquer the world of savings. Ready to seize the deal?
                      </p>
                      <a href="#" className="text-red-500 font-bold text-sm flex items-center mt-3">
                        See All Jobs <span className="ml-2">&#10140;</span>
                      </a>
                    </div>
          
                    <div className="bg-gray-700 p-5 rounded-lg">
                      <h3 className="font-bold text-lg border-l-4 border-red-500 pl-2">Subscribe To CouponDunia</h3>
                      <p className="text-sm text-gray-300 mt-3">
                        Get The Best Deals & Offers In Your Email.
                      </p>
                      <div className="mt-3 flex">
                        <input 
                          type="email" 
                          placeholder="Enter your e-mail address" 
                          className="flex-1 px-3 py-2 rounded-l-md bg-gray-600 text-white outline-none"
                        />
                        <button className="bg-red-500 px-4 py-2 rounded-r-md">
                          &#10140;
                        </button>
                      </div>
                    </div>
                  </div>
          
                  <div className="border-t border-gray-600 pt-5 text-center text-gray-400 text-sm">
                    <img src={logo} alt="DMCA" className="w-16 mx-auto mb-2" />
                    <p>© 2025 Bennett, Coleman & Co. Ltd. All rights reserved. | Indiatimes Commerce Network</p>
                  </div>
                </div>
              </footer>
            );
          };
export default Footbanner