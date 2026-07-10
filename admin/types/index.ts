export type Nullable<T> = T | null;

export interface NavItem {
  label: string;
  href: string;
}

export interface MetricCard {
  label: string;
  value: string;
  delta: string;
}
