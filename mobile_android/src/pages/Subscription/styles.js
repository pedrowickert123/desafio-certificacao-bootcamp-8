import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const ActivityIndicatorBox = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 30 },
})``;

export const TextBox = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const TextInfo = styled.Text`
  color: #f94d6a;
  font-size: 16px;
  font-weight: bold;
`;
