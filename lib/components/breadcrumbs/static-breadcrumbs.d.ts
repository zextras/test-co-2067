import { FC } from 'react';
import { BreadcrumbsProps, TextProps } from '@zextras/carbonio-design-system';
type StaticBreadcrumbsProps = BreadcrumbsProps & {
    size?: TextProps['size'];
    tooltipLabel?: string;
};
declare const StaticBreadcrumbs: FC<StaticBreadcrumbsProps>;
export { type StaticBreadcrumbsProps, StaticBreadcrumbs };
