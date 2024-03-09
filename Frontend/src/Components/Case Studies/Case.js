import React from "react";

const Case = () => {
  return <><div>Case Studies</div>
   <div className="my-4">
                <label
                  htmlFor="time"
                  className="block mb-2 text-md font-medium text-white"
                >
                  Select Time:
                </label>
                <select
                  required
                  className="border text-base font-semibold rounded-lg block w-full p-2.5 forminput disable-time-arrow"
                  // className="bg-gray-700 py-2 px-36 rounded-2xl text-white"
                >
                  <option value="" disabled selected>
                    Select your option
                  </option>
                  <option value="12:00PM">12:00 PM</option>
                  <option value="12:30PM">12:30 PM</option>
                  <option value="01:00PM">01:00 PM</option>
                  <option value="01:30PM">01:30 PM</option>
                  <option value="02:00PM">02:00 PM</option>
                  <option value="02:30PM">02:30 PM</option>
                  <option value="07:00PM">07:00 PM</option>
                  <option value="07:30PM">07:30 PM</option>
                  <option value="08:00PM">08:00 PM</option>
                  <option value="08:30PM">08:30 PM</option>
                </select>
              </div>
  </>;
};

export default Case;
