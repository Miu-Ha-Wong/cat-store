import { useRef, useState } from "react";
import styles from "./SubmitCheckout.module.css";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../../store/ui-slice";
import { cartActions } from "../../../store/cart-slice";
import { Link, useNavigate } from "react-router-dom";

const phoneRegex = /^\d{10}$/;
const emailRegex = /\w+@\w+\.\w+/;
const isEmpty = (value) => value.trim() === "";
const isTenDigit = (value) => phoneRegex.test(value);
const isValidEmail = (value) => emailRegex.test(value);

const SubmitCheckout = (props) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [formInputsValidity, setFormInputValidity] = useState({
    name: true,
    email: true,
    phone: true,
    address: true,
    postal: true,
    city: true,
    province: true,
  });
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const navigate = useNavigate();

  const closeFormHandler = () => {
    dispatch(uiActions.formToggle());
  };

  const handlePhoneNumberChange = (event) => {
    const { value } = event.target;
    const cleanedPhoneNumber = value.replace(/\D/g, "");
    setPhoneNumber(cleanedPhoneNumber);
  };

  const nameRef = useRef();
  const emailRef = useRef();
  //   const phoneRef = useRef();
  const addressRef = useRef();
  const postalRef = useRef();
  const cityRef = useRef();
  const provinceRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();
    const enteredName = nameRef.current.value;
    const enteredEmail = emailRef.current.value;
    const enteredPhone = phoneNumber;
    const enteredAddress = addressRef.current.value;
    const enteredPostal = postalRef.current.value;
    const enteredCity = cityRef.current.value;
    const enteredProvince = provinceRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredEmailIsValid =
      !isEmpty(enteredEmail) && isValidEmail(enteredEmail);
    const enteredPhoneIsValid =
      !isEmpty(enteredPhone) && isTenDigit(enteredPhone);
    const enteredAddressIsValid = !isEmpty(enteredAddress);
    const enteredPostalIsValid = !isEmpty(enteredPostal);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredProvinceIsValid = !isEmpty(enteredProvince);

    setFormInputValidity({
      name: enteredNameIsValid,
      email: enteredEmailIsValid,
      phone: enteredPhoneIsValid,
      address: enteredAddressIsValid,
      postal: enteredPostalIsValid,
      city: enteredCityIsValid,
      province: enteredProvinceIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredEmailIsValid &&
      enteredPhoneIsValid &&
      enteredAddressIsValid &&
      enteredPostalIsValid &&
      enteredCityIsValid &&
      enteredProvinceIsValid;

    if (!formIsValid) {
      return;
    }

    dispatch(cartActions.initial());
    dispatch(uiActions.toggle());
    dispatch(uiActions.formToggle());

    console.log(items);

    navigate("/confirmation");
  };

  const nameControlStyle = `${styles.control} ${
    formInputsValidity.name ? "" : styles.invalid
  }`;
  const emailControlStyle = `${styles.control} ${
    formInputsValidity.email ? "" : styles.invalid
  }`;
  const phoneControlStyle = `${styles.control} ${
    formInputsValidity.phone ? "" : styles.invalid
  }`;
  const addressControlStyle = `${styles.control} ${
    formInputsValidity.address ? "" : styles.invalid
  }`;
  const postalControlStyle = `${styles.control} ${
    formInputsValidity.postal ? "" : styles.invalid
  }`;
  const cityControlStyle = `${styles.control} ${
    formInputsValidity.city ? "" : styles.invalid
  }`;
  const provinceControlStyle = `${styles.control} ${
    formInputsValidity.province ? "" : styles.invalid
  }`;

  return (
    <form className={styles.form} onSubmit={confirmHandler}>
      <div className={nameControlStyle}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameRef} />
        {!formInputsValidity.name && <p>Please enter a valid name!</p>}
      </div>
      <div className={emailControlStyle}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" ref={emailRef} />
        {!formInputsValidity.email && <p>Please enter a valid email!</p>}
      </div>
      <div className={phoneControlStyle}>
        <label htmlFor="phone">Phone Number</label>
        <input type="number" id="phone" onChange={handlePhoneNumberChange} />
        {!formInputsValidity.phone && <p>Please enter a valid phone number!</p>}
      </div>
      <div className={addressControlStyle}>
        <label htmlFor="address">Address</label>
        <input type="text" id="address" ref={addressRef} />
        {!formInputsValidity.address && <p>Please enter a valid address!</p>}
      </div>
      <div className={postalControlStyle}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalRef} />
        {!formInputsValidity.postal && <p>Please enter a valid postal code!</p>}
      </div>
      <div className={cityControlStyle}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityRef} />
        {!formInputsValidity.city && <p>Please enter a valid city!</p>}
      </div>
      <div className={provinceControlStyle}>
        <label htmlFor="province">Province</label>
        <input type="text" id="province" ref={provinceRef} />
        {!formInputsValidity.province && <p>Please enter a valid province!</p>}
      </div>
      <div className={styles.actions}>
        <button type="button" onClick={closeFormHandler}>
          {/*onClick={props.onCancel}*/}
          Cancel
        </button>

        <button className={styles.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default SubmitCheckout;
