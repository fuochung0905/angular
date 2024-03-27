export class Product {
    constructor(
      public Id: number,
      public categoryId: number,
      public productName: string,
      public description: string,
      public importPrice: number,
      public exportPrice: number,
      public quantity: number,
      public imageUrl: string // Thêm trường lưu trữ đường dẫn hình ảnh
    ) {}
  }