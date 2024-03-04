import { Box, Card, Group, Image, SimpleGrid, Text } from '@mantine/core';
import { motion } from 'framer-motion';
import { useMediaQuery } from '@mantine/hooks';
import classes from './FeatureSection.module.css';

interface CardData {
  title: string;
  description: string;
  imageSrc: string;
}

const cardData: CardData[] = [
  {
    title: 'Summarize PRs',
    description: 'Summarizes code changes to provide context for non-technical team members.',
    imageSrc: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png',
  },
  {
    title: 'Real-time updates',
    description: 'Automatically sync tickets in your issue tracker as code is being pushed.',
    imageSrc: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png',
  },
  {
    title: 'Improve planning',
    description: 'Gain insights on each engineer\'s expertise, enabling more optimal task assignment.',
    imageSrc: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png',
  },
];

export default function FeatureSection() {
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
        hidden: { opacity: 0, x: '-50%' },
      }}
    >
      <Box mx="auto" my={150} style={{ textAlign: 'center' }}>
        <Text
          fw={700}
          className={classes.title}
          variant="gradient"
          gradient={{ from: 'yellow', to: 'red', deg: 0 }}
          mb={50}
        >
          Accelerate product velocity
        </Text>

        <SimpleGrid w={gridWidth} mx="auto" cols={gridCols} spacing={50}>
          {cardData.map(({ title, description, imageSrc }) => (
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 1.05 }}>
              <Card shadow="md" padding="lg" radius="md">
                <Card.Section>
                  <Image
                    src={imageSrc}
                    height={160}
                    alt={title}
                  />
                </Card.Section>

                <Group justify="center" mt="md" mb="xs">
                  <Text fw={700} size="xl">{title}</Text>
                </Group>

                <Text size="lg">
                  {description}
                </Text>
              </Card>
            </motion.div>
          ))}
        </SimpleGrid>
      </Box>
    </motion.div>
  );
}
