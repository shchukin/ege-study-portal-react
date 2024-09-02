import './video.css';


type VideoProps = {
  id: string
}


const Video: React.FC<VideoProps> = ({id}) => {
  return (
    <iframe className="video" src={`https://www.youtube.com/embed/${id}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
  )
}

export default Video;
