import React, { useEffect, useState } from "react";
import { usePosts } from "./hooks/usePosts";
import { List } from "E:/D/JS/REACT/my-app/src/components/List";
import "./styles/app/App.css";
import { Formpost } from "./components/Formpost";
import { Postfilter } from "./components/Postfilter/index";
import { MyModal } from "./components/UI/MyModal";
import { Mybutton } from "./components/UI/Mybutton";
import PostSetvice from "./API/PostSetvice";
import { Loader } from "./components/UI/Loader/Loader";


export default function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [isPostsLoading, setIsPostsLoading] = useState(false);

  useEffect(() => {
    fetchPosts();
  }, []);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  async function fetchPosts() {
    setIsPostsLoading(true);
    setTimeout(async () => {
      const posts = await PostSetvice.getAll();
      setPosts(posts);
      setIsPostsLoading(false);
    }, 2000);
  }

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <Mybutton onClick={fetchPosts}> Get posts</Mybutton>
      <Mybutton style={{ marginTop: "30px" }} onClick={() => setModal(true)}>
        Создать пост
      </Mybutton>
      <MyModal visible={modal} setVisible={setModal}>
        {" "}
        <Formpost create={createPost} />
      </MyModal>

      <hr style={{ margin: "15px 0" }} />
      <Postfilter filter={filter} setFilter={setFilter} />
      {isPostsLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: 50,
          }}
        >
          <Loader/>
        </div>
      ) : (
        <List
          remove={removePost}
          posts={sortedAndSearchedPosts}
          title="Список постов про JS "
        />
      )}
    </div>
  );
}
