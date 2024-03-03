import { Box, Card, Flex, Image, SimpleGrid, Text } from '@mantine/core';
import { motion } from 'framer-motion';
import { useMediaQuery } from '@mantine/hooks';
import classes from './IntegrationSection.module.css';

interface IntegrationData {
  name: string;
  description: string;
  imageSrc: string;
}

const integrationData: IntegrationData[] = [
  {
    name: 'GitHub',
    description: 'Version control',
    imageSrc: 'https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png',
  },
  {
    name: 'Jira',
    description: 'Issue tracker',
    imageSrc: 'https://cdn.worldvectorlogo.com/logos/jira-1.svg',
  },
  {
    name: 'Notion',
    description: 'Knowledge base',
    imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png?20200221181224',
  },
];

export default function IntegrationSection() {
  const lessThan1100 = useMediaQuery('(max-width: 1100px)');
  const lessThan800 = useMediaQuery('(max-width: 800px)');

  let gridWidth = 1000;
  let gridCols = 3;
  if (lessThan1100) {
    gridWidth = 700;
    gridCols = 2;
  }
  if (lessThan800) {
    gridWidth = 300;
    gridCols = 1;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      variants={{
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: '50%' },
      }}
    >
      <Box mx="auto" my={150} style={{ textAlign: 'center' }}>
        <Text
          fw={700}
          className={classes.title}
          variant="gradient"
          gradient={{ from: 'yellow', to: 'lime', deg: 90 }}
          mb={50}
        >
          Seamless integrations
        </Text>

        <SimpleGrid w={gridWidth} mx="auto" cols={gridCols} spacing={50}>
          {integrationData.map(({ name, description, imageSrc }) => (
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 1.05 }}>
              <Card shadow="md" padding="lg" radius="md">
                <Flex align="center">
                  <Image
                    radius={20}
                    src={imageSrc}
                    height={100}
                    width={100}
                    alt={name}
                    mr={30}
                  />
                  <div style={{ textAlign: 'left' }}>
                    <Text fw={700} size="xl">{name}</Text>
                    <Text size="lg">{description}</Text>
                  </div>

                </Flex>
              </Card>
              {/* <Card shadow="md" padding="lg" radius="md">
                <Card.Section>
                  <Image
                    src={imageSrc}
                    height={100}
                    alt={name}
                  />
                </Card.Section>

                <Group justify="center" mt="md" mb="xs">
                  <Text fw={700} size="xl">{name}</Text>
                </Group>
              </Card> */}
            </motion.div>
          ))}
        </SimpleGrid>
      </Box>
    </motion.div>
  );
}
