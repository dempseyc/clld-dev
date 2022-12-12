import {
  chakra,
  extendTheme,
  type ThemeConfig,
  theme as baseTheme,
  withDefaultProps,
} from "@chakra-ui/react";
import { mode, type StyleFunctionProps } from "@chakra-ui/theme-tools";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const customSchemes = ["cyan", "pink", "yellow", "purple"];

const fontOverRides = {
  fonts: {
    heading: `'Alexandria', sans-serif`,
    body: `'Roboto Slab', serif`,
  },
  textStyles: {
    body: {
      color: baseTheme.colors.gray[300],
    },
    code: {
      fontFamily: `'Courier Prime', serif, mono`,
    },
  },
  styles: {
    global: {
      p: {
        opacity: "0.8",
      }
    }
  }
};

const overRides = {
  colors: {
    blue: {
      "50": "#E5EDFF",
      "100": "#B8CCFF",
      "200": "#8AACFF",
      "300": "#5C8BFF",
      "400": "#2E6BFF",
      "500": "#004AFF",
      "600": "#003BCC",
      "700": "#002D99",
      "800": "#001E66",
      "900": "#000F33",
    },
    yellow: {
      "50": "#FFFCE5",
      "100": "#FFF7B8",
      "200": "#FFF18A",
      "300": "#FFEC5C",
      "400": "#FFE62E",
      "500": "#FFE100",
      "600": "#CCB400",
      "700": "#998700",
      "800": "#665A00",
      "900": "#332D00",
    },
    pink: {
      "50": "#FDE8FB",
      "100": "#F9BEF3",
      "200": "#F594EC",
      "300": "#F16AE4",
      "400": "#ED40DD",
      "500": "#E917D5",
      "600": "#BA12AB",
      "700": "#8B0E80",
      "800": "#5D0955",
      "900": "#2F042B",
    },
    purple: {
      "50": "#F0F0F5",
      "100": "#D6D4E3",
      "200": "#BBB8D1",
      "300": "#A19CBF",
      "400": "#8680AD",
      "500": "#6C659A",
      "600": "#56507C",
      "700": "#413C5D",
      "800": "#2B283E",
      "900": "#16141F"
    }
  },
  components: {
    Button: {
      baseStyle: {
        fontFamily: `'Alexandria', sans-serif`,
        fontWeight: "regular",
        rounded: "none",
      },
      sizes: {
        xl: {
          h: "56px",
          fontSize: "lg",
          px: "32px",
        },
      },
      variants: {
        clear: (props: { colorScheme: string | undefined }) => {
          const base = baseTheme.components.Button.variants?.outline;
          const colVal = [".600", ".300"];
          let colorize = {};
          let hover = {
            _hover: {
              color: mode(
                `${props.colorScheme}.600`,
                `${props.colorScheme}.400`
              )(props),
            },
          };
          if (props.colorScheme !== "gray") {
            colorize = {
              color: mode(
                `${props.colorScheme}${colVal[0]}`,
                `${props.colorScheme}${colVal[1]}`
              )(props),
            };
            hover = {
              _hover: {
                color: mode(
                  `${props.colorScheme}.800`,
                  `${props.colorScheme}.100`
                )(props),
              },
            };
          }
          return { ...base, ...colorize, ...hover };
        },
        outline: (props: { colorScheme: string | undefined }) => {
          const colVal = [".600", ".300"];
          if (props.colorScheme !== "gray") {
            return {
              borderColor: mode(
                `${props.colorScheme}${colVal[0]}`,
                `${props.colorScheme}${colVal[1]}`
              )(props),
              color: mode(
                `${props.colorScheme}${colVal[0]}`,
                `${props.colorScheme}${colVal[1]}`
              )(props),
            };
          } else {
            return {
              borderColor: mode(
                `${props.colorScheme}${colVal[0]}`,
                `${props.colorScheme}${colVal[1]}`
              )(props),
            };
          }
        },
        // 4. We can override existing variants
        solid: (props: { colorScheme: string }) => {
          const colVal = customSchemes.includes(props.colorScheme)
            ? [".600", ".300"]
            : [".300", ".700"];
          const hovVal = customSchemes.includes(props.colorScheme)
            ? [".800", ".200"]
            : [".400", ".800"];
          return {
            bg: mode(
              `${props.colorScheme}${colVal[0]}`,
              `${props.colorScheme}${colVal[1]}`
            )(props),
            _hover: {
              bg: mode(
                `${props.colorScheme}${hovVal[0]}`,
                `${props.colorScheme}${hovVal[1]}`
              )(props),
            },
          };
        },
      },
    },
  },
};

const theme = extendTheme({ config, ...overRides, ...fontOverRides });

export default theme;
