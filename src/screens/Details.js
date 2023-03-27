import { useHistory, useParams } from "react-router-dom";
import { Box, Flex } from "reflexbox";
import styled from "styled-components";
import {
  BorderRadiuses,
  Colors,
  Shadows,
  Spaces,
} from "../shared/DesignTokens";
import {
  Option,
  SelectField,
} from "../common-components/SelectField/SelectField";
import { Button } from "../common-components/Button/Button";
import { HeadingTwo } from "../common-components/HeadingTwo/HeadingTwo";
import { Description } from "../common-components/Description/Description";
import { Card } from "../common-components/Card/Card";
import { Caption } from "../common-components/Caption/Caption";
import { useHero } from "../hooks/useHero";

const Container = styled.aside`
  width: 727px;
  margin: 0 auto;
`;

const HeroAvatar = styled.div`
  width: 344px;
  height: 194px;
  box-shadow: ${Shadows.ONE};
  border-radius: ${BorderRadiuses.ONE};
  background-image: url("${(props) => props.src}");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center 25%;
`;

const DetailsGrid = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: ${Spaces.TWO};
`;

export function Details() {
  const { id } = useParams();

  const { hero, isLoadingHero } = useHero(id);
  const history = useHistory();
  const handleBack = () => {
    history.goBack();
  };

  return (
    !isLoadingHero && (
      <Container>
        <Flex mt={Spaces.FOUR} as="section">
          <HeroAvatar src={hero.image.url} />
          <Flex
            flexDirection="column"
            justifyContent="center"
            height={194}
            ml={Spaces.SEVEN}
          >
            <Flex>
              <SelectField>
                <Option value="" selected disabled>
                  Selecione a nota
                </Option>
                <Option>5</Option>
                <Option>4</Option>
                <Option>3</Option>
                <Option>2</Option>
                <Option>1</Option>
              </SelectField>
              <Box ml={Spaces.THREE}>
                <Button>Atribuir</Button>
              </Box>
            </Flex>
          </Flex>
        </Flex>
        <Box my={Spaces.ONE_HALF} as="section">
          <HeadingTwo as="h1">{hero.name}</HeadingTwo>
          <Description color={Colors.GRAY_700}>
            {hero.biography["full-name"]} - {hero.biography.publisher}
          </Description>
        </Box>
        <DetailsGrid>
          <Card>
            <Box p={Spaces.TWO}>
              <Box mb={Spaces.ONE}>
                <Caption>Codinomes</Caption>
              </Box>
              <Description color={Colors.GRAY_700}>
                {hero.biography.aliases.join(", ")}
              </Description>
            </Box>
          </Card>
          <Card>
            <Box p={Spaces.TWO}>
              <Box mb={Spaces.ONE}>
                <Caption>Local de Nascimento</Caption>
              </Box>
              <Description color={Colors.GRAY_700}>
                {hero.biography["place-of-birth"]}
              </Description>
            </Box>
          </Card>
          <Card>
            <Box p={Spaces.TWO}>
              <Box mb={Spaces.ONE}>
                <Caption>Primeira HQ</Caption>
              </Box>
              <Description color={Colors.GRAY_700}>
                {hero.biography["first-appearance"]}
              </Description>
            </Box>
          </Card>
          <Card>
            <Box p={Spaces.TWO}>
              <Box mb={Spaces.ONE}>
                <Caption>Informações Biológicas</Caption>
              </Box>
              <Description color={Colors.GRAY_700}>
                <strong>Genero: </strong> {hero.appearance.gender}
                <br />
                <strong>Raça: </strong> {hero.appearance.race}
                <br />
                <strong>Altura: </strong> {hero.appearance.height[1]}
                <br />
                <strong>Peso: </strong> {hero.appearance.weight[1]}
                <br />
                <strong>Cor do olho: </strong> {hero.appearance["eye-color"]}
                <br />
                <strong>Cor do cabelo: </strong> {hero.appearance["hair-color"]}
                <br />
              </Description>
            </Box>
          </Card>
          <Card>
            <Box p={Spaces.TWO}>
              <Box mb={Spaces.ONE}>
                <Caption>Atributos</Caption>
              </Box>
              <Description color={Colors.GRAY_700}>
                <strong>Força: </strong> {hero.powerstats.strength}
                <br />
                <strong>Inteligência: </strong> {hero.powerstats.intelligence}
                <br />
                <strong>Velocidade: </strong> {hero.powerstats.speed}
                <br />
                <strong>Resistência: </strong> {hero.powerstats.durability}
                <br />
                <strong>Poder: </strong> {hero.powerstats.power}
                <br />
                <strong>Combate: </strong> {hero.powerstats.combat}
                <br />
              </Description>
            </Box>
          </Card>
        </DetailsGrid>
        <Flex width="100%" justifyContent="center" mt={Spaces.FIVE}>
          <Box>
            <Button ghost onClick={handleBack}>
              Voltar
            </Button>
          </Box>
        </Flex>
      </Container>
    )
  );
}
