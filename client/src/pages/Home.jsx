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
  Card,
  CardMedia,
  CardContent,
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

const slides2 = [
  {
    name: "John Doe",
    designation: "developer",
    para: "Sed elit quam, iaculis sed semper sit amet udin vitae nibh. at magna akal semperFusce commodydo molestie elit quam, iaculis sed sempsum Dolor tusima latiup udgn vitae nibh. at magna akal semperFusceSed elit quam, iaculis sed semper sit amet udin vitae nibh. at magna akal semperFusce commodo molestie elit quam, iaculis sed sempsum Dolor tusima olatiup udin vitae nibh. at magna akal semperFusce.",
  },
  {
    name: "Harry Potter",
    designation: "developer",
    para: "Sed elit quam, iaculis sed semper sit amet udin vitae nibh. at magna akal semperFusce commodydo molestie elit quam, iaculis sed sempsum Dolor tusima latiup udgn vitae nibh. at magna akal semperFusceSed elit quam, iaculis sed semper sit amet udin vitae nibh. at magna akal semperFusce commodo molestie elit quam, iaculis sed sempsum Dolor tusima olatiup udin vitae nibh. at magna akal semperFusce.",
  },
  {
    name: "Nilon Peter",
    designation: "developer",
    para: "Sed elit quam, iaculis sed semper sit amet udin vitae nibh. at magna akal semperFusce commodydo molestie elit quam, iaculis sed sempsum Dolor tusima latiup udgn vitae nibh. at magna akal semperFusceSed elit quam, iaculis sed semper sit amet udin vitae nibh. at magna akal semperFusce commodo molestie elit quam, iaculis sed sempsum Dolor tusima olatiup udin vitae nibh. at magna akal semperFusce.",
  },
];

const blogs = [
  {
    img: "/images/blogs/b1.jpg",
    date: "1 Jun, 2026",
    category: "Healthy Living",
    title: "5 Benefits of Eating Fresh Fruits Every Day",
    description:
      "Discover simple ways fresh fruits can support a healthy and refreshing lifestyle.",
  },
  {
    img: "/images/blogs/b2.jpg",
    date: "1 Jun, 2026",
    category: "Fruit Guide",
    title: "How to Choose the Perfect Alphonso Mango",
    description:
      "Learn simple tips to choose sweet, juicy, and perfectly ripe Alphonso mangoes.",
  },
  {
    img: "/images/blogs/b3.jpg",
    date: "1 Jun, 2026",
    category: "Freshness Tips",
    title: "How to Keep Your Fruits Fresh for Longer",
    description:
      "Follow these easy storage tips to keep your favorite fruits fresh and delicious.",
  },
  {
    img: "/images/blogs/b4.jpg",
    date: "1 Jun, 2026",
    category: "Seasonal Fruits",
    title: "Best Fruits for a Refreshing Summer",
    description:
      "Stay fresh and hydrated with delicious seasonal fruits perfect for warm days.",
  },
  {
    img: "/images/blogs/b5.jpg",
    date: "1 Jun, 2026",
    category: "Recipes",
    title: "Easy and Healthy Fruit Bowl Ideas",
    description:
      "Create colorful and delicious fruit bowls using your favorite fresh fruits.",
  },
  {
    img: "/images/blogs/b2.jpg",
    date: "1 Jun, 2026",
    category: "Organic Fruits",
    title: "What You Should Know",
    description:
      "Learn what makes organic fruits different and how to choose quality produce.",
  },
];

const brands = [
  {
    img: "/images/brands/b1.png",
  },
  {
    img: "/images/brands/b2.png",
  },
  {
    img: "/images/brands/b3.png",
  },
  {
    img: "/images/brands/b4.png",
  },
  {
    img: "/images/brands/b5.png",
  },
  {
    img: "/images/brands/b6.png",
  },
  {
    img: "/images/brands/b7.png",
  },
  {
    img: "/images/brands/b8.png",
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
        <Grid size={{ xs: 12, sm: 4, md: 4 }} sx={{ position: "relative" }}>
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
              top: { xs: "50px", sm: "60px", md: "90px" },
              width: "250px",
              transition: "0.3s ease",
            }}
          >
            <Typography
              sx={{
                color: "#fff",
                textShadow: "2px 1px 2px rgba(0, 0, 0, 0.7);",
                fontSize: { xs: "30px", sm: "20px", md: "30px" },
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
        <Grid size={{ xs: 12, sm: 4, md: 4 }} sx={{ position: "relative" }}>
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
              top: { xs: "50px", sm: "60px", md: "90px" },
              width: "250px",
              transition: "0.3s ease",
            }}
          >
            <Typography
              sx={{
                color: "#fff",
                textShadow: "2px 1px 2px rgba(0, 0, 0, 0.7);",
                fontSize: { xs: "30px", sm: "20px", md: "30px" },
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
        <Grid size={{ xs: 12, sm: 4, md: 4 }} sx={{ position: "relative" }}>
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
              top: { xs: "50px", sm: "60px", md: "90px" },
              width: "250px",
              transition: "0.3s ease",
            }}
          >
            <Typography
              sx={{
                color: "#fff",
                textShadow: "2px 1px 2px rgba(0, 0, 0, 0.7);",
                fontSize: { xs: "30px", sm: "20px", md: "30px" },
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
      <Box sx={{ px: { xs: 2, md: 8 } }}>
        <Grid container columns={12} sx={{ my: 10 }}>
          <Grid
            size={{ xs: 12, md: 6 }}
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
          <Grid size={{ xs: 12, md: 6 }}>
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
          height: { xs: "100%", md: 550 },
          backgroundImage: "url('/images/parallex.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            py: 5,
            pr: { xs: 0, md: 4 },
            width: { xs: "100%", md: "60%" },
            marginLeft: { xs: "0", md: "auto" },
          }}
        >
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
              px: { xs: 2, md: 5 },
            }}
          >
            <Grid
              size={{ xs: 12, sm: 6, md: 6 }}
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
              size={{ xs: 12, sm: 6, md: 6 }}
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
              size={{ xs: 12, sm: 6, md: 6 }}
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
              size={{ xs: 12, sm: 6, md: 6 }}
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
      <Box sx={{ my: 8, px: { xs: 2, md: 8 } }}>
        <Grid
          container
          columns={12}
          spacing={{ xs: 2, sm: 1, md: 10 }}
          sx={{ border: "1px solid #000", p: 5 }}
        >
          <Grid size={{ xs: 12, sm: 4, md: 4 }}>
            <Box
              sx={{
                display: { xs: "flex", sm: "block", md: "flex" },
                alignItems: "center",
                textAlign: { xs: "left", sm: "center", md: "left" },
              }}
            >
              <img src="./images/services/support.png" width="50px" />
              <Box sx={{ ml: { xs: 3, sm: 0, md: 3 } }}>
                <Typography
                  variant="h5"
                  sx={{
                    color: "#000",
                    fontWeight: "600",
                    mb: 1,
                    fontSize: { xs: "18px", md: "25px" },
                  }}
                >
                  24/7 free support
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "#777", fontSize: { xs: "12px", md: "16px" } }}
                >
                  Passage of Lorem Ipsum, you need to be amet embarrassing.
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, sm: 4, md: 4 }}>
            <Box
              sx={{
                display: { xs: "flex", sm: "block", md: "flex" },
                alignItems: "center",
                textAlign: { xs: "left", sm: "center", md: "left" },
              }}
            >
              <img src="./images/services/transport.png" width="50px" />
              <Box sx={{ ml: 3 }}>
                <Typography
                  variant="h5"
                  sx={{
                    color: "#000",
                    fontWeight: "600",
                    mb: 1,
                    fontSize: { xs: "18px", md: "25px" },
                  }}
                >
                  Free worldwide shipping
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "#777", fontSize: { xs: "12px", md: "16px" } }}
                >
                  Passage of Lorem Ipsum, you need to be amet embarrassing.
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, sm: 4, md: 4 }}>
            <Box
              sx={{
                display: { xs: "flex", sm: "block", md: "flex" },
                alignItems: "center",
                textAlign: { xs: "left", sm: "center", md: "left" },
              }}
            >
              <img
                src="./images/services/money-back-guarantee.png"
                width="50px"
              />
              <Box sx={{ ml: 3 }}>
                <Typography
                  variant="h5"
                  sx={{
                    color: "#000",
                    fontWeight: "600",
                    mb: 1,
                    fontSize: { xs: "18px", md: "25px" },
                  }}
                >
                  Money back guarantee
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "#777", fontSize: { xs: "12px", md: "16px" } }}
                >
                  Passage of Lorem Ipsum, you need to be amet embarrassing.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      {/* Img Banner */}
      <Grid container columns={12} spacing={4} sx={{ px: { xs: 2, md: 8 } }}>
        <Grid size={{ xs: 12, sm: 6, md: 6 }}>
          <img src="./images/imgBanner/imgbanner-1.jpg" width="100%" />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 6 }}>
          <img src="./images/imgBanner/imgbanner-2.jpg" width="100%" />
        </Grid>
      </Grid>
      {/* Testimoial */}
      <Box
        sx={{
          width: "100%",
          // overflow: "hidden",

          "& .slick-dots": {
            bottom: -10,
          },

          "& .slick-dots li button:before": {
            color: "#c6c6c6",
            fontSize: "15px",
            opacity: 0.6,
          },

          "& .slick-dots li.slick-active button:before": {
            color: "#8BC34A",
            opacity: 1,
          },
        }}
      >
        <SlickSlider {...settings}>
          {slides2.map((slide, index) => (
            <Box key={index}>
              {/* Content */}
              <Box
                sx={{
                  p: { xs: 2, md: 8 },
                  textAlign: "center",
                }}
              >
                <Box
                  component="img"
                  src="/images/profile.png"
                  sx={{
                    borderRadius: "50%",
                    margin: "0 auto",
                    border: "2px solid #66a617",
                    width: "120px",
                    height: "120px",
                  }}
                />
                <Box
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    mb: 2,
                    mt: 1,
                    textAlign: "center",
                  }}
                >
                  <Typography variant="h6" sx={{ color: "#66a617", mr: 1 }}>
                    {slide.name}
                  </Typography>
                  <Typography variant="span" sx={{ color: "#777" }}>
                    - {slide.designation}
                  </Typography>
                </Box>
                <Typography variant="body1" sx={{ color: "#444" }}>
                  {slide.para}
                </Typography>
              </Box>
            </Box>
          ))}
        </SlickSlider>
      </Box>
      {/* Blog  */}
      <Box sx={{ px: { xs: 2, md: 8 }, my: 8 }}>
        <Typography variant="h4" sx={{ color: "#000", fontWeight: "700" }}>
          Latest Blog
        </Typography>
        <Typography variant="body2" sx={{ color: "#777", mt: 1 }}>
          All Recent Post from WbBlog
        </Typography>

        <Grid container columns={12} spacing={5} sx={{ mt: 3 }}>
          {blogs.map((b, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
              <Card sx={{ boxShadow: "0px 0px 8px 0px rgba(4, 0, 0, 0.08)" }}>
                <CardMedia sx={{ height: 200 }} image={b.img} title="b1" />
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{ color: "#66a617", fontWeight: "600" }}
                    >
                      {b.category}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "#777", textAlign: "end" }}
                    >
                      {b.date}
                    </Typography>
                  </Box>
                  <Typography
                    variant="h5"
                    sx={{
                      color: "#000",
                      fontWeight: "700",
                      letterSpacing: 0.5,
                      mt: 2,
                      mb: 1,
                    }}
                  >
                    {b.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {b.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      {/* Brands */}
      <Grid
        container
        columns={16}
        spacing={2}
        sx={{ my: 5, px: { xs: 2, md: 8 } }}
      >
        {brands.map((b, index) => (
          <Grid
            key={index}
            size={{ xs: 8, sm: 4, md: 2 }}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box component="img" src={b.img} sx={{ width: "120px" }} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default Home;
