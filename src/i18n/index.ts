import { I18n } from 'i18n-js';
import * as locales from './locales';

const i18n = new I18n(locales);
i18n.defaultLocale = 'pt';
i18n.enableFallback = true;

export default i18n;
