export const entries = Object.entries as <T>(
    o: T
  ) => [Extract<keyof T, string>, T[keyof T]][]

//add hyphens that are missing in IndentityIDs when retreiving data 
export const addHyphens = (id: string) => {
  return id.slice(0, 8) + "-" + id.slice(8,12) + "-" + id.slice(12,16) + '-' + id.slice(16,20) + '-' + id.slice(20);
}