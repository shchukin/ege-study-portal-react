import './entry.css';
import Badge from "../badge/badge.tsx";

type EntryProps = {
  data: {
    id: number;
    url: string;
    author: string;
    content: string;
    tags: string[];
    date_published: string; // ISO 8601 date-time string
  };
};

const Entry: React.FC<EntryProps> = ({ data }) => {
  const { url, author, content, tags, date_published } = data;

  return (
    <article className="entry">
      <div className="entry__inner">
        <a className="entry__summary" href={url}>
          <h2 className="entry__heading">{author}</h2>
          <div className="entry__note">{content}</div>
          <div className="entry__tags">
            {tags.map((tag, index) => (
              <Badge key={index} skin="yellow">{tag}</Badge>
            ))}
          </div>
          <div className="entry__foot-date">{new Date(date_published).toLocaleDateString()}</div>
        </a>
      </div>
    </article>
  );
};

export default Entry;
