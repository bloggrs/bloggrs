import { categories } from "./controllers/categories";
import { pages } from "./controllers/pages";
import { posts } from "./controllers/posts";
import http, { post, Todo } from "./fetch";


/**
 * Bloggrs class
 */

export class Bloggrs {
  serverUrl = "http://localhost:5500/api/v1";
  apiKey = null;
  BlogId = 1;
  blog = null;
  initialized = false;
  initPromise = null;
  
  constructor(apiKey) {
    this.initPromise = this.init(apiKey).catch(err => {
      console.error("Failed to initialize")
    }) 
  }
  /**
  * Call this method first to set your authentication key.
  * @param {String} API Token
  */
  init = async (apiKey) => {
    await this._initialize(apiKey);
    return this;
  }
  wrapper = obj => {
    const new_obj = {}
    Object.keys(obj).forEach(key => {
      const { initialized } = this;
      if (!initialized) {
        new_obj[key] = async (...args) => {
          console.warn(`Library not initialized yet, ${key} function call delayed.`)
          await this.initPromise;
          return obj[key](...args)
        }
      } else new_obj[key] = obj[key]
    })
    return new_obj
  }
  categories: any = this.wrapper(categories(this))
  posts: any = this.wrapper(posts(this))
  pages: any = this.wrapper(pages(this))

  _initialize = async (apiKey) => {
    this.apiKey = apiKey;
    const res: any = await post(this.serverUrl + "/blogs/api_key", { api_key: apiKey }, {
      headers: {'Content-Type': 'application/json'},
    });
    const { data: { blog } } = res;
    this.blog = blog;
    this.BlogId = blog.id;

    this.categories = categories(this)
    this.posts = posts(this)
    this.pages = pages(this)
  
  }
}
