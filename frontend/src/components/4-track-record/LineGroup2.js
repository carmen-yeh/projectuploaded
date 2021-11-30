import React from 'react';
import Line from './Line';

function LineGroup2() {

    // EDIT THIS ARRAY WITH LENGTHS
    // use length 0 to add break line
    const lengths = [120, 200, 250,270 , 300, 280, 140, 280, 440,140,220, 140, 260, 260, 340, 320, 320, 140, 220, 310, 260, 140, 340, 260, 140, 360, 360, 200, 150, 300, 210, 170, 320, 300, 340, 220, 240, 140, 60, 300, 0, 0, 340, 280, 260, 280, 150, 250, 120, 230, 240, 260, 240, 360, 160, 160, 420, 280,360, 360, 460, 200, 280, 140, 340, 80, 340, 140, 310, 260, 160, 140, 330, 260, 200, 120, 100, 260, 250, 200, 90, 250, 300, 270, 220, 180, 90, 80, 220, 180, 440, 210, 380, 360, 400, 360, 360, 300, 260, 350, 270, 440, 140, 360, 60, 200, 200, 280, 290, 250, 280, 160, 300, 120, 140, 440, 300, 240, 180, 220, 360, 140, 200, 220, 250, 80, 120, 180, 200, 360, 240, 220, 240, 250, 360, 390, 140, 180, 200, 280, 120, 320, 240, 200, 240, 280, 320, 440, 330, 200, 140,140, 220, 230, 160, 240, 260, 400, 240, 300, 340, 200, 260, 300, 260, 0, 0, 280, 160, 140, 240, 140, 120, 100, 280, 100, 100, 220, 140, 200, 260, 200, 110, 260, 340, 400, 360, 400, 320, 120, 480, 320, 340, 330, 100, 180, 220, 300];

    function loopLines(lengths = []) {

        let lines = [];
        for (let i = 0; i < lengths.length; i++) {
            if (lengths[i] == 0) {
                lines.push(<br />);
            }
            else {
                lines.push(<Line length={lengths[i]} />);
            }
        }
        return lines;
    }

    return(
        <div>
            {loopLines(lengths)}
        </div>
    )
}

export default LineGroup2;