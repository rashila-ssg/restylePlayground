import {
  backgroundColor,
  BackgroundColorProps,
  BorderProps,
  createVariant,
  layout,
  LayoutProps,
  PositionProps,
  spacing,
  SpacingProps,
  useRestyle,
  VariantProps,
  composeRestyleFunctions,
  border,
  color,
  useTheme,
} from '@shopify/restyle';
import React, {ComponentProps} from 'react';
import {ActivityIndicator, Pressable, PressableProps} from 'react-native';
import {Theme} from '../Theme';
import Text from './Text';

const restyleFunctions = composeRestyleFunctions<Theme, RestyleProps>([
  spacing,
  backgroundColor,
  layout,
  createVariant({themeKey: 'buttonVariants'}),
]);
type RestyleProps = SpacingProps<Theme> &
  BackgroundColorProps<Theme> &
  BorderProps<Theme> &
  PositionProps<Theme> &
  LayoutProps<Theme> &
  VariantProps<Theme, 'buttonVariants'>;

type Props = RestyleProps &
  ComponentProps<typeof Pressable> & {
    label: string;
    loading?: boolean;
  };

const Button = ({onPress, label, loading, disabled, ...rest}: Props) => {
  const {variant} = rest;
  const theme = useTheme<Theme>();
  // @ts-ignore
  const props = useRestyle(restyleFunctions, {
    ...rest,
  });

  const getTextVariant: any = () => {
    switch (variant) {
      case 'outline':
        return 'buttonLabelBorder';
      case 'disabled':
        return 'buttonLabel';
      default:
        return 'buttonLabel';
    }
  };
  return (
    <Pressable onPress={onPress} disabled={disabled || loading} {...props}>
      {loading ? (
        <ActivityIndicator size="small" color={theme.colors.text} />
      ) : (
        <Text variant={getTextVariant()}>{label}</Text>
      )}
    </Pressable>
  );
};

export default Button;
