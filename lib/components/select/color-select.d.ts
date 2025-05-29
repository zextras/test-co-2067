import React from 'react';
import type { SingleSelectionOnChange } from '@zextras/carbonio-design-system';
export declare const ColorContainer: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<Omit<import("@zextras/carbonio-design-system").ContainerProps & React.RefAttributes<HTMLDivElement>, "ref"> & {
    ref?: ((instance: HTMLDivElement | null) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLDivElement> | null | undefined;
}, never>> & string & Omit<React.ForwardRefExoticComponent<import("@zextras/carbonio-design-system").ContainerProps & React.RefAttributes<HTMLDivElement>>, keyof React.Component<any, {}, any>>;
export declare const TextUpperCase: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<Omit<import("@zextras/carbonio-design-system").TextProps & React.RefAttributes<HTMLDivElement>, "ref"> & {
    ref?: ((instance: HTMLDivElement | null) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLDivElement> | null | undefined;
}, never>> & string & Omit<React.ForwardRefExoticComponent<import("@zextras/carbonio-design-system").TextProps & React.RefAttributes<HTMLDivElement>>, keyof React.Component<any, {}, any>>;
export type ColorSelectProps = {
    onChange: SingleSelectionOnChange;
    defaultColor: number;
    label: string;
};
export declare const ColorSelect: ({ onChange, defaultColor, label }: ColorSelectProps) => React.JSX.Element;
