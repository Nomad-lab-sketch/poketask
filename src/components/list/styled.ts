import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PokemonList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
  font-size: 22px;
  width: 100%;
`
export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 50px;
  background-color: #f8f8f8;
  border: 1px solid #b2b2b2;
  border-radius: 10px;
  width: 100%;
  height: 80px;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`
