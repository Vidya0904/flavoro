import {
  Box,
  Button,
  Divider,
  Grid,
  Input,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
  Link,
} from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";

function Footer() {
  const contact = [
    {
      list: "Organic Store, India",
      icon: (
        <HomeOutlinedIcon
          sx={{ fontSize: "30px", marginRight: "10px", color: "#66a617" }}
        />
      ),
    },
    {
      list: "1234-567-890",
      icon: (
        <PhoneOutlinedIcon
          sx={{ fontSize: "30px", marginRight: "10px", color: "#66a617" }}
        />
      ),
    },
    {
      list: "demo@demo.com",
      icon: (
        <MailOutlinedIcon
          sx={{ fontSize: "30px", marginRight: "10px", color: "#66a617" }}
        />
      ),
    },
  ];

  const social = [
    {
      icon: (
        <FacebookIcon
          sx={{
            color: "#777",
            transition: "all 0.3s",
            fontSize: "35px",
            p: 1,
            backgroundColor: "#fff",
            borderRadius: "4px",
            transition: "all 0.3s",
            "&:hover": { color: "#fff", backgroundColor: "#66a617" },
          }}
        />
      ),
      link: "#",
    },
    {
      icon: (
        <TwitterIcon
          sx={{
            color: "#777",
            transition: "all 0.3s",
            fontSize: "35px",
            p: 1,
            backgroundColor: "#fff",
            borderRadius: "4px",
            transition: "all 0.3s",
            "&:hover": { color: "#fff", backgroundColor: "#66a617" },
          }}
        />
      ),
      link: "#",
    },
    {
      icon: (
        <InstagramIcon
          sx={{
            color: "#777",
            transition: "all 0.3s",
            fontSize: "35px",
            p: 1,
            backgroundColor: "#fff",
            borderRadius: "4px",
            transition: "all 0.3s",
            "&:hover": { color: "#fff", backgroundColor: "#66a617" },
          }}
        />
      ),
      link: "#",
    },
    {
      icon: (
        <PinterestIcon
          sx={{
            color: "#777",
            transition: "all 0.3s",
            fontSize: "35px",
            p: 1,
            backgroundColor: "#fff",
            borderRadius: "4px",
            transition: "all 0.3s",
            "&:hover": { color: "#fff", backgroundColor: "#66a617" },
          }}
        />
      ),
      link: "#",
    },
  ];

  const about = [
    {
      item: "About",
    },
    {
      item: "Delivery Information",
    },
    {
      item: "Privacy Policy",
    },
    {
      item: "Terms & Conditions",
    },
    {
      item: "Brands",
    },
  ];

  const account = [
    {
      item: "My Account",
    },
    {
      item: "Order History",
    },
    {
      item: "Wish List",
    },
    {
      item: "Newsletter",
    },
    {
      item: "specials",
    },
  ];

  const custService = [
    {
      item: "Contact Us",
    },
    {
      item: "Returns",
    },
    {
      item: "Site Map",
    },
    {
      item: "Gift Certificates",
    },
    {
      item: "Affiliate",
    },
  ];

  const hlist = [
    {
      item: "Snack Plants",
    },
    {
      item: "Gardern Plants",
    },
    {
      item: "House Plants",
    },
    {
      item: "Indoor Plants",
    },
    {
      item: "Small Plants",
    },
    {
      item: "Office Plants",
    },
    {
      item: "Crenate Plants",
    },
    {
      item: "Vasular Plants",
    },
    {
      item: "Indian Basil",
    },
    {
      item: "Natural",
    },
    {
      item: "Emergents",
    },
  ];

  return (
    <>
      <Box sx={{ backgroundColor: "#000", color: "#fff" }}>
        <Box sx={{ p: 5 }}>
          <Typography
            variant="h4"
            sx={{
              textTransform: "uppercase",
              fontWeight: "600",
              mb: 2,
              textAlign: "center",
            }}
          >
            Sign up for Newsletter
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 2,
            }}
          >
            <Input
              placeholder="Your email address"
              sx={{
                backgroundColor: "#fff",
                py: 1.3,
                px: 2,
                borderRadius: "5px",
                width: "60%",
              }}
            />
            <Button
              sx={{
                backgroundColor: "#66a617",
                py: 1.7,
                px: 2,
                borderRadius: "5px",
                color: "#fff",
                letterSpacing: 2,
                fontWeight: 700,
              }}
            >
              Subscribe
            </Button>
          </Box>
          <Typography
            variant="body2"
            sx={{ color: "#777", mt: 1.5, textAlign: "center" }}
          >
            A newsletter is a regularly distributed publication that is
            generally about one main topic of interest to its subscribers.
          </Typography>
        </Box>
        <Divider sx={{ borderColor: "#777" }} />
        <Box sx={{ p: 8 }}>
          <Grid container column={12}>
            <Grid size={3}>
              <Typography
                variant="h5"
                sx={{ textTransform: "uppercase", fontWeight: "600", mb: 2 }}
              >
                Contact Us
              </Typography>
              <List sx={{ p: 0 }}>
                {contact.map((item) => (
                  <ListItem key={item} disablePadding>
                    <ListItemButton
                      sx={{
                        px: 0,
                        py: 0.5,
                        color: "#ecebeb",
                        transition: "all 0.3s",
                        "&:hover": {
                          color: "#66a617",
                          backgroundColor: "transparent",
                        },
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: "35px",
                          color: "inherit",
                        }}
                      >
                        {item.icon}
                      </ListItemIcon>
                      <ListItemText
                        primary={item.list}
                        slotProps={{
                          primary: {
                            sx: {
                              fontSize: "16px",
                              letterSpacing: "1.5px",
                            },
                          },
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>

              <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
                {social.map((s, index) => (
                  <Link href={s.link} sx={{ color: "#fff" }}>
                    {s.icon}
                  </Link>
                ))}
              </Stack>
            </Grid>
            <Grid size={3}>
              <Typography
                variant="h5"
                sx={{
                  textTransform: "uppercase",
                  fontWeight: "600",
                  mb: 2,
                  mb: 2,
                }}
              >
                Information
              </Typography>
              <List sx={{ p: 0 }}>
                {about.map((a, item) => (
                  <ListItem key={item} disablePadding>
                    <ListItemButton
                      sx={{
                        px: 0,
                        py: 0.2,
                        color: "#ecebeb",
                      }}
                    >
                      <ListItemText
                        primary={a.item}
                        slotProps={{
                          primary: {
                            sx: {
                              fontSize: "16px",
                              letterSpacing: "1.5px",
                              transition: "all 0.3s",
                              "&:hover": {
                                color: "#66a617",
                              },
                            },
                          },
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Grid>
            <Grid size={3}>
              <Typography
                variant="h5"
                sx={{ textTransform: "uppercase", fontWeight: "600", mb: 2 }}
              >
                My Account
              </Typography>
              <List sx={{ p: 0 }}>
                {account.map((a, item) => (
                  <ListItem key={item} disablePadding>
                    <ListItemButton
                      sx={{
                        px: 0,
                        py: 0.2,
                        color: "#ecebeb",
                      }}
                    >
                      <ListItemText
                        primary={a.item}
                        slotProps={{
                          primary: {
                            sx: {
                              fontSize: "16px",
                              letterSpacing: "1.5px",
                              transition: "all 0.3s",
                              "&:hover": {
                                color: "#66a617",
                              },
                            },
                          },
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Grid>
            <Grid size={3}>
              <Typography
                variant="h5"
                sx={{ textTransform: "uppercase", fontWeight: "600", mb: 2 }}
              >
                Customer Sevice
              </Typography>
              <List sx={{ p: 0 }}>
                {custService.map((c, item) => (
                  <ListItem key={item} disablePadding>
                    <ListItemButton
                      sx={{
                        px: 0,
                        py: 0.2,
                        color: "#ecebeb",
                      }}
                    >
                      <ListItemText
                        primary={c.item}
                        slotProps={{
                          primary: {
                            sx: {
                              fontSize: "16px",
                              letterSpacing: "1.5px",
                              transition: "all 0.3s",
                              "&:hover": {
                                color: "#66a617",
                              },
                            },
                          },
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Grid>
          </Grid>
        </Box>
        <Divider sx={{ borderColor: "#777" }} />
        <Stack
          direction="row"
          divider={
            <Divider
              orientation="vertical"
              flexItem
              sx={{ backgroundColor: "#fff" }}
            />
          }
          spacing={2}
          sx={{
            p: 5,
            flexWrap: "wrap",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {hlist.map((h, item) => (
            <Typography
              sx={{
                color: "#fff",
                fontWeight: "600",
                letterSpacing: "0.5px",
              }}
            >
              {h.item}
            </Typography>
          ))}
        </Stack>
        <Divider sx={{ borderColor: "#777" }} />

        <Typography
          variant="body2"
          sx={{ color: "#777", textAlign: "center", p: 2 }}
        >
          Powered By Flavoro Organic Store @ {new Date().getFullYear()}
        </Typography>
      </Box>
    </>
  );
}

export default Footer;
