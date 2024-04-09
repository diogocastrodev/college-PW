export default class Category {
  id;
  category;
  cover;

  constructor({ id, category, cover }) {
    this.id = id;
    this.category = category;
    this.cover = cover;
  }
}
