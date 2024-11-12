import { Button, Group, Stack, Text, useMantineTheme } from "@mantine/core";
import React from "react";
import {
  StickerBabyBottle,
  StickerBabyStroller,
  StickerBearDoll
} from "../../assets/icon/Sticker";

export interface IHomeJumbotron {
  scrollIntoView: any;


}

const HomeJumbotron: React.FC<IHomeJumbotron> = ({scrollIntoView}) => {
  const theme = useMantineTheme();
  
  return (
    <Stack className="relative bg-gradient-to-tl from-purple to-dark-purple h-[350px] border-purple overflow-hidden">
      {/* <StickerBabyStroller size={320} className='absolute opacity-10 rotate-45 left-20' /> 
        <StickerBabyGear2 size={320} className='absolute opacity-15 rotate-12 right-20' /> 
        <StickerBabyGear size={320} className='absolute opacity-15 -rotate-[15deg] left-96 -bottom-32' />  */}
      {/* <Group className="absolute bottom-0 self-center gap-40 flex-nowrap">
        <StickerBabyGear2 size={320} className='opacity-10 rotate-45' /> 
        <StickerBabyGear size={320} className='opacity-15 rotate-12 -ml-10 mt-40' /> 
        <StickerBabyGear2 size={320} className='opacity-20 rotate-45 -ml-10' /> 
      </Group> */}
      <Stack className="absolute bottom-6 self-center">
        <Group className=" gap-0 flex-nowrap">
          <StickerBearDoll
            color={theme.colors["dark-purple"][5]}
            size={110}
            className=" opacity-40"
          />
          <StickerBabyStroller
            color={theme.colors["light-purple"][5]}
            size={110}
            className=" opacity-15"
          />
          <StickerBabyBottle
            color={theme.colors["dark-purple"][5]}
            size={110}
            className=" opacity-40"
          />
          <StickerBearDoll
            color={theme.colors["light-purple"][5]}
            size={110}
            className=" opacity-15"
          />
          <StickerBabyStroller
            color={theme.colors["dark-purple"][5]}
            size={110}
            className=" opacity-40"
          />
          <StickerBabyBottle
            color={theme.colors["light-purple"][5]}
            size={110}
            className=" opacity-15"
          />
          <StickerBearDoll
            color={theme.colors["dark-purple"][5]}
            size={110}
            className=" opacity-40"
          />
          <StickerBabyStroller
            color={theme.colors["light-purple"][5]}
            size={110}
            className=" opacity-15"
          />
          <StickerBabyBottle
            color={theme.colors["dark-purple"][5]}
            size={110}
            className=" opacity-40"
          />
          <StickerBearDoll
            color={theme.colors["light-purple"][5]}
            size={110}
            className=" opacity-15"
          />
          <StickerBabyStroller
            color={theme.colors["dark-purple"][5]}
            size={110}
            className=" opacity-40"
          />
          <StickerBabyBottle
            color={theme.colors["light-purple"][5]}
            size={110}
            className=" opacity-15"
          />
        </Group>
        <Group className=" gap-0 flex-nowrap">
          <StickerBabyStroller
            color={theme.colors["light-purple"][5]}
            size={110}
            className=" opacity-15"
          />
          <StickerBabyBottle
            color={theme.colors["dark-purple"][5]}
            size={110}
            className=" opacity-40"
          />
          <StickerBearDoll
            color={theme.colors["light-purple"][5]}
            size={110}
            className=" opacity-15"
          />
          <StickerBabyStroller
            color={theme.colors["dark-purple"][5]}
            size={110}
            className=" opacity-40"
          />
          <StickerBabyBottle
            color={theme.colors["light-purple"][5]}
            size={110}
            className=" opacity-15"
          />
          <StickerBearDoll
            color={theme.colors["dark-purple"][5]}
            size={110}
            className=" opacity-40"
          />
          <StickerBabyStroller
            color={theme.colors["light-purple"][5]}
            size={110}
            className=" opacity-15"
          />
          <StickerBabyBottle
            color={theme.colors["dark-purple"][5]}
            size={110}
            className=" opacity-40"
          />
          <StickerBearDoll
            color={theme.colors["light-purple"][5]}
            size={110}
            className=" opacity-15"
          />
          <StickerBabyStroller
            color={theme.colors["dark-purple"][5]}
            size={110}
            className=" opacity-40"
          />
          <StickerBabyBottle
            color={theme.colors["light-purple"][5]}
            size={110}
            className=" opacity-15"
          />
          <StickerBearDoll
            color={theme.colors["dark-purple"][5]}
            size={110}
            className=" opacity-40"
          />
        </Group>
      </Stack>
      <Stack className="mt-28 gap-8 z-50">
        <Text className="text-[44px] font-roboto-semibold text-white text-center tracking-5 [text-shadow:_0_8px_18px_rgb(0_0_0_/_40%)]">
          Dzikri
          <span className="text-light-purple">babyshop</span>
        </Text>
        <Stack className=" gap-0">
          <Text className="text-white text-center tracking-5 font-roboto">
            Selamat Datang di Dzikribabyshop!
          </Text>
          <Text className="text-white text-center tracking-5 font-roboto">
            Temukan semua kebutuhan si kecil dengan produk berkualitas terbaik.
          </Text>
        </Stack>
      </Stack>
      {/* <Stack className='w-1/3 self-center mt-6 shadow-lg'>
        <MySearchInput />
      </Stack> */}
      <Stack className="-mt-4">
        <Button
        onClick={()=>{
          scrollIntoView({
            alignment: 'center',
          })
        }}
          className="self-center bg-white-purple hover:bg-white-purple text-dark-purple tracking-5 duration-100 mt-4 rounded-sm"
          // className="bg-darker-orange hover:bg-orange w-1/4 duration-100 mt-4"
          size="md"
        >
          Belanja Sekarang
        </Button>
      </Stack>
    </Stack>
  );
};
export default HomeJumbotron;
