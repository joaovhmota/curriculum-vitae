interface IRepository {
    id: number;
    name: string;
    owner: {
        login: string;
    };
    private: boolean;
    description: string;
    html_url: string;
    topics: string[];
}

export type {
    IRepository
};