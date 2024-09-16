import React from "react";
import DefaultLayout from "../../layout/DefaultLayout";

const ClaimForm = () => {
  return (
    <DefaultLayout>
      <div className="bg-white w-2/3 flex flex-col mx-auto px-10 gap-3 py-10">
        <div >
          <p className="text-xl font-semibold">Warranty Claim Form</p>
        </div>

        <div>
            <div>
                <p>Warranty Code</p>
                <input
                className="rounded border w-full"
                type="text"
                />
            </div>
            
            <div>
                <p>Sku ID</p>
                <input
                className="rounded border w-full"
                type="text"
                />
            </div>
            <div>
                <p>Reason</p>
                <textarea
                className="rounded border w-full"
                />
            </div>
            <div>
            <p>Upload:</p>
                <input 
                type="file"
                />
            </div>
        </div>
        <div><button className="text-md font-bold border bg-[#16423C] hover:bg-[#E9EFEC] hover:text-[#16423C] text-white px-10 py-1">Submit</button></div>
      </div>
    </DefaultLayout>
  );
};

export default ClaimForm;
