import React from "react";
import styles from "./postdetail.module.css";
import moment from "moment/moment";
import { BsCalendarDate } from "react-icons/bs";
import Link from "next/link";

const PostDetail = ({ post }) => {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>;
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>;
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>;
      }
      if (obj.href) {
        modifiedText = (
          <Link
            href={obj.href}
            className={styles.postLink}
            target={obj.openInNewTab ? "_blank" : null}
          >
            {obj.children[0].text}
          </Link>
        );
      }
    }

    switch (type) {
      case "heading-three":
        return (
          <h3 key={index} className={styles.headingThree}>
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        );
      case "heading-two":
        return (
          <h3 key={index} className={styles.headingTwo}>
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        );
      case "paragraph":
        return (
          <p key={index} className={styles.parapgraphs}>
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        );
      case "heading-four":
        return (
          <h4 key={index} className={styles.headingFour}>
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        );
      case "image":
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };

  return (
    <div className={styles.post__detail}>
      <div className={styles.post__detail__image}>
        <img src={post.featuredImage.url} alt={post.title} />
      </div>
      <div className={styles.content}>
        <div className={styles.post__info}>
          <span className={styles.author}>{post.author.name}</span>
          <div className={styles.date}>
            <BsCalendarDate />
            {moment(post.createdAt).format("MMM Do YYYY")}
          </div>
        </div>
        <h1 className="mb-8 text-3xl font-semibold">{post.title}</h1>
        {post.content.raw.children.map((typeObj, index) => {
          const children = typeObj.children.map((item, itemIndex) =>
            getContentFragment(itemIndex, item.text, item)
          );

          return getContentFragment(index, children, typeObj, typeObj.type);
        })}
      </div>
    </div>
  );
};

export default PostDetail;
