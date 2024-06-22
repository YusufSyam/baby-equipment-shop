import React from 'react';
import AppLayout from '../../layouts/AppLayout';
import { Stack } from '@mantine/core';

export interface IItemDetail {}

const ItemDetail: React.FC<IItemDetail> = ({ }) => {
  return (
    <AppLayout headerBackgroundType='normal'>
      <Stack className='bg-red'>
        Halo
      </Stack>
    </AppLayout>
  )
}
export default ItemDetail;