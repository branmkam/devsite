/* eslint-disable react/prop-types */
export default function Card({ children }) {
  return (
    <div className="border-2 border-[#5477b98a] bg-[#07235c] flex flex-col justify-between h-[450px] w-[95%] my-2 rounded-lg drop-shadow-sm">
      {children}
    </div>
  );
}
