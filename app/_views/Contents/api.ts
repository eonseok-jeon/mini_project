export default async function fetchCourses(
  page: number,
  filter: { title: string | null | undefined; price: string[] | undefined } = { title: null, price: [] },
) {
  const { title, price } = filter;
  const filter_conditions = JSON.stringify({
    $and: [
      ...(title ? [{ title: `%${title}%` }] : []),
      {
        $or:
          (price?.includes('무료') && price?.includes('유료')) || price?.length === 0
            ? [
                { enroll_type: 0, is_free: true },
                { enroll_type: 0, is_free: false },
              ]
            : price?.includes('무료')
              ? [{ enroll_type: 0, is_free: true }]
              : [{ enroll_type: 0, is_free: false }],
      },
    ],
  });

  const queryParams = new URLSearchParams({
    filter_conditions,
    sort_by: 'created_datetime.desc',
    offset: `${(page - 1) * 20}`,
    count: '20',
  });

  const res = await fetch(`api/?${queryParams.toString()}`);
  const result = await res.json();

  const data = result.data.courses.map((item) => ({
    enrollType: item.enroll_type,
    isFree: item.is_free,
    title: item.title,
    shortDescription: item.short_description,
    logoFileUrl: item.logo_file_url,
  }));

  return { data, courseCount: result.data.course_count };
}
