import { Container, Radio, Stack, StackDivider } from '@chakra-ui/react';
import { PasswordInput, RadioSelection, TextInput } from '@solo-system/form';
import { useFormContext } from 'react-hook-form';
import { FiEye, FiEyeOff } from 'react-icons/fi';

export interface UserFormProps {
  name?:string,
  email?:string,
  photo?:string
  password?:string,
  devAdmin?:boolean,
  showDevAdmin?:boolean
}

export const UserForm = (props:UserFormProps) => {
  const {name ='', email ='', photo='', password='', devAdmin = false, showDevAdmin = false} = props;
  const form = useFormContext();
  return (
    <Container py={{ base: '4', md: '8' }}>
      <Stack spacing="5">
        <Stack spacing="5" divider={<StackDivider />}>
          <TextInput 
            name='displayName' 
            options={{ label:'Name', inline:true, }}
            rules={{ required:true}}
            placeholder={'Name'}
            defaultValue={name}
            maxW={'2xl'}
            control={form.control} 
          />
          <TextInput 
            name='email' 
            options={{ label:'Email', inline:true, }}
            rules={{ required:true}}
            defaultValue={email}
            maxW={'2xl'}
            placeholder={'Email'}
            control={form.control} 
          />
          <TextInput 
            name='photoURL' 
            options={{ label:'Photo URL', inline:true, }}
            defaultValue={photo}
            rules={{ pattern: new RegExp(/(https?:\/\/.*\.(?:png|jpg))/i) }}
            maxW={'2xl'}
            placeholder={'https://www.image-website/image.png'}
            control={form.control} 
          />
          <PasswordInput
            name='password' 
            toggle={{ showElement:<FiEye/>, hideElement:<FiEyeOff/> }}
            options={{ label:'Password', inline:true, }}
            defaultValue={password}
            rules={{ required:true}}
            maxW={'2xl'}
            placeholder={'Password'}
            control={form.control} 
          />
          {showDevAdmin && 
            <RadioSelection 
              name={'isDevAdmin'} 
              defaultValue={devAdmin.toString()}
              options={{ label:'Developer Admin'}}
              control={form.control}
            >
              <Radio value='false'>No</Radio>
              <Radio value='true'>Yes</Radio>
            </RadioSelection>
          }
        </Stack>
      </Stack>
    </Container>
  );
}
