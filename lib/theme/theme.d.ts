import { PaletteColorOptions, PaletteOptions, Theme } from '@mui/material';
declare module '@mui/material/styles' {
    interface CustomPaletteOptions extends PaletteOptions {
        palette: {
            currentColor: PaletteColorOptions;
            gray0: PaletteColorOptions;
            gray1: PaletteColorOptions;
            gray2: PaletteColorOptions;
            gray3: PaletteColorOptions;
            gray4: PaletteColorOptions;
            gray5: PaletteColorOptions;
            gray6: PaletteColorOptions;
            primary: PaletteColorOptions;
            secondary: PaletteColorOptions;
            text: Partial<TypeText>;
            transparent: PaletteColorOptions;
            header: PaletteColorOptions;
            highlight: PaletteColorOptions;
            warning: PaletteColorOptions;
            error: PaletteColorOptions;
            success: PaletteColorOptions;
            info: PaletteColorOptions;
        };
    }
    interface CustomTheme extends Theme {
        palette: any;
    }
    interface TypeText {
        regular?: string;
        hover?: string;
        active?: string;
        focus?: string;
    }
    interface PaletteColor {
        regular?: string;
        hover?: string;
        active?: string;
        focus?: string;
        disabled?: string;
    }
    interface SimplePaletteColorOptions {
        regular?: string;
        hover?: string;
        active?: string;
        focus?: string;
        disabled?: string;
    }
}
