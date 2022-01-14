import './App.css';
import { useState, useEffect } from 'react'
import NavInshorts from './componets/NavInshorts';
import NewsContent from './componets/NewsContent/NewsContent';
import axios from 'axios';
import { Footer } from './componets/Footer/Footer';



function App() {
  const [category, setCategory] = useState("general");
  const [newsArray, setNewsArray] = useState([]);

  const [newsResults, setNewsResults] = useState();

  const [loadMore, setLoadMore] = useState(20);

  const newsApi = async () => {
    try {


      // const proxyUrl = "https://cors-anywhere.herokuapp.com/${proxyUrl}";

      const news = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.REACT_APP_API_KEY}&pageSize=${loadMore}&category=${category}`
      );

      // const news = await axios.get(`${proxyUrl}https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}&category=${category}&pageSize=${loadMore}`);

      console.log(news);
      setNewsArray(news.data.articles);
      setNewsResults(news.data.totalResults);

    }
    catch (error) {
      console.log(error);
    }
    console.log(newsArray);

  }
  useEffect(() => {
    newsApi();
    //eslint-disable-next-line
  }, [newsResults, category, loadMore]);




  return (
    <div>

      <NavInshorts setCategory={setCategory} />
      <NewsContent
        setLoadMore={setLoadMore}
        loadMore={loadMore}
        newsArray={newsArray}
        newsResults={newsResults} />
      <Footer />
    </div>
  );
}

export default App;