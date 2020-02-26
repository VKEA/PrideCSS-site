import React from 'react';

class Flag extends React.Component {
    render() {
        return (
            <>
                <div className="flagsample">
                    <div className={"flag "+this.props.class}></div>
                    <span className="flagname">{this.props.class}</span>
                </div>
            </>
        )
    }
}

export default Flag