import styled from "styled-components";

export const Wrapper = styled.div`
display: flex;
justify-content: space-between;
font-family: Ariel, Helvetica, sans-serif;
borfer-bottom: 1px solid lightblue;
padding-bottom: 10px;

div {
    flex: 1;
    width: 30px;
}

.information, .buttons {
  
    display: flex;
    justify-content: space-between;
}

img {
    max-width: 80px;
    object-fit: cover;
    margin-left: 40px;
}
`;
