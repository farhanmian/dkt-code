import React, { useState } from "react";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
import Breadcrumb from "./Breadcrumb";
import { VtmnButton } from "@vtmn/react";
import SizeModal from "./app/SizeModal/SizeModal";

const Product = () => {
  const [gender, setGender] = useState("femmes");
  const [showModal, setShowModal] = useState(false);
  const [modalSelectedSize, setModalSelectedSize] = useState("");

  const handleGenderChange = () => {
    setGender(gender === "femmes" ? "hommes" : "femmes");
  };
  return (
    <>
      <div
        className="Product"
        style={{
          width: "100vw",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div
          style={{
            width: "65%",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            backgroundColor: "white",
          }}
        >
          <Breadcrumb />
          <div className="flex flex-row items-center justify-between w-[100%] pt-2 px-8">
            <VtmnButton
              size="small"
              variant="secondary"
              onClick={handleGenderChange}
            >
              Changer le genre
            </VtmnButton>
          </div>
          <div className="pt-2">
            <ProductImage gender={gender} />
          </div>
        </div>
        <div className="w-[35%] min-h-[100vh] flex bg-[#f7f8f9]">
          <ProductInfo
            modalSelectedSize={modalSelectedSize}
            gender={gender}
            openSizeModal={() => {
              setShowModal(true);
            }}
          />
        </div>
      </div>

      {showModal && (
        <SizeModal
          onSubmit={(e) => {
            setModalSelectedSize(e);
          }}
          onCloseModal={() => {
            setShowModal(false);
          }}
        />
      )}
    </>
  );
};

export default Product;
