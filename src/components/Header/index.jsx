import { Container, Left, Avatar, Title, Right, Button } from "./styles";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
export default function Header() {
  return (
    <Container>
      <Left>
        <Avatar />
        <Title>Principal</Title>
      </Left>

      <Right>
        <Button>
          <FontAwesome name="search" size={24} color="black" />
        </Button>
        <Button>
          <Ionicons name="notifications" size={24} color="black" />
        </Button>
      </Right>
    </Container>
  );
}
