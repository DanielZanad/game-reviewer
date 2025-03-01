import { Replace } from "@app/helpers/replace";
import { randomUUID } from "node:crypto";

interface PublisherProps {
  name: string;
  founded: Date;
  country: string;
  createdAt: Date | null;
}

export class Publisher {
  private _id: string;
  private props: PublisherProps;

  constructor(props: Replace<PublisherProps, { createdAt?: Date }>) {
    this._id = randomUUID();
    this.props = { ...props, createdAt: props.createdAt ?? new Date() };
  }
  // Getter for id
  get id(): string {
    return this._id;
  }

  // Getter and setter for name
  get name(): string {
    return this.props.name;
  }

  set name(value: string) {
    this.props.name = value;
  }

  // Getter and setter for founded
  get founded(): Date {
    return this.props.founded;
  }

  set founded(value: Date) {
    this.props.founded = value;
  }

  // Getter and setter for country
  get country(): string {
    return this.props.country;
  }

  set country(value: string) {
    this.props.country = value;
  }

  // Getter and setter for createdAt
  get createdAt(): Date | null {
    return this.props.createdAt;
  }

  set createdAt(value: Date | null) {
    this.props.createdAt = value;
  }
}
