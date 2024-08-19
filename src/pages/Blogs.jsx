import BlogPages from "../components/BlogPages";

const Blogs = () => {
  return (
    <div>
      <div className="py-40 bg-black text-center text-white px-4">
        <h2 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">
          Blog pages
        </h2>
      </div>

      {/* All blogs */}

      <div className="max-w-7xl mx-auto">
        <BlogPages/>
      </div>
    </div>
  );
};

export default Blogs;
