import styled from "styled-components";

export const DataViewStyled = styled.main`
    
  padding: 60px;
  background-color: rgba(173, 216, 230, 0.6);
  box-shadow: var(--boxShadow);


.title {
  margin-bottom: 20px;
  font-weight: 500;
  font-size: 32px;
}

.icon {
  margin-right: 20px;
}

.wrapper {
  display: flex;
  align-items: center;
}

.wrapper:not(:last-child) {
  margin-bottom: 10px;
}

.description {
  font-family: 'Lora', sans-serif;
  font-weight: 500;
  font-size: 20px;
  color: var(--secondaryTextColor);
  text-align: left;
}
`