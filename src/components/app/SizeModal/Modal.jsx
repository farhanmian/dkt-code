import React, { useEffect, useState } from "react";
import styles from "./SizeModal.module.css";
import SelectDropdown from "../../partials/SelectDropdown/SelectDropdown";
import Button from "../../partials/Button/Button";
import Loading from "../../partials/Loading/Loading";

const sizeBtns = ["XS", "S", "M", "L", "XL"];

const Modal = ({
  currentStep,
  totalSteps,
  heading,
  subHeading,
  options,
  placeholder,
  value,
  onChange,
  images,
  skipBtn,
  onSkip,
  onNextBtnClick,
  nextBtnText,
  disable,
  imageFrameNumber,
  onSubmit,
}) => {
  const [selectedSize, setSelectedSize] = useState(sizeBtns[0]);
  const [isLoading, setIsLoading] = useState(true);
  const [finalImgUrl, setFinalImgUrl] = useState("");
  const [selectedBodyType, setSelectedBodyType] = useState("");

  useEffect(() => {
    if (!imageFrameNumber) return;
    setFinalImgUrl("");
    setIsLoading(true);

    setTimeout(() => {
      const img = `https://firebasestorage.googleapis.com/v0/b/dkt-clone.appspot.com/o/v3%2F${selectedSize}_${imageFrameNumber}.png?alt=media`;
      setFinalImgUrl(img);
    }, 200);
  }, [imageFrameNumber, selectedSize]);

  const lastStepSelectImg = currentStep === totalSteps + 1;

  return (
    <>
      <div
        className={`${styles.stepsContainer} ${
          lastStepSelectImg ? styles.lastStepContainer : ""
        } ${lastStepSelectImg ? styles.finalStepContainer : ""}`}
      >
        {currentStep <= totalSteps && (
          <>
            {currentStep && (
              <p className={styles.stepsCount}>
                {currentStep}/{totalSteps} Steps
              </p>
            )}
            <h2 className={styles.heading}>{heading}</h2>
            <p className={styles.description}>{subHeading}</p>

            {options && (
              <SelectDropdown
                options={options}
                placeholder={placeholder}
                selectedValue={value}
                onChange={(value) => {
                  if (value === "Non-binary" || value === "Other") {
                    onChange("Male");
                    return;
                  }
                  onChange(value);
                  //   updateForm(dropdownFields[currentStep - 1], value);
                }}
              />
            )}

            {images && (
              <div className={styles.bodyTypeImagesContainer}>
                {images.map((item) => {
                  return (
                    <div
                      key={item.name}
                      className={`${styles.bodyTypeContainer} ${
                        item.name === selectedBodyType
                          ? styles.selectedBodyTypeImg
                          : ""
                      }`}
                      onClick={() => {
                        onChange(item.name);
                        setSelectedBodyType(item.name);
                        // updateForm("bodyType", item.name);
                      }}
                      // style={{
                      //   boxShadow:
                      //     item.name === selectedBodyType
                      //       ? "0px 2px 4px rgba(0,0,0,.1)"
                      //       : "none",
                      // }}
                    >
                      <div className={styles.bodyTypeImageCard}>
                        {/* {isLoading && ( */}
                        <div className={styles.imageLoading}>
                          <Loading color="#1d1d1d" width={30} />
                        </div>
                        {/* )} */}

                        <div
                          className={`${styles.bodyTypeImageCardImg} ${
                            !isLoading ? "is-fadeIn" : ""
                          }`}
                        >
                          <img
                            src={item.img}
                            srcSet={item.img}
                            alt={item.name}
                            loading="lazy"
                            onLoad={() => {
                              // setIsLoading(false);
                            }}
                          />
                        </div>
                      </div>
                      {/* <h5>{item.name}</h5> */}
                    </div>
                  );
                })}
              </div>
            )}

            <div className={styles.btnContainer}>
              {skipBtn && (
                <Button theme="light" onClick={onSkip}>
                  skip
                </Button>
              )}

              <Button
                // onClick={() => {
                // setCurrentStep((prev) => prev + 1);
                // if (currentStep === 3) {
                //   const bodyTypeImg = bodyTypeData
                //     .filter((item) => item.name === form.bodyType)
                //     .pop();
                //   bodyTypeImg && setSizeImg(bodyTypeImg?.img);
                //   updateForm("size", "");
                //   setIsLoading(true);
                // }
                // }}
                onClick={onNextBtnClick}
                disabled={disable}
                // disabled={
                //   currentStep === 3
                //     ? !form.bodyType
                //     : !form[dropdownFields[currentStep - 1]]
                // }
              >
                {nextBtnText}
              </Button>
            </div>
          </>
        )}

        {currentStep === totalSteps + 1 && imageFrameNumber && (
          <div className={styles.selectSizeContainer}>
            <div className={styles.sizeImageContainer}>
              {
                <div className={styles.imageLoading}>
                  <Loading color="#1d1d1d" width={30} />
                </div>
              }

              <div
                className={`${styles.finalSizeImageContainer} ${
                  !isLoading ? "is-fadeIn" : ""
                }`}
              >
                <img
                  onLoad={() => {
                    setIsLoading(false);
                  }}
                  src={finalImgUrl}
                  srcSet={finalImgUrl}
                  alt={""}
                  loading="lazy"
                />
              </div>
            </div>

            <div className={styles.sizeBtnContainer}>
              {sizeBtns.map((item) => (
                <Button
                  key={item}
                  styleClass={`${styles.sizeBtn} ${
                    selectedSize === item ? styles.selectedSizeBtn : ""
                  }`}
                  activeBtn={selectedSize === item}
                  // theme={item === form.size ? "dark" : "light"}
                  onClick={() => {
                    setSelectedSize(item);
                  }}
                >
                  {item}
                </Button>
              ))}

              <Button
                // styleClass={styles.sizeBtn}
                disabled={!selectedSize}
                onClick={() => {
                  onSubmit(selectedSize);
                }}
              >
                select
              </Button>
            </div>

            {/* <p>We recommend this size, Feel free to try some other sizes</p> */}
          </div>
        )}
      </div>
    </>
  );
};

export default Modal;
