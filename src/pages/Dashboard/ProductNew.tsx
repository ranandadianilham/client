import React, { useContext, useEffect, useState } from "react";
import DefaultLayout from "../../layout/DefaultLayout";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { Role } from "../../enum/role.enum";
import MainContext from "../../hook/MainContext";
import { Product } from "../../type/product.type";

const ProductNew = () => {
  const { id } = useParams();
  const [isEdit, setIsEdit] = useState();
  const navigate = useNavigate();
  const [product, useProduct] = useState<Product>({
    name: "",
    category: "",
    price: 0,
  });
  const [searchParams, setSearchParams] = useSearchParams();
  const { userRole } = useContext(MainContext);

  const handleSubmit = (val: any) => {
    console.log("va", product);
  };

  useEffect(() => {
    if(userRole === Role.CUSTOMER) {
        // return to home when role is customer
    }
  }, []);
  return (
    <DefaultLayout>
      <div className="bg-white p-10 rounded-lg">
        <div className="pb-10">
          <p className="text-2xl font-bold">
            {isEdit ? "Edit Product" : "View Product"}
          </p>
        </div>
        <div className="bg-white w-full h-full">
          <div>
            <div className="flex flex-col pb-5">
              <label>Name</label>
              <input
                className={`${
                  isEdit ? "pointer-events-none" : ""
                } w-1/3 border items-center px-3 h-10`}
                value={product?.name}
                onChange={(e) => {
                  useProduct((prev) => ({ ...prev, name: e.target.value }));
                }}
              />
            </div>
            <div className="flex flex-col pb-5">
              <label>Category</label>
              <input
                className={`${
                  isEdit ? "pointer-events-none" : ""
                } w-1/3 border items-center px-3 h-10`}
                value={product?.category}
                onChange={(e) => {
                  useProduct((prev) => ({ ...prev, category: e.target.value }));
                }}
              />
            </div>
            <div className="flex flex-col pb-5">
              <label>Price</label>
              <input
                className={`${
                  isEdit ? "pointer-events-none" : ""
                } w-1/3 border items-center px-3 h-10`}
                value={product?.price}
                onChange={(e) => {
                  useProduct((prev) => ({
                    ...prev,
                    price: parseInt(e.target.value),
                  }));
                }}
              />
            </div>
            <div className="btn">
              <button
                onClick={handleSubmit}
                className="border bg-[#16423C] hover:bg-[#E9EFEC] hover:text-[#16423C] text-white px-10 py-1"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default ProductNew;
