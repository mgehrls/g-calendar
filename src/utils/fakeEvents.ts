export type Event = {
    id: number;
    title: string;
    description: string;
    dateStart: Date;
    dateEnd: Date;
    location: string;
    image: string;
}

export const events: Event[] = [
    {
        id: 1,
        title: "Event 1",
        description: "Description 1",
        dateStart: new Date(2025, 0, 1, 10, 0),
        dateEnd: new Date(2025, 0, 1, 12, 0),
        location: "Location 1",
        image: "https://via.placeholder.com/150"
    },
    {
        id: 2,
        title: "Event 2",
        description: "Description 2",
        dateStart: new Date(2025, 0, 2, 10, 0),
        dateEnd: new Date(2025, 0, 2, 12, 0),
        location: "Location 2",
        image: "https://via.placeholder.com/150"
    },
    {
        id: 3,
        title: "Event 3",
        description: "Description 3",
        dateStart: new Date(2025, 0, 3, 10, 0),
        dateEnd: new Date(2025, 0, 3, 12, 0),
        location: "Location 3",
        image: "https://via.placeholder.com/150"
    }
]