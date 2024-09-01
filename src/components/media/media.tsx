import './media.css';

const Media: React.FC = () => {
  return (
    <div className="media">
      <a className="media__item media__item--vk" href="#">Вконтакте</a>
      <a className="media__item media__item--instagram" href="#">Instagram</a>
      <a className="media__item media__item--youtube" href="#">YouTube</a>
    </div>
  )
}

export default Media;
