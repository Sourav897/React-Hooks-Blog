import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { app } from '../firebase';

const firestore = getFirestore(app);

function PostDetail() {
  const [post, setPost] = useState({});
  const { postId } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      const docRef = doc(firestore, 'posts', postId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setPost({
          id: docSnap.id,
          ...docSnap.data(),
        });
      }
    };

    fetchPost();
  }, [postId]);

  return (
    <div className="post-detail">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}

export default PostDetail;
