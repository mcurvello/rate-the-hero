import React from "react";
import styled from "styled-components";
import { Box, Flex } from "reflexbox";
import { Spaces } from "../shared/DesignTokens";
import { SearchField } from "../common-components/SearchField/SearchField";
import { Button } from "../common-components/Button/Button";
import { HeroCard } from "../components/HeroCard/HeroCard";
import { useHeroes } from "../hooks/useHeroes";

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
  const [search, setSearch] = React.useState({
    value: "captain",
    doSearch: false,
  });

  const { heroes, searchHero } = useHeroes(search.value);

  React.useEffect(() => {
    if (search.doSearch) {
      searchHero().then(() => {
        setSearch((prevValue) => ({ ...prevValue, doSearch: false }));
      });
    }
  }, [search]);

  function handleUpdateSearchValue({ target: { value } }) {
    setSearch((prevValue) => ({ ...prevValue, value }));
  }

  function handleSearch() {
    setSearch((prevValue) => ({ ...prevValue, doSearch: true }));
  }

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
          <SearchField
            placeholder="Digite um nome de herói ou heroína"
            onKeyUp={handleUpdateSearchValue}
          />
        </Box>
        <Box ml={Spaces.TWO}>
          <Button onClick={handleSearch}>Buscar</Button>
        </Box>
      </Flex>
      {heroes && (
        <HeroesGrid px={[Spaces.ONE, Spaces.TWO]} pb={[Spaces.ONE, Spaces.TWO]}>
          {heroes.results.map((hero) => (
            <HeroCard
              key={hero.id}
              id={hero.id}
              secretIdentity={hero.biography["full-name"]}
              name={hero.name}
              picture={hero.image.url}
              universe={hero.biography.publisher}
            />
          ))}
        </HeroesGrid>
      )}
    </>
  );
}
