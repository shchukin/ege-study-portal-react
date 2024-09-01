import './badge.css';

type BadgeProps = {
  skin: 'moscow' | 'online' | 'record' | 'yellow' | 'light-green'
}

const Badge: React.FC<BadgeProps> = ({skin, children}) => {
  return (
    <div className={`badge badge--${skin}`}>{children}</div>
  )
}

export default Badge;
