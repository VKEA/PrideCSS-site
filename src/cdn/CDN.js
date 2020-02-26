import React from 'react';

class CDN extends React.Component {
    render() {
        return (
            <>
                <h2 id="cdn">cdn</h2>
                <p>One way of getting prideCSS is by importing the compiled and minified CSS from mbobaas.nl, the most recent stable release is 2.0.2.</p>
                <div className="cdnlinkcontainer">
                    <code>&lt;link href="https://1037390.mbobaas.nl/pridecss/2.0.2.css" rel="stylesheet" type="text/css" /&gt;</code>
                </div>
                <p>The nightly build is the most recent build, currently in development.</p>
                <div className="cdnlinkcontainer">
                    <code>&lt;link href="https://1037390.mbobaas.nl/pridecss/nightly.css" rel="stylesheet" type="text/css" /&gt;</code>
                </div>
            </>
        )
    }
}

export default CDN