interface Item {
  id: number;
  title: string;
  available: boolean;
}

interface Book extends Item {
  author: string;
  pages: number;
}

interface DVD extends Item {
  director: string;
  duration: number;
}

interface Library<T> {
  addItem(item: T): void;
  getItem(id: number): T | null;
  listAvailableItems(): T[];
}

class LibraryImpl<T extends Item> implements Library<T> {
  private items: T[] = [];

  addItem(item: T): void {
    this.items.push(item);
  }

  getItem(id: number): T | null {
    return this.items.find((item) => item.id === id) || null;
  }

  listAvailableItems(): T[] {
    return this.items;
  }
}
