import React from 'react';

class ReleaseNotes extends React.Component {
    render() {
        return (
            <>
                <h2 id='release notes'>release notes</h2>
                <h3>2.0.2</h3>
                <ul>
                    <li>Added pan, aro and intersex flags.</li>
                </ul>
                <h3>2.0.0</h3>
                <ul>
                    <li>prideCSS completely rewritten in SCSS.</li>
                    <li>dropped the smooth gradient styling.</li>
                    <li>prideCSS now BEM-compliant.</li>
                    <li>the .pridecss prefix now avoids most styling conflicts with existing CSS.</li>
                </ul>
                <h3>1.0.1</h3>
                <ul>
                    <li>first stable release.</li>
                </ul>
            </>
        )
    }
}

export default ReleaseNotes