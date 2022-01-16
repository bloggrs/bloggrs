import { categories } from "./controllers/categories";
import http, { Todo } from "./fetch";

/**
 * Bloggrs class
 */
export class Bloggrs {
  constructor({ apiToken, BlogId }) {
    this.init({ apiToken, BlogId })
  }
  serverUrl = "https://localhost:5500/api/v1";
  apiToken = null;
  BlogId = null;
  /**
  * Call this method first to set your authentication key.
  * @param {String} API Token
  */
  init = ({ apiToken, BlogId }) => {
    this._initialize({ apiToken, BlogId });
  }
  categories = categories(this)

  _initialize = ({ apiToken, BlogId }) => {
    this.apiToken = apiToken;
    this.BlogId = BlogId;
  }
}
