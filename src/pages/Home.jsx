import Search from '../components/Search';
import FeaturedPost from '../components/FeaturedPost';
import Blogs from '../components/Blogs';
import Footer from '../components/Footer';
import {useState} from 'react';

function Home() {

  const [selectedTag, setSelectedTag] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>

        <FeaturedPost />
        <Search selectedTag={selectedTag} searchTerm={searchTerm} setSelectedTag={setSelectedTag}
         setSearchTerm={setSearchTerm} />
        <Blogs selectedTag={selectedTag} searchTerm={searchTerm}/>
        <Footer />

    </>
    
  )
}

export default Home
