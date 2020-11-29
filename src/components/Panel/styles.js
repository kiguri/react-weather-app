import styled from 'styled-components'

export const PanelWrap = styled.div`
    width: 460px;
    background-color: #1E213A;
    height: 100vh;

    @media screen and (max-width: 768px) {
        width: 100%
    }
`

export const PanelHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;

    input {
        background: #6E707A;
        color: #fff;
        padding: 0.5rem 0rem;
        border: none;
        ::placeholder {
            font-family: 'Raleway', sans-serif;
            color: #ebebeb;
            text-align: center;
        }
    }
`