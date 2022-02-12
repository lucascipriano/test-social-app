import { Container, StoryProfile, StoryImage, StoryName } from "./styles";
import { ScrollView } from "react-native";
export default function Storys() {
  return (
    <Container>
      <ScrollView horizontal>
        <StoryProfile>
          <StoryImage />
          <StoryName>Mav </StoryName>
        </StoryProfile>

        <StoryProfile>
          <StoryImage />
          <StoryName> Heitor </StoryName>
        </StoryProfile>

        <StoryProfile>
          <StoryImage />
          <StoryName>Zyon </StoryName>
        </StoryProfile>

        <StoryProfile>
          <StoryImage />
          <StoryName>Maris </StoryName>
        </StoryProfile>

        <StoryProfile>
          <StoryImage />
          <StoryName>Rafa </StoryName>
        </StoryProfile>

        <StoryProfile>
          <StoryImage />
          <StoryName>Barbinha</StoryName>
        </StoryProfile>
      </ScrollView>
    </Container>
  );
}
