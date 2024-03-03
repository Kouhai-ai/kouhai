'use client';

import { AppShell, Flex, Title } from '@mantine/core';
import { IconBrandMantine } from '@tabler/icons-react';
import { ColorSchemeToggle } from '@/components/ColorSchemeToggle/ColorSchemeToggle';

import Hero from '@/components/Hero/Hero';
import FeatureSection from '@/components/FeatureSection/FeatureSection';

export default function HomePage() {
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
        <FeatureSection />

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
