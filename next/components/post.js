import React from "react";
import Link from "next/link";

const Post = ({ title, postId }) => (
  <article className="post post-list-item">
    <h3 className="post-title">{title}</h3>
    <Link href="/post/[id]" as={`/post/${postId}`}>
      <a className="btn btn-secondary">Read more</a>
    </Link>
  </article>
);

export default Post;
