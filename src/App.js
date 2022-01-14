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


      const proxyUrl = "https://cors-anywhere.herokuapp.com/";

      // const news = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.REACT_APP_NEWS_API_KEY}&pageSize=${loadMore}&category=${category}`);


      const news = await axios.get(`${proxyUrl}https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.REACT_APP_NEWS_API_KEY}&pageSize=${loadMore}&category=${category}`);

      setNewsArray(news.data.articles);
      setNewsResults(news.data.totalResults);

    }
    catch (error) {
      console.log(error);
    }

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