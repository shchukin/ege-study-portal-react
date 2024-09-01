import './entry.css';
import Badge from "../badge/badge.tsx";


type Tag = {
  id: number;
  name: string;
};

type EntryData = {
  id: number;
  url: string;
  author: string;
  content: string;
  tags: Tag[];
  date_published: string; // ISO 8601 date-time string
};

type EntryProps = {
  data: EntryData;
};

const Entry: React.FC<EntryProps> = ({data}) => {

  console.log(data)
  return (
    <article className="entry">
      <div className="entry__inner">
        <a className="entry__summary" href={data.url}>
          <h2 className="entry__heading">{data.author}</h2>
          <div className="entry__note">{data.content}</div>
          <div className="entry__tags">
            {data.tags.map((tag) => (
              <Badge skin="yellow">{tag}</Badge>
            ))}
          </div>
          <div className="entry__foot-date">{new Date(data.date_published).toLocaleDateString()}</div>
        </a>
      </div>
    </article>
  )
}

export default Entry;
