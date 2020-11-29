import { HeroContainer, HeroWrap, TempeGroup, TempeIcon } from './styles'
import Forecast from '../Forecast'

const Hero = () => {
    return ( 
        <HeroContainer>
            <HeroWrap>
                <TempeGroup>
                    <TempeIcon>&#176;C</TempeIcon>
                    <TempeIcon>&#176;F</TempeIcon>
                </TempeGroup>

                <Forecast />
            </HeroWrap>
        </HeroContainer>
     );
}
 
export default Hero;