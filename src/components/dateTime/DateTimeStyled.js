import styled from "styled-components";

 export const DateTimeStyled = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  
  .icon {
  margin-right: 20px;
}

.wrapper {
  text-align: left;
  font-size: 18px;
}

.time {
  font-weight: 700;
}

.date {
  font-family: 'Lora', sans-serif;
  font-weight: 500;
  color: var(--secondaryTextColor);
}
 `