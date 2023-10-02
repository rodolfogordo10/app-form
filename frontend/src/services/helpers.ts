import axios from 'axios';
import { ApiError } from 'interfaces';

export const isAxiosError = axios.isAxiosError;

export function isApiError(error: unknown): error is ApiError {
  if (!error) {
    return false;
  }
  return (
    typeof error === 'object' &&
    'error' in error &&
    'status' in error &&
    'code' in error &&
    'message' in error
  );
}
