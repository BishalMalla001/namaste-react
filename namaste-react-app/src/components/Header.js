import logo from './logo.png'
const HeaderComponent = () => {
    return (
        <div className='header'>
            <div>
                <img className='logo' src={logo} height='60' width='60' alt='companyName'/>
            </div>
            <div className='nav-item'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default HeaderComponent;
