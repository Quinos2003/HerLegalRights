// import React, { useState } from "react";
import data_res from "../../Assets/data.js";
import CaseStudies from "../../Assets/CaseStudies.png";

const Case = () => {
  // const [show, setshow] = useState(false);

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${CaseStudies})`,
        }}
        className="bg-fixed bg-opacity-20"
      >
        <div className="flex z-10">
          <div className="flex-col m-auto">
            {/* <div className="font-sans flex justify-center font-bold mt-8 text-4xl">
              Case Studies
            </div> */}
            <div className="mt-4 mx-10">
              {data_res.map((item, i) => {
                return (
                  <>
                    <div className="flex justify-between my-5">
                      <div className="font-bold text-2xl">
                        {data_res[i].title}
                      </div>
                      <div className="font-bold text-2xl text-white">v</div>
                    </div>
                    <>
                      <div className="font-bold text-lg my-2">
                        {data_res[i].scenario}
                      </div>
                      <div>{data_res[i].legal}</div>
                      <div class="relative flex py-5 items-center">
                        <div class="flex-grow border-t border-gray-400"></div>
                        <div class="flex-grow border-t border-gray-400"></div>
                      </div>
                    </>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Case;
