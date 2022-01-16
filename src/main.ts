import { categories } from "./controllers/categories";
import { pages } from "./controllers/pages";
import { posts } from "./controllers/posts";
import http, { Todo } from "./fetch";

/**
 * Bloggrs class
 */
export class Bloggrs {
  serverUrl = "http://localhost:5500/api/v1";
  apiToken = null;
  BlogId = 1;
  constructor({ apiToken, BlogId }) {
    this.init({ apiToken, BlogId })
  }
  /**
  * Call this method first to set your authentication key.
  * @param {String} API Token
  */
  init = ({ apiToken, BlogId }) => {
    this._initialize({ apiToken, BlogId });
  }
  categories = categories(this)
  posts = posts(this)
  pages = pages(this)

  _initialize = ({ apiToken, BlogId }) => {
    this.apiToken = apiToken;
    this.BlogId = BlogId;
  }
}
