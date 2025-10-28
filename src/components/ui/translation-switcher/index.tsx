import { Fragment, type JSX } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon, GlobeAltIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';
import { classNames } from '../../../common/utils';

interface Language {
  code: string;
  flag: string;
}

const languages: Array<Language> = [
  { code: 'en', flag: '🇺🇸' },
  { code: 'vn', flag: '🇻🇳' },
  { code: 'zh', flag: '🇨🇳' },
];

export const TranslationSwitcher = (): JSX.Element => {
  const { i18n, t } = useTranslation();

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const changeLanguage = (languageCode: string): void => {
    void i18n.changeLanguage(languageCode);
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 transition-colors duration-200">
          <GlobeAltIcon aria-hidden="true" className="h-4 w-4 text-gray-500" />
          <span className="hidden sm:block">{currentLanguage?.flag}</span>
          <span className="hidden sm:block">{t(`language.${currentLanguage?.code}` as any)}</span>
          <span className="sm:hidden">{currentLanguage?.flag}</span>
          <ChevronDownIcon aria-hidden="true" className="-mr-1 h-4 w-4 text-gray-400" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {languages.map((language) => (
              <Menu.Item key={language.code}>
                {({ active }) => (
                  <button
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      i18n.language === language.code ? 'bg-primary/10 text-primary font-medium' : '',
                      'block w-full px-4 py-2 text-left text-sm transition-colors duration-200'
                    )}
                    onClick={(): void => {
                      changeLanguage(language.code);
                    }}
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-lg">{language.flag}</span>
                      <span>{t(`language.${language.code}` as any)}</span>
                      {i18n.language === language.code && (
                        <span className="ml-auto text-primary">✓</span>
                      )}
                    </div>
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
