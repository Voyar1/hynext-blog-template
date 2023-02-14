import React from "react";
import styles from "./commentform.module.css";

const CommentForm = () => {
  return (
    <div className={styles.commentForm}>
      <span className={styles.commentFormTitle}>Leave a comment</span>
      <div className={styles.textareaContainer}>
        <textarea
          placeholder="Comment"
          name="comment"
          className={styles.textArea}
        ></textarea>
      </div>
      <div className={styles.inputsContainer}>
        <input placeholder="Name" type="text" name="name"></input>
        <input placeholder="Email" type="text" name="email"></input>
        <div className={styles.storeDataContainer}>
          <div>
            <input
              type="checkbox"
              name="storeData"
              id="storeData"
              value="true"
            ></input>
            <label htmlFor="storeData">
              Save my email and name for the next time I comment
            </label>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <button type="button" className={styles.submitButton}>
          Send Comment!
        </button>
      </div>
    </div>
  );
};

export default CommentForm;
