import type { SelectItem, LabelFactoryProps } from '@zextras/carbonio-design-system';
export type FolderSelectorItem = {
    label: string;
    value: string;
    color: string;
    disabled?: boolean | undefined;
};
interface CustomSelectItem extends SelectItem {
    color?: string;
}
export interface CustomLabelFactoryProps extends LabelFactoryProps {
    selected: CustomSelectItem[];
}
export type OnChangeSelect = (value: string | Array<SelectItem> | null) => void;
export {};
