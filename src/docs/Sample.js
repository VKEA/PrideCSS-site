import React from 'react';

class Sample extends React.Component {
    render() {
        return (
            <>
                    <div className={"stylingsample "+this.props.class}>
                        <span className="stylingname">{this.props.class}</span>
                    </div>
            </>
        )
    }
}

export default Sample