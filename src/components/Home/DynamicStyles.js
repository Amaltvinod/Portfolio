import styled from "styled-components";
export const Wrapper=styled.div`
      height: 100vh;
      width: 67%;
      background-color:#222222;
      display: flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      color: #F5F5F5;
      white-space:nowrap;
      h1{
       
        font-size:3em;
     
      }
      h5{
        margin-top:1em;
        font-size:1em;
        text-align:left;

      }
      @keyframes cursor {
        0% {
          opacity: 1;
        }
        50% {
        opacity: 0;
        }
          100% {
          opacity: 1;
        }
}

.cursor {
  display: inline-block;
  width: 0.2em;
  height: 1em;
  vertical-align: text-top;
  animation: cursor 1s infinite;
}


`