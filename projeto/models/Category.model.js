export default class Category {
  id;
  category;
  cover;

  /**
   *
   * @param {{
   * id: number,
   * category: string,
   * cover: string, }} data
   */
  constructor({ id, category, cover }) {
    this.id = id;
    this.category = category;
    this.cover = cover;
  }

  /**
   *
   * @returns {Category}
   */
  toJSON() {
    return {
      id: this.id,
      category: this.category,
      cover: this.cover,
    };
  }
}
