// app/api/route.js
import { type NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  // const { searchParams } = new URL(req.url);
  const searchParams = req.nextUrl.searchParams;
  const query = searchParams.get('query');
  console.log(query);

  const filterConditions =
    searchParams.get('filter_conditions') ||
    '%7B%22%24and%22%3A%5B%7B%22title%22%3A%22%25%25%22%7D%2C%7B%22%24or%22%3A%5B%7B%22status%22%3A2%7D%2C%7B%22status%22%3A3%7D%2C%7B%22status%22%3A4%7D%5D%7D%2C%7B%22%24or%22%3A%5B%5D%7D%2C%7B%22is_datetime_enrollable%22%3Atrue%7D%5D%7D';
  const sortBy = searchParams.get('sort_by') || 'created_datetime.desc';
  const offset = searchParams.get('offset') || '0';
  const count = searchParams.get('count') || '12';

  const apiUrl = `${process.env.API_URL}/list/?filter_conditions=${filterConditions}&sort_by=${sortBy}&offset=${offset}&count=${count}`;

  const res = await fetch(apiUrl, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await res.json();

  return Response.json({ data });
}
