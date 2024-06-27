import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { MantineProvider } from '@mantine/core'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MAINROUTES } from './utils/const/routes'
import Home from './pages/home/Home.page'
import ItemDetail from './pages/item-detail/ItemDetail.page'

function App() {
  const [count, setCount] = useState(0)

  return (
    <MantineProvider
      withCSSVariables
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colors: {
          "primary-text": [
            "#657387",
            "#5b697d",
            "#515f73",
            "#475569",
            "#3d4b5f",
            "#334155",
            "#29374b",
            "#1f2d41",
            "#152337",
            "#0b192d"
          ],
          "secondary-text": [
            "#c6d5ea",
            "#bccbe0",
            "#b2c1d6",
            "#a8b7cc",
            "#9eadc2",
            "#94a3b8",
            "#8a99ae",
            "#808fa4",
            "#76859a",
            "#6c7b90"
          ],
          secondary: [
            "#ffffff",
            "#ffffff",
            "#fcfbff",
            "#f2f1ff",
            "#e8e7fb",
            "#deddf1",
            "#d4d3e7",
            "#cac9dd",
            "#c0bfd3",
            "#b6b5c9"
          ],
          error: [
            "#ff5e88",
            "#ff547e",
            "#ff4a74",
            "#ff406a",
            "#ff3660",
            "#ff2c56",
            "#f5224c",
            "#eb1842",
            "#e10e38",
            "#d7042e"
          ],
          divider: [
            "#e7f4ff",
            "#ddeaf9",
            "#d3e0ef",
            "#c9d6e5",
            "#bfccdb",
            "#b5c2d1",
            "#abb8c7",
            "#a1aebd",
            "#97a4b3",
            "#8d9aa9"
          ],
          white: [
            "#FFFFFF",
            "#FFFFFF",
            "#FFFFFF",
            "#FFFFFF",
            "#FFFFFF",
            "#FFFFFF",
            "#FFFFFF",
            "#FFFFFF",
            "#FFFFFF",
            "#FFFFFF"
          ],
          orange: [
            "#F9BD31",
            "#F9BD31",
            "#F9BD31",
            "#F9BD31",
            "#F9BD31",
            "#F9BD31",
            "#F9BD31",
            "#F9BD31",
            "#F9BD31",
            "#F9BD31"
          ],
          "dark-orange": [
            "#F5A225",
            "#F5A225",
            "#F5A225",
            "#F5A225",
            "#F5A225",
            "#F5A225",
            "#F5A225",
            "#F5A225",
            "#F5A225",
            "#F5A225"
          ],
          "white-purple": [
            "#FFE6E6",
            "#FFE6E6",
            "#FFE6E6",
            "#FFE6E6",
            "#FFE6E6",
            "#FFE6E6",
            "#FFE6E6",
            "#FFE6E6",
            "#FFE6E6",
            "#FFE6E6"
          ],
          red: [
            "#ce282f",
            "#ce282f",
            "#ce282f",
            "#ce282f",
            "#ce282f",
            "#ce282f",
            "#ce282f",
            "#ce282f",
            "#ce282f",
            "#ce282f"
          ],
          "light-purple": [
            "#E1AFD1",
            "#E1AFD1",
            "#E1AFD1",
            "#E1AFD1",
            "#E1AFD1",
            "#E1AFD1",
            "#E1AFD1",
            "#E1AFD1",
            "#E1AFD1",
            "#E1AFD1"
          ],
          "purple": [
            "#AD88C6",
            "#AD88C6",
            "#AD88C6",
            "#AD88C6",
            "#AD88C6",
            "#AD88C6",
            "#AD88C6",
            "#AD88C6",
            "#AD88C6",
            "#AD88C6"
          ],
          "dark-purple": [
            "#7469B6",
            "#7469B6",
            "#7469B6",
            "#7469B6",
            "#7469B6",
            "#7469B6",
            "#7469B6",
            "#7469B6",
            "#7469B6",
            "#7469B6"
          ],
          black: [
            "#000000",
            "#000000",
            "#000000",
            "#000000",
            "#000000",
            "#000000",
            "#000000",
            "#000000",
            "#000000",
            "#000000"
          ]
        }
      }}
    >
          <BrowserRouter>
            <Routes>
              <Route path={MAINROUTES.home} element={<Home />} />
              <Route path={`${MAINROUTES.home}/item/:itemId`} element={<ItemDetail />} />
            </Routes>
          </BrowserRouter>
    </MantineProvider>
  )
}

export default App
