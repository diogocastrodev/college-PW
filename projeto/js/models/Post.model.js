import User from "./User.model";

export default class Post {
  id;
  title;
  content;
  created_at;
  updated_at;
  location;
  gps;
  price;
  type;
  user;
  category;
  manufacturer;
  status;

  /**
   *
   * @param {{
   * id: number,
   * title: string,
   * content: string,
   * created_at: Date,
   * updated_at: Date,
   * location: string,
   * gps: string,
   * price: number,
   * type: "SELL" | "TRADE" | "SELL_TRADE",
   * user: User,
   * category: string, // TODO: change to Category
   * manufacturer: string, // TODO: change to Manufacturer
   * status: "ACTIVE" | "INACTIVE" }} data
   */
  constructor({
    id,
    title,
    content,
    created_at,
    updated_at,
    location,
    gps,
    price,
    type,
    user,
    category,
    manufacturer,
    status,
  }) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.created_at = created_at;
    this.updated_at = updated_at;
    this.location = location;
    this.gps = gps;
    this.price = price;
    this.type = type;
    this.user = user;
    this.category = category;
    this.manufacturer = manufacturer;
    this.status = status;
  }

  /**
   *
   * @returns {Post}
   */
  toJson() {
    return {
      id: this.id,
      title: this.title,
      content: this.content,
      created_at: this.created_at,
      updated_at: this.updated_at,
      location: this.location,
      gps: this.gps,
      price: this.price,
      type: this.type,
      user: this.user,
      category: this.category,
      manufacturer: this.manufacturer,
      status: this.status,
    };
  }
}
