import React from 'react'

const CountBox = ({ title, value }) => {
  return (
    <div className="flex flex-col items-center w-[150px] shadow-lg rounded-lg">
      <h4 className="font-epilogue font-bold text-[30px] text-gray-900 p-3 bg-stone-50 rounded-t-[10px] w-full text-center truncate">{value}</h4>
      <p className="font-epilogue font-normal text-[16px] text-[#808191] bg-stone-200 px-3 py-2 w-full rouned-b-[10px] text-center rounded-md">{title}</p>
    </div>
  )
}

export default CountBox