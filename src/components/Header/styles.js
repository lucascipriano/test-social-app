import styled from "styled-components/native";

export const Container = styled.View`
  padding-top: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const Left = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-left: 10px;
`;
export const Avatar = styled.View`
  background: red;
  width: 32px;
  height: 32px;
  border-radius: 16px;
  margin-right: 20px;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;
export const Right = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const Button = styled.View`
  margin: 10px;
`;
