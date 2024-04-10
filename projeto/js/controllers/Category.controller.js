import Category from "../models/Category.model.js";
export default class CategoryController {
  static categories;
  static isLoaded;

  constructor() {
    if (this.categories === null || this.categories === undefined) {
      CategoryController.categories = new Set();
    }
    if (this.isLoaded === null || this.isLoaded === undefined) {
      CategoryController.isLoaded = false;
    }
    if (!CategoryController.isLoaded) {
      this.loadCategories();
      CategoryController.isLoaded = true;
    }
  }

  async create({ name, description }) {
    const category = new Category({
      name,
      description,
    });
    await category.save();
  }

  /**
   * Load Categories
   */
  async loadCategories() {
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        await fetch("./static/category_data.json")
          .then((res) => res.json())
          .then((data) => {
            console.log("FETCHING CATEGORIES ", data);
            CategoryController.categories = new Set();
            data.forEach((c) => {
              CategoryController.categories.add(new Category(c));
            });
            CategoryController.isLoaded = true;
            resolve(this.getCategories());
          });
      }, 400);
    });
  }

  /**
   * Add a new Category
   * @param {Category} category
   */
  addCategory(category) {
    if (!category) {
      throw new Error("Category is required");
    }
    CategoryController.categories.add(category);
  }

  /**
   * Delete a Category
   * @param {int} id
   */
  removeCategory(id) {
    this.categories = this.categories.filter((c) => c.id !== id);
  }

  /**
   *  Get all Categories
   * @returns {Category[]}
   */
  getCategories() {
    return CategoryController.categories;
  }

  /**
   * Get a Category by id
   * @param {int} id
   * @returns {Category}
   */
  getCategoryById(id) {
    return this.categories.find((c) => c.id === id);
  }

  /**
   *  Get a Category by name
   * @param {string} name
   * @returns {Category}
   */
  getCategoryByName(name) {
    return this.categories.find(
      (c) => c.name.trim().toLowerCase() === name.trim().toLowerCase()
    );
  }
}
