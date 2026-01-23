export interface Event {
  date: string;
  day: string;
  time: string;
  venue: string;
  address: string;
  lumaUrl: string;
}

export interface EventsData {
  upcoming: Event[];
}
