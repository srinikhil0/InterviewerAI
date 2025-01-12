const Blog = () => {
  const blogPosts = [
    {
      title: "Mastering Technical Interviews",
      excerpt: "Key strategies and tips for acing your technical interviews...",
      date: "March 12, 2024",
      category: "Interview Tips",
      readTime: "5 min read"
    },
    {
      title: "How AI is Transforming Interview Preparation",
      excerpt: "Explore how artificial intelligence is revolutionizing the way candidates prepare...",
      date: "March 10, 2024",
      category: "Technology",
      readTime: "4 min read"
    },
    {
      title: "Top Behavioral Interview Questions and Answers",
      excerpt: "Common behavioral questions and how to structure your responses...",
      date: "March 8, 2024",
      category: "Interview Tips",
      readTime: "6 min read"
    }
  ];

  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
            Interview Preparation Blog
          </h1>
          <p className="text-xl text-gray-600">
            Tips, insights, and best practices for interview success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <span>{post.category}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <button className="text-primary-600 hover:text-primary-700">
                    Read more →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;