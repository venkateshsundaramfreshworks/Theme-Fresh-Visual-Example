import theme from 'styled-theming';
import _map from 'lodash/map';
import _fromPairs from 'lodash/fromPairs'

import { themeAttributes } from './themes';

export const theming = mode => {
    const backgroundColor = theme('mode', {[themeAttributes.name]: themeAttributes.background.color });
    const fontColor = theme('mode', {[themeAttributes.name]: themeAttributes.font.color});
    return {
        mode: mode ? mode : 'service',
        fg: fontColor,
        bg: backgroundColor
    };
}

