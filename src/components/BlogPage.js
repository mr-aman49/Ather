import React from 'react';
import './styles/BlogPage.css';

// Example of media content, you can add more entries to this array as needed
const blogMedia = [
  {
    id: 1,
    title: 'How an EV Scooter Can Earn You Upto ₹1,27,000 in Five Years?',
    description: 'When it comes to choosing a scooter, most of us look at the price tag and fuel efficiency as key factors...',
    media: { type: 'video', src: require('./styles/assets/ev-scooter-video.mp4') }  // Video file for the first blog
  },
  {
    id: 2,
    title: 'Top Reasons Why You Should Switch to Electric Scooters',
    description: 'Palakkad, known for lush green forests, scenic landscapes, and rich cultural heritage, is a city that embodies...',
    media: { type: 'video', src: require('./styles/assets/top-reasons-video.mp4') }  // Video file for the second blog
  }
  // Add more blog posts if needed
];

const BlogPage = () => {

  const renderMedia = (media) => {
    if (media.type === 'video') {
      return (
        <video key={media.src} controls className="blog-media">
          <source src={media.src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    } else {
      return (
        <img key={media.src} src={media.src} alt="Blog Media" className="blog-media" />
      );
    }
  };

  return (
    <div className="blog-page">
      <div className="blog-container">
        {blogMedia.map((blog) => (
          <div key={blog.id} className="blog-card">
            {renderMedia(blog.media)} {/* Render video or image based on media type */}
            <div className="blog-content">
              <h2>{blog.title}</h2>
              <p>{blog.description}</p>
              <a href="#" className="read-more-btn">Read More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
