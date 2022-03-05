import styled from "styled-components";

import { Wrapper } from '../components/shared/Wrapper';

type FormData = {
  email: string;
  password: string;
};

export const  Login=()=> {
  
  return (
    <Wrapper center={true}>
      <FormWrapper className="login-container">
        <div className="left-side">
          <img
            src="https://businesstemplates.co.nz/wp-content/uploads/2020/12/login-concept-illustration_114360-739.jpg"
            alt="login"
          />
        </div>
        <div className="right-side">
          <div>
            <img
              src="https://www.freeiconspng.com/uploads/evernote-icon-2.png"
              alt=""
            />
            <h2>My app</h2>
          </div>
          <form >
            <div>
              <input
                placeholder="Email"
                type="email"
         
              />
           
            </div>

            <div>
              <input
                type="password"
                placeholder="Password"
           
              />
      
            </div>
            <p>
              Don&apos;t have an account? Signup&nbsp;
              <span>
              </span>
            </p>
          </form>
        </div>
      </FormWrapper>
    </Wrapper>
  );
}

const FormWrapper = styled("div")`
  display: flex;
  align-items: center;
  border: ${(props)=>props.theme.palette.primary.border};
  border-radius: 5px;
  padding: 50px;
  user-select: none;
  gap: 20px;
  > div {
    flex: 0.5;
  }
  .left-side {
    img {
      width: 200px;
    }
  }
  .right-side {
    > div:first-of-type {
      text-align: center;
      img {
        width: 50px;
        border-radius: 10px;
      }
      margin-bottom: 20px;
    }
    form {
      .text-error {
        padding: 5px 0;
        color: red;
      }
      div {
        margin-bottom: 10px;
        input {
          border: 2px solid gray;
          border-radius: 5px;
          padding: 10px 20px;
          outline: none;
          transition: 0.5s;
          &:focus {
            border-color: blue;
          }
        }
        button {
          border-radius: 5px;
          width: 100%;
          color: white;
          background-color: ${(props)=>props.theme.palette.primary.primaryColor};
          padding: 8px 20px;
          &:disabled {
            background-color: #ccc;
          }
        }
        small.error-message {
          color: red;
        }
      }
      p {
        font-size: 12px;
        a {
          color: ${(props)=>props.theme.palette.primary.primaryColor};
        }
      }
    }
  }
`;