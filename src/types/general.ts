export type PartialIndex<T> = { [V in keyof Partial<T>]: T[V] };
