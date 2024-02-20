'use client';

import Image from 'next/image';
import { AppShell, Box, Burger, Flex, Grid, SimpleGrid, Text, Title } from '@mantine/core';
import { IconBrandMantine } from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';
import { ColorSchemeToggle } from '@/components/ColorSchemeToggle/ColorSchemeToggle';

import sprintVelocityGraph from '../public/sprint-velocity-graph.svg';

export default function HomePage() {
  const [opened, { toggle }] = useDisclosure();
  return (
    <AppShell
      header={{ height: 50 }}
      // navbar={{
      //   width: 300,
      //   breakpoint: 'sm',
      //   collapsed: { mobile: !opened },
      // }}
      padding="md"
    >
      <AppShell.Header>
        <Burger
          opened={opened}
          onClick={toggle}
          hiddenFrom="sm"
          size="sm"
        />
        <Flex direction="row" align="center" h="100%" px={15} gap={7}>
            <IconBrandMantine />
            <Title order={1} size="h3">kouhai</Title>
            <div style={{ flexGrow: 1 }} />
            <ColorSchemeToggle />
        </Flex>
      </AppShell.Header>

      {/* <AppShell.Navbar p="md">Navbar</AppShell.Navbar> */}

      <AppShell.Main>
        <Box w={500} mx="auto" my={100} style={{ textAlign: 'center' }}>
          <Title order={1} textWrap="wrap">Your <span style={{ color: '#FF5733' }}>AI-powered</span> <br /> project management copilot</Title>
          <br />
          <Text w={400} mx="auto" size="xs">
            Kouhai integrates with your version control system and issue tracker{' '}
            to automatically generate and link tickets to code, ensuring PMs always{' '}
            have the latest updates.
          </Text>
        </Box>

        <SimpleGrid cols={3} mx={40}>
          <Title order={2} size="h3">Summarize PRs</Title>
          <Title order={2} size="h3">Real-time updates</Title>
          <Title order={2} size="h3">Improve planning</Title>
          <Text size="xs">
            Kouhai analyzes PRs and summarizes code changes to provide{' '}
            context for non-technical team members.
          </Text>
          <Text size="xs">
            Automatically sync tickets in your issue tracker as code is being pushed.
          </Text>
          <Text size="xs">
            Gain insights on each engineer&lsquo;s expertise,{' '}
            enabling more optimal task assignment.
          </Text>
        </SimpleGrid>

        <Grid mx={40} my={100}>
          <Grid.Col span={4}>
            <Title order={1} textWrap="wrap">Accelerate product velocity</Title>
            <br />
            <Text>
              Automate repetitive project management tasks so that engineers and PMs can spend{' '}
              more time building the product.
            </Text>
          </Grid.Col>
          <Grid.Col span={8}>
            <Image src={sprintVelocityGraph} alt="Sprint velocity graph" width={600} />
          </Grid.Col>
        </Grid>
      </AppShell.Main>
    </AppShell>
  );
}
