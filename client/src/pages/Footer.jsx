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
      list: "Organic Store",
      icon: <HomeOutlinedIcon />,
    },
    {
      list: "1234-567-890",
      icon: <PhoneOutlinedIcon />,
    },
    {
      list: "demo@demo.com",
      icon: <MailOutlinedIcon />,
    },
  ];

  const social = [
    {
      icon: <FacebookIcon />,
      link: "#",
    },
    {
      icon: <TwitterIcon />,
      link: "#",
    },
    {
      icon: <InstagramIcon />,
      link: "#",
    },
    {
      icon: <PinterestIcon />,
      link: "#",
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
                          fontSize: "large",
                        }}
                      >
                        {item.icon}
                      </ListItemIcon>
                      <ListItemText
                        primary={item.list}
                        slotProps={{
                          primary: {
                            sx: {
                              fontSize: "15px",
                            },
                          },
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>

              <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                {social.map((s, index) => (
                  <Link href={s.link} sx={{color:"#fff"}}>
                    {s.icon}
                  </Link>
                ))}
              </Stack>
            </Grid>
            <Grid size={3}>
              <Typography
                variant="h5"
                sx={{ textTransform: "uppercase", fontWeight: "600" }}
              >
                Information
              </Typography>
            </Grid>
            <Grid size={3}>
              <Typography
                variant="h5"
                sx={{ textTransform: "uppercase", fontWeight: "600" }}
              >
                My Account
              </Typography>
            </Grid>
            <Grid size={3}>
              <Typography
                variant="h5"
                sx={{ textTransform: "uppercase", fontWeight: "600" }}
              >
                Customer Sevice
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default Footer;
