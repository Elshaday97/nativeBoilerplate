export interface ApiErrorResponse {
  message: string;
  error: {[k: string]: string[]};
}
