import { 
  useBreakpointValue, 
  Stack, 
  Center, 
  Heading,
  Image
} from "@chakra-ui/react";

export interface LogoHeaderProps {
  logo?:string,
  heading?:string,
}

export const LogoHeader = (props: LogoHeaderProps) => {
  const { heading, logo} = props;
  const headingSize = useBreakpointValue({ base: 'xs', md: 'sm' });
  return (
    <>
      { (heading || logo) && 
        <Stack spacing="6">
          <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
            { logo && <Center><Image boxSize={"40%"} src={ logo ? logo : '/logo.png'}/></Center> } 
            { heading && <Heading size={headingSize}>{ heading }</Heading> }
          </Stack>
        </Stack>
      }
    </>
  )
}