import { useEffect, useState } from 'react';
import MenuButton from '../MenuButton/MenuButton';
import { Link, useLocation } from 'react-router-dom';
import HeaderStyled from './Header.styled';

function Header() {
    const [isShow, setIsShow] = useState(true);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const location = useLocation();

    // Mengatur lebar jendela browser saat perubahan ukuran layar
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        // Membersihkan event listener saat komponen unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Memperbarui tampilan list berdasarkan ukuran jendela browser
    useEffect(() => {
        if (windowWidth < 768) {
            setIsShow(false);
        } else {
            setIsShow(true);
        }
    }, [windowWidth]);

    function handleClick() {
        setIsShow(!isShow);
    }

    return (
        <HeaderStyled>
            <div className="header_left">
                <h1 className="header_brand">Covid ID</h1>
                <MenuButton onClick={handleClick}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        color="white"
                    >
                        <line x1="3" y1="12" x2="21" y2="12" />
                        <line x1="3" y1="6" x2="21" y2="6" />
                        <line x1="3" y1="18" x2="21" y2="18" />
                    </svg>
                </MenuButton>
            </div>
            <div className={isShow ? 'header_right' : 'header_right_hide'}>
                <ul className="header_list">
                    <li className="header_item">
                        <Link to={'/'} className={`link_item ${location.pathname === '/' ? 'active' : ''}`}>
                            Global
                        </Link>
                    </li>
                    <li className="header_item">
                        <Link to={'/indonesia'} className={`link_item ${location.pathname === '/indonesia' ? 'active' : ''}`}>
                            Indonesia
                        </Link>
                    </li>
                    <li className="header_item">
                        <Link to={'/provinsi'} className={`link_item ${location.pathname === '/provinsi' ? 'active' : ''}`}>
                            Provinsi
                        </Link>
                    </li>
                    <li className="header_item">
                        <Link to={'/about'} className={`link_item ${location.pathname === '/about' ? 'active' : ''}`}>
                            About
                        </Link>
                    </li>
                </ul>
            </div>
        </HeaderStyled>
    );
}

export default Header;