import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import userPic from '../assets/user.png'

function Profile() {

  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const { userId } = useParams();

  const navigate = useNavigate();

  const navigateQuiz = () => {
    navigate('/quiz');
  }

  useEffect(() => {
    // Fetch user data from backend
    axios.get(`http://localhost:5000/users/profile/${userId}`)
      .then(response => {
        setUser(response.data);
      })
      .catch(err => {
        setError('Failed to fetch user data');
      });
  }, [userId]);

  if (error) return <p>{error}</p>;
  if (!user) return <p>Loading...</p>;


  return (
    <div style={profilePageStyle}>
      <div style={leftSidebarStyle}>
        <div style={profilePicStyle}>
          <img
            src={user.profilePicture || userPic}
            alt="Profile"
            style={{ borderRadius: '50%', width: '100px', height: '100px' }}
          />
        </div>
        <h2>{user.fullName}</h2>
        <p>@{user.username}</p>
        <p>{user.bio || 'No bio available'}</p>
        <p>Score: {user.score}</p>
        <button className='outline' onClick={navigateQuiz}>Take a Quiz</button>
        <button className='outline contrast'>Edit Profile</button>
        <button >Sign out</button>
      </div>

      <div style={mainContentStyle}>
        <div style={badgeSectionStyle}>
          <h3>My Badges</h3>
          <div style={badgesContainerStyle}>
            {/* Example badges, replace with dynamic data if available */}
            <img src="/badge1.png" alt="Badge 1" style={badgeStyle} />
            <img src="/badge2.png" alt="Badge 2" style={badgeStyle} />
            <img src="/badge3.png" alt="Badge 3" style={badgeStyle} />
          </div>
        </div>

        <div style={postsSectionStyle}>
          <h3>Posts ({user.posts?.length || 0})</h3>
          {/* Render user posts if available */}
          {user.posts?.length ? (
            user.posts.map(post => <div key={post.id}>{post.content}</div>)
          ) : (
            <p>No posts yet</p>
          )}
        </div>
      </div>
    </div>
  )
}

const profilePageStyle = {
  display: 'flex',
  justifyContent: 'center',
  padding: '70px 20px 20px 20px',
};

const leftSidebarStyle = {
  backgroundColor: '#e6f7ff',
  padding: '20px',
  textAlign: 'center',
  width: '250px',
};

const profilePicStyle = {
  marginBottom: '20px',
};

const mainContentStyle = {
  flex: 1,
  padding: '20px',
};

const badgeSectionStyle = {
  marginBottom: '20px',
};

const badgesContainerStyle = {
  display: 'flex',
  justifyContent: 'space-around',
};

const badgeStyle = {
  width: '50px',
  height: '50px',
};

const postsSectionStyle = {
  padding: '20px',
  backgroundColor: '#f0f8ff',
};


export default Profile