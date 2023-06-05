// Define interface for validators
export interface IValidator<T> {
  validate(value: T): string | null;
}

// Define interface for error informer
export interface ErrorReport<T> {
  message: string;
  value: T;
}