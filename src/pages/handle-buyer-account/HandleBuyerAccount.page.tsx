import React from 'react';
import AppLayout from '../../layouts/AppLayout';
import { Stack } from '@mantine/core';

export interface IHandleBuyerAccount {}

const HandleBuyerAccount: React.FC<IHandleBuyerAccount> = ({ }) => {
  return (
    <AppLayout headerBackgroundType="normal">
      <Stack>
        Handle Buyer Account
      </Stack>
    </AppLayout>
  )
}
export default HandleBuyerAccount;