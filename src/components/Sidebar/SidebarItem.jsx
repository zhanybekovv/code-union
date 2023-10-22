const SidebarItem = (props) => {
  const { imgUrl, title, color} = props;
  return (
    <div className="mobileSidebarItem">
      <img src={imgUrl} alt='profile-menu' width={20} height={20} />
      {
        title && 
        <span className="title" style={{color}}>
          {title}
        </span>
      }
    </div>
  )
}

export default SidebarItem;
