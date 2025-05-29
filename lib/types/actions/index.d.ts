import React from 'react';
export type FolderAction = {
    id: string;
    icon: string;
    label: string;
    onClick: (ev: React.SyntheticEvent) => void;
    disabled?: boolean;
};
