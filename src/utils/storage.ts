import AsyncStorage from '@react-native-async-storage/async-storage';
import {LocalStorageKey} from './constants';

export const setItemInStorage = async <T>(
  key: LocalStorageKey,
  value: T,
): Promise<void> => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error('Error setting item in storage:', error);
    throw error;
  }
};

export const getItemFromStorage = async <T>(
  key: LocalStorageKey,
): Promise<T | null> => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  } catch (error) {
    console.error('Error getting item from storage:', error);
    throw error;
  }
};

export const removeItemFromStorage = async (
  key: LocalStorageKey,
): Promise<void> => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error('Error removing item from storage:', error);
    throw error;
  }
};
