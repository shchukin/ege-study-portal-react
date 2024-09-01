import './panel.css';

const Panel: React.FC = () => {
  return (
    <div className="panel">
      <div className="panel__heading">
        <span className="nobr">✨ Поделитесь</span> вашими впечатлениями от&nbsp;обучения в&nbsp;центре <span className="nobr">ЕГЭ-Студия ✨</span>
      </div>
      <a className="panel__submit button button--border-accent" href="#">
        Оставить отзыв
      </a>
    </div>
  )
}

export default Panel;
