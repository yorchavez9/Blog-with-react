import Banner from "../components/Banner"
import BlogPages from "../components/BlogPages"

const Home = () => {
  return (
    <div>
      <Banner/>
      <div className="max-w-7xl mx-auto">
        <BlogPages/>
      </div>
    </div>
  )
}

export default Home
