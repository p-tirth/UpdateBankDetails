import React from "react";
import { useState } from "react";

const BankDetails = () => {
  const [date, setDate] = useState(new Date().toLocaleDateString('en-US', {year:'numeric',month:"short",day:"numeric"}).toUpperCase());
  const [isDisabled, setIsDisabled] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsDisabled(!isDisabled);
    console.log(date)
    console.log("Form Submitted");
  };
  return (
    <div className="p-10">
      <h2 className="text-2xl font-semibold mb-4">Update Bank Details</h2>
      <p className="mb-6">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo.
      </p>
      <div className="bg-white p-6 rounded-md shadow-xl border pb-24">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="md:flex md:justify-between block gap-3">
            <label className="block whitespace-nowrap text-sm font-medium text-gray-700">
              ACCOUNT HOLDER NAME
            </label>
            <input
              disabled={isDisabled}
              type="text"
              placeholder="Account Holder Name"
              className={
                "mt-1 md:w-[50%] w-full font-semibold p-2 block border rounded-md" +
                (isDisabled ? " bg-green-100" : "")
              }
            />
          </div>
          <div className="md:flex md:justify-between block gap-3">
            <label className="block whitespace-nowrap text-sm font-medium text-gray-700">
              ACCOUNT NAME
            </label>
            <input
              disabled={isDisabled}
              type="text"
              placeholder="Account Name"
              className={
                "mt-1 md:w-[50%] w-full font-semibold p-2 block border rounded-md" +
                (isDisabled ? " bg-green-100" : "")
              }
            />
          </div>
          <div className="md:flex md:justify-between block gap-3">
            <label className="block whitespace-nowrap text-sm font-medium text-gray-700">
              IFSC Code
            </label>
            <input
              disabled={isDisabled}
              type="text"
              placeholder="IFSC Code"
              className={
                "mt-1 md:w-[50%] w-full font-semibold p-2 block border rounded-md" +
                (isDisabled ? " bg-green-100" : "")
              }
            />
          </div>
          <div className="md:flex md:justify-between block gap-3">
            <label className="block whitespace-nowrap text-sm font-medium text-gray-700">
              BANK NAME
            </label>
            <input
              disabled={isDisabled}
              type="text"
              placeholder="Bank Name"
              className={
                "mt-1 md:w-[50%] w-full font-semibold p-2 block border rounded-md" +
                (isDisabled ? " bg-green-100" : "")
              }
            />
          </div>
          <div className="md:flex md:justify-between block gap-3">
            <label className="block whitespace-nowrap text-sm font-medium text-gray-700">
              BANK CITY
            </label>
            <input
              disabled={isDisabled}
              type="text"
              placeholder="Bank City"
              className={
                "mt-1 md:w-[50%] w-full font-semibold p-2 block border rounded-md" +
                (isDisabled ? " bg-green-100" : "")
              }
            />
          </div>
          <div className="md:flex md:justify-between block gap-3">
            <label className="block whitespace-nowrap text-sm font-medium text-gray-700">
              BRANCH NAME
            </label>
            <input
              disabled={isDisabled}
              type="text"
              placeholder="Branch Name"
              className={
                "mt-1 md:w-[50%] w-full font-semibold p-2 block border rounded-md" +
                (isDisabled ? " bg-green-100" : "")
              }
            />
          </div>
          <div className="md:flex md:justify-between block gap-3">
            <label className="block flex-1 whitespace-nowrap text-sm font-medium text-gray-700">
              RELATION WITH THE ACCOUNT HOLDER
            </label>
            <input
              disabled={isDisabled}
              type="text"
              placeholder="Relation With The Account Holder"
              className={
                "mt-1 md:w-[50%] w-full font-semibold p-2 fle border rounded-md" +
                (isDisabled ? " bg-green-100" : "")
              }
            />
          </div>
          <div className="md:flex md:justify-between block gap-3">
            <label
              htmlFor="consent"
              className="font-medium text-sm text-gray-700"
            >
              CONSENT
            </label>
            <div
              className={
                "flex md:w-[50%] w-full p-5 border shadow-lg" +
                (isDisabled ? " bg-green-100 flex-col gap-2" : "")
              }
            >
              {!isDisabled && (
                <input
                  id="consent"
                  name="consent"
                  type="checkbox"
                  className="focus:ring-indigo-500 mr-3 mt-3 h-5 w-5 text-indigo-600 border-gray-300 rounded"
                />
              )}
              <p className="">
                Lorem ipsum dolor sit amet consectetur. Cum pellentesque
                pharetra nam tellus vitae mauris eget. Sit netus ac risus dolor
                eros iaculis. Elementum senectus morbi arcu.
              </p>
              {isDisabled && <p className="font-semibold">FILLED ON {date}</p>}
            </div>
          </div>
          <button
            type="submit"
            className="w-32 h-14 py-2 px-4 float-right bg-green-600 text-white rounded-md hover:bg-green-700"
          >
            {isDisabled ? "Edit" : "Save"}
          </button>
        </form>
      </div>
      <p className="p-7">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
        laudantium ratione ullam, sunt excepturi aliquid quidem facere maxime
        dolor iste repudiandae magnam architecto blanditiis quasi mollitia
        nostrum neque earum recusandae!
      </p>
      <hr />
    </div>
  );
};

export default BankDetails;
