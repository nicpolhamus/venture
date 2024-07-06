import { Ray, Vector } from './Vector';
import { Material } from './types';

export class Sphere {
  constructor(public center: Vector, public radius: number, public material: Material) { }

  // public getIntersection(ray: Ray): number {
  //   const centerPoint = ray.origin.minus(this.center);

  //   const a = ray.direction.dot(ray.direction);
  //   const b = 2 * centerPoint.dot(ray.direction);
  //   const c = centerPoint.dot(centerPoint) - this.radius * this.radius;

  //   const discriminant = b * b
  // }
}
