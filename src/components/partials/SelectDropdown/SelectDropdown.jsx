import { useEffect, useState } from "react";
import styles from "./SelectDropdown.module.css";

import ArrowDownIcon from "../../icons/ArrowDownIcon";

const SelectDropdown = (props) => {
  const [value, setValue] = useState("");
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    if (!props.selectedValue) {
      setValue("");
    }
    setValue(`${props.selectedValue}`);
  }, [props.selectedValue]);

  const handleChange = (event) => {
    const value = event.target.value;
    setValue(value);
    setFocused(false);
    props.onChange && props.onChange(value);
  };

  return (
    <div className={styles.dropdownContainer}>
      <select
        style={{ color: value ? "#000" : "#717070" }}
        onChange={handleChange}
        value={value}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      >
        <option value="" selected disabled hidden>
          {props.placeholder}
        </option>
        {props.options.map((item, i) => (
          <option key={i}>{item}</option>
        ))}
      </select>
      <span
        className={styles.arrowIcon}
        style={{ transform: focused ? "rotate(180deg)" : "" }}
      >
        <ArrowDownIcon />
      </span>
    </div>
  );
};

export default SelectDropdown;
