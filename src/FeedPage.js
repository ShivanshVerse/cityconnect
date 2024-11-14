import React, { useState } from 'react';

function FeedPage() {
  const [posts, setPosts] = useState([
    {
      username: 'Alice',
      interest: 'Photography',
      content: 'Captured a beautiful sunset today!',
      imageUrl: '', // Add image URLs if needed
    },
    // Add more posts if desired
  ]);

  const handlePost = () => {
    // Logic for handling new posts
    console.log('Post submitted');
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>MindShare</h1>
        <div style={styles.nav}>
          <span>Explore</span>
          <span>Discover</span>
          <span>Contribute</span>
          <span>MindMate</span>
        </div>
      </header>

      <div style={styles.feed}>
        <div style={styles.postBox}>
          <h2>Share Your Mindset</h2>
          <input style={styles.input} type="text" placeholder="Interest or Mindset" />
          <textarea style={styles.textarea} placeholder="What's on your mind?"></textarea>
          <input style={styles.fileInput} type="file" />
          <button style={styles.postButton} onClick={handlePost}>Post</button>
        </div>

        {posts.map((post, index) => (
          <div key={index} style={styles.post}>
            <div style={styles.postHeader}>
              <span style={styles.postUsername}>{post.username}</span>
              <span style={styles.postInterest}>{post.interest}</span>
            </div>
            <p>{post.content}</p>
            {post.imageUrl && <img src={post.imageUrl} alt="Post" style={styles.postImage} />}
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#FFFFFF', // White background for a clean look
    padding: '20px',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#FFFFFF', // White text for the header
    padding: '10px 20px',
    backgroundColor: '#007BFF', // Blue for the header background
    borderRadius: '10px',
  },
  nav: {
    display: 'flex',
    gap: '20px',
    color: '#FFFFFF', // White for navigation text
  },
  feed: {
    marginTop: '20px',
  },
  postBox: {
    backgroundColor: '#E6F0FF', // Light blue for the post input area background
    padding: '20px',
    borderRadius: '10px',
    marginBottom: '20px',
    color: '#333333', // Darker grey for readability
  },
  input: {
    display: 'block',
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '5px',
    border: '1px solid #007BFF', // Blue border for the input fields
  },
  textarea: {
    display: 'block',
    width: '100%',
    padding: '10px',
    height: '80px',
    marginBottom: '10px',
    borderRadius: '5px',
    border: '1px solid #007BFF', // Consistent blue border
  },
  fileInput: {
    display: 'block',
    marginBottom: '10px',
    color: '#333333', // Neutral color for the file input text
  },
  postButton: {
    backgroundColor: '#007BFF', // Blue button for posting
    color: '#FFFFFF', // White text for contrast
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  post: {
    backgroundColor: '#FFFFFF', // White background for posts
    color: '#333333', // Darker text for readability
    padding: '20px',
    borderRadius: '10px',
    marginBottom: '20px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
  },
  postHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  postUsername: {
    fontSize: '18px',
  },
  postInterest: {
    fontSize: '14px',
    color: '#007BFF', // Blue for the interest tag
  },
  postImage: {
    width: '100%',
    borderRadius: '10px',
    marginTop: '10px',
  },
};

export default FeedPage;
