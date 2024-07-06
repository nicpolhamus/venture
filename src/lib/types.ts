import { Color } from './Color';

export interface Material {
  ka: Color;
  kd: Color;
  ks: Color;
  alpha: number;
  kr: Color;
}
