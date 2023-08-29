export interface Images {
  id: number;
  type: string;
  name: string;
  image: ArrayBufferLike;
  authority: {
    id: number,
    isActive: boolean,
    employee: {
      id: number,
    }
  }
}