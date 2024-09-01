import Entry from "../../components/entry/entry.tsx";
import Intro from "../../components/intro/intro.tsx";
import Info from "../../components/info/info.tsx";
import Header from "../../components/header/header.tsx";

const Feedback: React.FC = () => {

  const data = {
    id: 1,
    url: 'lorem',
    author: 'lorem',
    content: 'lorem',
    tags: ['lorem', 'lorem', 'lorem'],
    date_published: 'Wed Oct 05 2011 16:48:00 GMT+0200 (CEST)'
  }



  return (
    <>
      <Header/>
      <Info></Info>
      <Intro>Отзывы</Intro>

      <Entry data={data}/>
      <Entry data={data}/>
      <Entry data={data}/>

    </>
  )
}

export default Feedback;
