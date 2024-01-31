export class ClothRequest {

  id: number;
  name: string;
  size: string;
  color: string;

  constructor(
    id: number,
    name: string,
    size: string,
    color: string
  ) {
    this.id = id;
    this.name = name;
    this.size = size;
    this.color = color
  }
}
