import { Flex, Heading, ListItem, Text, UnorderedList } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex justify={"center"}>
      <Flex w={766} h={1086} bg="body" color="text" id="print">
        <Flex background="black" color="white" direction="column" padding="5">
          <Flex direction="column" rotate={90}>
            <Heading>Vladimir Costa</Heading>
            <Text fontSize="3xl">FRONT END DEVELOPER</Text>
          </Flex>
          <Flex marginTop="20" direction="column">
            <Text>SOFT SKILLS</Text>

            <UnorderedList>
              <ListItem>Empatia</ListItem>
              <ListItem>Colaboração</ListItem>
              <ListItem>Vontade de aprender</ListItem>
              <ListItem>Resiliência</ListItem>
            </UnorderedList>
          </Flex>
          <Flex marginTop="20" direction="column">
            <Text>CONTATO</Text>

            <Text>(86)98126-6700</Text>
            <Text>github.com/vladimiremi</Text>
            <Text>vladimiremi2014@gmail.com</Text>
          </Flex>
        </Flex>
        <Flex background="white" direction="column" gridGap={7} p="5">
          <Flex direction="column">
            <Heading size="md">QUEM EU SOU</Heading>
            <Text>
              Uma desenvolvedora Front-end que procura sempre ser melhor do que
              no dia anterior, ter um crescimento continuo e causar impacto na
              vida das pessoas desenvolvendo códigos prezando pela experiência e
              usabilidade. Atualmente trabalho utilizando tecnologias como React
              e TypeScript e estou de olho em novas experiências nas mesmas.
            </Text>
          </Flex>

          <Flex direction="column">
            <Heading size="md">EXPERIÊNCIA</Heading>
            <Flex direction="column">
              <Text fontWeight="bold">5M 42 Dias Tecnologia</Text>
              <Text>FRONT END DEVELOPER</Text>
              <UnorderedList>
                <ListItem>
                  Utilizando a metodologia Scrum, desenvolvemos aplicações desde
                  o layout no Figma até o código em React com tecnologias como
                  Styled Components e TypeScript. Utilizando o Github para
                  versionamento fazendo Pull Requestse Code Review.
                </ListItem>
              </UnorderedList>
            </Flex>
          </Flex>

          <Flex direction="column" gridGap={3}>
            <Heading>EDUCAÇÃO</Heading>
            <Flex direction="column">
              <Text fontWeight="bold">Rocketseat</Text>
              <Text>
                01/2021 - 12/2021 | Fundamentos da programação e da web
              </Text>
            </Flex>
            <Flex direction="column">
              <Text fontWeight="bold">Rocketseat</Text>
              <Text>
                01/2021 - 12/2021 | Fundamentos da programação e da web
              </Text>
            </Flex>
            <Flex direction="column">
              <Text fontWeight="bold">Rocketseat</Text>
              <Text>
                01/2021 - 12/2021 | Fundamentos da programação e da web
              </Text>
            </Flex>
            <Flex direction="column">
              <Text fontWeight="bold">Rocketseat</Text>
              <Text>
                01/2021 - 12/2021 | Fundamentos da programação e da web
              </Text>
            </Flex>
          </Flex>

          <Flex direction="column">
            <Heading>HARD SKILLS</Heading>
            <UnorderedList>
              <ListItem>Conhecimento práticos com HTML</ListItem>
              <ListItem>Conhecimento práticos com CSS</ListItem>
              <ListItem>Conhecimento práticos com JavaScript</ListItem>
              <ListItem>Conhecimento práticos com Git</ListItem>
              <ListItem>
                {" "}
                Conhecimentos práticos com React.Js(Hooks, Styled Components,
                React Router, Hook Form)
              </ListItem>
            </UnorderedList>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
