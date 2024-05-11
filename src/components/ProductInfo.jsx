import {
  VtmnPrice,
  VtmnRating,
  VtmnButton,
  VtmnIcon,
  VtmnModal,
  VtmnModalTitle,
  VtmnModalDescription,
  VtmnModalActions,
  VtmnTooltip,
} from "@vtmn/react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useEffect, useState } from "react";

const product_info = {
  femmes: {
    title: "T-shirt Fitness Femme - 500 Essentials noir",
    price: "9€",
    rating: 4.5,
    description: [
      "Éco-conçu avec 30% de coton recyclé ce tee-shirt, 190g/m², de fitness femme à manches courtes, se porte à la salle de sport, comme en ville !",
      "Pièce maitresse de notre collection ESSENTIEL, ce tee-shirt femme intemporel est conçu pour le sport comme pour la vie quotidienne. Notre choix de matière contribue à la durabilité du produit.",
    ],
  },
  hommes: {
    title: "T-shirt Slim fitness Homme - 500 vert Cyprès",
    price: "9€",
    rating: 4.7,
    description: [
      "Vous allez aimer : sa coupe slim très tendance, sa matière respirante hyper confortable, sa facilité d'entretien. Vous allez adorer : sa douceur ultra agréable !",
      "Fit slim, confortable et extensible, ce t-shirt, 180 g/m², met en valeur votre silhouette. Vous le portez avec plaisir au sport comme au quotidien.",
    ],
  },
};

const ProductInfo = ({ gender, openSizeModal, modalSelectedSize }) => {
  const sizeOptions = ["XS", "S", "M", "L", "XL", "2XL", "3XL"];
  const [selectedSize, setSelectedSize] = useState(null);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [open, setOpen] = useState(false);

  const selectSize = (size) => {
    setSelectedSize(size);
    setIsDropdownVisible(false);
  };

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  useEffect(() => {
    if (!modalSelectedSize) return;
    selectSize(modalSelectedSize);
  }, [modalSelectedSize]);

  const selectedProduct_infos =
    gender === "femmes" ? product_info.femmes : product_info.hommes;

  return (
    <div className="text-left px-8 pt-4 flex flex-col pb-5 max-w-[100%]">
      <p className="text-[#001018] text-[1.6rem] font-bold">
        {selectedProduct_infos.title}
      </p>
      <div className="flex pt-2">
        <VtmnPrice
          style={{
            fontFamily: "Roboto Condensed",
            fontWeight: "700",
            fontSize: "1.5rem",
            lineHeight: "2rem",
            borderRadius: "0",
          }}
          size="large"
          variant="accent"
        >
          {selectedProduct_infos.price}
        </VtmnPrice>
      </div>
      <div className="flex pt-2 flex-row space-x-3">
        <VtmnRating
          className=""
          comments=""
          name="rating"
          readonly
          showValue
          size="small"
          value={selectedProduct_infos.rating}
        />
        <p className="text-[0.875rem] text-link underline font-bold hover:cursor-pointer">
          Voir les 100 avis
        </p>
      </div>
      <p className="font-condensed text-[#001018] text-[0.875rem] leading-[1.43] pt-2">
        {selectedProduct_infos.description[0]}
      </p>
      <p className="font-condensed text-[#001018] text-[0.875rem] leading-[1.43] pt-2">
        {selectedProduct_infos.description[1]}
      </p>
      <div class="pt-4 flex justify-between items-center">
        <h2 class="font-condensed italic text-[#001018] text-[0.9rem] leading-[1.23] font-bold">
          TAILLE :
        </h2>
        <a
          onClick={openSizeModal}
          class="cursor-pointer text-sm transition-all hover:text-[#666666]"
        >
          Select Size
        </a>
      </div>
      <div className="dropdown pt-2">
        <label
          tabIndex={0}
          className="justify-between m-0 p-2 pl-2 btn w-full rounded-none font-condensed font-thin border-lightgrey hover:border-lightgrey bg-[white] hover:bg-[white]"
          onClick={toggleDropdown}
        >
          {selectedSize ? selectedSize : "SÉLECTIONNEZ UNE TAILLE"}
          {isDropdownVisible ? (
            <IoIosArrowUp className="text-[1.2rem]" />
          ) : (
            <IoIosArrowDown className="text-[1.2rem]" />
          )}
        </label>
        {isDropdownVisible && (
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] rounded-none menu shadow bg-base-100 w-full p-0"
          >
            {sizeOptions.map((size, index) => (
              <li key={index}>
                <p
                  className="hover:bg-[#f0f1f3] hover:rounded-none hover:cursor-pointer"
                  onClick={() => selectSize(size)}
                >
                  <p>{size}</p>
                  <p className="text-right text-[#05be8b]">En stock</p>
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="flex flex-row items-center justify-center py-2 w-full">
        <VtmnTooltip
          position="bottom"
          tooltip="Sélectionnez une taille pour activer le VTO"
          style={{
            visibility: selectedSize ? "hidden" : "visible",
          }}
        >
          <VtmnButton
            {...(selectedSize ? {} : { disabled: true })}
            style={{
              visibility: "visible",
              fontFamily: "Roboto Condensed",
              fontWeight: "700",
              fontSize: "0.8rem",
              lineHeight: "1.5rem",
              borderRadius: "0.15rem",
            }}
            size="small"
            variant="primary"
            onClick={() => setOpen(true)}
          >
            VIRTUAL TRY ON
          </VtmnButton>
        </VtmnTooltip>
        <VtmnModal open={open} onClose={() => setOpen(false)}>
          <VtmnModalTitle>This is the title</VtmnModalTitle>
          <VtmnModalDescription>
            La taille choisir est {selectedSize} pour {gender}
          </VtmnModalDescription>
          <VtmnModalActions>
            <VtmnButton onClick={() => setOpen(false)} variant="primary">
              OK
            </VtmnButton>
          </VtmnModalActions>
        </VtmnModal>
      </div>
      <p className="pt-2 font-condensed font-semibold text-[0.9rem]">
        Livraison à domicile - sous 3 à 4 jours
      </p>
      <div className="flex flex-row items-center">
        <div className="h-2 w-2 bg-[#02be8a] rounded-full"></div>
        <p className="text-[#001018] ml-2 font-condensed text-[0.8rem]">
          Disponible
        </p>
      </div>
      <p className="pt-2 font-condensed font-semibold text-[0.9rem]">
        Retrait en magasin gratuit
      </p>
      <p className="font-condensed text-[0.8rem] text-[#6b8588] underline hover:cursor-pointer">
        Choisir un magasin
      </p>
      <div
        className="flex flex-row justify-between pt-4"
        style={{
          display: "flex",
          justifyContent: "center",
          width: 400,
        }}
      >
        <VtmnButton
          style={{
            fontFamily: "Roboto Condensed",
            fontWeight: "700",
            fontSize: "0.9rem",
            lineHeight: "1.5rem",
            borderRadius: "0.15rem",
          }}
          iconAlone=""
          iconLeft={null}
          iconRight={null}
          size="stretched"
          variant="conversion"
        >
          AJOUTER AU PANIER
        </VtmnButton>
      </div>
      <p className="py-6 font-condensed font-semibold text-[0.9rem]">
        Nos services :
      </p>
      <div className="flex flex-row items-center">
        <VtmnIcon size={32} value="exchange-line" variant="brand" />
        <p className="text-[#001018] ml-6 font-condensed font-semibold text-[0.9rem]">
          Retours et échanges offerts pendant 365 jours
        </p>
      </div>
      <div className="flex flex-row items-center pt-4">
        <VtmnIcon size={32} value="store-fill" variant="brand" />
        <p className="text-[#001018] ml-6 font-condensed text-[0.9rem]">
          <strong>Retrait en Drive</strong> ou à l'accueil du magasin
        </p>
      </div>
    </div>
  );
};

export default ProductInfo;
