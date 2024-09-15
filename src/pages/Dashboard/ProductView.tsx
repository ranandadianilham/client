import React, { useContext, useEffect, useState } from "react";
import DefaultLayout from "../../layout/DefaultLayout";
import { Product } from "../../type/product.type";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import MainContext from "../../hook/MainContext";
import { Role } from "../../enum/role.enum";

const data: Product = {
  id: 123,
  name: "Apple Watch Series 7",
  category: "Electronics",
  price: 296,
};

const ProductView = ({}: {}) => {
  const { id } = useParams();
  const [isEdit, setIsEdit] = useState();
  const navigate = useNavigate();
  const [product, useProduct] = useState<Product>(data);
  const [searchParams, setSearchParams] = useSearchParams();
  const { userRole } = useContext(MainContext);

  const handleFetchData = () => {
    // fetch data by id here
  };
  const handleSubmit = (val: any) => {
    console.log("va", product);
  };

  useEffect(() => {
    if (!id) {
      navigate(-1); // Navigate back to the previous page
    }

    handleFetchData();
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
              {userRole === Role.CUSTOMER ? <button
                  onClick={handleSubmit}
                  className="border bg-[#16423C] hover:bg-[#E9EFEC] hover:text-[#16423C] text-white px-10 py-1"
                >
                  Apply Warranty Claim
                </button> : null}
              {isEdit && userRole === Role.STAFF ? (
                <button
                  onClick={handleSubmit}
                  className="border bg-[#16423C] hover:bg-[#E9EFEC] hover:text-[#16423C] text-white px-10 py-1"
                >
                  Submit
                </button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default ProductView;
