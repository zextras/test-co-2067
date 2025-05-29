import React, { ReactElement } from 'react';
import { CustomLabelFactoryProps } from '../../types/select';
export declare const Square: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $disabled?: boolean;
    $color: string | undefined;
}>> & string;
export declare const FolderSelectorLabelFactory: ({ selected, label, open, focus, disabled }: CustomLabelFactoryProps) => ReactElement;
