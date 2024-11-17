"use client";
import * as React from 'react';

import Container from "@mui/material/Container";

import Header from "@/components/Header/Header"
import AppList from '@/components/AppCard/AppList';

export default function Home() {
  return (
    <>
      {/* <AppHeader />
      <Container maxWidth="xl">
        <MovieList />
      </Container>
      <Footer caption="good by" version={9} /> */}
      <Header />
      <Container maxWidth="xl"  >

      <AppList/>

      </Container>
    </>
  );
}