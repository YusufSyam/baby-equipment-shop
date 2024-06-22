import React from 'react';
import AppLayout from '../../layouts/AppLayout';
import { Stack } from '@mantine/core';
import HomeJumbotron from './Home-Jumbotron.section';
import HomeCatalog from './Home-Catalog.section';

export interface IHome {}

const Home: React.FC<IHome> = ({ }) => {
  return (
    <AppLayout activePage='Beranda' headerBackgroundType='transparent'>
      <Stack className=''>
        <HomeJumbotron />
        <HomeCatalog />
        Halo
      </Stack>
    </AppLayout>
  )
}
export default Home;