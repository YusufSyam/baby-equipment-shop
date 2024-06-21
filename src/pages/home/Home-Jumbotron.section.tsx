import { Button, Group, Stack, Text } from '@mantine/core';
import React from 'react';
import { SearchFilled } from '../../assets/icon/Fluent';
import { MySearchInput } from '../../components/FormInput.component';
import MediumButton from '../../components/MyButton';
import { StickerBabyGear, StickerBabyGear2 } from '../../assets/icon/Sticker';

export interface IHomeJumbotron {}

const HomeJumbotron: React.FC<IHomeJumbotron> = ({ }) => {
  return (
    <Stack className='relative bg-gradient-to-br from-light-purple to-dark-purple h-[450px] border-b-4 border-purple overflow-hidden'>
      <Group className='absolute bottom-0 self-center gap-0 flex-nowrap'>
        <StickerBabyGear2 size={320} className='opacity-20' /> 
        <StickerBabyGear size={320} className='opacity-20 -ml-10' /> 
        <StickerBabyGear2 size={320} className='opacity-20 -ml-10' /> 
        <StickerBabyGear2 size={320} className='opacity-20' /> 
        <StickerBabyGear size={320} className='opacity-20 -ml-10' /> 
        <StickerBabyGear2 size={320} className='opacity-20 -ml-10' /> 
      </Group>
      <Stack className='mt-40 gap-0 z-50'>
        <Text className='text-[48px] font-roboto-semibold text-white text-center tracking-5 [text-shadow:_0_6px_18px_rgb(0_0_0_/_40%)]'>
        Dzikribabyshop
        </Text>
        {/* <Text className='text-white text-center -mt-1 tracking-4 font-semibold'>
        Toko Perlengkapan Bayi Terlengkap
        </Text> */}
      </Stack>
      <Stack className='w-1/3 self-center mt-6 shadow-lg'>
        <MySearchInput />
      </Stack>
      <Stack>
        <Button className='bg-darker-orange hover:bg-darker-orange w-fit self-center font-semibold tracking-1'>Jelajahi</Button>
      </Stack>
    </Stack>
  )
}
export default HomeJumbotron;