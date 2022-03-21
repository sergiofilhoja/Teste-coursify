const BASE_API = 'https://blog.coursify.me/wp-json/wp/v2';

export default {
  getMedia: async () => {
    const req = await fetch(`${BASE_API}/media`)
    const res = await req.json();
    return res;
  },

  getPosts: async () => {
    const req = await fetch(`${BASE_API}/posts`)
    const res = await req.json();
    return res;
  },

  getCategories: async () => {
    const req = await fetch(`${BASE_API}/categories/`)
    const res = await req.json()
    return res;
  }
}