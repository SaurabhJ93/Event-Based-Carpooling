import styled from "styled-components";
import background from "../../assests/background-event.jpg";

export const Styled = styled.div`

    .container{
        //background-color: #ABD7F2!important;
        background: url(${background}) no-repeat fixed bottom;
        max-width: inherit;
        } 
    
    .masthead-avatar {
        width: 7rem;
        text-align: left!important;
        margin: 30px;
    }

    .user-data p{
    font-weight: bold;
    font-family: sans serif;
    font-size: 1.5em;
    margin-left: 30px;
    }
 
    .user-data button{
        margin: 30px;
    }

    .i-am-centered{
        margin: auto;     
    }
    .user-offered-rides,.user-requested-rides{
    background-color:#af4b2c54;
    border: 2px solid grey;
    background-repeat: repeat;
    border-radius:10px;
    padding: 5px;
    height: 100%;
    margin-top: 10px;
    }

    .user-offered-rides .heading-req,.user-requested-rides .heading-req{
    font-size: 1.5em;
    font-weight: bold;
    text-align: center;
    border-bottom: 2px solid grey;
    padding-bottom: 5px;
    }

  .list-group-item{
    float: left;
    border: 1px solid black;
    margin: 5px;
}

.user-offered-rides,.user-requested-rides {
    font-family: sans serif;
    font-size: 1.2em;
    font-weight:bold;
}

`;