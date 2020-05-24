import React from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import Header from './components/header';
import Global from './styles/global';
import dark from './styles/themes/dark';
import light from './styles/themes/light';
import usePersistedState from './utils/usePersistedState';
import Background from './components/Background_parallax/index'

const App = () => {
    const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

    const toggleTheme = () => {
        setTheme(theme.title === 'light' ? dark : light)
    }
    return (
        <ThemeProvider theme={theme}>
            <Global/>
            <div className="App">
                <Header toggleTheme={toggleTheme} />
                <Background />
            </div>
        </ThemeProvider>
    );
}

export default App;
