'use client';

import Image from 'next/image';
import { AppShell, Box, Burger, Flex, Grid, SimpleGrid, Text, Title, Transition, useMantineColorScheme } from '@mantine/core';
import { IconBrandMantine } from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';
import { ColorSchemeToggle } from '@/components/ColorSchemeToggle/ColorSchemeToggle';

import Hero from '@/components/Hero/Hero';

export default function HomePage() {
  const [opened, { toggle }] = useDisclosure();
  return (
    <AppShell
      header={{ height: 60 }}
      // navbar={{
      //   width: 300,
      //   breakpoint: 'sm',
      //   collapsed: { mobile: !opened },
      // }}
      padding="md"
    >
      <AppShell.Header>
        {/* <Burger
          opened={opened}
          onClick={toggle}
          hiddenFrom="sm"
          size="sm"
        /> */}
        <Flex direction="row" align="center" h="100%" px={15} gap={7}>
            <IconBrandMantine size={30} />
            <Title order={1} size="h2">kouhai</Title>
            <div style={{ flexGrow: 1 }} />
            <ColorSchemeToggle />
        </Flex>
      </AppShell.Header>

      {/* <AppShell.Navbar p="md">Navbar</AppShell.Navbar> */}

      <AppShell.Main>
        <div>
          <Hero />
          <ul className="circles">
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
          </ul>
        </div>

        {/* <Transition
          mounted
          transition="slide-up"
          duration={400}
          timingFunction="ease"
        >
          {(styles) => <div style={styles}><Hero /></div>}
        </Transition> */}

        {/* <Box w={700} mx="auto" my={150} style={{ textAlign: 'center' }}>
          <Title order={1} size="3em" textWrap="wrap">Your <span style={{ color: '#FF5733' }}>AI-powered</span> <br /> project management copilot</Title>
          <div className="embla" ref={emblaRef}>
            <div className="embla__container">
              <div className="embla__slide">Slide 1</div>
              <div className="embla__slide">Slide 2</div>
              <div className="embla__slide">Slide 3</div>
            </div>
          </div>
          <br />
          <Text w={600} mx="auto" size="xl">
            Kouhai integrates with your version control system and issue tracker{' '}
            to automatically generate and link tickets to code, ensuring PMs always{' '}
            have the latest updates.
          </Text>
        </Box> */}

        {/* <SimpleGrid cols={3} mx={40}>
          <Title order={2} size="h1">Summarize PRs</Title>
          <Title order={2} size="h1">Real-time updates</Title>
          <Title order={2} size="h1">Improve planning</Title>
          <Text size="xl">
            Kouhai analyzes PRs and summarizes code changes to provide{' '}
            context for non-technical team members.
          </Text>
          <Text size="xl">
            Automatically sync tickets in your issue tracker as code is being pushed.
          </Text>
          <Text size="xl">
            Gain insights on each engineer&lsquo;s expertise,{' '}
            enabling more optimal task assignment.
          </Text>
        </SimpleGrid> */}

        {/* <Grid mx={40} my={150}>
          <Grid.Col span={4}>
            <Title order={1} size="3em" textWrap="wrap">Accelerate product velocity</Title>
            <br />
            <Text size="xl">
              Automate repetitive project management tasks so that engineers and PMs can spend{' '}
              more time building the product.
            </Text>
          </Grid.Col>
          <Grid.Col span={8}>
            <Image src={sprintVelocityGraph} alt="Sprint velocity graph" width={1000} />
          </Grid.Col>
        </Grid> */}
      </AppShell.Main>
    </AppShell>
  );
}
