import { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { app } from '../firebase';
import { Link } from 'react-router-dom';

const firestore = getFirestore(app);

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const querySnapshot = await getDocs(collection(firestore, 'posts'));
      const postsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log('posts', postsData);
      setPosts(postsData);
    };

    fetchPosts();
  }, []);

  return (
    <div className="home">
      <h1>Blog</h1>
      <div id="blog-by">Sourav</div>

      {posts.map((post, index) => (
        <div className="post" key={`post-${index}`}>
          <Link to={`/post/${post.id}`}>
            <h3>{post.title}</h3>
          </Link>

          <p>{post.subTitle}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
