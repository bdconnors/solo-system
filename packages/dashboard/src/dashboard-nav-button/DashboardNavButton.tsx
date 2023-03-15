import { As, Link, Button, ButtonProps, HStack, Icon, Text } from '@chakra-ui/react'
import React from 'react'

export interface DashboardNavButtonProps extends ButtonProps {
  icon: As,
  label: string,
  href: string,
}

export const DashboardNavButton = (props: DashboardNavButtonProps) => {
  const { href, icon, label, ...buttonProps } = props;

  return (
    <Button 
      variant="ghost-on-accent" 
      justifyContent="start" 
      href={ props['aria-current'] === 'page' ? '#' : href }
      as={Link}
      {...buttonProps}
    >
      <HStack spacing="3">
        <Icon as={icon} boxSize="6" color="on-accent-subtle" />
        <Text>{label}</Text>
      </HStack>
    </Button>
  )
}