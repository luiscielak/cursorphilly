export interface Event {
  date: string;
  day: string;
  time: string;
  venue: string;
  address: string;
  lumaUrl: string;
}

export interface PastEvent {
  date: string;
  day: string;
  time: string;
  venue: string;
  address: string;
  attendees: number;
  highlights: string[];
}

export interface EventsData {
  upcoming: Event[];
  past: PastEvent[];
}
