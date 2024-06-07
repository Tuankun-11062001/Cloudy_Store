import React from "react";
import Product from "../product";
import Empty from "../empty";

const ListProduct = ({ data }) => {
  return (
    <>
      {data?.data?.length < 1 ? (
        <Empty />
      ) : (
        <div className="shop_list_product">
          {data?.map((product) => (
            <Product key={product._id} data={product} />
          ))}
        </div>
      )}
    </>
  );
};

export default ListProduct;
