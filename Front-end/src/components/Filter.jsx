import React, { useState } from "react";
import { FaHandHoldingMedical } from "react-icons/fa";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { TbBookUpload } from "react-icons/tb";
const Filter = ({ visible }) => {
  const [value, setValue] = useState(100);
  const handleValueChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto text-sm outline-none focus:outline-none">
        <div className="relative w-auto max-w-3xl mx-auto my-6">
          <div className="relative flex flex-col w-full border-0 rounded-lg shadow-lg outline-none bg-stone-50 focus:outline-none">
            <div className="relative flex-auto p-2">
              <p className="text-lg leading-relaxed text-slate-500">Bộ lọc</p>
            </div>
            <div className="flex flex-col justify-end p-6 space-y-4 text-left border-t border-solid rounded-b p border-slate-200">
              <h2>Trạng thái</h2>
              <div class="flex items-center mb-4">
                <input
                  id="default-radio-1"
                  type="radio"
                  value=""
                  name="default-radio"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="default-radio-1"
                  class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Đã ủng hộ
                </label>
              </div>
              <div class="flex items-center">
                <input
                  checked
                  id="default-radio-2"
                  type="radio"
                  value=""
                  name="default-radio"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="default-radio-2"
                  class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Chưa ủng hộ
                </label>
              </div>
            </div>
            <div className="flex flex-col justify-end w-full p-6 space-y-4 text-left border-t border-solid rounded-b p border-slate-200">
              <h2>Lĩnh vực</h2>
              <div class="flex items-center mb-4">
                <ul className="flex flex-col w-[450px] justify-center">
                  <li className="w-[350px] space-x-4 flex p-2 hover:bg-stone-50 rounded-lg hover:shadow-lg hover:cursor-pointer active:bg-transparent focus:bg-stone-50">
                    <div className="flex items-center justify-between w-full">
                      <div className="flex space-x-4">
                        <TbBookUpload className="w-6 h-6 rounded text-blue-950" />
                        <h2>Hỗ trợ giáo dục</h2>
                      </div>
                      <div>
                        <input
                          id="default-checkbox"
                          type="checkbox"
                          value=""
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                        />
                      </div>
                    </div>
                  </li>
                  <li className="w-[350px]  space-x-4 flex p-2 hover:bg-stone-50 rounded-lg hover:shadow-lg hover:cursor-pointer active:bg-transparent focus:bg-stone-50">
                    <div className="flex items-center justify-between w-full">
                      <div className="flex space-x-4">
                        <FaHandHoldingMedical className="w-6 h-6 text-red-800 rounded" />
                        <h2>Hỗ trợ y tế</h2>
                      </div>
                      <div>
                        <input
                          id="default-checkbox"
                          type="checkbox"
                          value=""
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                        />
                      </div>
                    </div>
                  </li>
                  <li className="w-[350px]  space-x-4 flex p-2 hover:bg-stone-50 rounded-lg hover:shadow-lg hover:cursor-pointer active:bg-transparent focus:bg-stone-50">
                    <div className="flex items-center justify-between w-full">
                      <div className="flex space-x-4">
                        <SiHomeassistantcommunitystore className="w-6 h-6 text-yellow-900 rounded" />
                        <h2>Hỗ trợ xây dựng cộng đồng</h2>
                      </div>
                      <div>
                        <input
                          id="default-checkbox"
                          type="checkbox"
                          value=""
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                        />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col justify-end w-full p-6 space-y-4 text-left border-t border-solid rounded-b p border-slate-200">
              <h2>Hạn mức kêu gọi</h2>
              <input
                type="range"
                min="0"
                max="100"
                step="0.001"
                onChange={handleValueChange}
              />
              <p>Hạn mức: {value} Goerli</p>
            </div>
            <div className="flex items-center justify-end p-6 border-t border-solid rounded-b border-slate-200">
              {/* <h2>Trạng thái</h2>


              <button className="px-6 py-2 mb-1 mr-1 text-sm font-bold uppercase transition-all duration-150 ease-linear bg-green-500 rounded-lg shadow-lg outline-none hover:bg-green-700 text-gray-50 background-transparent focus:outline-none hover:shadow-md">
                Edit
              </button>
              <button
                className="px-6 py-2 mb-1 mr-1 text-sm font-bold text-red-600 uppercase transition-all duration-150 ease-linear rounded-lg shadow outline-none active:text-white active:bg-red-900 hover:shadow-lg focus:outline-none"
                onClick={() => visible(false)}
              >
                Cancel
                
              </button> */}
              <button className="px-6 py-2 mb-1 mr-1 text-sm font-bold uppercase transition-all duration-150 ease-linear bg-green-500 rounded-lg shadow-lg outline-none hover:bg-green-700 text-gray-50 background-transparent focus:outline-none hover:shadow-md">
                Tìm
              </button>
              <button
                className="px-6 py-2 mb-1 mr-1 text-sm font-bold text-red-600 uppercase transition-all duration-150 ease-linear rounded-lg shadow outline-none active:text-white active:bg-red-900 hover:shadow-lg focus:outline-none"
                onClick={() => visible(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
    </div>
  );
};

export default Filter;
