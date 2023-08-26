import { LandingPageStyled } from "./landingpage.styled";
import Maui_fireIMG from '../icons/maui_fires.png';
import { useNavigate } from 'react-router-dom';
// import EventIMG from "../Event_image/EventIMG";
function LandingPage () {

    let navigate = useNavigate();

    // const EVENT_STATE_MAPPING = {
    //     "maui-fire": "HI",
    //     "ca-hurricane": "CA"
    // }

    const Event_names = [
        {
            id:'1',
            img:Maui_fireIMG,
            name:'Maui Fires',
            event_state_mapping:'maui-fire'
        },
        {
            id:'2',
            img:Maui_fireIMG,
            name:'Ca Hurricane',
            event_state_mapping:'ca-hurricane'
        }
    ]

    const handle_event = (id:string) => {
        Object(Event_names).map((e:any) => {
            if (e.id === id) {
                navigate(`${e.event_state_mapping}`);
            }
        })
    }
    return (
        <LandingPageStyled>
            <div id="board">
                <h1>Landgrab Watch</h1>

                <div id = 'event'>
                    <div id="event_label">
                        <h2>EVENTS</h2>
                    </div>
                    <div id='event_names'>
                        {Object(Event_names).map((event:any) => {
                            return (
                                <div id = 'eventItem' onClick={() => handle_event(event.id)} style={{ position: 'relative', width:'40%', display: 'inline-block' }}>
                                    <img
                                        id="event_img"
                                        src={event.img}
                                        alt="Maui fires"
                                        style={{ width: '100%' }}
                                    />
                                    <div
                                        style={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                        color: 'white',
                                        padding: '10px',
                                        }}
                                    >
                                        {event.name}
                                    </div>
                                </div>
                            );

                        })}

                        {/* <img id = 'event_img' src = {Maui_fireIMG} alt="Maui fires"/> */}
                        {/* <a href="/maui">Maui Fires</a> */}
                    
                        {/* <img id = 'event_img' src={Maui_fireIMG} alt = 'ca-hurricane'/> */}
                    </div>
                    

                </div>
            </div>
        </LandingPageStyled>
            
)}

export default LandingPage;