import styled from 'styled-components'
import IconButton from '@material-ui/core/IconButton';

export const Wrapper = styled.div`
margin: 40px;
h1{
    display:flex;
    justify-content: center;
    align-items: center;
    font-size: 60px;
}

`;

export const StyledButton = styled(IconButton)`
position: fixed;
z-index: 100;
right: 20px;
top: 20px;`
