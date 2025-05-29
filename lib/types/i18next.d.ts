import * as i18next from 'i18next';
declare module 'i18next' {
    interface CustomTypeOptions {
        resources: {
            [defaultNs: i18next.TypeOptions['defaultNS']]: Record<string, string>;
        };
        returnNull: false;
        jsonFormat: 'v4';
        allowObjectInHTMLChildren: true;
    }
}
