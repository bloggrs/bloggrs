import { Bloggrs } from './main';
import { Person } from './models/person.spec';

/**
 * Bloggrs test
 */
describe('Bloggrs test', () => {
  it('works if true is truthy', () => {
    expect(true).toBeTruthy();
  });

  it('BloggrsClass is instantiable', () => {
    expect(new Bloggrs({
      BlogId: 1,
      apiToken: "dummy-string"
    })).toBeInstanceOf(Bloggrs);
  });

});
