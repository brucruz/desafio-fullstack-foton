declare namespace NodeJS {
  export interface Counters {
    books: number;
  }
  export interface Global {
    __COUNTERS__: Counters;
  }
}
