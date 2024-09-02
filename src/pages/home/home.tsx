import {Link} from "react-router-dom";

const Home: React.FC = () => {

  return (
    <>
      <div className="container" style={{padding: '100px 0 200px'}}>

        <h1>Главная</h1>

        <p>
          Сейчас работаем над <Link to="feedback">страницей отзывов</Link>
        </p>

      </div>
    </>
  )
}

export default Home;
