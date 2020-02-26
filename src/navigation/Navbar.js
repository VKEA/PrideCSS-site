import React from 'react';

import Navbutton from './Navbutton.js';

class Navbar extends React.Component {
    render() {
        return (
            <nav className='navigation'>
                <Navbutton head="cdn"/>
                <Navbutton head="documentation"/>
                <Navbutton head="release notes"/>
            </nav>
        )
    }
}

export default Navbar