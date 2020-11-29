import { CardWrap } from './styles'
import clear from '../../img/Clear.png'
const ForecastCard = () => {
    return ( 
        <CardWrap>
            <p>Tomorrow</p>
            <img src={clear} alt=''/>
            <div>
                <span>16 &#176;C</span>
                <span>12 &#176;C</span>
            </div>
        </CardWrap>
     );
}
 
export default ForecastCard;