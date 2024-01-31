export class Cloth {

  name: string;
  size: string;
  color: string;
  createdTimestamp: Date;
  updatedTimestamp: Date;

  constructor(
    name: string,
    size: string,
    color: string,
    createdTimestamp: Date,
    updatedTimestamp: Date
  ) {
    this.name = name;
    this.size = size;
    this.color = color;
    this.createdTimestamp = createdTimestamp;
    this.updatedTimestamp = updatedTimestamp;
  }
}
