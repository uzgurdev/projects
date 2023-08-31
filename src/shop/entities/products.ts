export const productAPI: any[] = [];

export class Products {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public thumbnail: string,
    public price: string
  ) {}

  getProduct() {
    return [this.title, this.thumbnail, this.price];
  }
}