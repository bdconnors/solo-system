import { Box, Container, Stack, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react"
import { ReactNode } from "react"
import { v4 as uuid } from 'uuid';

export interface TabbedPageProps {
  tabs:string[],
  children:ReactNode[]
}
export const TabbedPage = (props:TabbedPageProps) => {
  const { tabs, children } = props;

  return (
    <Box as="section" bg="bg-surface">
      <Container py={{ base: '4', md: '8' }}>
        <Stack spacing="16">
          <Tabs key={'xl'} size={'xl'} variant="with-line">
            <TabList>
              { tabs.map((tab:string)=><Tab key={ uuid() }>{ tab }</Tab>) }
            </TabList>
            <TabPanels>
              { children.map((child:ReactNode)=><TabPanel key={ uuid() }>{ child }</TabPanel>)}
            </TabPanels>
          </Tabs>
        </Stack>
      </Container>
    </Box>
  )
}