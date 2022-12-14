export type Image = {
  alt: string;
  asset: {
    url: string;
  };
};

export type Category = {
  id: string;
  name: string;
};

export type Product = {
  name: string;
  shortDescription: string;
  id: string;
  images: Image[];
  category: Category;
};
