import React from 'react';

class Navbutton extends React.Component {
   
    render() {
        return (
            <a href={'#'+this.props.head}>
                <button className='navbutton'>
                    {this.props.head}
                </button>
            </a>
        )
    }
}

export default Navbutton