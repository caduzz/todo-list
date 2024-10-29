export type IResponseStatus<T> = Promise<
  IResponseError | IResponseSucess<T>
>;

interface IResponseSucess<T> {
  data?: T | null,
  message: string,
  statusCode: number,
  success: true,
}

interface IResponseError {
  data?: null,
  message: string,
  statusCode: number,
  success: false,
}