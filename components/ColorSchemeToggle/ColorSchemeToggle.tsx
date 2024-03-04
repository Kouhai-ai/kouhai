'use client';

import cx from 'clsx';
import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { IconMoon, IconSun } from '@tabler/icons-react';
import classes from './ColorSchemeToggle.module.css';

interface ColorSchemeToggleProps {
  size?: string | number;
}

export function ColorSchemeToggle({ size = '2.1em' }: ColorSchemeToggleProps) {
  const { colorScheme, setColorScheme } = useMantineColorScheme();

  return (
    <ActionIcon
      variant="default"
      aria-label="Toggle theme"
      onClick={() => setColorScheme(colorScheme === 'light' ? 'dark' : 'light')}
      size={size}
    >
      <IconSun className={cx(classes.icon, classes.light)} size={size} stroke={1.5} />
      <IconMoon className={cx(classes.icon, classes.dark)} size={size} stroke={1.5} />
    </ActionIcon>
  );
}
