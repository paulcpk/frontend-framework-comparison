import React from "react";
import Head from "next/head";
import Post from "../components/post";
import fetchData from "./../utils/fetch-data";

import "bootstrap/dist/css/bootstrap.min.css";
import "./../styles/main.css";

const Home = () => {
  const { data, error } = fetchData("/articles");

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  const postList = data.map(({ title, id }) => (
    <Post key={id} title={title} postId={id} />
  ));

  return (
    <div>
      <Head>
        <title>Next example Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-md-2">
            <header>
              <h1 className="headline">Next example Blog</h1>
            </header>
            <main className="post-container">{postList}</main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
