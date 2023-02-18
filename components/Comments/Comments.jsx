import moment, { now } from "moment";
import React, { useState, useEffect } from "react";
import styles from "./comments.module.css";
import { getComments } from "@/services";

const Comments = ({ slug }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(slug).then((result) => setComments(result));
  }, [slug]);

  if (comments.length === 0) {
    return;
  }

  return (
    <div className={styles.commentsSection}>
      <span className={styles.commentsSectionTitle}>Comments</span>
      <div className={styles.comments}>
        <span className={styles.commentsValue}>{comments.length} Comments</span>
        {comments.map((comment) => {
          return (
            <div className={styles.comment} key={comment.createdAt}>
              <p className={styles.commentInfo}>
                <span className={styles.commentAuthor}>{comment.name}</span> on{" "}
                {moment(comment.date).format("MMM Do YYYY")}
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
