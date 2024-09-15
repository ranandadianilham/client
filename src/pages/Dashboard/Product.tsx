import React, { useContext, useEffect } from "react";
import DefaultLayout from "../../layout/DefaultLayout";
import MainContext from "../../hook/MainContext";
import { Link } from "react-router-dom";
import ModalTwo from "../../components/Modals/ModalTwo";

export interface Product {
  id?: number;
  name: string;
  category: string;
  price: number;
}

const productData: Product[] = [
  {
    id: 1,
    name: "Apple Watch Series 7",
    category: "Electronics",
    price: 296,
  },
  {
    id: 2,
    name: "Macbook Pro M1",
    category: "Electronics",
    price: 546,
  },
  {
    id: 3,
    name: "Dell Inspiron 15",
    category: "Electronics",
    price: 443,
  },
  {
    id: 4,
    name: "HP Probook 450",
    category: "Electronics",
    price: 499,
  },
];

const Product = () => {
  const { userRole } = useContext(MainContext);
  /* 
  - product list
  - product crud
  */

  useEffect(() => {
    console.log("user", userRole);
  }, []);

  return (
    <DefaultLayout>
      <div className=" bg-white p-10 rounded-lg">
        <div className="pb-10 w-full flex justify-between">
          <div>
            <p className="text-2xl font-bold">Product</p>
          </div>
          <div>
            <Link
              to={`product/new`}
              className="text-md font-bold border bg-[#16423C] hover:bg-[#E9EFEC] hover:text-[#16423C] text-white px-10 py-1"
            >
              New
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-4 h-full ">
          {/* table */}
          <div className="grid grid-cols-8 border col-span-12 ">
            <div className="col-span-1 flex items-center ps-5">
              <p className="font-medium">id</p>
            </div>
            <div className="col-span-2 flex items-center">
              <p className="font-medium">Name</p>
            </div>
            <div className="col-span-2 flex items-center">
              <p className="font-medium">Category</p>
            </div>
            <div className="col-span-1 flex items-center">
              <p className="font-medium">Price</p>
            </div>
            <div className="col-span-2 flex items-center">
              <p className="font-medium">Action</p>
            </div>
          </div>
        </div>
        <div className=" grid grid-cols-12 ">
          {productData.map((v: Product, i: number) => {
            return (
              <div
                className="grid grid-cols-8 col-span-12 border-b border-x "
                key={i + v.name}
              >
                <div className="col-span-1 flex items-center mx-3 my-5">
                  <p className="font-medium">{v.id}</p>
                </div>
                <div className="col-span-2 flex items-center mx-3 my-5">
                  <p className="font-medium">{v.name}</p>
                </div>
                <div className="col-span-2 flex items-center my-5">
                  <p className="font-medium">{v.name}</p>
                </div>
                <div className="col-span-1 flex items-center *:my-5">
                  <p className="font-medium">{v.price}</p>
                </div>
                <div className="col-span-2 flex items-center gap-3 my-5">
                  <Link
                    to={`product/${v.id}`}
                    className="hover:bg-slate-400 font-medium"
                  >
                    Edit
                  </Link>
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

export default Product;
