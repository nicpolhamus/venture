export class Vector {
  constructor(public x: number, public y: number, public z: number) { }

  public scale(scalar: number): Vector {
    return new Vector(
      this.x * scalar,
      this.y * scalar,
      this.z * scalar,
    );
  }

  public plus(other: Vector): Vector {
    return new Vector(
      this.x + other.x,
      this.y + other.y,
      this.z + other.z,
    );
  }

  public minus(other: Vector): Vector {
    return new Vector(
      this.x - other.x,
      this.y - other.y,
      this.z - other.z,
    );
  }

  public dot(other: Vector): number {
    return (
      this.x * other.x +
      this.y * other.y +
      this.z * other.z
    );
  }

  public normalized(): Vector {
    const mag = Math.sqrt(this.dot(this));

    return new Vector(
      this.x / mag,
      this.y / mag,
      this.z / mag,
    );
  }

  public static lerp(start: Vector, end: Vector, scalar: number): Vector {
    return start.scale(1 - scalar).plus(end.scale(scalar));
  }
}

export class Ray {
  constructor(public origin: Vector, public direction: Vector) { }

  public at(scalar: number): Vector {
    return this.origin.plus(this.direction.scale(scalar));
  }
}

