import { Button, Stack, Text } from '@mantine/core';
import React from 'react';
import { SearchFilled } from '../../assets/icon/Fluent';
import { MySearchInput } from '../../components/FormInput.component';
import MediumButton from '../../components/MyButton';

export interface IHomeJumbotron {}

const HomeJumbotron: React.FC<IHomeJumbotron> = ({ }) => {
  return (
    <Stack className='bg-gradient-to-r from-light-purple to-dark-purple h-[500px] border-b-4 border-purple'>
      <Stack className='mt-40 gap-0'>
        <Text className='text-[48px] font-roboto-semibold text-white text-center tracking-5 [text-shadow:_0_6px_18px_rgb(0_0_0_/_40%)]'>
        Dzikribabyshop
        </Text>
        <Text className='text-white text-center -mt-1 tracking-4'>
        Toko Perlengkapan Bayi Terlengkap
        </Text>
      </Stack>
      <Stack className='w-1/3 self-center mt-6 shadow-lg'>
        <MySearchInput />
      </Stack>
      <Stack>
        <Button className='bg-orange w-fit self-center font-semibold tracking-1'>Jelajahi</Button>
      </Stack>
    </Stack>
  )
}
export default HomeJumbotron;