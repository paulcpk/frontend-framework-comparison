import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import fetchData from "./../../utils/fetch-data";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../../styles/main.css";

const Post = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, error } = fetchData(`/articles/${id}`);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div>
      <Head>
        <title>{data.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-md-2">
            <header>
              <h1 className="headline">{data.title}</h1>
            </header>
            <article
              className="post post-full"
              dangerouslySetInnerHTML={{ __html: data.body_html }}
            ></article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
