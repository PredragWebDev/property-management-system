import { LandingPageStyled } from "./landingpage.styled";

function LandingPage () {

    return (
        <LandingPageStyled>
            <div id="board">
                <h1>Landgrab Watch</h1>

                <div id = 'event'>
                    <div id="event_label">
                        <h2>EVENTS</h2>
                    </div>
                    <div id='event_names'>
                        <a href="/maui">Maui Fires</a>
                    </div>

                    <div id="event_names">
                        <a href="">test1</a>
                    </div>
                    

                </div>
            </div>
        </LandingPageStyled>
            
)}

export default LandingPage;