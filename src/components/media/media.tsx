import './media.css';

const Media: React.FC = ({enlarged}) => {
  return (
    <div className={`media${ enlarged ? ' media--enlarged' : ''}`}>
      <a className="media__item media__item--vk" href="#">Вконтакте</a>
      <a className="media__item media__item--instagram" href="#">Instagram</a>
      <a className="media__item media__item--youtube" href="#">YouTube</a>
    </div>
  )
}

export default Media;
