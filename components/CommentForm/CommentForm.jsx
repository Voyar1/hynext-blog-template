import React, { useRef, useState } from "react";
import styles from "./commentform.module.css";
import { submitComment } from "@/services";

const CommentForm = ({ slug }) => {
  const [error, setError] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const commentRef = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const storeDataRef = useRef();

  const submitHandler = (event) => {
    setError(false);

    const comment = commentRef.current.value;
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const storeData = storeDataRef.current.checked;

    if (!comment && !name && !email) {
      setError(true);
      return;
    }

    const commentObj = {
      comment,
      name,
      email,
      slug,
    };

    if (storeData) {
      window.localStorage.setItem("name", name);
      window.localStorage.setItem("email", email);
    } else {
      window.localStorage.removeItem("name", name);
      window.localStorage.removeItem("email", email);
    }

    submitComment(commentObj).then((response) => {
      setIsValid(true);
      setTimeout(() => {
        setIsValid(false);
      }, 3000);
    });

    commentRef.current.value = "";
    nameRef.current.value = "";
    emailRef.current.value = "";
    storeDataRef.current.value = "";
  };

  return (
    <div className={styles.commentForm}>
      <span className={styles.commentFormTitle}>Leave a comment</span>
      <div className={styles.textareaContainer}>
        <textarea
          placeholder="Comment"
          name="comment"
          className={styles.textArea}
          ref={commentRef}
        ></textarea>
      </div>
      <div className={styles.inputsContainer}>
        <input placeholder="Name" type="text" name="name" ref={nameRef}></input>
        <input
          placeholder="Email"
          type="email"
          name="email"
          ref={emailRef}
        ></input>
        <div className={styles.storeDataContainer}>
          <div>
            <input
              type="checkbox"
              name="storeData"
              id="storeData"
              value="true"
              ref={storeDataRef}
            ></input>
            <label htmlFor="storeData">
              Save my email and name for the next time I comment
            </label>
          </div>
        </div>
      </div>
      {error && <p className={styles.error}>All fields are required</p>}

      <div className="mt-8">
        <button
          className={styles.submitButton}
          type="button"
          onClick={submitHandler}
        >
          Send Comment!
        </button>

        <span
          className={`${styles.succesMessage} ${
            isValid ? styles.succesMessageOpacity : ""
          }`}
        >
          Your comment has been submitted for review
        </span>
      </div>
    </div>
  );
};

export default CommentForm;
