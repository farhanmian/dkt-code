import { useEffect, useState } from "react";
import styles from "./SizeModal.module.css";
import Button from "../../partials/Button/Button";
import BackIcon from "../../icons/BackIcon";
import CloseIcon from "../../icons/CloseIcon";
import Modal from "./Modal";
import {
  getBmiBracket,
  getBodyType,
  getFrameNumber,
} from "../../../utils/utils";

import { heightsArr, widthArr } from "../../../utils/height-width-data";

const initialData = [
  {
    name: "gender",
    heading: "What's your gender?",
    subHeading: "Do you identify as:",
    placeholder: "e.g. Male",
    options: ["Male", "Female", "Non-binary", "Other"],
  },
  {
    name: "height",
    heading: "What's your height?",
    subHeading: "To ensure a perfect fit, please provide your height.",
    placeholder: "e.g. 180cm",
    skip: true,
    options: heightsArr,
  },
  {
    name: "weight",
    heading: "What’s your weight?",
    subHeading: "To ensure a perfect fit, please provide your weight.",
    placeholder: "e.g. 60kg",
    // options: ["40kg", "50kg", "60kg", "70kg", "80kg", "90kg", "100kg", "110kg"],
    options: widthArr,
  },
];

const initialForm = {
  gender: "",
  height: "",
  weight: "",
  bodyType: "",
  // size: "",
};

const totalSteps = 4;

const SizeModal = ({ onCloseModal, onSubmit }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [imageFrameNumber, setImageFrameNumber] = useState(null);
  const [form, setForm] = useState({ ...initialForm });
  const [data, setData] = useState([...initialData]);

  /**
   * Calculate BMI and get the bracket
   * Get the bodyType and size from the bracket
   */
  useEffect(() => {
    if (!form.height || !form.weight) return;
    const weight = +form.weight.replace("kg", "");
    const height = +form.height.replace("cm", "");

    // calcuting Bmi (THIN, NORMAL, OVERWEIGHT)
    const bmi = getBmiBracket(height, weight);

    // getting images for bodyType
    const bodyType = getBodyType(form.gender, bmi);

    if (!bodyType) return;

    // updating data array
    const bodyTypeImages = [];
    bodyType.forEach((item) => {
      bodyTypeImages.push({ name: item.name, img: item.image });
    });

    const dataBodyTypeObj = {
      name: "bodyType",
      heading: "What describes your body type best?",
      subHeading: "Choose one option below to describe your body type.",
      images: bodyTypeImages,
    };
    // data.push(dataBodyTypeObj);
    const dataCopy = data.filter((item) => item.name !== "bodyType");
    dataCopy.push(dataBodyTypeObj);
    setData(dataCopy);
  }, [form]);

  /**
   * Getting Image Frame Number
   */
  useEffect(() => {
    if (!form.bodyType) return;

    const frameNumber = getFrameNumber(form.bodyType, form.height);
    setImageFrameNumber(frameNumber);
  }, [form]);

  // const closeModal = () => {
  //   const modalElement = document.querySelector("#modal-root");
  //   modalElement.style.display = "none";
  //   setCurrentStep(1);
  //   setForm(initialForm);
  // };

  const updateForm = (name, value) => {
    const formCopy = { ...form };
    formCopy[name] = value;

    setForm(formCopy);
  };

  const formSubmitHandler = (finalSelectedSize) => {
    onSubmit(finalSelectedSize);
    onCloseModal();
  };

  return (
    <>
      <div id="modalContainer" className={styles.container}>
        <div className={styles.cardOptionContainer}>
          {currentStep > 0 && (
            <Button
              theme="light"
              onClick={() => {
                setCurrentStep((prev) => prev - 1);
              }}
            >
              <BackIcon />
            </Button>
          )}

          <Button
            theme="light"
            style={{ marginLeft: "auto" }}
            onClick={onCloseModal}
          >
            <CloseIcon />
          </Button>
        </div>

        <Modal
          currentStep={currentStep + 1}
          totalSteps={totalSteps}
          heading={data[currentStep]?.heading}
          options={data[currentStep]?.options}
          images={data[currentStep]?.images}
          imageFrameNumber={imageFrameNumber}
          placeholder={data[currentStep]?.placeholder}
          value={form[data[currentStep]?.name]}
          nextBtnText={currentStep === totalSteps ? "Generate" : "Next"}
          onSubmit={formSubmitHandler}
          onChange={(value) => {
            console.log("value", value);
            const key = data[currentStep].name;
            updateForm(key, value);
          }}
          disable={!form[data[currentStep]?.name]}
          onNextBtnClick={() => {
            setCurrentStep(currentStep + 1);
          }}
        />
      </div>

      <div onClick={onCloseModal} className={styles.modalOverlay} />
    </>
  );
};

export default SizeModal;
