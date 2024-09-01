import Badge from "./components/badge/badge.tsx";
import Entry from "./components/entry/entry.tsx";

function App() {

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

      <Entry data={data}/>

    </>
  )
}

export default App
