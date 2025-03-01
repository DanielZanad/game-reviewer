import { randomUUID } from "crypto";
import { Replace } from "../helpers/replace";

interface GameProps {
  name: string;
  title: string;
  synopsis: string;
  releaseDate: Date;
  genres: string[];
  publisherId: string;
  developerId: string;
  createdAt: Date | null;
}

export class Game {
  private _id: string;
  private props: GameProps;

  constructor(props: Replace<GameProps, { createdAt?: Date }>) {
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
    if (!value.trim()) {
      throw new Error("Name cannot be empty.");
    }
    this.props.name = value;
  }

  // Getter and setter for title
  get title(): string {
    return this.props.title;
  }

  set title(value: string) {
    if (!value.trim()) {
      throw new Error("Title cannot be empty.");
    }
    this.props.title = value;
  }

  // Getter and setter for synopsis
  get synopsis(): string {
    return this.props.synopsis;
  }

  set synopsis(value: string) {
    if (!value.trim()) {
      throw new Error("Synopsis cannot be empty.");
    }
    this.props.synopsis = value;
  }

  // Getter and setter for releaseDate
  get releaseDate(): Date {
    return this.props.releaseDate;
  }

  set releaseDate(value: Date) {
    if (!(value instanceof Date)) {
      throw new Error("Invalid date format.");
    }
    this.props.releaseDate = value;
  }

  // Getter and setter for genres
  get genres(): string[] {
    return this.props.genres;
  }

  set genres(value: string[]) {
    if (!Array.isArray(value) || value.some((genre) => !genre.trim())) {
      throw new Error("Genres must be a non-empty array of strings.");
    }
    this.props.genres = value;
  }

  // Getter and setter for publisherId
  get publisherId(): string {
    return this.props.publisherId;
  }

  set publisherId(value: string) {
    if (!value.trim()) {
      throw new Error("Publisher ID cannot be empty.");
    }
    this.props.publisherId = value;
  }

  // Getter and setter for developerId
  get developerId(): string {
    return this.props.developerId;
  }

  set developerId(value: string) {
    if (!value.trim()) {
      throw new Error("Developer ID cannot be empty.");
    }
    this.props.developerId = value;
  }

  // Getter for createdAt
  get createdAt(): Date | null {
    return this.props.createdAt;
  }
}
