export class Color {
  constructor(public red: number, public green: number, public blue: number) { }

  times(other: Color): Color {
    return new Color(
      this.red * other.red,
      this.green * other.green,
      this.blue * other.blue,
    );
  }

  scale(scalar: number): Color {
    return new Color(
      this.red * scalar,
      this.green * scalar,
      this.blue * scalar,
    );
  }

  addInPlace(other: Color): void {
    this.red += other.red;
    this.green += other.green;
    this.blue += other.blue;
  }

  clampInPlace(): void {
    this.red = this.red < 0 ? 0 : this.red > 1 ? 1 : this.red;
    this.green = this.green < 0 ? 0 : this.green > 1 ? 1 : this.green;
    this.blue = this.blue < 0 ? 0 : this.blue > 1 ? 1 : this.blue;
  }
}
