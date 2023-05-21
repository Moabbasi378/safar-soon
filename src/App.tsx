import { prefixer } from "stylis";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Theme";
import { Box, Typography } from "@mui/material";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

function App() {
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <Typography sx={{ color: "primary.main", fontSize: "5rem" }}>
          این یک پیام تست برای اعلام شروع پروژه سفرسون است{" "}
        </Typography>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
