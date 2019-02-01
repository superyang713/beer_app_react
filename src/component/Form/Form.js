import React from "react";
import "./Form.css";

const labelNames = [
  {
    label: "Specific Gravity of Wort (OG)",
    abbrv: "OG",
    placeholder: "0.9 ~ 1.1"
  },
  {
    label: "Specific Gravity of Beer (FG)",
    abbrv: "FG",
    placeholder: "0.9 ~ 1.1"
  },
  {
    label: "International Bitterness Units (IBU)",
    abbrv: "IBU",
    placeholder: "0 ~ 100"
  },
  {
    label: "Standard Reference Method (SRM)",
    abbrv: "SRM",
    placeholder: "1 ~ 20"
  },
  {
    label: "Alcohol By Volume (ABV)",
    abbrv: "ABV",
    placeholder: "1 ~ 15"
  }
];

const Form = props => {
  const formList = labelNames.map((item, i) => 
    <li className="form__row" key={i}>
      <label>{item.label}</label>
      <input type="text" name={item.abbrv} placeholder={item.placeholder}/>
    </li>
  );
  return (
    <form onSubmit={props.getBeer}>
      <ul className="form__container">
        {formList}
      </ul>
      <button className="form__button">Search</button>        
    </form>
  );
};

export default Form;
