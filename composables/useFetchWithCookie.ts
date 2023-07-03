import { appendResponseHeader, H3Event } from 'h3';

export const useFetchWithCookie = async (event: H3Event, url: string) => {
  const data = await event.$fetch(url)
  console.log(data);
  // const cookies = (res.headers.get('set-cookie') || '').split(',')

  // for (const cookie of cookies) {
  //   // const cookie = rawcookie.split(';')[0];
  //   // console.log("Cookie: ", cookie)
  //   appendResponseHeader(event, 'test', cookie)
  // }
  // return res._data
  return data;
}