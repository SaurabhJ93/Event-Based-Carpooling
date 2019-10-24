import styled from "styled-components";
import background from "../../assests/background-event.jpg";

const StyledDiv = styled.div`
  .container {
    background: url(${background}) no-repeat fixed bottom;
    max-width: inherit;
  }
  p {
    font-family: sans-serif;
  }
  .p-rider {
    font-weight: bold;
  }
  span {
    font-weight: normal;
    font-family: serif;
  }
  .list-group-item {
    float: left;
    border: 1px solid black;
    margin: 5px;
  }
  .h2-request {
    margin-top: 70px;
  }
`;
export const StyledPara = styled.p`
  font-weight: bold;
  font-family: sans-serif;
  font-size: 1.5em;
  text-align: left;
  margin-top: 15px;
  margin-left: 20px;

  .eventHeading {
    color: #b22546;
    font-size: 3em;
    font-variant: all-petite-caps;
    font-family: monospace;
  }
  .card-img-top {
    display: block;
  }
`;

export default StyledDiv;
