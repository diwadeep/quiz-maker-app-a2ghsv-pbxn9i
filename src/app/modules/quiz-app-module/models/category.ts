export interface CategoryResponse {
  trivia_categories: Category[];
}

export interface Category {
  id: number,
  name: string
}
