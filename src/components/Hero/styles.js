import styled from 'styled-components'

export const HeroContainer = styled.div`
    background: #100E1D;
    width: calc(100% - 460px);
    height: 100vh;

    @media screen and (max-width: 768px) {
        width: 100%
    }
`

export const HeroWrap = styled.div`
    padding: 2rem 5rem;
`

export const TempeGroup = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

export const TempeIcon = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 1rem;
    width: 1rem;
    border-radius: 50%;
    padding: 1rem;
    background: #6e707a;
    margin-left: 0.8rem;
    cursor: pointer;
    font-weight: bold;
`