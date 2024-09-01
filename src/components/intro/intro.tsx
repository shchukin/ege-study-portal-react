import './intro.css';

const Intro: React.FC = ({children}) => {
  return (
    <div className="intro">
      <div className="intro__wrap container">
        <div className="intro__inner">
          <h1 className="intro__heading">
            {children}
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Intro;
