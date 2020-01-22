import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 2rem 0;
`;

export const Grid = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 8fr;
  gap: 1.2rem 1.2rem;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

export const Item = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.11);
  h4 {
    color: #212121;
  }
  p {
    color: #707070;
  }
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.09) 0px 8px 26px 0px;
    transition: all 0.3s ease 0s;
  }
`;

export const Content = styled.div`
  padding:1rem;
`;
export const CoverImg = styled.img`
  height: 200px;
  width: 100%;
  object-fit: contain;
  margin-bottom:0;
`

