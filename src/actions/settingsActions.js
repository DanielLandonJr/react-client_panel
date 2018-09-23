import {
  DISABLE_BALANCE_ON_ADD,
  DISABLE_BALANCE_ON_EDIT,
  ALLOW_REGISTRATION
} from './types';

const getSettings = () => {
  return JSON.parse(localStorage.getItem('settings'));
};

const setSettings = settings => {
  localStorage.setItem('settings', JSON.stringify(settings));
};

export const setDisableBalanceOnAdd = () => {
  // get settings from localStorage
  const settings = getSettings();

  // toggle value
  settings.disableBalanceOnAdd = !settings.disableBalanceOnAdd;

  // write back to localStorage
  setSettings(settings);

  return {
    type: DISABLE_BALANCE_ON_ADD,
    payload: settings.disableBalanceOnAdd
  };
};

export const setDisableBalanceOnEdit = () => {
  // get settings from localStorage
  const settings = getSettings();

  // toggle value
  settings.disableBalanceOnEdit = !settings.disableBalanceOnEdit;

  // write back to localStorage
  setSettings(settings);

  return {
    type: DISABLE_BALANCE_ON_EDIT,
    payload: settings.disableBalanceOnEdit
  };
};

export const setAllowRegistration = () => {
  // get settings from localStorage
  const settings = getSettings();

  // toggle value
  settings.allowRegistration = !settings.allowRegistration;

  // write back to localStorage
  setSettings(settings);

  return {
    type: ALLOW_REGISTRATION,
    payload: settings.allowRegistration
  };
};
