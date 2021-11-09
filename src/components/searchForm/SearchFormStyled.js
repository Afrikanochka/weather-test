import styled from "styled-components";

export const SearchFormStyled = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  margin-top: 20px;
  color: #fff;
  background-color: #87ceeb;
  box-shadow: var(--boxShadow);
    
  .form {
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
}

.btn {
  display: inline-block;
  width: 78px;
  height: 48px;
  border: 0;
  opacity: 0.6;
  transition: opacity 250ms var(--timingFn);
  cursor: pointer;
  color: blue;
  outline: none;
}

.btn:hover {
  opacity: 1;
}


.input {
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 20px;
  padding-right: 20px;
}

.input::placeholder {
  font: inherit;
  font-size: 18px;
}
`