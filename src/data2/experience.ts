export interface ExperienceItem {
    description: string;
    selected: boolean;
}

export interface Experience {
    company: string;
    title: string;
    dates: string;
    datesSelected: boolean;
    selected: boolean;
    items: ExperienceItem[];
}

export const experienceItems: Experience[] = [
    {
        company: 'Company 1',
        title: 'Title 1',
        dates: 'Feb 2022 - Jan 2025',
        datesSelected: true,
        selected: true,
        items: [
            { description: 'Description 1', selected: true },
            { description: 'Description 2', selected: true },
            { description: 'Description 3', selected: true },
            { description: 'Description 4', selected: true },
            { description: 'Description 5', selected: true },
            { description: 'Description 6', selected: true },
            { description: 'Description 7', selected: true }
        ]
    },
    {
        company: 'Company 2',
        title: 'Title 2',
        dates: 'Dec 2018 - Jan 2022',
        datesSelected: true,
        selected: true,
        items: [
            { description: 'Description 1', selected: true },
            { description: 'Description 2', selected: true },
            { description: 'Description 3', selected: true },
            { description: 'Description 4', selected: true },
            { description: 'Description 5', selected: true }
        ]
    },
    {
        company: 'Company 3',
        title: 'Title 3',
        dates: 'Aug 2016 - Feb 2018',
        datesSelected: true,
        selected: true,
        items: [
            { description: 'Description 1', selected: true },
            { description: 'Description 2', selected: true }
        ]
    },
    {
        company: 'Company 4',
        title: 'Title 4',
        dates: 'Feb 2006 – Jul 2016',
        datesSelected: true,
        selected: true,
        items: [
            { description: 'Description 1', selected: true },
            { description: 'Description 2', selected: true },
            { description: 'Description 3', selected: true }
        ]
    }
];