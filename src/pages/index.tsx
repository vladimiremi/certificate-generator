import {
  Button,
  Flex,
  Heading,
  Icon,
  Input,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { BsPlusSquareDotted } from "react-icons/bs";

export default function Home() {
  const INITIAL_VALUES = {
    name: "Vladimir Costa",
    profession: "Full Stack Developer",
    softSkills: [
      "Empatia",
      "Colaboração",
      "Vontade de aprender",
      "Resiliência",
      "Honestidade",
      "Criatividade",
      "Ética de trabalho",
      "Gerenciamento de tempo",
    ],
    contacts: [
      "(86)98126-6700",
      "github.com/vladimiremi",
      "linkedin.com/in/vladimirpiaui",
      "vladimirpiaui11@gmail.com",
    ],
    about:
      "Sou desenvolvedor fullstack com mais de 1 ano de experiência profissional. Meu primeiro contato com programação foi em 2017 e desde então me apaixonei e venho aprendendo cada vez mais com entregas pontuais e satisfatórias a cada dia. Atualmente trabalho com as seguintes tecnologias: HTML, CSS, Javascript, React, Next, Node, Express, MySQL, e muito mais.",
  };

  const print = () => {
    window.print();
  };

  const { values, setFieldValue, handleChange, handleBlur, errors } = useFormik(
    {
      initialValues: INITIAL_VALUES,
      onSubmit: () => console.log("deu certo"),
    }
  );

  const addSkill = () => {
    console.log();
  };
  return (
    <Flex justify={"center"} align="center" direction="column">
      <Flex h="8rem">
        <Button color="blue.300" onClick={print}>
          Imprimir
        </Button>
      </Flex>
      <Flex w={766} h={1086} bg="body" color="text" id="printable">
        <Flex background="black" color="white" direction="column" padding="8">
          <Flex direction="column" rotate={90}>
            <Heading>{values.name}</Heading>
            <Text fontSize="3xl">{values.profession}</Text>
          </Flex>
          <Flex marginTop="20" direction="column">
            <Text>SOFT SKILLS</Text>

            <UnorderedList mt="2">
              {values.softSkills.map((skill, index) => (
                <ListItem key={index}>{skill}</ListItem>
              ))}
            </UnorderedList>
          </Flex>
          <Flex marginTop="20" direction="column">
            <Text mb="3">CONTATOS</Text>
            {values.contacts.map((contact, index) => (
              <Text key={index}>{contact}</Text>
            ))}
          </Flex>
        </Flex>

        <Flex background="white" direction="column" gridGap={7} p="8">
          <Flex direction="column">
            <Heading size="md">QUEM SOU</Heading>
            <Text textAlign="justify" mt="2">
              {values.about}
            </Text>
          </Flex>

          <Flex direction="column">
            <Heading size="md">EXPERIÊNCIA</Heading>
            <Flex direction="column">
              <Text fontWeight="bold" mt="2">
                Full Stack Developer
              </Text>
              <Text>Hybriun Desenvolvimento · 1 ano 2 meses</Text>
              <UnorderedList>
                <ListItem textAlign="justify" mt="1">
                  Procurando ser rápido dentro do proposto, produzindo um código
                  limpo, componentizado e estruturado. Participei de vários
                  projetos tanto na parte do front-end quanto do back-end.
                  Desenvolvi desde aplicações Web responsivas até Aplicativos
                  Mobile.
                </ListItem>
              </UnorderedList>
              ...
            </Flex>
          </Flex>

          <Flex direction="column" gridGap={3}>
            <Heading size="md">EDUCAÇÃO</Heading>
            <Flex direction="column">
              <Text fontWeight="bold">Universidade Federal do Piauí</Text>
              <Text>
                01/2017 - 12/2021 | Bacharelado em Sistemas de Informação
              </Text>
            </Flex>
            <Flex direction="column">
              <Text fontWeight="bold">Rocketseat</Text>
              <Text>01/2021 - 12/2021 | Fundamentos da programação</Text>
            </Flex>
            ...
          </Flex>

          <Flex direction="column">
            <Heading size="md">HARD SKILLS</Heading>
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
              <ListItem>Conhecimento práticos com NextJs</ListItem>
              <ListItem>Conhecimento práticos com NodeJs</ListItem>
              <ListItem>Conhecimento práticos com Sequelize</ListItem>
              <ListItem>Conhecimento práticos com MySQL</ListItem>
              <Text>...</Text>
            </UnorderedList>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
