import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { Box, CardMedia, Typoghrapy } from "@mui/material";
// import TitleSection from "../components/TitleSection";

const products = [
  {
    name: "Tas Mewah",
    cover: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
    price: 20000,
    status: "promo",
    priceSale: 30000,
    kategori: "Men",
    rating: 5
  },
  {
    name: "Barang Branded",
    cover: "https://placeimg.com/640/480/animals",
    price: 10000,
    status: "sale",
    priceSale: 15000,
    kategori: "Men",
    rating: 4
  },
  {
    name: "Barang Murah Banget",
    cover: "https://placeimg.com/640/480/tech",
    price: 100000,
    priceSale: 50000,
    kategori: "Men",
    rating: 5
  },
  {
    name: "Tas Mewah",
    cover: "https://placeimg.com/640/480/nature",
    price: 10000,
    status: "promo",
    priceSale: 15000,
    kategori: "Men",
    rating: 4
  },
  {
    name: "Tas Mewah",
    cover: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
    price: 20000,
    status: "promo",
    priceSale: 30000,
    kategori: "Men",
    rating: 5
  },
  {
    name: "Barang Branded",
    cover: "https://placeimg.com/640/480/animals",
    price: 10000,
    status: "sale",
    priceSale: 15000,
    kategori: "Men",
    rating: 4
  },
  {
    name: "Barang Murah Banget",
    cover: "https://placeimg.com/640/480/tech",
    price: 100000,
    priceSale: 50000,
    kategori: "Men",
    rating: 5
  },
  {
    name: "Tas Mewah",
    cover: "https://placeimg.com/640/480/nature",
    price: 10000,
    status: "promo",
    priceSale: 15000,
    kategori: "Men",
    rating: 4
  }
];

export default function BrandSwiper() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column"
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center"
        }}
      >
        <Typoghrapy variant="h6">Brand Keramik & Granit</Typoghrapy>
      </Box>
      <Box
        sx={{
          m: { xs: 1, md: 3 }
        }}
      >
        <Swiper
          slidesPerView={3}
          breakpoints={{
            640: { slidesPerView: 3.1 },
            768: { slidesPerView: 5.1 },
            1024: { slidesPerView: 7.1 }
          }}
          spaceBetween={20}
          modules={[Pagination]}
        >
          {products.map((product, i) => (
            <SwiperSlide key={i}>
              <CardMedia
                component="img"
                width="140"
                image="https://placeimg.com/640/480/nature"
                alt="green iguana"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
}
