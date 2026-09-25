import React from "react";
import {
  Box,
  Button,
  Fade,
  Grid,
  Link,
  Rating,
  Tooltip,
  Typography,
} from "@mui/material";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
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

  const [value, setValue] = React.useState(2);

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
                        md: "20px",
                      },
                      color: "#777",
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
                fontSize: "30px",
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
                fontSize: "30px",
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
                fontSize: "30px",
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

      {/* About */}
      <Box>
        <Grid container columns={12} sx={{ my: 10, px: 5 }}>
          <Grid
            size={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              src="./images/banner_service.jpg"
              sx={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Grid>
          <Grid size={6}>
            <Typography
              component="h2"
              sx={{
                color: "#777",
                fontSize: "18px",
                mt: 2,
                textTransform: "uppercase",
              }}
            >
              - Organic fruit Store -
            </Typography>
            <Typography
              component="h2"
              sx={{ fontSize: "50px", fontWeight: 700, mt: 2, color: "#000" }}
            >
              Organic Fruits
            </Typography>
            <Typography
              sx={{
                fontSize: "15px",
                fontWeight: 400,
                mt: 2,
                color: "#777",
                letterSpacing: 0.4,
              }}
            >
              Enjoy fresh, naturally grown organic fruits delivered straight to
              your doorstep. We carefully select high-quality seasonal fruits
              from trusted farmers and suppliers to bring you delicious,
              healthy, and chemical-free choices. From everyday favorites to
              fresh seasonal varieties, our goal is to make healthy eating
              simple, convenient, and full of flavor.
            </Typography>
            <Button
              variant="contained"
              sx={{
                border: "1px solid #88b121",
                backgroundColor: "#fff",
                color: "#88b121",
                px: 4,
                py: 1.3,
                borderRadius: "5px",
                fontSize: "16px",
                fontWeight: 500,
                textTransform: "capitalize",
                mt: 3,
              }}
            >
              Read More
            </Button>
          </Grid>
        </Grid>
      </Box>

      {/* Parallex */}
      <Box
        sx={{
          position: "relative",
          height: 550,
          backgroundImage: "url('/images/parallex.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box sx={{ py: 5, pr: 4, width: "60%", marginLeft: "auto" }}>
          <Typography
            variant="h2"
            sx={{ fontSize: "30px", color: "#fff", px: 5, fontWeight: 700 }}
          >
            On Sale
          </Typography>
          <Typography sx={{ fontSize: "16px", color: "#777", px: 5 }}>
            On sale products to weekly line up
          </Typography>

          <Grid
            container
            columns={12}
            spacing={4}
            sx={{
              mt: 3,
              px: 5,
            }}
          >
            <Grid
              size={6}
              sx={{
                backgroundColor: "rgb(244, 243, 243)",
                borderRadius: "6px",
              }}
            >
              <Box
                sx={{ display: "flex", alignItems: "center", height: "150px" }}
              >
                <img
                  src="/images/onsale/f1.png"
                  alt="Product 1"
                  width="150px"
                />

                <Box sx={{ p: 2, flex: 1 }}>
                  <Link
                    href="#"
                    sx={{
                      textDecoration: "none",
                      color: "#000",
                      transition: "all 0.2s",
                      "&:hover": { color: "#66a617" },
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "16px",
                        fontWeight: 700,
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        maxWidth: "150px",
                      }}
                    >
                      Premium Alphonso Mango
                    </Typography>
                  </Link>
                  <Rating
                    name="simple-uncontrolled"
                    onChange={(event, newValue) => {
                      console.log(newValue);
                    }}
                    defaultValue={0}
                  />
                  <Typography sx={{ fontSize: "14px", color: "#000" }}>
                    $19.99
                  </Typography>
                  <Grid container sx={{ mt: 1 }}>
                    <Grid size={4}>
                      <Tooltip
                        describeChild
                        title="Basket"
                        placement="top"
                        arrow
                        slots={{
                          transition: Fade,
                        }}
                      >
                        <Button
                          sx={{
                            backgroundColor: "#fff",
                            color: "#000",
                            minWidth: "0px",
                            transition: "ease 0.3s",

                            "&:hover": {
                              backgroundColor: "#88b121",
                              color: "#fff",
                            },
                          }}
                        >
                          <ShoppingBasketOutlinedIcon
                            sx={{ fontSize: "27px" }}
                          />
                        </Button>
                      </Tooltip>
                    </Grid>
                    <Grid size={4}>
                      <Tooltip
                        describeChild
                        title="Add to Wishlist"
                        placement="top"
                        arrow
                        slots={{
                          transition: Fade,
                        }}
                      >
                        <Button
                          sx={{
                            backgroundColor: "#fff",
                            color: "#000",
                            minWidth: "0px",
                            transition: "ease 0.3s",

                            "&:hover": {
                              backgroundColor: "#88b121",
                              color: "#fff",
                            },
                          }}
                        >
                          <FavoriteBorderIcon sx={{ fontSize: "27px" }} />
                        </Button>
                      </Tooltip>
                    </Grid>
                    <Grid size={4}>
                      <Tooltip
                        describeChild
                        title="Quick View"
                        placement="top"
                        arrow
                        slots={{
                          transition: Fade,
                        }}
                      >
                        <Button
                          sx={{
                            backgroundColor: "#fff",
                            color: "#000",
                            minWidth: "0px",
                            transition: "ease 0.3s",

                            "&:hover": {
                              backgroundColor: "#88b121",
                              color: "#fff",
                            },
                          }}
                        >
                          <VisibilityOutlinedIcon sx={{ fontSize: "27px" }} />
                        </Button>
                      </Tooltip>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>
            <Grid
              size={6}
              sx={{
                backgroundColor: "rgb(244, 243, 243)",
                borderRadius: "6px",
              }}
            >
              <Box
                sx={{ display: "flex", alignItems: "center", height: "150px" }}
              >
                <img
                  src="/images/onsale/f1.png"
                  alt="Product 1"
                  width="150px"
                />

                <Box sx={{ p: 2, flex: 1 }}>
                  <Link
                    href="#"
                    sx={{
                      textDecoration: "none",
                      color: "#000",
                      transition: "all 0.2s",
                      "&:hover": { color: "#66a617" },
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "16px",
                        fontWeight: 700,
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        maxWidth: "150px",
                      }}
                    >
                      Premium Alphonso Mango
                    </Typography>
                  </Link>
                  <Rating
                    name="simple-uncontrolled"
                    onChange={(event, newValue) => {
                      console.log(newValue);
                    }}
                    defaultValue={0}
                  />
                  <Typography sx={{ fontSize: "14px", color: "#000" }}>
                    $19.99
                  </Typography>
                  <Grid container sx={{ mt: 1 }}>
                    <Grid size={4}>
                      <Tooltip
                        describeChild
                        title="Basket"
                        placement="top"
                        arrow
                        slots={{
                          transition: Fade,
                        }}
                      >
                        <Button
                          sx={{
                            backgroundColor: "#fff",
                            color: "#000",
                            minWidth: "0px",
                            transition: "ease 0.3s",

                            "&:hover": {
                              backgroundColor: "#88b121",
                              color: "#fff",
                            },
                          }}
                        >
                          <ShoppingBasketOutlinedIcon
                            sx={{ fontSize: "27px" }}
                          />
                        </Button>
                      </Tooltip>
                    </Grid>
                    <Grid size={4}>
                      <Tooltip
                        describeChild
                        title="Add to Wishlist"
                        placement="top"
                        arrow
                        slots={{
                          transition: Fade,
                        }}
                      >
                        <Button
                          sx={{
                            backgroundColor: "#fff",
                            color: "#000",
                            minWidth: "0px",
                            transition: "ease 0.3s",

                            "&:hover": {
                              backgroundColor: "#88b121",
                              color: "#fff",
                            },
                          }}
                        >
                          <FavoriteBorderIcon sx={{ fontSize: "27px" }} />
                        </Button>
                      </Tooltip>
                    </Grid>
                    <Grid size={4}>
                      <Tooltip
                        describeChild
                        title="Quick View"
                        placement="top"
                        arrow
                        slots={{
                          transition: Fade,
                        }}
                      >
                        <Button
                          sx={{
                            backgroundColor: "#fff",
                            color: "#000",
                            minWidth: "0px",
                            transition: "ease 0.3s",

                            "&:hover": {
                              backgroundColor: "#88b121",
                              color: "#fff",
                            },
                          }}
                        >
                          <VisibilityOutlinedIcon sx={{ fontSize: "27px" }} />
                        </Button>
                      </Tooltip>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>
            <Grid
              size={6}
              sx={{
                backgroundColor: "rgb(244, 243, 243)",
                borderRadius: "6px",
              }}
            >
              <Box
                sx={{ display: "flex", alignItems: "center", height: "150px" }}
              >
                <img
                  src="/images/onsale/f1.png"
                  alt="Product 1"
                  width="150px"
                />

                <Box sx={{ p: 2, flex: 1 }}>
                  <Link
                    href="#"
                    sx={{
                      textDecoration: "none",
                      color: "#000",
                      transition: "all 0.2s",
                      "&:hover": { color: "#66a617" },
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "16px",
                        fontWeight: 700,
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        maxWidth: "150px",
                      }}
                    >
                      Premium Alphonso Mango
                    </Typography>
                  </Link>
                  <Rating
                    name="simple-uncontrolled"
                    onChange={(event, newValue) => {
                      console.log(newValue);
                    }}
                    defaultValue={0}
                  />
                  <Typography sx={{ fontSize: "14px", color: "#000" }}>
                    $19.99
                  </Typography>
                  <Grid container sx={{ mt: 1 }}>
                    <Grid size={4}>
                      <Tooltip
                        describeChild
                        title="Basket"
                        placement="top"
                        arrow
                        slots={{
                          transition: Fade,
                        }}
                      >
                        <Button
                          sx={{
                            backgroundColor: "#fff",
                            color: "#000",
                            minWidth: "0px",
                            transition: "ease 0.3s",

                            "&:hover": {
                              backgroundColor: "#88b121",
                              color: "#fff",
                            },
                          }}
                        >
                          <ShoppingBasketOutlinedIcon
                            sx={{ fontSize: "27px" }}
                          />
                        </Button>
                      </Tooltip>
                    </Grid>
                    <Grid size={4}>
                      <Tooltip
                        describeChild
                        title="Add to Wishlist"
                        placement="top"
                        arrow
                        slots={{
                          transition: Fade,
                        }}
                      >
                        <Button
                          sx={{
                            backgroundColor: "#fff",
                            color: "#000",
                            minWidth: "0px",
                            transition: "ease 0.3s",

                            "&:hover": {
                              backgroundColor: "#88b121",
                              color: "#fff",
                            },
                          }}
                        >
                          <FavoriteBorderIcon sx={{ fontSize: "27px" }} />
                        </Button>
                      </Tooltip>
                    </Grid>
                    <Grid size={4}>
                      <Tooltip
                        describeChild
                        title="Quick View"
                        placement="top"
                        arrow
                        slots={{
                          transition: Fade,
                        }}
                      >
                        <Button
                          sx={{
                            backgroundColor: "#fff",
                            color: "#000",
                            minWidth: "0px",
                            transition: "ease 0.3s",

                            "&:hover": {
                              backgroundColor: "#88b121",
                              color: "#fff",
                            },
                          }}
                        >
                          <VisibilityOutlinedIcon sx={{ fontSize: "27px" }} />
                        </Button>
                      </Tooltip>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>
            <Grid
              size={6}
              sx={{
                backgroundColor: "rgb(244, 243, 243)",
                borderRadius: "6px",
              }}
            >
              <Box
                sx={{ display: "flex", alignItems: "center", height: "150px" }}
              >
                <img
                  src="/images/onsale/f1.png"
                  alt="Product 1"
                  width="150px"
                />

                <Box sx={{ p: 2, flex: 1 }}>
                  <Link
                    href="#"
                    sx={{
                      textDecoration: "none",
                      color: "#000",
                      transition: "all 0.2s",
                      "&:hover": { color: "#66a617" },
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "16px",
                        fontWeight: 700,
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        maxWidth: "150px",
                      }}
                    >
                      Premium Alphonso Mango
                    </Typography>
                  </Link>
                  <Rating
                    name="simple-uncontrolled"
                    onChange={(event, newValue) => {
                      console.log(newValue);
                    }}
                    defaultValue={0}
                  />
                  <Typography sx={{ fontSize: "14px", color: "#000" }}>
                    $19.99
                  </Typography>
                  <Grid container sx={{ mt: 1 }}>
                    <Grid size={4}>
                      <Tooltip
                        describeChild
                        title="Basket"
                        placement="top"
                        arrow
                        slots={{
                          transition: Fade,
                        }}
                      >
                        <Button
                          sx={{
                            backgroundColor: "#fff",
                            color: "#000",
                            minWidth: "0px",
                            transition: "ease 0.3s",

                            "&:hover": {
                              backgroundColor: "#88b121",
                              color: "#fff",
                            },
                          }}
                        >
                          <ShoppingBasketOutlinedIcon
                            sx={{ fontSize: "27px" }}
                          />
                        </Button>
                      </Tooltip>
                    </Grid>
                    <Grid size={4}>
                      <Tooltip
                        describeChild
                        title="Add to Wishlist"
                        placement="top"
                        arrow
                        slots={{
                          transition: Fade,
                        }}
                      >
                        <Button
                          sx={{
                            backgroundColor: "#fff",
                            color: "#000",
                            minWidth: "0px",
                            transition: "ease 0.3s",

                            "&:hover": {
                              backgroundColor: "#88b121",
                              color: "#fff",
                            },
                          }}
                        >
                          <FavoriteBorderIcon sx={{ fontSize: "27px" }} />
                        </Button>
                      </Tooltip>
                    </Grid>
                    <Grid size={4}>
                      <Tooltip
                        describeChild
                        title="Quick View"
                        placement="top"
                        arrow
                        slots={{
                          transition: Fade,
                        }}
                      >
                        <Button
                          sx={{
                            backgroundColor: "#fff",
                            color: "#000",
                            minWidth: "0px",
                            transition: "ease 0.3s",

                            "&:hover": {
                              backgroundColor: "#88b121",
                              color: "#fff",
                            },
                          }}
                        >
                          <VisibilityOutlinedIcon sx={{ fontSize: "27px" }} />
                        </Button>
                      </Tooltip>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* Services */}
      <Box sx={{ my: 8, px: 8 }}>
        <Grid
          container
          columns={12}
          spacing={10}
          sx={{ border: "1px solid #000", p: 5 }}
        >
          <Grid size={4}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <img src="./images/services/support.png" width="50px" />
              <Box sx={{ ml: 3 }}>
                <Typography
                  variant="h5"
                  sx={{ color: "#000", fontWeight: "600", mb: 1 }}
                >
                  24/7 free support
                </Typography>
                <Typography variant="body2" sx={{ color: "#777" }}>
                  Passage of Lorem Ipsum, you need to be amet embarrassing.
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid size={4}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <img src="./images/services/transport.png" width="50px" />
              <Box sx={{ ml: 3 }}>
                <Typography
                  variant="h5"
                  sx={{ color: "#000", fontWeight: "600", mb: 1 }}
                >
                  Free worldwide shipping
                </Typography>
                <Typography variant="body2" sx={{ color: "#777" }}>
                  Passage of Lorem Ipsum, you need to be amet embarrassing.
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid size={4}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <img
                src="./images/services/money-back-guarantee.png"
                width="50px"
              />
              <Box sx={{ ml: 3 }}>
                <Typography
                  variant="h5"
                  sx={{ color: "#000", fontWeight: "600", mb: 1 }}
                >
                  Money back guarantee
                </Typography>
                <Typography variant="body2" sx={{ color: "#777" }}>
                  Passage of Lorem Ipsum, you need to be amet embarrassing.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Img Banner */}
      <Grid container columns={12} spacing={4} sx={{ px: 8 }}>
        <Grid size={6}>
          <img src="./images/imgBanner/imgbanner-1.jpg" width="100%" />
        </Grid>
        <Grid size={6}>
          <img src="./images/imgBanner/imgbanner-2.jpg" width="100%" />
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
