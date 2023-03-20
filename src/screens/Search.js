import styled from "styled-components";
import { Box, Flex } from "reflexbox";
import { Spaces } from "../shared/DesignTokens";
import { SearchField } from "../common-components/SearchField/SearchField";
import { Button } from "../common-components/Button/Button";
import { HeroCard } from "../components/HeroCard/HeroCard";

const HeroesGrid = styled(Box)`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${Spaces.ONE_HALF};
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: ${Spaces.TWO};
  }
`;

export function Search() {
  return (
    <>
      <Flex
        width={["100%", "600px"]}
        mx={[Spaces.NONE, "auto"]}
        mt={[Spaces.THREE, Spaces.FIVE]}
        px={[Spaces.ONE, Spaces.NONE]}
        mb={[Spaces.TWO, Spaces.FOUR]}
      >
        <Box flexGrow="1">
          <SearchField placeholder="Digite um nome de herói ou heroína" />
        </Box>
        <Box ml={Spaces.TWO}>
          <Button>Buscar</Button>
        </Box>
      </Flex>
      <HeroesGrid px={[Spaces.ONE, Spaces.TWO]} pb={[Spaces.ONE, Spaces.TWO]}>
        <HeroCard
          secretIdentity="Terry McGinnis"
          name="Batman"
          picture="https://www.superherodb.com/pictures2/portraits/10/100/10441.jpg"
          universe="DC Comics"
        />
        <HeroCard
          secretIdentity="Bruce Wayne"
          name="Batman"
          picture="https://www.superherodb.com/pictures2/portraits/10/100/639.jpg"
          universe="DC Comics"
        />
        <HeroCard
          secretIdentity="Dick Grayson"
          name="Batman II"
          picture="https://www.superherodb.com/pictures2/portraits/10/100/1496.jpg"
          universe="DC Comics"
        />
      </HeroesGrid>
    </>
  );
}
