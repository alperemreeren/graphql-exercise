import type { FunctionComponent } from 'react';

// React Bootstrap
import { Button } from '@mui/material';

// Styles
import styles from './Navbar.module.css';

const NavBar: FunctionComponent = () => {
    return (
        <div className='navbar'>
            <Button style={{ margin: '1px', border: '1px solid white', color: 'white' }} variant="outlined" onClick={(e) => console.log(e)}>Login</Button>
        </div>
    )
}

export default NavBar;