import useInput from "../../hooks/use-input";
import styles from "../header/styles/Account.module.css";

const Account = (props) => {
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPasswordInput,
  } = useInput((value) => value.trim() !== "");

  let formIsValid = false;

  if (enteredEmailIsValid && enteredPasswordIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!enteredEmailIsValid) {
      return;
    }

    console.log(enteredEmail);

    // EmailInputRef.current.value = ''; => NOT IDEAL, DON'T MANIPULATE THE DOM
    resetEmailInput();
    resetPasswordInput();
  };

  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  const passwordInputClasses = passwordInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler} className={styles.container}>
      <div className={styles.inputContainer}>
        <label htmlFor="Email">Email</label>
        <input
          type="text"
          id="Email"
          onChange={emailChangedHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && (
          <p className={styles["error-text"]}>Email must not be empty.</p>
        )}

        <div className={styles.PasswordInputClasses}>
          <label htmlFor="Password">Password</label>
          <input
            type="Password"
            id="Password"
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
            value={enteredPassword}
          />
          {passwordInputHasError && (
            <p className={styles["error-text"]}>
              Please enter a valid Password.
            </p>
          )}
        </div>
        <div className={styles["form-actions"]}>
          <button className={styles.submitBtn} disabled={!formIsValid}>
            Sign in
          </button>
        </div>
        <div>
          New to MOEW store?<span>Sign Up</span>
        </div>
      </div>
    </form>
  );
};

export default Account;
