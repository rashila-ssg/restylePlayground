import {ThemeProvider} from '@shopify/restyle';
import React, {useState} from 'react';
import {Switch} from 'react-native';

import {Alert, SafeAreaView} from 'react-native';

import Box from './src/components/Box';
import Button from './src/components/Button';
import Card from './src/components/Card';
import Text from './src/components/Text';

import {theme, darkTheme} from './src/Theme';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : theme}>
      <SafeAreaView style={{flex: 1}}>
        <Box
          flex={1}
          bg={'background'}
          padding={'xs'}
          alignItems={'center'}
          justifyContent={'space-between'}>
          <Card variant={'elevated'} mt={'s'} padding={'m'}>
            <Text variant={'title'}>Some content inside the card</Text>
            <Button
              label="Press me"
              onPress={() => Alert.alert('Pressed')}
              marginTop={'s'}
              variant={'outline'}
            />
          </Card>
          <Box marginTop="m" alignSelf={'flex-end'} padding="m">
            <Switch
              value={darkMode}
              onValueChange={(value: boolean) => setDarkMode(value)}
            />
          </Box>
        </Box>
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
