import { Button, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";
import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImage,
  BannerCompanyButton,
  BannerTitle,
} from "../../styles/banner";

export default function Banner() {
  const theme = useTheme();
//   const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <BannerContainer >
      <BannerImage src="/images/banner.jpg" />
      <BannerContent>
        <BannerTitle variant="h2">
        Leading MEP & Facility management company in Dubai
        </BannerTitle>

        <BannerDescription variant="subtitle">
          Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo
          tempor incididunt ut labore et dolore magna
        </BannerDescription>
        <BannerCompanyButton color="secondary">Company Profile</BannerCompanyButton>
      </BannerContent>
    </BannerContainer>
  );
}