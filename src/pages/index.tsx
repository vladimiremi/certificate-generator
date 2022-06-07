import {
  Box,
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
import { useEffect } from "react";
import { BsPlusSquareDotted } from "react-icons/bs";
import { draggableItem } from "utils/draggable";

export default function Home() {
  const INITIAL_VALUES = {
    name: "Vladimir Costa",
    profession: "Desenvolvedor Front-End",
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
      "Sou desenvolvedor Full Stack com mais de 2 ano de experiência, como foco em Front-end. Atualmente trabalho com a stack JavaScript: React, Node, Next, Express, React Native, Prisma, Sequelize, MySQL, MongoDB e muito mais. Sou movido a desafios e estou sempre em busca de novos aprendizados. Meu primeiro contato com programação foi em 2017. De lá pra cá, criei sistemas do zero, adicionei novas funcionalidades em softwares já em produção, procurando sempre ser um pouco melhor a cada dia.",
  };

  const print = () => {
    window.print();
  };

  useEffect(() => {
    draggableItem();
  }, []);

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
      <Flex id="draggable" position="absolute" top="4" cursor="grab">
        <Flex
          w={800}
          h={1120}
          bg="body"
          color="text"
          id="printable"
          cursor="grab"
        >
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
                <Text>Hybriun Desenvolvimento · 1 ano 4 meses</Text>
                <UnorderedList>
                  <ListItem textAlign="justify" mt="1">
                    Como colaborador de uma empresa de venda de softwares, minha
                    função era desenvolver sistemas e sites utilizando as
                    linguagens NodeJS, ReactJS e NextJS. Atuava tanto no
                    Back-end quanto no Front-end dos projetos, aplicando
                    inovação em padrões para API&apos;S REST(NodeJS).
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
    </Flex>
  );
}
