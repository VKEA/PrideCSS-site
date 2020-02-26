import React from 'react';
import Flag from './Flag.js'
import Sample from './Sample.js'

class Docs extends React.Component {
    render() {
        return (
            <>
                <h2 id='documentation'>documentation</h2>
                <p>prideCSS provides several different flags and ways to display these flags as backgrounds for your DOM elements.</p>
                <p>Let's go over the flags that are currently available in prideCSS 2.0.0:</p>
                <div className="flagscontainer">
                    <Flag class="pridecss--ace" />
                    <Flag class="pridecss--aro" />
                    <Flag class="pridecss--bi" />
                    <Flag class="pridecss--gay" />
                    <Flag class="pridecss--genderfluid" />
                    <Flag class="pridecss--intersex" />
                    <Flag class="pridecss--lesbian" />
                    <Flag class="pridecss--nb" />
                    <Flag class="pridecss--pan" />
                    <Flag class="pridecss--trans" />
                </div>
                <p>Now that we are familiar with the base flags, we can now continue with the additional styling options.<br />Please note that the intersex flag is a radial-gradient by default and does not have the same features as the other flags.</p>
                <p>Do you like your flag horizontal? Then this might be something for you:</p>
                <Sample class="pridecss--horizontal--nb" />
                <p>Or is a diagonal pattern more fitting for your needs?</p>
                <Sample class="pridecss--topleft--genderfluid" />
                <p>Perhaps you feel like adding a radial gradient instead.</p>
                <Sample class="pridecss--radial--lesbian" />
                <p>But maybe the radial shouldn't start from the centre.</p>
                <Sample class="pridecss--radial--bottomleft--bi" />
                <p>How about borders? Unfortunately this is not compatible with border-radius. :(<br />
                There are four thicknesses to choose from: <b>thin, medium, thick</b> and <b>dummythicc</b>.</p>
                <Sample class="pridecss--border--medium--gay" />
            </>
        )
    }
}

export default Docs