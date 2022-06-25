/* eslint @typescript-eslint/no-explicit-any: 0 */
export const logger = (fun: () => any) => console.log(`[${new Date().toISOString()}] ${fun()}`);
