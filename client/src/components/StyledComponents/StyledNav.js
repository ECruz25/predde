import styled from 'styled-components';

const StyledNav = styled.ul`
  margin-top: 30px;
  display: grid;
  grid-template-rows: 100%;
  grid-template-columns: auto;
  background-color: purple;
  .nav-item {
    text-decoration: none;
    list-style-type: none;
    text-align: start;
    margin-top: 2rem;
    a {
      text-decoration: none;
      color: #858585;
    }
    .nav-item-selected {
      color: #0124a0;
    }
  }
`;

export default StyledNav;
