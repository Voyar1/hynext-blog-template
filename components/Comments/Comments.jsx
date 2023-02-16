import moment, { now } from "moment";
import React from "react";
import styles from "./comments.module.css";

const DUMMY_COMMENTS = [
  {
    author: "Arecki",
    date: new Date(),
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, perferendis. Nihil suscipit iure expedita, laudantium at dolore dolorum deserunt ipsam?",
  },
  {
    author: "Arecki",
    date: new Date(),
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, perferendis. Nihil suscipit iure expedita, laudantium at dolore dolorum deserunt ipsam?",
  },
  {
    author: "Arecki",
    date: new Date(),
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, perferendis. Nihil suscipit iure expedita, laudantium at dolore dolorum deserunt ipsam?",
  },
];

const Comments = () => {
  return (
    <div className={styles.commentsSection}>
      <span className={styles.commentsSectionTitle}>Comments</span>
      <div className={styles.comments}>
        <span className={styles.commentsValue}>
          {DUMMY_COMMENTS.length} Comments
        </span>
        {DUMMY_COMMENTS.map((comment) => {
          return (
            <div className={styles.comment}>
              <p className={styles.commentInfo}>
                <span className={styles.commentAuthor}>{comment.author}</span>{" "}
                on {moment(comment.date).format("MMM Do YYYY")}
              </p>
              <p>{comment.comment}</p>
              <p></p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Comments;
