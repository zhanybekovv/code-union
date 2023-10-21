import './styles.scss';

const Tag = ({ title }) => {
  return (
    <span key={title} className="tag">
      {title}
    </span>
  )
};

export default Tag;