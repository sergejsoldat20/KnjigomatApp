import base from "./baseService";

const instance = base.service(true);
const getInstance = base.service(false);

export const getPostById = (id) => {
  return getInstance.get(`/posts/${id}`);
};
export const getPaginated = (page, size) => {
  return getInstance.get(`/posts/paginated?page=${page}&size=${size}`);
};
export const getAllByUserId = (id) => {
  return getInstance.get(`/posts/users/${id}`);
};
export const getAllByUserIdPaginated = (page, size, id) => {
  return getInstance.get(
    `/posts/users/${id}/paginated?page=${page}&size=${size}`
  );
};
export const getAllFilteredByPriceIsBetween = (page, size, lowest, highest) => {
  return getInstance.get(
    `/posts/price-between?page=${page}&size=${size}&lowest=${lowest}&highest=${highest}`
  );
};
export const gettAllFilteredByAuthorName = (page, size, authorName) => {
  return getInstance.get(
    `/posts/author-name?page=${page}&size=${size}&authorName=${authorName}`
  );
};
export const getAllFilteredByCategoryName = (page, size, categoryName) => {
  return getInstance.get(
    `/posts/category-name?page=${page}&size=${size}&categoryName=${categoryName}`
  );
};
export const getFiltered = (
  page,
  size,
  priceFrom,
  priceTo,
  categoryName,
  authorName,
  selectedSort
) => {
  let queryString = `/posts/filtered?page=${page}&size=${size}`;
  if (selectedSort) {
    queryString += `&sort=${selectedSort}`;
  }
  if (priceFrom) {
    queryString += `&priceFrom=${priceFrom}`;
  }
  if (priceTo) {
    queryString += `&priceTo=${priceTo}`;
  }
  if (categoryName) {
    queryString += `&categoryName=${categoryName}`;
  }
  if (authorName) {
    queryString += `&authorName=${authorName}`;
  }
  return getInstance.get(queryString);
};
export const insertPost = (post) => {
  return instance.post(`/posts`, post);
};
export const updatePost = (id, post) => {
  return instance.put(`/posts/${id}`, post);
};
export const deletePost = (id) => {
  return instance.delete(`/posts/${id}`);
};
export const getCommentsByPostId = (id) => {
  return getInstance.get(`/comments/posts/${id}`);
};
export const getPhotosByPostId = (id) => {
  return getInstance.get(`/photos/by-post/${id}`);
};
export const getFirstPhotoByPostId = (id) => {
  return getInstance.get(`/photos/first-photo/by-post/${id}`);
};
export const getAllDistinctAuthors = () => {
  return getInstance.get(`/posts/all-authors`);
};
export const getAllDistinctCategories = () => {
  return getInstance.get(`/posts/all-categories`);
};
export default {
  getPostById,
  getAllByUserId,
  getAllByUserIdPaginated,
  getAllFilteredByCategoryName,
  getAllFilteredByPriceIsBetween,
  getCommentsByPostId,
  getFirstPhotoByPostId,
  getPaginated,
  getPhotosByPostId,
  gettAllFilteredByAuthorName,
  insertPost,
  updatePost,
  deletePost,
  getAllDistinctAuthors,
  getAllDistinctCategories,
  getFiltered,
};
