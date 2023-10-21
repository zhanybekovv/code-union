import './styles.scss';
import Dots from '../../icons/dots.svg';
import Tag from '../Tag';

const User = (props) => {

  const { name, email, tags, imgUrl } = props;

  const handleUserChange = () => {
    console.log('userChange')
  }

  return (
    <div className="user">
      <img src={imgUrl} alt="userLogo" className="logo" width={64} height={64}/>
      <span className="info">
        <div className="personalData">
          <span className="name">
            {name}
          </span>
          <span className="email">
            {email}
          </span>
        </div>
        <div className="tags">
          {
            tags.map((tag) => (
              <Tag title={tag}/>
            ))
          }
        </div>
      </span>
      <img src={Dots} alt='dots' className="userChange" onClick={handleUserChange}/>
    </div>
  )
};

export default User;
