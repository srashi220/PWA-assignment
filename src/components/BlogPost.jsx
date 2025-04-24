import React from 'react';

const tags = ['React', 'Tailwind', 'Web Dev', 'UI/UX'];

const BlogPost = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-4 gap-8">
      {/* Sidebar */}
      <aside className="md:col-span-1 sticky top-6 h-max bg-gray-100 p-4 rounded shadow-sm">
        <h3 className="text-lg font-semibold mb-4">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
            >
              #{tag}
            </span>
          ))}
        </div>
      </aside>

      {/* Main content */}
      <main className="md:col-span-3 space-y-8">
        <article className="prose prose-lg text-justify">
          <h1>The Power of Tailwind CSS in Modern Web Development</h1>
          <p>
            Tailwind CSS provides a utility-first approach to building UIs. Unlike traditional frameworks, Tailwind allows developers to construct fully responsive designs directly in the HTML using utility classes.
          </p>
          <p>
            With its customizable nature and great performance, Tailwind has quickly become one of the top choices for front-end developers.
          </p>
        </article>

        {/* Author Bio */}
        <section className="flex gap-4 items-center bg-gray-50 p-4 rounded-lg shadow-sm">
          <img
            src="https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-female-user-profile-vector-illustration-isolated-background-women-profile-sign-business-concept_157943-38866.jpg?w=740"
            alt="Author"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <h4 className="font-semibold text-lg">Tanvi Jain</h4>
            <p className="text-sm text-gray-600">Frontend Developer & Writer at WebWiz</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default BlogPost;