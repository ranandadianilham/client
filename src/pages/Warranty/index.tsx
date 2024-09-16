import React from "react";
import DefaultLayout from "../../layout/DefaultLayout";
import { WarrantyClaim } from "../../type/warranty.type";
import { Link } from "react-router-dom";
import ModalTwo from "../../components/Modals/ModalTwo";
import { v4 as uuidv4 } from 'uuid';

const claim: WarrantyClaim[] = [
  {
    id: uuidv4(),
    productId: uuidv4(),
    customerId: uuidv4(),
    approverId: uuidv4() ,
    claimDescription: "cannot turn on",
    status: "pending"
  }
];

const WarrantyPage = () => {
  /* create claim, list of active claim */
  // staff
  // 1. approval claim
  // 2. reject claim
  return (
    <DefaultLayout>
      <div className=" bg-white p-10 rounded-lg">
        <div className="pb-10 w-full flex justify-between">
          <div>
            <p className="text-2xl font-bold">Warranty Claim</p>
          </div>
          <div>
            <Link
              to={`new`}
              className="text-md font-bold border bg-[#16423C] hover:bg-[#E9EFEC] hover:text-[#16423C] text-white px-10 py-1"
            >
              New
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-4 h-full ">
          {/* table */}
          <div className="grid grid-cols-12 border col-span-12 ">
            <div className="col-span-2 flex items-center ps-5">
              <p className="font-medium">Claim ID</p>
            </div>
            <div className="col-span-2 flex items-center">
              <p className="font-medium">Product ID</p>
            </div>
            <div className="col-span-2 flex items-center">
              <p className="font-medium">Customer ID</p>
            </div>
            <div className="col-span-2 flex items-center">
              <p className="font-medium">Description</p>
            </div>
            <div className="col-span-2 flex items-center">
              <p className="font-medium">Status</p>
            </div>
            <div className="col-span-2 flex items-center">
              <p className="font-medium">Action</p>
            </div>
          </div>
        </div>
        <div className=" grid grid-cols-12 ">
          {claim.map((v: WarrantyClaim, i: number) => {
            return (
              <div
                className="grid grid-cols-12 col-span-12 border-b border-x "
                key={i}
              >
                <div className="col-span-2 flex items-center mx-3 my-5">
                  <p className="font-medium">{v.id}</p>
                </div>
                <div className="col-span-2 flex items-center mx-3 my-5">
                  <p className="font-medium">{v.productId}</p>
                </div>
                <div className="col-span-2 flex items-center my-5">
                  <p className="font-medium">{v.customerId}</p>
                </div>
                <div className="col-span-2 flex items-center *:my-5">
                  <p className="font-medium">{v.claimDescription}</p>
                </div>
                <div className="col-span-2 flex items-center *:my-5 ">
                  <p className="font-medium bg-green-500 px-2 py-1 rounded-xl flex text-white items-center">{v.status}</p>
                </div>
                <div className="col-span-2 flex items-center gap-3 my-5">
                  <Link
                    to={`product/${v.id}`}
                    className="hover:bg-slate-400 font-medium"
                  >
                    View
                  </Link>
                  {/* <button className="hover:bg-slate-400 font-medium">
                    Delete
                  </button> */}
                  <ModalTwo />
                </div>
              </div>
            );
          })}
        </div>

        {/* paging */}
        <div>
          <div></div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default WarrantyPage;
