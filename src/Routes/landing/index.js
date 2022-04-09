import ProductList from "./productsList";
import AppBar from "../../Components/appBar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import InventoryState from "../../Context/Inventory/inventoryState";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

function LandingPage() {
  return (
    <>
      <AppBar></AppBar>
      <ThemeProvider theme={theme}>
        <InventoryState>
          <CssBaseline />
          <main>
            {/* Hero unit */}
            <Box
              sx={{
                bgcolor: "background.paper",
                pt: 8,
                pb: 6,
              }}
            >
              <Container maxWidth="sm">
                <Typography component="h1" variant="h2" align="center" color="text.primary" gutterBottom>
                  Online Marketplace
                </Typography>
                <Typography variant="h5" align="center" color="text.secondary" paragraph>
                  Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don&apos;t simply skip
                  over it entirely.
                </Typography>
              </Container>
            </Box>
            <Container sx={{ py: 8 }}>
              {/* End hero unit */}

                    <ProductList></ProductList>

            </Container>
          </main>
          {/* Footer */}
          <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
            <Typography variant="h6" align="center" gutterBottom>
              Footer
            </Typography>
            <Typography variant="subtitle1" align="center" color="text.secondary" component="p">
              Something here to give the footer a purpose!
            </Typography>
          </Box>
          {/* End footer */}
        </InventoryState>
      </ThemeProvider>
    </>
  );
}

export default LandingPage;
