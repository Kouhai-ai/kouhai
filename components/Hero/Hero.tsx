import { Box, Button, Text, Title } from '@mantine/core';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';

import cx from 'clsx';
import classes from './Hero.module.css';

export default function Hero() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 2000 })]);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: '-50%' },
      }}
    >
      <Box mx="auto" my={150} style={{ textAlign: 'center' }}>
        <Title className={classes.title} order={1}>Your <span style={{ color: '#FF5733' }}>AI-powered</span></Title>
        <div className={classes.embla} ref={emblaRef}>
          <div className={classes.embla__container}>
            <Title className={cx(classes.title, classes.embla__slide)} order={1}>
              project management copilot
            </Title>
            <Title className={cx(classes.title, classes.embla__slide)} order={1}>
              sprint planner
            </Title>
            <Title className={cx(classes.title, classes.embla__slide)} order={1}>
              PR summarizer
            </Title>
          </div>
        </div>
        <br />
        <Text className={classes.subtitle} mx="auto">
          Kouhai integrates with your version control system and issue tracker{' '}
          to automatically generate and link tickets to code, ensuring PMs always{' '}
          have the latest updates.
        </Text>
        <br />
        <Button
          variant="filled"
          size="lg"
          color="indigo"
          radius={50}
          component="a"
          target="_blank"
          href="https://calendly.com/yugsinghs/30min"
        >
          Book a demo!
        </Button>
      </Box>
    </motion.div>
  );
}
