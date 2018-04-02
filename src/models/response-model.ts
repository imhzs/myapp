export interface ResponseModel
{
  code: number,
  msg?: string,
  data?: string | Array<any> | Object
}