import {PanelWrap, PanelHeader} from './styles'
const Panel = () => {
    return ( 
        <PanelWrap>
            <PanelHeader>
                <input type='text' placeholder='Search for places'/>
                <span>Location</span>
            </PanelHeader>
        </PanelWrap>
     );
}
 
export default Panel;