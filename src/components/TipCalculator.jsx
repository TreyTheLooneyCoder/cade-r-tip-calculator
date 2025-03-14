import { React, useEffect, useState } from "react";
import PercentButton from "./PercentButton";
import "../App.css";
import dollarSign from "../assets/icon-dollar.svg"
import personIcon from "../assets/icon-person.svg"

const TipCalculator = () => {
  const [total, setTotal] = useState(0);
  const [peopleNumber, setPeopleNumber] = useState(1);
  const [customTip, setCustomTip] = useState(0);
  const [tipPercent, setTipPercent] = useState(0);
  const [tip, setTip] = useState(0);

  useEffect(() => {
    // .ToFixed - used to format a number with a specific number of digits after the decimal point. It returns a string representation of the number, rounded if necessary, and padded with zeros if needed to reach the specified length. 
    setTip((tipPercent / 100).toFixed(2));
  }, [tipPercent]);

  useEffect(() => {
    setTip((customTip / 100).toFixed(2));
  }, [customTip]);

  const tipArr = [5, 10, 15, 20, 25];

  return (
    <>
      <form className="grid lg:grid-cols-2 gap-4">
        <div className="p-2 lg:p-4">
          <div className="text-start mb-5">
            <label htmlFor="TotalInput">Bill</label>
            <div className="relative flex mt-2">
              <img className="absolute self-center pl-4" src={dollarSign} alt="Dollar sign."/>

              <input id="TotalInput" type="number" className={`w-[100%] bg-veryLightGrayishCyan text-end rounded-md text-2xl py-2 px-4 hover:cursor-pointer`} placeholder="0" src={dollarSign} onChange={(e) => setTotal(Number(e.target.value))}/>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-start mb-2">Select Tip %</h2>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
              {tipArr.map((num, index) => (
                <PercentButton key={index} num={num} onClick={() => setTipPercent(num)}/>
              ))}

              <input id="customTip" type="text" className="bg-veryLightGrayishCyan text-center rounded-md text-2xl hover:cursor-pointer lg:w-[120px]" placeholder="Custom" onChange={(e) => setCustomTip(e.target.value)}/>
            </div>
          </div>
          
          <div className="mb-4 lg:mb-0">
            <label htmlFor="peopleNumber" className="flex justify-between">
              <h2 className="text-start mb-2">Number of People</h2>
              
              <h2 
                className={`${
                  // if the amount of people imput == 0 then show the text here, else keep it hidden from view for me.
                  peopleNumber == 0 ? "block" : "hidden"
                } text-red-500`}
              >Can't be zero</h2>
            </label>

            <div className="relative flex">
              <img className="absolute self-center pl-4" src={personIcon} alt="person icon"/>

              <input id="peopleNumber" type="number" className={`w-[100%] bg-VeryLightGrayishCyan text-end rounded-md text-2xl py-2 px-4 hover:cursor-pointer ${
                  peopleNumber == 0
                    ? `focus:outline-red-500`
                    : `focus:outline-cyan-500`
                }`}
                placeholder="0"
                onChange={(e) => {
                  setPeopleNumber(Number(e.target.value));
                }}
              />
            </div>
          </div>
        </div>

        <div className="bg-veryDarkGrayishCyan rounded-lg flex flex-col justify-between p-6 lg:p-10">
          <div>
            <div className="flex justify-between items-center my-4">
              <div>
                <h2 className="text-start text-white">Tip Amount</h2>
                <h3 className="text-start strongCyan">/ person</h3>
              </div>
              <h1 className="text-4xl strongCyan">
                {/* to populate the tip each person pays, total amount multiplied|*| by the total tip divided|/| by the amount of people. */}
                ${((total * tip) / peopleNumber).toFixed(2)}
              </h1>
            </div>

            <div className="flex justify-between items-center mt-8">
              <div>
                <h2 className="text-start text-white">Total</h2>
                <h3 className="text-start strongCyan">/ person</h3>
              </div>
              <h1 className="text-4xl strongCyan">
                {/* same as the former except for the total amount each person pays, total mutiplied|*| by (1 plus|+| any number with the value of the tips) divided|/| by the amount of people.  */}
                ${((total * (1 + Number(tip))) / peopleNumber).toFixed(2)}
              </h1>
            </div>
          </div>
          <div>
            <button type="reset" className="w-[100%] rounded-md bg-strongCyan veryDarkGrayishCyan hover:bg-cyan-100 h-12 mt-8 text-xl font-black" 
              onClick={() => {
                setTotal(0), setCustomTip(0), setPeopleNumber(1);
              }}
            >RESET</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default TipCalculator