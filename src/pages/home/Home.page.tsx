import React from 'react';
import AppLayout from '../../layouts/AppLayout';
import { Stack } from '@mantine/core';
import HomeJumbotron from './Home-Jumbotron.section';

export interface IHome {}

const Home: React.FC<IHome> = ({ }) => {
  return (
    <AppLayout activePage='Beranda'>
      <Stack className=''>
        <HomeJumbotron />
        Halo
      </Stack>
    </AppLayout>
  )
}
export default Home;