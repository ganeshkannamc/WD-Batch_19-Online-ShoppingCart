import './head.css'

const Header = () => {
  return (
    <div className="header-bar">
      <div>My personal shopping cart</div>
      <div className='menu'>
        <p>Home</p>
        <p>Cart</p>
        <p>Admin</p>
      </div>
    </div>
  );
};

export default Header;
