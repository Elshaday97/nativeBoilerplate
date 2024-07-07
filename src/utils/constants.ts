export enum LocalStorageKeys {
  USER = 'user',
  TOKEN = 'token',
  RF_TOKEN = 'rfToken',
}

export type LocalStorageKey = keyof typeof LocalStorageKeys;
