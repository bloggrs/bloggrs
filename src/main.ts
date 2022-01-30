import { auth } from './controllers/auth';
import { categories } from './controllers/categories';
import { general } from './controllers/general';
import { pages } from './controllers/pages';
import { postcomments } from './controllers/postcomments';
import { posts } from './controllers/posts';
import http, { post, Todo } from './fetch';


/**
 * Bloggrs class
 */

export class Bloggrs {
  serverUrl = 'http://localhost:5500/api/v1';
  apiKey = null;
  BlogId = null;
  blog = null;
  initialized = false;
  initPromise = null;

  constructor(apiKey) {
    this.initPromise = this.init(apiKey).catch(err => {
      console.error('Failed to initialize')
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
  wrapper = func => {
    const obj = func(this)
    const new_obj = {}
    Object.keys(obj).forEach(key => {
      const { initialized } = this;
      if (!initialized) {
        new_obj[key] = async (...args) => {
          console.warn(`Library not initialized yet, ${key} function call delayed.`)
          await this.initPromise;
          return func(this)[key](...args)
        }
      } else func(this)[key] = obj[key]
    })
    return new_obj
  }
  categories: any = this.wrapper(categories)
  posts: any = this.wrapper(posts)
  postcomments: any = this.wrapper(postcomments)
  pages: any = this.wrapper(pages)
  general: any = this.wrapper(general)
  auth: any = this.wrapper(auth)

  _initialize = async (apiKey) => {
    this.apiKey = apiKey;
    const res: any = await post(this.serverUrl + '/blogs/api_key', { api_key: apiKey }, {
      headers: {'Content-Type': 'application/json'},
    });
    const { data: { blog } } = res;
    this.blog = blog;
    this.BlogId = blog.id;
    this.categories = categories(this);
    this.posts = posts(this);
    this.postcomments = postcomments(this);
    this.pages = pages(this);
    this.general = general(this);
    this.auth = auth(this);

  }
}
