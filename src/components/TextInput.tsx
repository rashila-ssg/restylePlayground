import {
  backgroundColor,
  BackgroundColorProps,
  BorderProps,
  layout,
  LayoutProps,
  PositionProps,
  spacing,
  SpacingProps,
  useRestyle,
  composeRestyleFunctions,
  color,
  useTheme,
  ColorProps,
  BoxProps,
} from '@shopify/restyle';
import React, {ComponentProps} from 'react';
import {TextInput} from 'react-native';
import {makeStyles, Theme} from '../Theme';
import Box from './Box';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const restyleFunctions = composeRestyleFunctions<Theme, RestyleProps>([
  spacing,
  backgroundColor,
  layout,
  color,
]);
type RestyleProps = SpacingProps<Theme> &
  BackgroundColorProps<Theme> &
  BorderProps<Theme> &
  PositionProps<Theme> &
  ColorProps<Theme> &
  LayoutProps<Theme>;

type Props = RestyleProps &
  ComponentProps<typeof TextInput> & {
    boxProps?: BoxProps<Theme>;
    leftIcon?: string;
  };

const StyledTextInput = ({leftIcon, boxProps, ...rest}: Props) => {
  const theme = useTheme<Theme>();
  // @ts-ignore
  const props = useRestyle(restyleFunctions, {
    ...rest,
  });
  const styles = inputStyles();

  return (
    <Box
      flexDirection={'row'}
      alignItems="center"
      padding={'m'}
      height={50}
      backgroundColor="inputBackground"
      {...boxProps}>
      {leftIcon && (
        <Icon name={leftIcon} size={20} color={theme.colors.primary} />
      )}

      <TextInput
        placeholderTextColor={theme.colors.lightText}
        onChangeText={text => {}}
        placeholder="placeholder"
        {...props}
      />
    </Box>
  );
};

const inputStyles = makeStyles(theme => ({
  textInput: {
    borderRadius: theme.borderRadius.m,
    padding: theme.spacing.m,
    backgroundColor: theme.colors.dark,
    color: theme.colors.text,
  },
}));

export default StyledTextInput;
