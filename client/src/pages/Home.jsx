import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlickSlider = Slider.default || Slider;

const slides = [
  {
    img: "/images/Slider_1.jpg",
    title: "Organic Fresh Fruits For Your Health",
    subtitle:
      "Fresh, juicy, and naturally grown fruits delivered to your doorstep every day",
    button: "Shop Now",
  },
  {
    img: "/images/Slider_2.jpg",
    title: "Farm Fresh Fruits For Your Health",
    subtitle: "Fresh fruits delivered to your home, straight from the farm",
    button: "Explore",
  },
];

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: true,
  };

  return (
    <>
      {/* Slider */}
      <Box
        sx={{
          width: "100%",
          overflow: "hidden",

          "& .slick-dots": {
            bottom: 20,
          },

          "& .slick-dots li button:before": {
            color: "#ffffff",
            fontSize: "10px",
            opacity: 0.6,
          },

          "& .slick-dots li.slick-active button:before": {
            color: "#8BC34A",
            opacity: 1,
          },
        }}
      >
        <SlickSlider {...settings}>
          {slides.map((slide, index) => (
            <Box key={index}>
              {/* Hero Banner */}
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: {
                    xs: 300,
                    sm: 380,
                    md: 500,
                    lg: 560,
                  },
                  overflow: "hidden",
                }}
              >
                {/* Image */}
                <Box
                  component="img"
                  src={slide.img}
                  alt={slide.title}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />

                {/* Content */}
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: {
                      xs: "6%",
                      sm: "8%",
                      md: "10%",
                    },
                    transform: "translateY(-50%)",
                    color: "#000",
                    maxWidth: {
                      xs: "85%",
                      sm: 500,
                      md: "50%",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      color: "#07710a",
                      fontSize: {
                        xs: "14px",
                        sm: "16px",
                        md: "18px",
                      },
                      fontWeight: 600,
                      letterSpacing: 2,
                      textTransform: "uppercase",
                      mb: 1,
                    }}
                  >
                    Fresh & Natural
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: {
                        xs: "32px",
                        sm: "44px",
                        md: "60px",
                      },
                      lineHeight: 1.1,
                      fontWeight: 700,
                      mb: 2,
                    }}
                  >
                    {slide.title}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: {
                        xs: "15px",
                        sm: "18px",
                        md: "15px",
                      },
                      color: "#6a6a6a",
                      mb: 3,
                      maxWidth: 480,
                    }}
                  >
                    {slide.subtitle}
                  </Typography>

                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#88b121",
                      color: "#fff",
                      px: {
                        xs: 3,
                        sm: 4,
                      },
                      py: 1.3,
                      borderRadius: "5px",
                      fontSize: {
                        xs: "14px",
                        sm: "16px",
                        md: "13px",
                      },
                      fontWeight: 500,
                      textTransform: "uppercase",

                      "&:hover": {
                        backgroundColor: "#689F38",
                      },
                    }}
                  >
                    {slide.button}
                  </Button>
                </Box>
              </Box>
            </Box>
          ))}
        </SlickSlider>
      </Box>

      {/* Card */}
      <Grid container columns={12} sx={{ mt: -1 }}>
        <Grid size={4} sx={{ position: "relative" }}>
          <Box
            component="img"
            src="/images/cards/c1.jpg"
            alt="Card 1"
            sx={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <Box
            sx={{
              position: "absolute",
              right: "20px",
              top: "90px",
              width: "250px",
              transition: "0.3s ease",
            }}
          >
            <Typography
              sx={{
                color: "#fff",
                textShadow: "2px 1px 2px rgba(0, 0, 0, 0.7);",
                fontSize: "20px",
                fontWeight: 700,
                lineHeight: 1.1,
                textTransform: "uppercase",
                textAlign: "right",
              }}
            >
              Fresh Fruits
            </Typography>
            <Typography
              sx={{
                color: "#fff",
                textShadow: "2px 1px 2px rgba(0, 0, 0, 0.7);",
                fontSize: "16px",
                fontWeight: 500,
                lineHeight: 1.1,
                textAlign: "right",
                mt: 1,
              }}
            >
              View All
            </Typography>
          </Box>
        </Grid>
        <Grid size={4} sx={{ position: "relative" }}>
          <Box
            component="img"
            src="/images/cards/c2.jpg"
            alt="Card 1"
            sx={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <Box
            sx={{
              position: "absolute",
              right: "20px",
              top: "90px",
              width: "250px",
              transition: "0.3s ease",
            }}
          >
            <Typography
              sx={{
                color: "#fff",
                textShadow: "2px 1px 2px rgba(0, 0, 0, 0.7);",
                fontSize: "20px",
                fontWeight: 700,
                lineHeight: 1.1,
                textTransform: "uppercase",
                textAlign: "right",
              }}
            >
              Seasonal Fruits
            </Typography>
            <Typography
              sx={{
                color: "#fff",
                fontSize: "16px",
                fontWeight: 500,
                lineHeight: 1.1,
                textAlign: "right",
                mt: 1,
              }}
            >
              View All
            </Typography>
          </Box>
        </Grid>
        <Grid size={4} sx={{ position: "relative" }}>
          <Box
            component="img"
            src="/images/cards/c3.jpg"
            alt="Card 1"
            sx={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <Box
            sx={{
              position: "absolute",
              right: "20px",
              top: "90px",
              width: "250px",
              transition: "0.3s ease",
            }}
          >
            <Typography
              sx={{
                color: "#fff",
                textShadow: "2px 1px 2px rgba(0, 0, 0, 0.7);",
                fontSize: "20px",
                fontWeight: 700,
                lineHeight: 1.1,
                textTransform: "uppercase",
                textAlign: "right",
              }}
            >
              Exotic Fruits
            </Typography>
            <Typography
              sx={{
                color: "#fff",
                fontSize: "16px",
                fontWeight: 500,
                lineHeight: 1.1,
                textAlign: "right",
                mt: 1,
              }}
            >
              View All
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {/* Banner Services */}
      <Box>
        <Grid container columns={12} sx={{ mt: -1 }}></Grid>
      </Box>
    </>
  );
}

export default Home;
