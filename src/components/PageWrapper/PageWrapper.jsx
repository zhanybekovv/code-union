import './styles.scss';

const PageWrapper = ({children}) => {
  return (
    <div className="pageWrapper">
      {children}
    </div>
  )
};

export default PageWrapper;
