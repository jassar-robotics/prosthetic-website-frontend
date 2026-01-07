import { fetchData } from '@/apis/handleData.js';
import { queryOptions } from '@tanstack/react-query';

const getBlogDetail = async (id) => {
  const res = await fetchData(`/blogs/detail/${id}/`);
  return res.data;
};

export default function blogDetailOptions(id) {
  return queryOptions({
    queryKey: ['blog_detail', id],
    queryFn: () => getBlogDetail(id),
  });
}
