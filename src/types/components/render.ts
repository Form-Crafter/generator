import { GroupProps } from './props';
import { TreeNode } from './tree';

export type RenderGroupComponentProps = TreeNode &
  Pick<GroupProps, 'renderTitle'>;
