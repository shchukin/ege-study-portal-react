import Badge from "./components/badge/badge.tsx";
import Entry from "./components/entry/entry.tsx";

function App() {

  const data = {
    id: 1,
    url: 'dafdsf',
    author: 'adfadsf',
    content: 'adsfadf',
    tags: ['3423', 'adf', 'adf'],
    date_published: 'Wed Oct 05 2011 16:48:00 GMT+0200 (CEST)'
  }

  return (
    <>
      App component
      <Badge skin="moscow">Badge component</Badge>

      <Entry data={data}/>

    </>
  )
}

export default App
