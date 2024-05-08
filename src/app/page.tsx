import { SiTesla } from "react-icons/si";
import { BsQuestionCircle, BsGlobe } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

export default function Home() {
  return (
    <>
      {/* NavBar */}
      <div className="bg-[url('https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-Y-Desktop-Global.png')] h-screen bg-cover bg-center">
        <div className="h-screen">
          <div className="hidden lg:flex items-center justify-between px-12 pt-3">
            <SiTesla className="text-4xl" />
            <div className="flex items-center text-sm font-medium">
              <h1 className="px-4 py-1.5 rounded-md hover:bg-gray-200 cursor-pointer">
                Vehicles
              </h1>
              <h1 className="px-4 py-1.5 rounded-md hover:bg-gray-200 cursor-pointer">
                Energy
              </h1>
              <h1 className="px-4 py-1.5 rounded-md hover:bg-gray-200 cursor-pointer">
                Charging
              </h1>
              <h1 className="px-4 py-1.5 rounded-md hover:bg-gray-200 cursor-pointer">
                Discover
              </h1>
              <h1 className="px-4 py-1.5 rounded-md hover:bg-gray-200 cursor-pointer">
                Shop
              </h1>
            </div>
            <div className="flex text-xl items-center">
              <div className="hover:bg-gray-200 px-1.5 py-1.5 rounded-md cursor-pointer">
                <BsQuestionCircle />
              </div>
              <div className="hover:bg-gray-200 px-1.5 py-1.5 rounded-md cursor-pointer">
                <BsGlobe />
              </div>
              <div className="hover:bg-gray-200 px-1.5 py-1.5 rounded-md cursor-pointer">
                <CgProfile />
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="xl:pt-[66px] flex flex-col gap-[18rem] md:gap-[21rem]">
              <div>
                <h1 className="text-[40px] font-medium text-center">Model Y</h1>
                <h3 className="text-xl font-medium text-center">
                  From $29,490*
                </h3>
                <p className="text-[12px] text-center">
                  After Federal Tax Credit & Est. Gas Savings
                </p>
              </div>
              <div className="flex flex-col gap-5 lg:gap-10">
                <div className="flex flex-col justify-center md:flex-row gap-3 lg:gap-5 px-5 lg:px-0">
                  <div className="py-2 bg-[#F8F8F7] rounded-md md:w-[125px] lg:w-[264px] text-center text-sm font-medium">
                    Order Now
                  </div>
                  <div className="py-2 text-white bg-[#636361] rounded-md md:w-[125px] lg:w-[264px] text-center">
                    Demo Drive
                  </div>
                </div>
                <div className="flex flex-col justify-center text-sm lg:text-xs px-5">
                  <div className="text-center">
                    *Price before incentives is $42,990, excluding taxes and
                    fees. Subject to change.
                  </div>
                  <p className="underline cursor-pointer text-center">
                    Learn about est. gas savings.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second */}
      </div>
      <div className="bg-[url('https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-3-Desktop-LHD-v2.jpg')]  h-screen bg-cover bg-no-repeat bg-center">
        <div className="h-screen">
          <div className="flex justify-center">
            <div className="pt-[110px] flex flex-col gap-[22.5rem]">
              <div>
                <h1 className="text-[40px] font-medium text-center">Model 3</h1>
                <h3 className="text-xl font-medium text-center">
                  From $299/mo*
                </h3>
                <p className="text-[12px] text-center">
                  Est. Lease Price Before Gas Savings
                </p>
              </div>
              <div className="flex flex-col gap-10">
                <div className="flex justify-center gap-5">
                  <div className="py-2 bg-[#F8F8F7] rounded-md w-[264px] text-center text-sm font-medium">
                    Order Now
                  </div>
                  <div className="py-2 text-white bg-[#636361] rounded-md w-[264px] text-center">
                    Demo Drive
                  </div>
                </div>
                <div className="flex justify-center text-xs text-white">
                  <div className="text-center">
                    *Excludes taxes and fees with price subject to change.
                    Available in select states.
                  </div>
                  <p className="underline cursor-pointer">See Details</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Third */}
      <div className="bg-[url('https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-X-Desktop.jpg')]  h-screen bg-cover bg-no-repeat bg-center">
        <div className="h-screen">
          <div className="flex justify-center">
            <div className="pt-[120px] flex flex-col gap-[21rem]">
              <div>
                <h1 className="text-[40px] font-medium text-center">Model X</h1>
                <h3 className="text-xl font-medium text-center">
                  From $63,990*
                </h3>
                <p className="text-[12px] text-center">
                  After Federal Tax Credit & Est. Gas Savings
                </p>
              </div>
              <div className="flex flex-col gap-8">
                <div className="flex justify-center gap-5">
                  <div className="py-2 bg-[#F8F8F7] rounded-md w-[264px] text-center text-sm font-medium">
                    Order Now
                  </div>
                  <div className="py-2 text-white bg-[#636361] rounded-md w-[264px] text-center">
                    Demo Drive
                  </div>
                </div>
                <div className="flex justify-center flex-col text-xs text-white">
                  <div className="text-center">
                    *Price before incentives and savings is $77,990, excluding
                    taxes and fees. Subject to change.
                  </div>
                  <p className="underline cursor-pointer text-center">
                    Learn about est. gas savings.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[url('https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-S-Desktop-LHD-6.22.jpg')]  h-screen bg-cover bg-no-repeat bg-center">
        <div className="h-screen">
          <div className="flex justify-center">
            <div className="pt-[120px] flex flex-col gap-[21rem]">
              <div>
                <h1 className="text-[40px] font-medium text-center">Model S</h1>
                <h3 className="text-xl font-medium text-center">
                  From $66,490*
                </h3>
                <p className="text-[12px] text-center">
                  After Est. Gas Savings
                </p>
              </div>
              <div className="flex flex-col gap-8">
                <div className="flex justify-center gap-5">
                  <div className="py-2 bg-[#F8F8F7] rounded-md w-[264px] text-center text-sm font-medium">
                    Order Now
                  </div>
                  <div className="py-2 text-white bg-[#636361] rounded-md w-[264px] text-center">
                    Demo Drive
                  </div>
                </div>
                <div className="flex justify-center flex-col text-xs">
                  <div className="text-center">
                    *Price before savings is $72,990, excluding taxes and fees.
                    Subject to change.
                  </div>
                  <p className="underline cursor-pointer text-center">
                    Learn about est. gas savings.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fourth */}
      <div className="bg-[url('https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Cybertruck-Desktop.jpg')]  h-screen bg-cover bg-no-repeat bg-center">
        <div className="h-screen">
          <div className="flex justify-center">
            <div className="pt-[255px] flex flex-col gap-[21rem]">
              <div></div>
              <div className="flex flex-col gap-8">
                <div className="flex justify-center gap-5">
                  <div className="py-2 bg-[#F8F8F7] rounded-md w-[264px] text-center text-sm font-medium">
                    Order Now
                  </div>
                  <div className="py-2 text-white bg-[#636361] rounded-md w-[264px] text-center">
                    Demo Drive
                  </div>
                </div>
                <div className="flex justify-center flex-col text-xs"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fifth */}
      <div className="bg-[url('https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-SolarPanels-01-Desktop')]  h-screen bg-cover bg-no-repeat bg-center">
        <div className="h-screen">
          <div className="flex justify-center">
            <div className="pt-[120px] flex flex-col gap-[22.5rem]">
              <div className="text-white">
                <h1 className="text-[40px] font-medium text-center">
                  Solar Panels
                </h1>
                <h3 className="text-sm font-medium text-center underline cursor-pointer">
                  Schedule a Virtual Consultation
                </h3>
              </div>
              <div className="flex flex-col gap-10 pt-5">
                <div className="flex justify-center gap-5">
                  <div className="py-2 bg-[#F8F8F7] rounded-md w-[264px] text-center text-sm font-medium">
                    Order Now
                  </div>
                  <div className="py-2 text-white bg-[#636361] rounded-md w-[264px] text-center">
                    Demo Drive
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sixth */}

      <div className="bg-[url('https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/Homepage-SolarRoof-Desktop-Global')]  h-screen bg-cover bg-no-repeat bg-center">
        <div className="h-screen">
          <div className="flex justify-center">
            <div className="pt-[120px] flex flex-col gap-[22.5rem]">
              <div className="">
                <h1 className="text-[40px] font-medium text-center">
                  Solar Roof
                </h1>
                <h3 className="text-sm font-medium text-center">
                  Produce Clean Energy From Your Roof
                </h3>
              </div>
              <div className="flex flex-col gap-10 pt-5">
                <div className="flex justify-center gap-5">
                  <div className="py-2 bg-[#F8F8F7] rounded-md w-[264px] text-center text-sm font-medium">
                    Order Now
                  </div>
                  <div className="py-2 text-white bg-[#636361] rounded-md w-[264px] text-center">
                    Demo Drive
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Seventh */}

      <div className="bg-[url('https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Powerwall-01-Desktop.jpg')]  h-screen bg-cover bg-no-repeat bg-center">
        <div className="h-screen">
          <div className="flex justify-center">
            <div className="pt-[120px] flex flex-col gap-[22.5rem]">
              <div className="">
                <h1 className="text-[40px] font-medium text-center">
                  Powerwall
                </h1>
              </div>
              <div className="flex flex-col gap-10 pt-10">
                <div className="flex justify-center gap-5">
                  <div className="py-2 bg-[#F8F8F7] rounded-md w-[264px] text-center text-sm font-medium">
                    Order Now
                  </div>
                  <div className="py-2 text-white bg-[#636361] rounded-md w-[264px] text-center">
                    Demo Drive
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Seventh */}
      <div className="bg-[url('https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Accessories-Desktop-NA-APAC.jpg')]  h-screen bg-cover bg-no-repeat bg-center">
        <div className="h-screen">
          <div className="flex justify-center">
            <div className="pt-[66px] flex flex-col gap-[21rem]">
              <div className="pt-14">
                <h1 className="text-[40px] font-medium text-center">
                  Accessories
                </h1>
              </div>
              <div className="flex flex-col gap-24 pt-10">
                <div className="flex justify-center">
                  <div className="py-2 bg-[#F8F8F7] rounded-md w-[264px] text-center text-sm font-medium">
                    Shop Now
                  </div>
                </div>
                <div className="flex justify-center text-xs gap-5 text-gray-200">
                  <div>Tesla &copy; 2024</div>
                  <div>Privacy & Legal</div>
                  <div>Vehicle Recalls</div>
                  <div>Contact</div>
                  <div>News</div>
                  <div>Get Updates</div>
                  <div>Locations</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
