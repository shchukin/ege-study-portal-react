export interface EntryData {
  id: number;
  url: string;
  author: string;
  content: string;
  tags: string[];
  date_published: string;
  video?: string;
  image?: string;
}

export const mockData: EntryData[] = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  url: `url-${i + 1}`,
  author: `Author ${i + 1}`,
  content: `Content ${i + 1}`,
  tags: ['Tag1', 'Tag2', 'Tag3'],
  date_published: new Date().toISOString(),
  video: i % 2 === 0 ? 'wDchsz8nmbo' : undefined,
  image: i % 3 === 0 ? `https://via.placeholder.com/150?text=Image+${i + 1}` : undefined,
}));
