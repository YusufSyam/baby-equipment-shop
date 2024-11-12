import React from "react";
import AppLayout from "../../layouts/AppLayout";
import { Grid, Stack, Text } from "@mantine/core";

import aboutImage1 from "../../assets/images/about1.jpg";
import aboutImage3 from "../../assets/images/about3.jpg";

export interface IAboutPage {}

const AboutPage: React.FC<IAboutPage> = ({}) => {
  return (
    <AppLayout headerBackgroundType="normal">
      <Stack className="mx-12 sm:mx-16 md:mx-24 my-8">
        <Text className="text-primary-text-500 font-poppins-semibold text-3xl">
          Tentang Kami
        </Text>
        <Stack className="gap-10">
          <Text className="text-primary-text-500 tracking-5 text-justify">
            DzikriBabyShop didirikan pada tahun 2020 oleh Fajriani Ruslan, S.
            Pd. Sejak awal, kami memiliki komitmen untuk menyediakan
            perlengkapan bayi dan balita yang berkualitas tinggi dengan harga
            yang tetap terjangkau. Kami percaya bahwa setiap keluarga berhak
            mendapatkan produk yang aman dan nyaman untuk si kecil, tanpa harus
            menguras kantong.
          </Text>
          <Grid columns={24} gutter={"xl"}>
            <Grid.Col span={24} sm={14}>
              <Stack className="gap-8 mr-4">
                <Stack className="gap-2">
                  <Text className="font-poppins-semibold text-primary-text ">
                    Kualitas dan Keamanan Terjamin
                  </Text>
                  <Text className="text-primary-text-500 tracking-5 text-justify">
                    Kami sangat menekankan pada kualitas dan keamanan produk
                    yang kami tawarkan. Setiap produk di DzikriBabyShop telah
                    melalui proses seleksi yang ketat untuk memastikan bahwa
                    hanya yang terbaik yang sampai ke tangan Anda. Baik untuk
                    keperluan makan, tidur, bermain, hingga perlengkapan
                    sehari-hari, kami berkomitmen menjaga standar tertinggi demi
                    kenyamanan bayi Anda.
                  </Text>
                </Stack>
                <Stack className="gap-2">
                  <Text className="font-poppins-semibold text-primary-text ">
                    Visi dan Misi Kami
                  </Text>
                  <Text className="text-primary-text-500 tracking-5 text-justify">
                    DzikriBabyShop ingin menjadi toko perlengkapan bayi yang
                    ramah bagi setiap pembeli. Kami memahami bahwa membeli
                    kebutuhan bayi adalah proses yang penting, dan kami ingin
                    setiap pelanggan merasa nyaman dan puas saat berbelanja di
                    toko kami. Pelayanan pelanggan yang ramah dan profesional
                    selalu menjadi prioritas kami, dan tim kami siap membantu
                    Anda menemukan produk yang tepat sesuai kebutuhan.
                  </Text>
                </Stack>
              </Stack>
            </Grid.Col>
            <Grid.Col span={0} sm={10} className="relative overflow-hidden">
              <img
                src={aboutImage3}
                className="w-full h-full object-cover absolute top-10 left-0"
              />
            </Grid.Col>
          </Grid>
          <Grid columns={24} gutter={"xl"} className="mt-4">
            <Grid.Col span={0} sm={8} className="relative overflow-hidden">
              <img
                src={aboutImage1}
                className="w-full h-full object-cover absolute top-4 left-0 hidden md:block"
              />
            </Grid.Col>
            <Grid.Col span={24} sm={16}>
              <Stack className="gap-8 ml-4">
                <Stack className="gap-2">
                  <Text className="font-poppins-semibold text-primary-text ">
                    Beragam Produk dari Merek Ternama
                  </Text>
                  <Text className="text-primary-text-500 tracking-5 text-justify">
                    Kami menawarkan berbagai perlengkapan untuk bayi hingga
                    balita, mulai dari pakaian, perlengkapan tidur, hingga
                    mainan edukatif. Dengan kerja sama bersama merek-merek
                    ternama, DzikriBabyShop menyediakan produk-produk unggulan
                    yang aman dan terpercaya. Jadi, Anda dapat merasa tenang
                    saat memberikan produk kami untuk si kecil.
                  </Text>
                </Stack>
                <Stack className="gap-2">
                  <Text className="font-poppins-semibold text-primary-text ">
                    Lokasi Toko Fisik dan Belanja Online
                  </Text>
                  <Text className="text-primary-text-500 tracking-5 text-justify">
                    Selain hadir secara online, DzikriBabyShop juga memiliki
                    toko fisik, di mana Anda dapat melihat dan menyentuh
                    langsung produk-produk yang kami tawarkan. Tim kami di toko
                    fisik siap menyambut Anda dengan ramah dan membantu Anda
                    dalam memilih kebutuhan untuk buah hati tercinta.
                  </Text>
                </Stack>
              </Stack>
            </Grid.Col>
          </Grid>
        </Stack>
      </Stack>
    </AppLayout>
  );
};
export default AboutPage;
