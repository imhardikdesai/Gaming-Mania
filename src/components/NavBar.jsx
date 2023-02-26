// import Button from 'react-bootstrap/Button';
import logo from '../assets/logo.svg'
import { RiArrowDownSLine } from 'react-icons/ri';
import SideModal from './SideModal';
import { useState } from 'react';


function NavBar() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <nav className='d-flex flex-column justify-content-between align-items-center bg-primary flex-md-row p-2'>
                <img src={logo} alt="nav-logo" className='h-100' />
                <div className="search-area">
                    <form>
                        <input type="text" className="form-control" placeholder="Enter game title" />
                    </form>
                </div>
            </nav>
            <div className="container mt-2">
                <button className='btn btn-outline-primary' onClick={handleShow}>Sort By <RiArrowDownSLine /></button>
                <SideModal show={show} handleClose={handleClose} />
            </div>
        </>
    );
}

export default NavBar;