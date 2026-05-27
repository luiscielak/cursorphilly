export interface Event {
  date: string;
  day: string;
  time: string;
  venue: string;
  address: string;
  lumaUrl: string;
  title?: string;
  format?: 'online' | 'in-person';
}

export interface EventsData {
  upcoming: Event[];
  past: Event[];
}
